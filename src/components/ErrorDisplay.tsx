import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
  suggestion?: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
  message, 
  suggestion = 'Please check the URL and try again.',
  onRetry 
}) => {
  return (
    <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
        {message}
      </h3>
      
      <p className="text-red-600 dark:text-red-300 text-sm mb-4">
        {suggestion}
      </p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-800/50 hover:bg-red-200 dark:hover:bg-red-800 text-red-700 dark:text-red-300 rounded-lg transition-colors text-sm font-medium"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay; 