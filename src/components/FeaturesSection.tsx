import React from 'react';
import { 
  Download, 
  Image, 
  Video, 
  File, 
  Layout, 
  Shield, 
  Smartphone
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="card p-6 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 bg-primary-50 dark:bg-dark-700 p-3 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: Download,
    title: 'Multi-Platform Support',
    description: 'Download from Instagram, YouTube, Twitter, LinkedIn, Facebook, Pinterest and more.',
  },
  {
    icon: Image,
    title: 'Image Downloads',
    description: 'Easily download images, galleries, stories, and profile pictures in high quality.',
  },
  {
    icon: Video,
    title: 'Video Downloads',
    description: 'Save videos, shorts, reels, stories in the highest available quality.',
  },
  {
    icon: File,
    title: 'Document Support',
    description: 'Download documents, PDFs, presentations, and other file types.',
  },
  {
    icon: Layout,
    title: 'Beautiful UI',
    description: 'Clean, modern interface with content previews and easy download options.',
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'No tracking, no ads, and your data is never stored on our servers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on any device, from desktops to smartphones.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection; 