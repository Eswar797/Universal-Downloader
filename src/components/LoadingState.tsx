import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  platform?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Fetching content...',
  platform
}) => {
  // Loading messages based on platform
  const platformMessages: Record<string, string[]> = {
    youtube: [
      'Extracting video metadata...',
      'Gathering available quality options...',
      'Processing YouTube video...'
    ],
    instagram: [
      'Analyzing Instagram content...',
      'Retrieving media details...',
      'Checking for stories and reels...'
    ],
    twitter: [
      'Accessing Twitter media...',
      'Extracting media from tweet...',
      'Analyzing media quality...'
    ],
    facebook: [
      'Processing Facebook content...',
      'Retrieving video metadata...',
      'Checking privacy settings...'
    ],
    tiktok: [
      'Extracting TikTok video...',
      'Analyzing audio and video...',
      'Preparing download options...'
    ]
  };

  // Pick a random message for the detected platform or use default
  const getRandomMessage = () => {
    if (platform && platformMessages[platform.toLowerCase()]) {
      const messages = platformMessages[platform.toLowerCase()];
      return messages[Math.floor(Math.random() * messages.length)];
    }
    return message;
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary-200 opacity-30"></div>
        </div>
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      </div>
      
      <p className="mt-6 text-gray-600 dark:text-gray-300 font-medium">
        {getRandomMessage()}
      </p>
      
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-md">
        This might take a moment depending on the content size and platform
      </div>
    </div>
  );
};

export default LoadingState; 