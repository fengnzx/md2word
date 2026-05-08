# User Guide: Markdown to Word Converter

## Overview

The Markdown to Word Converter is a web application that allows you to convert Markdown files to beautifully formatted Word documents. The application features AI-powered enhancements to improve the quality of the conversion.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenAI-compatible API key (optional, for AI enhancements)

### Quick Start

1. Navigate to the application website
2. Optionally configure your AI model settings (API key, URL, model name)
3. Upload one or more Markdown files using drag-and-drop or the file selector
4. Monitor the conversion progress
5. Download your converted Word documents

## Detailed Instructions

### 1. Configuring AI Settings (Optional)

Before uploading files, you can configure AI enhancement settings:

- **API Key**: Enter your OpenAI-compatible API key
- **API URL**: Specify the API endpoint (default: OpenAI)
- **Model Name**: Choose the model to use (default: gpt-3.5-turbo)

These settings help improve the formatting and structure of your converted documents.

### 2. Uploading Files

You can upload Markdown files in two ways:

- **Drag and Drop**: Simply drag your .md or .markdown files onto the upload area
- **File Browser**: Click "Select Files" and choose your files from the dialog

The application supports:
- Multiple file uploads (up to 10 files at once)
- File size up to 20MB each
- .md and .markdown file extensions

### 3. Monitoring Conversion

During the conversion process, you'll see:

- **Status Indicator**: Shows current state (uploading, processing, success, error)
- **Progress Bar**: Visual representation of conversion progress
- **File List**: Shows which files are being processed

### 4. Downloading Converted Files

After successful conversion:

- Click "Download All Files" to download all converted documents at once
- Or download individual files from the list provided

## Supported Markdown Elements

The converter preserves the following Markdown elements:

### Text Formatting
- **Bold** (`**bold**` or `__bold__`)
- *Italic* (`*italic*` or `_italic_`)
- ~~Strikethrough~~ (`~~strikethrough~~`)
- `Inline code` (`` `inline code` ``)

### Headers
- # Header 1
- ## Header 2
- ### Header 3
- #### Header 4
- ##### Header 5
- ###### Header 6

### Lists
- Unordered lists (`-`, `*`, or `+`)
- Ordered lists (`1.`, `2.`, etc.)
- Nested lists

### Other Elements
- Tables with alignment
- Code blocks with syntax highlighting
- Images (both local and remote URLs)
- Blockquotes
- Horizontal rules (`---`, `***`)
- Links

## Troubleshooting

### Common Issues

**File not uploading**
- Ensure the file is a valid Markdown file (.md or .markdown)
- Check that the file size is under 20MB
- Verify your internet connection

**Conversion fails**
- Check that your API settings are correct (if using AI enhancement)
- Ensure the Markdown syntax in your file is valid
- Try converting a simpler Markdown file first

**Poor formatting in output**
- The AI enhancement can help improve formatting - try enabling it
- Some complex Markdown features may not translate perfectly to Word

### Error Messages

- **"Invalid file type"**: Only .md and .markdown files are supported
- **"File too large"**: Files must be under 20MB
- **"API request failed"**: Check your API key and network connection

## Best Practices

1. **Structure your Markdown well**: Use proper heading hierarchy for best results
2. **Test with small files first**: Verify the conversion quality before uploading large documents
3. **Use AI enhancement**: Enable AI settings for improved formatting and structure
4. **Validate your Markdown**: Ensure your source files have valid Markdown syntax

## FAQ

**Q: Are my files stored on your servers?**
A: No, files are processed temporarily and deleted after conversion. We don't store your content.

**Q: Can I convert other formats besides Markdown?**
A: Currently, only Markdown (.md, .markdown) files are supported.

**Q: Is there a file size limit?**
A: Yes, individual files are limited to 20MB.

**Q: Do I need an API key to use the converter?**
A: An API key is optional. Without it, you'll still get basic conversion, but AI-enhanced formatting will be disabled.

**Q: How secure is the conversion process?**
A: All processing happens securely on our servers. API keys are never stored or logged.

## Support

If you encounter issues not covered in this guide, please contact us through the repository issues page.