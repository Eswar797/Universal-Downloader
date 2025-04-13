import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        
        <h2 className="mt-5 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>
        
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn btn-primary flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
} 