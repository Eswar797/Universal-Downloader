import './globals.css';

export const metadata = {
  title: 'Universal Downloader - Download from Any Platform',
  description: 'A modern web app to download media from Instagram, YouTube, Twitter/X, LinkedIn, Facebook, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 