
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { CategoryKey } from '@/pages/Index';

interface Dhikr {
  arabic: string;
  transliteration: string;
  translation: string;
  repetition?: number;
}

interface AdhkarViewerProps {
  category: CategoryKey;
  adhkar: Dhikr[];
  onBack: () => void;
}

const categoryTitles = {
  morning: 'أذكار الصباح',
  evening: 'أذكار المساء',
  afterPrayer: 'أذكار بعد الصلاة',
  beforeSleep: 'أذكار النوم',
  enteringHome: 'دخول المنزل',
  exitingHome: 'الخروج من المنزل'
};

export const AdhkarViewer = ({ category, adhkar, onBack }: AdhkarViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDhikr = () => {
    if (currentIndex < adhkar.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevDhikr = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentDhikr = adhkar[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="sticky top-0 bg-white shadow-sm border-b border-emerald-200 px-4 py-4 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800"
          >
            <ArrowLeft className="h-5 w-5 ml-2" />
            <span>العودة</span>
          </Button>
          
          <h2 
            className="text-xl font-bold text-emerald-800"
            style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl' }}
          >
            {categoryTitles[category]}
          </h2>
          
          <div className="text-sm text-emerald-600 font-medium">
            {currentIndex + 1} / {adhkar.length}
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-white border-emerald-200 shadow-lg">
            <div className="text-center space-y-6">
              {/* Arabic Text */}
              <div 
                className="text-2xl md:text-3xl leading-relaxed text-emerald-900 font-medium"
                style={{ 
                  fontFamily: 'Arial, sans-serif', 
                  direction: 'rtl',
                  lineHeight: '1.8'
                }}
              >
                {currentDhikr.arabic}
              </div>
              
              {/* Repetition */}
              {currentDhikr.repetition && (
                <div className="bg-amber-100 border border-amber-200 rounded-lg p-3 inline-block">
                  <span className="text-amber-800 font-medium text-sm">
                    يُقال {currentDhikr.repetition} مرة
                  </span>
                </div>
              )}
              
              {/* Transliteration */}
              <div className="text-gray-600 italic text-lg leading-relaxed">
                {currentDhikr.transliteration}
              </div>
              
              {/* Translation */}
              <div className="text-gray-700 text-base leading-relaxed border-t border-emerald-100 pt-4">
                <span className="font-medium text-emerald-800">Translation:</span>
                <br />
                {currentDhikr.translation}
              </div>
            </div>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevDhikr}
              disabled={currentIndex === 0}
              variant="outline"
              className="px-6 py-3 border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            >
              السابق
            </Button>
            
            <div className="flex space-x-2">
              {adhkar.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-emerald-600' 
                      : 'bg-emerald-200 hover:bg-emerald-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextDhikr}
              disabled={currentIndex === adhkar.length - 1}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              التالي
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
