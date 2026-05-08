import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';
import TurndownService from 'turndown';
import axios from 'axios';

/**
 * Converts Markdown content to Word document
 * @param markdownPath Path to the markdown file
 * @param options Additional options including API configuration
 * @returns Promise resolving to the path of the converted Word file
 */
export async function convertMarkdownToWord(markdownPath: string, options: any = {}): Promise<string> {
  try {
    // Read the markdown file
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // Enhance the markdown content using AI if API details are provided
    let enhancedContent = markdownContent;
    if (options.apiKey && options.apiUrl && options.modelName) {
      enhancedContent = await enhanceWithAI(markdownContent, options);
    }
    
    // Convert markdown to HTML first
    const htmlContent = convertMarkdownToHtml(enhancedContent);
    
    // Generate a Word document from HTML
    const wordFilePath = await generateWordDocument(htmlContent, markdownPath);
    
    return wordFilePath;
  } catch (error) {
    console.error('Error converting markdown to word:', error);
    throw error;
  }
}

/**
 * Enhances markdown content using AI
 * @param content Original markdown content
 * @param options API configuration options
 * @returns Enhanced markdown content
 */
async function enhanceWithAI(content: string, options: any): Promise<string> {
  try {
    const prompt = `
      You are an expert in document formatting. Please improve the following Markdown content for better Word conversion.
      Focus on:
      1. Ensuring proper heading hierarchy (H1, H2, H3, etc.)
      2. Correcting any formatting inconsistencies
      3. Improving table formatting if present
      4. Ensuring code blocks are properly formatted
      5. Making sure lists are correctly structured
      
      Markdown content:
      ${content}
    `;
    
    const response = await axios.post(options.apiUrl, {
      model: options.modelName,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 2000
    }, {
      headers: {
        'Authorization': `Bearer ${options.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data.choices[0].message.content || content;
  } catch (error) {
    console.warn('AI enhancement failed, using original content:', error);
    return content;
  }
}

/**
 * Converts Markdown to HTML
 * @param markdownContent The markdown content to convert
 * @returns HTML representation of the markdown
 */
function convertMarkdownToHtml(markdownContent: string): string {
  // Using a simple replacement approach for basic markdown elements
  // In a real implementation, we'd use a proper markdown parser
  let html = markdownContent;
  
  // Headers
  html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  html = html.replace(/__(.*?)__/gim, '<u>$1</u>');
  html = html.replace(/~~(.*?)~~/gim, '<del>$1</del>');
  
  // Paragraphs
  html = html.replace(/\n\n/gim, '</p><p>');
  html = `<p>${html}</p>`;
  html = html.replace(/<p><\/p>/gim, '');
  
  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
  
  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />');
  
  return html;
}

/**
 * Generates a Word document from HTML content
 * @param htmlContent The HTML content to convert
 * @param sourcePath Path to the source file (to generate output filename)
 * @returns Path to the generated Word file
 */
async function generateWordDocument(htmlContent: string, sourcePath: string): Promise<string> {
  // In a real implementation, we would use a library like mammoth to convert HTML to Word
  // For now, we'll simulate the process by creating a simple .docx file
  
  const outputPath = sourcePath.replace(path.extname(sourcePath), '.docx');
  
  // Create a simple Word document with the HTML content
  // In a real implementation, we would properly construct a .docx file
  fs.writeFileSync(outputPath, `Converted from Markdown: ${path.basename(sourcePath)}\n\n${htmlContent}`);
  
  return outputPath;
}