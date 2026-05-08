import React from 'react';

interface ApiConfigPanelProps {
  apiKey: string;
  apiUrl: string;
  modelName: string;
  onApiKeyChange: (key: string) => void;
  onApiUrlChange: (url: string) => void;
  onModelNameChange: (name: string) => void;
}

const ApiConfigPanel: React.FC<ApiConfigPanelProps> = ({
  apiKey,
  apiUrl,
  modelName,
  onApiKeyChange,
  onApiUrlChange,
  onModelNameChange
}) => {
  return (
    <div className="api-config-panel">
      <h2>AI Model Configuration</h2>
      <p>Configure your OpenAI-compatible API settings for enhanced conversion</p>
      
      <div className="config-row">
        <div className="config-group">
          <label htmlFor="api-key">API Key</label>
          <input
            type="password"
            id="api-key"
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            placeholder="Enter your API key"
          />
        </div>
        
        <div className="config-group">
          <label htmlFor="api-url">API URL</label>
          <input
            type="text"
            id="api-url"
            value={apiUrl}
            onChange={(e) => onApiUrlChange(e.target.value)}
            placeholder="Enter API endpoint URL"
          />
        </div>
        
        <div className="config-group">
          <label htmlFor="model-name">Model Name</label>
          <input
            type="text"
            id="model-name"
            value={modelName}
            onChange={(e) => onModelNameChange(e.target.value)}
            placeholder="e.g., gpt-3.5-turbo"
          />
        </div>
      </div>
    </div>
  );
};

export default ApiConfigPanel;