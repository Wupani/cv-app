import React from 'react';
import MinimalTemplate from '../templates/MinimalTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';

const CVPreview = ({ cvData, selectedTemplate, selectedColor, selectedFont }) => {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate cvData={cvData} selectedColor={selectedColor} selectedFont={selectedFont} />;
      case 'modern':
        return <ModernTemplate cvData={cvData} selectedColor={selectedColor} selectedFont={selectedFont} />;
      case 'professional':
        return <ProfessionalTemplate cvData={cvData} selectedColor={selectedColor} selectedFont={selectedFont} />;
      default:
        return <MinimalTemplate cvData={cvData} selectedColor={selectedColor} selectedFont={selectedFont} />;
    }
  };

  return (
    <div className="cv-preview">
      {/* Format Bilgisi */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="font-medium">A4 Format (210×297mm)</span>
        </div>
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="font-medium">PDF Hazır</span>
        </div>
      </div>

      {/* Önizleme */}
      <div className="relative flex justify-center">
        <div 
          className="border border-gray-300 shadow-lg bg-white overflow-hidden w-full max-w-3xl"
          style={{ 
            aspectRatio: '210/297'
          }}
          id="cv-preview"
        >
          <div 
            className="w-full h-full overflow-hidden" 
            style={{ 
              fontSize: '12px',
              lineHeight: '1.4',
              wordBreak: 'break-word',
              hyphens: 'auto',
              transform: 'scale(1.0)',
              transformOrigin: 'top left'
            }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>

      {/* Mobil için bilgi notu */}
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400 lg:hidden">
        💡 En iyi deneyim için bilgisayar veya tablet kullanmanızı öneriyoruz
      </div>
    </div>
  );
};

export default CVPreview; 