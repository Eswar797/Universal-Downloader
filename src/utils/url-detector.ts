type Platform = 
  | 'youtube' 
  | 'instagram' 
  | 'twitter' 
  | 'facebook' 
  | 'linkedin' 
  | 'pinterest' 
  | 'tiktok'
  | 'reddit'
  | 'vimeo'
  | 'dailymotion'
  | 'soundcloud'
  | 'unknown';

type MediaType = 'video' | 'image' | 'audio' | 'document' | 'unknown';

interface DetectionResult {
  platform: Platform;
  mediaType: MediaType;
  isSupported: boolean;
}

/**
 * Detects platform and media type from a URL
 */
export function detectUrlType(url: string): DetectionResult {
  // Default result
  const result: DetectionResult = {
    platform: 'unknown',
    mediaType: 'unknown',
    isSupported: false
  };
  
  // Lowercase URL for case-insensitive matching
  const lowerUrl = url.toLowerCase();
  
  // YouTube
  if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) {
    result.platform = 'youtube';
    result.mediaType = 'video';
    result.isSupported = true;
  }
  // Instagram
  else if (lowerUrl.includes('instagram.com')) {
    result.platform = 'instagram';
    // Instagram can have images or videos
    if (lowerUrl.includes('/reel/') || lowerUrl.includes('/stories/')) {
      result.mediaType = 'video';
    } else {
      result.mediaType = 'image'; // Default to image, though it could be a carousel or video
    }
    result.isSupported = true;
  }
  // Twitter/X
  else if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com')) {
    result.platform = 'twitter';
    // Twitter can have images or videos
    if (lowerUrl.includes('/video/') || lowerUrl.includes('/status/')) {
      result.mediaType = 'video'; // Assuming most status updates with media are videos
    } else {
      result.mediaType = 'image';
    }
    result.isSupported = true;
  }
  // Facebook
  else if (lowerUrl.includes('facebook.com') || lowerUrl.includes('fb.com')) {
    result.platform = 'facebook';
    if (lowerUrl.includes('/videos/') || lowerUrl.includes('/watch/')) {
      result.mediaType = 'video';
    } else {
      result.mediaType = 'image'; // Default
    }
    result.isSupported = true;
  }
  // LinkedIn
  else if (lowerUrl.includes('linkedin.com')) {
    result.platform = 'linkedin';
    if (lowerUrl.includes('/posts/')) {
      result.mediaType = 'image'; // Default for posts, though could be document
    } else if (lowerUrl.includes('/video/')) {
      result.mediaType = 'video';
    } else if (lowerUrl.includes('/document/')) {
      result.mediaType = 'document';
    }
    result.isSupported = true;
  }
  // Pinterest
  else if (lowerUrl.includes('pinterest.com') || lowerUrl.includes('pin.it')) {
    result.platform = 'pinterest';
    result.mediaType = 'image';
    result.isSupported = true;
  }
  // TikTok
  else if (lowerUrl.includes('tiktok.com')) {
    result.platform = 'tiktok';
    result.mediaType = 'video';
    result.isSupported = true;
  }
  // Reddit
  else if (lowerUrl.includes('reddit.com')) {
    result.platform = 'reddit';
    if (lowerUrl.includes('/gallery/') || lowerUrl.includes('/comments/')) {
      result.mediaType = 'image'; // Could be video too
    } else {
      result.mediaType = 'unknown';
    }
    result.isSupported = true;
  }
  // Vimeo
  else if (lowerUrl.includes('vimeo.com')) {
    result.platform = 'vimeo';
    result.mediaType = 'video';
    result.isSupported = true;
  }
  // Dailymotion
  else if (lowerUrl.includes('dailymotion.com')) {
    result.platform = 'dailymotion';
    result.mediaType = 'video';
    result.isSupported = true;
  }
  // SoundCloud
  else if (lowerUrl.includes('soundcloud.com')) {
    result.platform = 'soundcloud';
    result.mediaType = 'audio';
    result.isSupported = true;
  }
  
  return result;
}

/**
 * Returns a friendly name for a platform
 */
export function getPlatformName(platform: Platform): string {
  switch (platform) {
    case 'youtube': return 'YouTube';
    case 'instagram': return 'Instagram';
    case 'twitter': return 'Twitter/X';
    case 'facebook': return 'Facebook';
    case 'linkedin': return 'LinkedIn';
    case 'pinterest': return 'Pinterest';
    case 'tiktok': return 'TikTok';
    case 'reddit': return 'Reddit';
    case 'vimeo': return 'Vimeo';
    case 'dailymotion': return 'Dailymotion';
    case 'soundcloud': return 'SoundCloud';
    default: return 'Unknown Platform';
  }
} 