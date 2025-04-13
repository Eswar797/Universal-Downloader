import React from 'react';
import Image from 'next/image';
import { Download, ExternalLink, FileType, Video, Music, File } from 'lucide-react';

interface DownloadItem {
  label: string;
  quality?: string;
  fileSize?: string;
  downloadUrl: string;
}

interface DownloadResult {
  type: 'video' | 'image' | 'audio' | 'document' | 'unknown';
  url: string;
  thumbnailUrl?: string;
  title?: string;
  platform?: string;
  quality?: string;
  fileSize?: string;
  downloadUrl: string;
  additionalDownloads?: DownloadItem[];
}

interface MediaPreviewProps {
  result: DownloadResult;
}

const MediaPreview: React.FC<MediaPreviewProps> = ({ result }) => {
  const TypeIcon = () => {
    switch (result.type) {
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'image':
        return <FileType className="w-6 h-6" />;
      case 'audio':
        return <Music className="w-6 h-6" />;
      case 'document':
      case 'unknown':
      default:
        return <File className="w-6 h-6" />;
    }
  };

  const handleDownload = (url: string) => {
    // In a real app, this would trigger the actual download
    window.open(url, '_blank');
  };

  return (
    <div className="card p-6 animate-fadeIn">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Media Preview / Thumbnail */}
        <div className="lg:w-1/3">
          {result.thumbnailUrl ? (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-700">
              <Image
                src={result.thumbnailUrl}
                alt={result.title || 'Media preview'}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
              <TypeIcon />
            </div>
          )}
        </div>

        {/* Media Details */}
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded text-xs font-medium text-gray-800 dark:text-gray-200">
              {result.platform || 'Unknown Platform'}
            </span>
            <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded text-xs font-medium text-gray-800 dark:text-gray-200">
              {result.type.toUpperCase()}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2">{result.title || 'Untitled Media'}</h3>
          
          <div className="mb-4">
            <a 
              href={result.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Source URL
            </a>
          </div>

          {/* Primary Download Button */}
          <div className="mb-4">
            <button
              onClick={() => handleDownload(result.downloadUrl)}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download {result.quality && `(${result.quality})`} {result.fileSize && `- ${result.fileSize}`}
            </button>
          </div>

          {/* Additional Download Options */}
          {result.additionalDownloads && result.additionalDownloads.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Additional Download Options</h4>
              <div className="space-y-2">
                {result.additionalDownloads.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleDownload(item.downloadUrl)}
                    className="w-full bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg px-4 py-2 text-left flex justify-between items-center transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.quality && `${item.quality}`} {item.fileSize && `- ${item.fileSize}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaPreview; 