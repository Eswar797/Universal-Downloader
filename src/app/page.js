'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response based on URL
      let mockResult = {
        type: 'unknown',
        title: 'Unknown Content',
        platform: 'Unknown',
        url: url,
        downloadUrl: '#'
      };
      
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        mockResult = {
          type: 'video',
          title: 'YouTube Video Example',
          platform: 'YouTube',
          url: url,
          previewUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
          downloadUrl: '#'
        };
      } else if (url.includes('instagram.com')) {
        mockResult = {
          type: 'image',
          title: 'Instagram Post Example',
          platform: 'Instagram',
          url: url,
          previewUrl: 'https://via.placeholder.com/500',
          downloadUrl: '#'
        };
      } else if (url.includes('twitter.com') || url.includes('x.com')) {
        mockResult = {
          type: 'video',
          title: 'Twitter/X Post Example',
          platform: 'Twitter/X',
          url: url,
          previewUrl: 'https://via.placeholder.com/500x300',
          downloadUrl: '#'
        };
      }
      
      setResult(mockResult);
    } catch (err) {
      setError('Failed to process URL. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="container">
        <header className="py-4 flex justify-between items-center">
          <h1 className="text-center">Universal Downloader</h1>
        </header>
        
        <div className="py-8">
          <h2 className="text-center mb-8">Download from any platform</h2>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste URL from YouTube, Instagram, Twitter, etc."
                className="mb-2"
              />
              <button type="submit" className="primary" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Download'}
              </button>
            </div>
          </form>
          
          {error && (
            <div className="card" style={{ backgroundColor: '#FFEBEE', color: '#C62828', borderColor: '#FFCDD2' }}>
              {error}
            </div>
          )}
          
          {result && (
            <div className="card">
              <h3 className="mb-2">{result.title}</h3>
              <p className="mb-4">Platform: {result.platform}</p>
              
              {result.previewUrl && (
                <div className="mb-4" style={{ maxWidth: '100%', height: 'auto' }}>
                  <img 
                    src={result.previewUrl} 
                    alt="Preview" 
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
              
              <a href={result.downloadUrl} download className="primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Download Now
              </a>
            </div>
          )}
        </div>
        
        <footer className="py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Universal Downloader</p>
        </footer>
      </div>
    </main>
  );
} 