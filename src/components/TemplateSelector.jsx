import React from 'react';
import { Check } from 'lucide-react';

const TemplateSelector = ({ selectedTemplate, onTemplateChange }) => {
  const templates = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Sade ve temiz',
      color: 'blue'
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Renkli ve dinamik',
      color: 'orange'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Kurumsal görünüm',
      color: 'gray'
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
      orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
      gray: 'bg-gradient-to-br from-gray-500 to-gray-600'
    };
    return colors[color] || colors.orange;
  };

  const getBorderColor = (color, isSelected) => {
    if (!isSelected) return 'border-gray-200 dark:border-gray-600';
    
    const colors = {
      blue: 'border-blue-500 dark:border-blue-400',
      orange: 'border-orange-500 dark:border-orange-400',
      gray: 'border-gray-500 dark:border-gray-400'
    };
    return colors[color] || colors.orange;
  };

  const getBackgroundColor = (color, isSelected) => {
    if (!isSelected) return 'bg-white dark:bg-gray-800';
    
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20',
      orange: 'bg-orange-50 dark:bg-orange-900/20',
      gray: 'bg-gray-50 dark:bg-gray-900/20'
    };
    return colors[color] || colors.orange;
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 block transition-colors duration-300">
        Şablon Seç
      </label>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {templates.map((template) => {
          const isSelected = selectedTemplate === template.id;
          return (
            <button
              key={template.id}
              onClick={() => onTemplateChange(template.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${getBorderColor(template.color, isSelected)} ${getBackgroundColor(template.color, isSelected)}`}
            >
              {/* Seçili işareti */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              
              {/* İkon */}
              <div className={`w-8 h-8 ${getIconColor(template.color)} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              
              {/* İçerik */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {template.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {template.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelector; 