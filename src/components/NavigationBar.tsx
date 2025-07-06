
import React from 'react';

export const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-200 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="text-center">
          <p className="text-emerald-700 text-sm font-medium">
            ﴿وَاذْكُر رَّبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ﴾
          </p>
          <p className="text-emerald-600 text-xs mt-1">
            "And remember your Lord much, and glorify Him in the evening and morning"
          </p>
        </div>
      </div>
    </div>
  );
};
