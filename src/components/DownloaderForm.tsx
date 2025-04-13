import React, { useState } from 'react';
import axios from 'axios';
import { Download, Loader2, X, ExternalLink } from 'lucide-react';
import MediaPreview from './MediaPreview';

interface DownloadResult {
  type: 'video' | 'image' | 'audio' | 'document' | 'unknown';
  url: string;
  thumbnailUrl?: string;
  title?: string;
  platform?: string;
  quality?: string;
  fileSize?: string;
  downloadUrl: string;
  additionalDownloads?: {
    label: string;
    quality?: string;
    fileSize?: string;
    downloadUrl: string;
  }[];
}

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadResult, setDownloadResult] = useState<DownloadResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // This would be your actual API endpoint in production
      // For demo purposes, we'll simulate a response
      // const response = await axios.post('/api/download', { url });
      // const data = response.data;
      
      // Simulated response for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check URL and simulate response based on URL type
      let data: DownloadResult;
      
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        data = {
          type: 'video',
          url: url,
          thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          title: 'Sample YouTube Video',
          platform: 'YouTube',
          quality: '1080p',
          fileSize: '25 MB',
          downloadUrl: '#',
          additionalDownloads: [
            { label: 'HD (720p)', quality: '720p', fileSize: '15 MB', downloadUrl: '#' },
            { label: 'SD (480p)', quality: '480p', fileSize: '8 MB', downloadUrl: '#' },
            { label: 'Audio Only', quality: '128kbps', fileSize: '3 MB', downloadUrl: '#' },
          ]
        };
      } else if (url.includes('instagram.com')) {
        data = {
          type: 'image',
          url: url,
          thumbnailUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          title: 'Sample Instagram Post',
          platform: 'Instagram',
          downloadUrl: '#',
          additionalDownloads: [
            { label: 'High Quality', quality: 'Original', fileSize: '2.5 MB', downloadUrl: '#' },
            { label: 'Medium Quality', quality: 'Medium', fileSize: '1.2 MB', downloadUrl: '#' },
          ]
        };
      } else if (url.includes('twitter.com') || url.includes('x.com')) {
        data = {
          type: 'video',
          url: url,
          thumbnailUrl: 'https://pbs.twimg.com/media/ExampleImage.jpg',
          title: 'Sample Twitter/X Video',
          platform: 'Twitter/X',
          quality: '720p',
          fileSize: '10 MB',
          downloadUrl: '#',
        };
      } else {
        data = {
          type: 'unknown',
          url: url,
          title: 'Unknown Media',
          downloadUrl: '#',
        };
      }
      
      setDownloadResult(data);
    } catch (err) {
      setError('Failed to process the URL. Please check the URL and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setUrl('');
    setDownloadResult(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste URL from Instagram, YouTube, Twitter, etc."
              className="input w-full pr-10"
            />
            {url && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading || !url}
            className="btn btn-primary flex items-center justify-center gap-2 min-w-[120px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {downloadResult && <MediaPreview result={downloadResult} />}
    </div>
  );
};

export default DownloaderForm; 