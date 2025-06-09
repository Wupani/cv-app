import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedFontData = fonts.find(f => f.id === selectedFont) || fonts[0];

  // Dropdown dışında tıklama durumunda kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFontSelect = (fontId) => {
    onFontChange(fontId);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 block transition-colors duration-300">
        Font Seç
      </label>
      
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm hover:border-gray-400 dark:hover:border-gray-500 focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <span 
            className="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300"
            style={{ fontFamily: selectedFontData.family }}
          >
            Aa
          </span>
          <span className="text-gray-800 dark:text-gray-200">{selectedFontData.name}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-[100] max-h-48 overflow-y-auto">
          {fonts.map((font) => (
            <button
              key={font.id}
              onClick={() => handleFontSelect(font.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                selectedFont === font.id ? 'bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <span 
                className="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300 flex-shrink-0"
                style={{ fontFamily: font.family }}
              >
                Aa
              </span>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800 dark:text-gray-200">{font.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{font.description}</div>
              </div>
              {selectedFont === font.id && (
                <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full flex-shrink-0"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSelector; 