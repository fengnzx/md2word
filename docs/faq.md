# Frequently Asked Questions (FAQ)

## General Questions

### What is the Markdown to Word Converter?
The Markdown to Word Converter is a web application that transforms Markdown files (.md, .markdown) into properly formatted Microsoft Word documents (.docx). It preserves formatting elements like headers, lists, tables, and code blocks while offering AI-powered enhancements for better output quality.

### Is the service free to use?
Yes, the basic conversion functionality is free. However, using AI enhancement features requires your own OpenAI-compatible API key, which may incur costs based on your provider's pricing.

### Do I need to create an account?
No, the application works without requiring user accounts. Your files are processed temporarily and not stored permanently.

## Technical Questions

### What Markdown syntax is supported?
The converter supports most standard Markdown elements:
- Headers (#, ##, ###, etc.)
- Text formatting (bold, italic, strikethrough, code)
- Lists (ordered and unordered)
- Links and images
- Tables
- Code blocks with syntax highlighting
- Blockquotes
- Horizontal rules

### What file sizes are supported?
Individual files can be up to 20MB in size. For best performance, we recommend keeping files under 5MB.

### What browsers are supported?
The application works with modern browsers:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### How long does conversion take?
Conversion speed depends on file size and complexity:
- Small files (<1MB): Under 10 seconds
- Medium files (1-5MB): 10-30 seconds
- Large files (5-20MB): 30-60 seconds

## AI Enhancement Questions

### What is AI enhancement?
AI enhancement uses large language models to improve the structure and formatting of your converted documents. It can fix formatting inconsistencies, improve heading hierarchy, and enhance overall document quality.

### How do I use AI enhancement?
1. Obtain an API key from an OpenAI-compatible service
2. Enter your API key, endpoint URL, and model name in the configuration panel
3. Upload and convert your files as usual

### Is my API key secure?
Yes, your API key is stored only in your browser's memory and is never sent to our servers or logged anywhere. It's transmitted directly to the AI service provider.

### Which AI models are supported?
The application works with any OpenAI-compatible API, including:
- OpenAI GPT models (gpt-3.5-turbo, gpt-4, etc.)
- Azure OpenAI Service
- Open-source alternatives with OpenAI-compatible endpoints

## File and Conversion Questions

### Are my files stored on your servers?
No, your files are temporarily stored only during the conversion process and are automatically deleted afterward. We do not retain copies of your content.

### What happens if the conversion fails?
If a conversion fails, you'll receive an error message explaining the issue. Common causes include:
- Invalid Markdown syntax
- Unsupported file type
- Network connectivity issues
- API rate limits (when using AI enhancement)

### Can I convert multiple files at once?
Yes, you can upload and convert up to 10 Markdown files simultaneously.

### How do I download my converted files?
After successful conversion:
1. The status panel will show "Conversion completed!"
2. Use the "Download All Files" button for bulk download
3. Or download individual files from the provided links

## Troubleshooting

### My file isn't uploading
Try these solutions:
- Verify the file extension is .md or .markdown
- Check that the file size is under 20MB
- Ensure your internet connection is stable
- Try refreshing the page and uploading again

### The output document looks different than expected
This may happen due to:
- Complex or non-standard Markdown syntax
- Missing AI enhancement for complex formatting
- Differences in how Word interprets certain elements
- Try simplifying your Markdown or enabling AI enhancement

### AI enhancement isn't working
Check these points:
- Verify your API key is correct
- Confirm the API URL is accessible
- Ensure your model name is valid
- Check that your API provider has sufficient quota
- Look for network connectivity issues

### Conversion is taking too long
Large files or complex formatting may cause delays. Consider:
- Breaking large documents into smaller parts
- Simplifying complex tables or code blocks
- Checking your internet connection speed

## Privacy and Security

### How is my data protected?
- Files are only stored temporarily during processing
- API keys are kept in browser memory only
- No permanent storage of your content occurs
- All communication uses HTTPS encryption

### Can others access my files?
No, your files are isolated and cannot be accessed by other users. Each conversion session is independent.

### Do you collect usage data?
We only collect anonymous usage statistics to improve the service. No personal data or file content is collected.

## Support

### Where can I get help?
- Check this FAQ for common issues
- Review the user guide for detailed instructions
- Submit an issue on the GitHub repository
- Contact support through the application interface

### How do I report a bug?
Please submit detailed information including:
- Steps to reproduce the issue
- Expected vs. actual results
- Browser and OS version
- Sample file (if possible and appropriate)
- Error messages received

### Can I request new features?
Yes! Feature requests are welcome. Submit them through the GitHub repository issues section with a clear description of the desired functionality.