import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  url: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // For demonstration purposes, we'll just return mock data based on the URL
    // In a real application, you would integrate with various APIs to fetch and process media
    
    let responseData;

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      responseData = {
        type: 'video',
        url: url,
        thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Sample YouTube Video',
        platform: 'YouTube',
        quality: '1080p',
        fileSize: '25 MB',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
        additionalDownloads: [
          { label: 'HD (720p)', quality: '720p', fileSize: '15 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=720p' },
          { label: 'SD (480p)', quality: '480p', fileSize: '8 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=480p' },
          { label: 'Audio Only', quality: '128kbps', fileSize: '3 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&format=audio' },
        ]
      };
    } else if (url.includes('instagram.com')) {
      responseData = {
        type: 'image',
        url: url,
        thumbnailUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'Sample Instagram Post',
        platform: 'Instagram',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
        additionalDownloads: [
          { label: 'High Quality', quality: 'Original', fileSize: '2.5 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=high' },
          { label: 'Medium Quality', quality: 'Medium', fileSize: '1.2 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=medium' },
        ]
      };
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      responseData = {
        type: 'video',
        url: url,
        thumbnailUrl: 'https://pbs.twimg.com/media/ExampleImage.jpg',
        title: 'Sample Twitter/X Video',
        platform: 'Twitter/X',
        quality: '720p',
        fileSize: '10 MB',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
      };
    } else if (url.includes('linkedin.com')) {
      responseData = {
        type: 'document',
        url: url,
        title: 'Sample LinkedIn PDF',
        platform: 'LinkedIn',
        fileSize: '5 MB',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
      };
    } else if (url.includes('facebook.com')) {
      responseData = {
        type: 'video',
        url: url,
        thumbnailUrl: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg',
        title: 'Sample Facebook Video',
        platform: 'Facebook',
        quality: '720p',
        fileSize: '18 MB',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
        additionalDownloads: [
          { label: 'SD (480p)', quality: '480p', fileSize: '10 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=480p' },
          { label: 'Low Quality', quality: '240p', fileSize: '5 MB', downloadUrl: '/api/download/file?url=' + encodeURIComponent(url) + '&quality=240p' },
        ]
      };
    } else if (url.includes('pinterest.com')) {
      responseData = {
        type: 'image',
        url: url,
        thumbnailUrl: 'https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1934452_1280.jpg',
        title: 'Sample Pinterest Image',
        platform: 'Pinterest',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
      };
    } else {
      responseData = {
        type: 'unknown',
        url: url,
        title: 'Unknown Media',
        downloadUrl: '/api/download/file?url=' + encodeURIComponent(url),
      };
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error processing URL:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

// This is needed only for development mode
export const config = {
  runtime: 'edge',
}; 