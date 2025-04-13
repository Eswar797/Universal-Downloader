import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Universal Downloader',
  description: 'Terms of Service for the Universal Downloader app',
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using the Universal Downloader application, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use the service.
          </p>
          
          <h2>2. Description of Service</h2>
          <p>
            Universal Downloader provides a service that allows users to download media from various platforms for personal use.
            The service is provided "as is" and "as available" without any warranties.
          </p>
          
          <h2>3. Fair Use and Copyright</h2>
          <p>
            Users are responsible for ensuring they have the right to download content. Universal Downloader is intended only for downloading content that:
          </p>
          <ol>
            <li>Is in the public domain</li>
            <li>You have permission to download</li>
            <li>Falls under fair use in your jurisdiction</li>
            <li>You are the copyright owner of</li>
          </ol>
          <p>
            We respect copyright laws and expect our users to do the same. Downloading copyrighted material without permission may violate applicable laws.
          </p>
          
          <h2>4. User Conduct</h2>
          <p>
            Users agree not to:
          </p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Circumvent any access control or security measure</li>
            <li>Interfere with the proper working of the service</li>
            <li>Impose an unreasonable load on our infrastructure</li>
          </ul>
          
          <h2>5. Limitation of Liability</h2>
          <p>
            Universal Downloader shall not be liable for any indirect, incidental, special, consequential or punitive damages 
            resulting from your use of or inability to use the service.
          </p>
          
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the service following any changes 
            constitutes your acceptance of the new terms.
          </p>
          
          <h2>7. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>
    </main>
  );
} 