import React from 'react';
import { 
  YoutubeIcon, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Music, 
  Film, 
  Globe
} from 'lucide-react';

type PlatformType = 
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

interface PlatformIconProps {
  platform: PlatformType;
  size?: number;
  className?: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ 
  platform, 
  size = 24, 
  className = ""
}) => {
  const getIcon = () => {
    switch (platform.toLowerCase() as PlatformType) {
      case 'youtube':
        return <YoutubeIcon size={size} className={`text-red-600 ${className}`} />;
      case 'instagram':
        return <Instagram size={size} className={`text-pink-600 ${className}`} />;
      case 'twitter':
        return <Twitter size={size} className={`text-blue-400 ${className}`} />;
      case 'facebook':
        return <Facebook size={size} className={`text-blue-600 ${className}`} />;
      case 'linkedin':
        return <Linkedin size={size} className={`text-blue-700 ${className}`} />;
      case 'tiktok':
        return <MessageCircle size={size} className={`text-black dark:text-white ${className}`} />;
      case 'pinterest':
        return <Globe size={size} className={`text-red-700 ${className}`} />;
      case 'soundcloud':
        return <Music size={size} className={`text-orange-500 ${className}`} />;
      case 'vimeo':
      case 'dailymotion':
        return <Film size={size} className={`text-blue-500 ${className}`} />;
      case 'reddit':
        return <Globe size={size} className={`text-orange-600 ${className}`} />;
      case 'unknown':
      default:
        return <Globe size={size} className={`text-gray-500 ${className}`} />;
    }
  };

  return (
    <div className="inline-flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default PlatformIcon; 