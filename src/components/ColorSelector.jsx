import React from 'react';
import { Check } from 'lucide-react';

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

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 block transition-colors duration-300">
        Renk Seç
      </label>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor === color.id;
          return (
            <button
              key={color.id}
              onClick={() => onColorChange(color.id)}
              className={`relative group p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isSelected 
                  ? 'border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/20' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
              title={color.name}
            >
              {/* Seçili işareti */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              
              {/* Renk gösterimi */}
              <div className="space-y-2">
                <div className={`w-8 h-8 bg-gradient-to-br ${color.preview} rounded-lg mx-auto shadow-sm`}></div>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {color.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector; 