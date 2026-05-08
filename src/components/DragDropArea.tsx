import React, { useCallback, useState } from 'react';

interface DragDropAreaProps {
  onUpload: (files: File[]) => void;
}

const DragDropArea: React.FC<DragDropAreaProps> = ({ onUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).filter(file => 
        file.type === 'text/markdown' || 
        file.type === 'text/plain' || 
        file.name.endsWith('.md') || 
        file.name.endsWith('.markdown')
      );
      
      if (files.length > 0) {
        setSelectedFiles(files);
        onUpload(files);
      }
    }
  }, [onUpload]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).filter(file => 
        file.type === 'text/markdown' || 
        file.type === 'text/plain' || 
        file.name.endsWith('.md') || 
        file.name.endsWith('.markdown')
      );
      
      if (files.length > 0) {
        setSelectedFiles(files);
        onUpload(files);
      }
    }
  };

  return (
    <div 
      className={`drag-drop-area ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h3>Upload Markdown Files</h3>
      <p>Drag and drop your .md or .markdown files here, or click to browse</p>
      <input 
        type="file" 
        id="file-input" 
        multiple 
        accept=".md,.markdown,text/markdown,text/plain"
        onChange={handleFileInput}
        style={{ display: 'none' }} 
      />
      <button 
        className="upload-btn"
        onClick={() => document.getElementById('file-input')?.click()}
      >
        Select Files
      </button>
      
      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h4>Selected Files:</h4>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragDropArea;