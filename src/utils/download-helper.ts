/**
 * Helper function to trigger a file download from a URL
 */
export function downloadFile(url: string, filename?: string): void {
  // Create an anchor element
  const link = document.createElement('a');
  
  // Set properties
  link.href = url;
  link.rel = 'noopener noreferrer';
  link.target = '_blank';
  
  // Set download attribute if filename is provided
  if (filename) {
    link.download = filename;
  }
  
  // Append to document, trigger click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes?: number): string {
  if (!bytes) return 'Unknown size';
  
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * Extracts file extension from URL
 */
export function getFileExtension(url: string): string {
  try {
    // Get the pathname from URL
    const pathname = new URL(url).pathname;
    
    // Split by dot and get the last element
    const parts = pathname.split('.');
    
    // If there's at least one dot in the pathname
    if (parts.length > 1) {
      return parts[parts.length - 1].toLowerCase();
    }
  } catch (error) {
    console.error('Error extracting file extension:', error);
  }
  
  // Default if no extension is found
  return '';
}

/**
 * Generate a filename from URL and platform
 */
export function generateFilename(url: string, platform: string, mediaType: string): string {
  // Get the current date for the filename
  const date = new Date();
  const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
  
  // Get extension based on media type
  let extension = 'mp4'; // Default for videos
  
  if (mediaType === 'image') {
    extension = 'jpg';
  } else if (mediaType === 'audio') {
    extension = 'mp3';
  } else if (mediaType === 'document') {
    extension = 'pdf';
  }
  
  // Extract a portion of the URL to use in the filename
  let urlPart = '';
  try {
    // Get pathname and remove slashes
    const pathname = new URL(url).pathname.replace(/\//g, '_');
    
    // Take the last part of the pathname
    const parts = pathname.split('_').filter(Boolean);
    if (parts.length > 0) {
      urlPart = '_' + parts[parts.length - 1].substring(0, 20);
    }
  } catch (error) {
    // Generate a random string if URL parsing fails
    urlPart = '_' + Math.random().toString(36).substring(2, 8);
  }
  
  // Return the formatted filename
  return `${platform}${urlPart}_${dateStr}.${extension}`;
} 