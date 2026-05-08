# Markdown to Word Converter

A web application that converts Markdown files to beautifully formatted Word documents with AI assistance.

[中文文档](./README_zh.md)

## Features

- 📁 Drag and drop file upload (supports multiple files)
- ⚡ Real-time conversion status and progress indicators
- 🤖 AI-powered enhancement using OpenAI-compatible APIs
- 📄 Preserves formatting (headers, lists, tables, code blocks, images, etc.)
- 💾 Batch download of converted files
- 🔐 Secure API key handling
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Conversion Engine**: Custom converter with AI enhancement
- **Build Tool**: Vite
- **Deployment**: Vercel/GitHub Pages

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd md2word
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API configuration:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_API_URL=https://api.openai.com/v1/chat/completions
MODEL_NAME=gpt-3.5-turbo
```

## Development

To run the application in development mode:

```bash
npm run dev
```

Alternatively, you can use the dedicated startup script:

```bash
node start-dev.js
```

This will start both the frontend and backend servers concurrently.

Frontend will be available at: http://localhost:5174 (Vite will auto-select an available port)
Backend API will be available at: http://localhost:5002

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your API configuration:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_API_URL=https://api.openai.com/v1/chat/completions
MODEL_NAME=gpt-3.5-turbo
PORT=5000
```

3. Start the development servers:
```bash
npm run dev
```

4. Visit http://localhost:3000 in your browser to access the application.

## Building for Production

To build the application for production:

```bash
npm run build
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/conversion/convert` - Convert Markdown files to Word
- `GET /api/download/:filename` - Download converted files

## Environment Variables

- `PORT` - Backend server port (default: 5000)
- `OPENAI_API_KEY` - Your OpenAI API key
- `OPENAI_API_URL` - OpenAI API endpoint URL
- `MODEL_NAME` - Model name to use for AI enhancement

## Project Structure

```
md2word/
├── public/                 # Static assets
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── backend/                # Backend source code
│   ├── routes/             # API routes
│   ├── utils/              # Backend utility functions
│   ├── server.ts           # Main server file
│   └── tsconfig.json       # TypeScript configuration
├── uploads/                # Temporary file storage
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # Root TypeScript configuration
└── README.md               # Project documentation
```

## Conversion Capabilities

The application preserves the following Markdown elements:

- Text formatting (bold, italic, underline, strikethrough)
- Headers (H1-H6)
- Lists (ordered, unordered, task lists)
- Tables (with alignment)
- Code blocks (with syntax highlighting)
- Images (local and remote)
- Blockquotes and horizontal rules
- Footnotes and other special elements

## Security Considerations

- File size is limited to 20MB
- Only Markdown files (.md, .markdown) are accepted
- API keys are stored client-side and not sent to the server
- Input validation and sanitization implemented

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue in the repository.