import React, { useState } from 'react';
import DragDropArea from './components/DragDropArea';
import ConversionStatusPanel from './components/ConversionStatusPanel';
import DownloadSection from './components/DownloadSection';
import ApiConfigPanel from './components/ApiConfigPanel';
import './App.css';

const App: React.FC = () => {
  const [conversionStatus, setConversionStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState<number>(0);
  const [convertedFiles, setConvertedFiles] = useState<string[]>([]);
  const [apiKey, setApiKey] = useState<string>('');
  const [apiUrl, setApiUrl] = useState<string>('https://api.openai.com/v1/chat/completions');
  const [modelName, setModelName] = useState<string>('gpt-3.5-turbo');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Markdown to Word Converter</h1>
        <p>Convert your Markdown files to beautifully formatted Word documents with AI assistance</p>
      </header>
      
      <main className="app-main">
        <ApiConfigPanel 
          apiKey={apiKey} 
          apiUrl={apiUrl} 
          modelName={modelName}
          onApiKeyChange={setApiKey}
          onApiUrlChange={setApiUrl}
          onModelNameChange={setModelName}
        />
        
        <DragDropArea 
          onUpload={(files) => {
            setConversionStatus('uploading');
            // Simulate upload progress
            let progress = 0;
            const interval = setInterval(() => {
              progress += 10;
              setProgress(progress);
              if (progress >= 100) {
                clearInterval(interval);
                setConversionStatus('processing');
                // Simulate processing
                setTimeout(() => {
                  setConversionStatus('success');
                  setConvertedFiles(['sample_converted.docx']);
                }, 2000);
              }
            }, 200);
          }}
        />
        
        <ConversionStatusPanel 
          status={conversionStatus} 
          progress={progress} 
        />
        
        {conversionStatus === 'success' && (
          <DownloadSection 
            files={convertedFiles} 
            onDownloadAll={() => console.log('Downloading all files')} 
          />
        )}
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Markdown to Word Converter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;