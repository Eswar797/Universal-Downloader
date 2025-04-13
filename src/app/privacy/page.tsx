import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Universal Downloader',
  description: 'Privacy Policy for the Universal Downloader app',
};

export default function PrivacyPage() {
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
        
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            Universal Downloader does not collect any personal information. We do not store URLs, download history, or any other 
            data about your usage of the application. All processing is done client-side whenever possible.
          </p>
          
          <h2>2. Cookies and Local Storage</h2>
          <p>
            We use local storage only to remember your preferences, such as theme settings (light/dark mode). 
            No tracking cookies are used.
          </p>
          
          <h2>3. Third-Party Services</h2>
          <p>
            When you use our service to download content from third-party platforms, your request will be processed through our servers. 
            However, we do not log or store any information about these requests beyond what is necessary to fulfill the download.
          </p>
          
          <h2>4. Analytics</h2>
          <p>
            We may use anonymous analytics to understand overall usage patterns and improve the service. 
            These analytics do not collect any personally identifiable information.
          </p>
          
          <h2>5. Security</h2>
          <p>
            While we implement reasonable security measures, no internet transmission is completely secure. 
            Use our service at your own discretion.
          </p>
          
          <h2>6. Children's Privacy</h2>
          <p>
            Our service is not intended for individuals under the age of 13. We do not knowingly collect information from children.
          </p>
          
          <h2>7. Changes to Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify users of any significant changes by posting the new 
            policy on this page.
          </p>
          
          <h2>8. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </main>
  );
} 