
import React, { useState } from 'react';
import { AdhkarCategory } from '@/components/AdhkarCategory';
import { AdhkarViewer } from '@/components/AdhkarViewer';
import { NavigationBar } from '@/components/NavigationBar';
import { Header } from '@/components/Header';
import { adhkarData } from '@/data/adhkarData';

export type CategoryKey = 'morning' | 'evening' | 'afterPrayer' | 'beforeSleep' | 'enteringHome' | 'exitingHome';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  const handleCategorySelect = (category: CategoryKey) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <Header />
      
      {selectedCategory ? (
        <AdhkarViewer 
          category={selectedCategory}
          adhkar={adhkarData[selectedCategory]}
          onBack={handleBack}
        />
      ) : (
        <>
          <div className="px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-2">
                  اختر فئة الأذكار
                </h2>
                <p className="text-emerald-600">
                  Choose your adhkar category
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdhkarCategory
                  title="أذكار الصباح"
                  subtitle="Morning Adhkar"
                  description="Recite these beautiful supplications to start your day with Allah's remembrance"
                  icon="🌅"
                  count={adhkarData.morning.length}
                  onClick={() => handleCategorySelect('morning')}
                />
                
                <AdhkarCategory
                  title="أذكار المساء"
                  subtitle="Evening Adhkar"
                  description="End your day with these peaceful remembrances of Allah"
                  icon="🌙"
                  count={adhkarData.evening.length}
                  onClick={() => handleCategorySelect('evening')}
                />
                
                <AdhkarCategory
                  title="أذكار بعد الصلاة"
                  subtitle="After Prayer Adhkar"
                  description="Continue your spiritual connection after each prayer"
                  icon="🤲"
                  count={adhkarData.afterPrayer.length}
                  onClick={() => handleCategorySelect('afterPrayer')}
                />
                
                <AdhkarCategory
                  title="أذكار النوم"
                  subtitle="Before Sleep Adhkar"
                  description="Sleep peacefully with Allah's protection and blessings"
                  icon="🛌"
                  count={adhkarData.beforeSleep.length}
                  onClick={() => handleCategorySelect('beforeSleep')}
                />
                
                <AdhkarCategory
                  title="دخول المنزل"
                  subtitle="Entering Home"
                  description="Supplications for entering your home with blessings"
                  icon="🏠"
                  count={adhkarData.enteringHome.length}
                  onClick={() => handleCategorySelect('enteringHome')}
                />
                
                <AdhkarCategory
                  title="الخروج من المنزل"
                  subtitle="Exiting Home"
                  description="Begin your journey outside with Allah's protection"
                  icon="🚪"
                  count={adhkarData.exitingHome.length}
                  onClick={() => handleCategorySelect('exitingHome')}
                />
              </div>
            </div>
          </div>
          
          <NavigationBar />
        </>
      )}
    </div>
  );
};

export default Index;
