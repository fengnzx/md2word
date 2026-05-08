import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { convertMarkdownToWord } from '../utils/converter.js';
import { fileURLToPath } from 'url';

const router = express.Router();

// Configure multer for file uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024 // 20MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only markdown files
    if (file.mimetype === 'text/markdown' || 
        file.mimetype === 'text/plain' || 
        path.extname(file.originalname).toLowerCase() === '.md' ||
        path.extname(file.originalname).toLowerCase() === '.markdown') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only .md and .markdown files are allowed.'));
    }
  }
});

// POST route for file conversion
router.post('/convert', upload.array('files', 10), async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // Process each uploaded file
    const convertedFiles = [];
    for (const file of files) {
      try {
        const result = await convertMarkdownToWord(file.path, req.body);
        convertedFiles.push(result);
      } catch (error) {
        console.error(`Error converting file ${file.originalname}:`, error);
        return res.status(500).json({ error: `Failed to convert file: ${file.originalname}` });
      }
    }

    res.status(200).json({ 
      success: true, 
      message: 'Files converted successfully', 
      files: convertedFiles 
    });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ error: 'Internal server error during conversion' });
  }
});

// GET route for downloading converted files
router.get('/download/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadsDir, filename);

  // Security check to prevent directory traversal
  const normalizedPath = path.normalize(filePath);
  if (!normalizedPath.startsWith(uploadsDir)) {
    return res.status(400).send('Invalid file path');
  }

  res.download(filePath, (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(500).send('Could not download file');
    }
  });
});

export { router as conversionRouter };