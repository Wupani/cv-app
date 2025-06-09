import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ColorSelector = ({ selectedColor, onColorChange }) => {
  const colors = [
    {
      id: 'orange',
      name: 'Turuncu',
      primary: 'bg-orange-500',
      secondary: 'bg-orange-300',
      preview: 'from-orange-500 to-orange-600'
    },
    {
      id: 'blue',
      name: 'Mavi',
      primary: 'bg-blue-500',
      secondary: 'bg-blue-300',
      preview: 'from-blue-500 to-blue-600'
    },
    {
      id: 'purple',
      name: 'Mor',
      primary: 'bg-purple-500',
      secondary: 'bg-purple-300',
      preview: 'from-purple-500 to-purple-600'
    },
    {
      id: 'green',
      name: 'Yeşil',
      primary: 'bg-green-500',
      secondary: 'bg-green-300',
      preview: 'from-green-500 to-green-600'
    },
    {
      id: 'red',
      name: 'Kırmızı',
      primary: 'bg-red-500',
      secondary: 'bg-red-300',
      preview: 'from-red-500 to-red-600'
    },
    {
      id: 'indigo',
      name: 'İndigo',
      primary: 'bg-indigo-500',
      secondary: 'bg-indigo-300',
      preview: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'pink',
      name: 'Pembe',
      primary: 'bg-pink-500',
      secondary: 'bg-pink-300',
      preview: 'from-pink-500 to-pink-600'
    },
    {
      id: 'teal',
      name: 'Deniz Mavisi',
      primary: 'bg-teal-500',
      secondary: 'bg-teal-300',
      preview: 'from-teal-500 to-teal-600'
    },
    {
      id: 'black',
      name: 'Siyah',
      primary: 'bg-gray-900',
      secondary: 'bg-gray-600',
      preview: 'from-gray-800 to-gray-900'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedColorData = colors.find(c => c.id === selectedColor) || colors[0];

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

  const handleColorSelect = (colorId) => {
    onColorChange(colorId);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 block transition-colors duration-300">
        Renk Seç
      </label>
      
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm hover:border-gray-400 dark:hover:border-gray-500 focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 bg-gradient-to-br ${selectedColorData.preview} rounded`}></div>
          <span className="text-gray-800 dark:text-gray-200">{selectedColorData.name}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-[100] max-h-48 overflow-y-auto">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorSelect(color.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                selectedColor === color.id ? 'bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`w-4 h-4 bg-gradient-to-br ${color.preview} rounded flex-shrink-0`}></div>
              <span className="flex-1 text-left font-medium text-gray-800 dark:text-gray-200">{color.name}</span>
              {selectedColor === color.id && (
                <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full flex-shrink-0"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorSelector; 