/**
 * Checks if a string is a valid URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Checks if a URL is from a supported platform
 */
export function isSupportedPlatform(url: string): boolean {
  if (!isValidUrl(url)) return false;
  
  const supportedDomains = [
    'youtube.com',
    'youtu.be',
    'instagram.com',
    'twitter.com',
    'x.com',
    'facebook.com',
    'fb.com',
    'linkedin.com',
    'pinterest.com',
    'pin.it',
    'tiktok.com',
    'reddit.com',
    'vimeo.com',
    'dailymotion.com',
    'soundcloud.com'
  ];
  
  const lowerUrl = url.toLowerCase();
  return supportedDomains.some(domain => lowerUrl.includes(domain));
}

/**
 * Formats a URL by ensuring it has https:// protocol
 */
export function formatUrl(url: string): string {
  if (!url) return '';
  
  // Check if URL already has a protocol
  if (url.match(/^https?:\/\//i)) {
    return url;
  }
  
  // Add https protocol if missing
  return `https://${url}`;
}

/**
 * Gets a display URL (shortened if needed)
 */
export function getDisplayUrl(url: string, maxLength: number = 50): string {
  if (!url) return '';
  
  try {
    const urlObj = new URL(formatUrl(url));
    const fullUrl = urlObj.toString();
    
    if (fullUrl.length <= maxLength) {
      return fullUrl;
    }
    
    // Truncate in the middle
    const start = fullUrl.substring(0, Math.floor(maxLength / 2) - 2);
    const end = fullUrl.substring(fullUrl.length - Math.floor(maxLength / 2) + 2);
    
    return `${start}...${end}`;
  } catch (err) {
    // If URL parsing fails, just truncate the string
    if (url.length <= maxLength) return url;
    return `${url.substring(0, maxLength - 3)}...`;
  }
} 