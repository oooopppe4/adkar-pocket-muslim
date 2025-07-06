
import React from 'react';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-6 shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            أذكار المسلم
          </h1>
          <p className="text-emerald-100 text-lg">
            Muslim Adhkar & Supplications
          </p>
          <div className="mt-3 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
