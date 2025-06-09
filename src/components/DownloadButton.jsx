import React, { useState } from 'react';
import { Download, FileText, AlertCircle } from 'lucide-react';
import { exportToPDF } from '../utils/pdfExporter';

const DownloadButton = ({ cvData, selectedTemplate }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState(null);

  const handleDownload = async () => {
    if (isExporting) return;
    
    setIsExporting(true);
    setExportError(null);
    
    try {
      await exportToPDF(cvData, selectedTemplate);
      console.log('PDF export successful');
    } catch (error) {
      console.error('Export failed:', error);
      setExportError('PDF oluşturulamadı. Lütfen tekrar deneyin.');
      
      // 5 saniye sonra hata mesajını temizle
      setTimeout(() => {
        setExportError(null);
      }, 5000);
    } finally {
      setIsExporting(false);
    }
  };

  const isDataEmpty = () => {
    return !cvData.personalInfo.fullName && 
           !cvData.personalInfo.email && 
           cvData.experience.length === 0 && 
           cvData.education.length === 0;
  };

  return (
    <div className="flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <button
          onClick={handleDownload}
          disabled={isExporting || isDataEmpty()}
          className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
            isExporting || isDataEmpty()
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed border border-gray-300 dark:border-gray-600'
              : 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-2xl shadow-orange-500/25 hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105'
          }`}
        >
          {isExporting ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white dark:border-gray-300 border-t-transparent rounded-full"></div>
              <span className="hidden sm:inline">PDF Oluşturuluyor...</span>
              <span className="sm:hidden">Oluşturuluyor...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>PDF İndir</span>
            </>
          )}
        </button>

        {isDataEmpty() && (
          <div className="flex items-center justify-center sm:justify-start gap-2 text-orange-600 dark:text-orange-400 text-xs sm:text-sm transition-colors duration-300 w-full sm:w-auto text-center sm:text-left">
            <FileText className="w-4 h-4 flex-shrink-0" />
            <span>CV bilgilerinizi doldurun</span>
          </div>
        )}
      </div>

      {/* Hata Mesajı */}
      {exportError && (
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs sm:text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg border border-red-200 dark:border-red-800 w-full sm:w-auto">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="text-center sm:text-left">{exportError}</span>
        </div>
      )}
    </div>
  );
};

export default DownloadButton; 