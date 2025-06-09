import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';

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

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate) || templates[0];

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

  const handleTemplateSelect = (templateId) => {
    onTemplateChange(templateId);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <label className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 block transition-colors duration-300">
        Şablon Seç
      </label>
      
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm hover:border-gray-400 dark:hover:border-gray-500 focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 ${getIconColor(selectedTemplateData.color)} rounded flex items-center justify-center`}>
            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
          </div>
          <span className="text-gray-800 dark:text-gray-200">{selectedTemplateData.name}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-[100] max-h-48 overflow-y-auto">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                selectedTemplate === template.id ? 'bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`w-4 h-4 ${getIconColor(template.color)} rounded flex items-center justify-center flex-shrink-0`}>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800 dark:text-gray-200">{template.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{template.description}</div>
              </div>
              {selectedTemplate === template.id && (
                <Check className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector; 