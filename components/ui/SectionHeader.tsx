import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-primary-600 rounded mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-primary-100' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;