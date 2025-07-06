
import React from 'react';
import { Card } from '@/components/ui/card';

interface AdhkarCategoryProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  count: number;
  onClick: () => void;
}

export const AdhkarCategory = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  count, 
  onClick 
}: AdhkarCategoryProps) => {
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border-emerald-200 hover:border-emerald-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 
          className="text-xl font-bold text-emerald-800 mb-1" 
          style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl' }}
        >
          {title}
        </h3>
        <p className="text-emerald-600 font-medium mb-3">
          {subtitle}
        </p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center items-center space-x-2">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
            {count} أذكار
          </span>
        </div>
      </div>
    </Card>
  );
};
