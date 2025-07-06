
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, RotateCcw } from 'lucide-react';
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
  const [currentCount, setCurrentCount] = useState(0);

  const nextDhikr = () => {
    if (currentIndex < adhkar.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentCount(0); // Reset count when moving to next dhikr
    }
  };

  const prevDhikr = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentCount(0); // Reset count when moving to previous dhikr
    }
  };

  const incrementCount = () => {
    const maxCount = currentDhikr.repetition || 1;
    if (currentCount < maxCount) {
      setCurrentCount(currentCount + 1);
    }
  };

  const resetCount = () => {
    setCurrentCount(0);
  };

  const currentDhikr = adhkar[currentIndex];
  const maxRepetition = currentDhikr.repetition || 1;
  const isCompleted = currentCount >= maxRepetition;

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
              
              {/* Repetition and Counter */}
              {currentDhikr.repetition && (
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 inline-block">
                    <span className="text-amber-800 font-medium text-sm">
                      يُقال {currentDhikr.repetition} مرة
                    </span>
                  </div>
                  
                  {/* Modern Counter Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <Button
                      onClick={resetCount}
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-emerald-50"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    
                    <div className="text-center">
                      <div className={`text-3xl font-light mb-1 ${isCompleted ? 'text-green-600' : 'text-emerald-700'}`}>
                        {currentCount}
                        <span className="text-lg text-gray-400 mx-2">/</span>
                        <span className="text-lg text-gray-600">{maxRepetition}</span>
                      </div>
                      {isCompleted && (
                        <div className="text-green-600 font-medium text-sm">
                          ✓ مكتمل
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={incrementCount}
                      disabled={isCompleted}
                      className={`h-14 w-14 rounded-full transition-all duration-200 border-2 ${
                        isCompleted 
                          ? 'bg-green-50 border-green-200 text-green-400 cursor-not-allowed' 
                          : 'bg-white border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400 active:scale-95 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <span className="font-medium">
                        {isCompleted ? '✓' : '+'}
                      </span>
                    </button>
                  </div>
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
                  onClick={() => {
                    setCurrentIndex(index);
                    setCurrentCount(0);
                  }}
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
