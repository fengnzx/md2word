import React from 'react';

interface DownloadSectionProps {
  files: string[];
  onDownloadAll: () => void;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ files, onDownloadAll }) => {
  return (
    <div className="download-section">
      <h3>Conversion Completed!</h3>
      <p>Your Markdown files have been successfully converted to Word format.</p>
      
      <div className="download-options">
        <button className="download-btn" onClick={onDownloadAll}>
          Download All Files
        </button>
        
        <div className="individual-downloads">
          <h4>Individual Downloads:</h4>
          <ul>
            {files.map((fileName, index) => (
              <li key={index}>
                <a href={`/api/download/${fileName}`} download={fileName}>
                  {fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;