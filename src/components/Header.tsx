import React from 'react';
import Link from 'next/link';
import { Github, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white dark:bg-dark-800 shadow-sm">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Download className="w-6 h-6 text-primary-600" />
          <span className="text-2xl font-bold text-primary-600">UniDown</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 