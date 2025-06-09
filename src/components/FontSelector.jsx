import React from 'react';
import { Check } from 'lucide-react';

const FontSelector = ({ selectedFont, onFontChange }) => {
  const fonts = [
    {
      id: 'inter',
      name: 'Inter',
      description: 'Modern',
      family: 'Inter, sans-serif',
      preview: 'Aa'
    },
    {
      id: 'poppins',
      name: 'Poppins',
      description: 'Dostça',
      family: 'Poppins, sans-serif',
      preview: 'Aa'
    },
    {
      id: 'roboto',
      name: 'Roboto',
      description: 'Nötr',
      family: 'Roboto, sans-serif',
      preview: 'Aa'
    },
    {
      id: 'opensans',
      name: 'Open Sans',
      description: 'Okunabilir',
      family: 'Open Sans, sans-serif',
      preview: 'Aa'
    },
    {
      id: 'lato',
      name: 'Lato',
      description: 'Zarif',
      family: 'Lato, sans-serif',
      preview: 'Aa'
    },
    {
      id: 'playfair',
      name: 'Playfair',
      description: 'Şık Serif',
      family: 'Playfair Display, serif',
      preview: 'Aa'
    },
    {
      id: 'merriweather',
      name: 'Merriweather',
      description: 'Klasik',
      family: 'Merriweather, serif',
      preview: 'Aa'
    },
    {
      id: 'sourceserif',
      name: 'Source Serif',
      description: 'Profesyonel',
      family: 'Source Serif Pro, serif',
      preview: 'Aa'
    }
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 block transition-colors duration-300">
        Font Seç
      </label>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {fonts.map((font) => {
          const isSelected = selectedFont === font.id;
          return (
            <button
              key={font.id}
              onClick={() => onFontChange(font.id)}
              className={`relative p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isSelected 
                  ? 'border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/20' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
              title={`${font.name} - ${font.description}`}
            >
              {/* Seçili işareti */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              
              {/* Font gösterimi */}
              <div className="space-y-2 text-center">
                <div 
                  className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center text-lg font-medium text-gray-700 dark:text-gray-300 mx-auto"
                  style={{ fontFamily: font.family }}
                >
                  Aa
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {font.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {font.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FontSelector; 