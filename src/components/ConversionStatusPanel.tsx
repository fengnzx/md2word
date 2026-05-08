import React from 'react';

interface ConversionStatusPanelProps {
  status: 'idle' | 'uploading' | 'processing' | 'success' | 'error';
  progress: number;
}

const ConversionStatusPanel: React.FC<ConversionStatusPanelProps> = ({ status, progress }) => {
  const getStatusText = () => {
    switch (status) {
      case 'idle':
        return 'Waiting for files...';
      case 'uploading':
        return 'Uploading files...';
      case 'processing':
        return 'Converting files...';
      case 'success':
        return 'Conversion completed!';
      case 'error':
        return 'An error occurred during conversion.';
      default:
        return '';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return '#10b981'; // green
      case 'error':
        return '#ef4444'; // red
      case 'processing':
        return '#3b82f6'; // blue
      case 'uploading':
        return '#f59e0b'; // yellow
      default:
        return '#6b7280'; // gray
    }
  };

  return (
    <div className="status-panel">
      <div className="status-text" style={{ color: getStatusColor() }}>
        {getStatusText()}
      </div>
      
      {(status === 'uploading' || status === 'processing') && (
        <>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </>
      )}
      
      {status === 'error' && (
        <div className="error-message">
          <p>Please check your files and try again.</p>
        </div>
      )}
    </div>
  );
};

export default ConversionStatusPanel;