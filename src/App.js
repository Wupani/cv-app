import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import TemplateSelector from './components/TemplateSelector';
import ColorSelector from './components/ColorSelector';
import FontSelector from './components/FontSelector';
import DownloadButton from './components/DownloadButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');
  const [selectedColor, setSelectedColor] = useState('orange');
  const [selectedFont, setSelectedFont] = useState('poppins');
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      photo: '',
      birthDate: '',
      birthPlace: '',
      drivingLicense: '',
      gender: '',
      nationality: '',
      maritalStatus: '',
      customField: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: [],
    hobbies: [],
    certificates: [],
    courses: []
  });

  // localStorage'dan veri yükleme
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    const savedTemplate = localStorage.getItem('selectedTemplate');
    const savedColor = localStorage.getItem('selectedColor');
    const savedFont = localStorage.getItem('selectedFont');
    
    if (savedData) {
      setCvData(JSON.parse(savedData));
    }
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
    if (savedColor) {
      setSelectedColor(savedColor);
    }
    if (savedFont) {
      setSelectedFont(savedFont);
    }
  }, []);

  // Veri değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate);
  }, [selectedTemplate]);

  useEffect(() => {
    localStorage.setItem('selectedColor', selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    localStorage.setItem('selectedFont', selectedFont);
  }, [selectedFont]);

  const handleStartCreating = () => {
    setCurrentPage('builder');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'home') {
    return <LandingPage onStartCreating={handleStartCreating} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header - Mobil responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 sm:mb-8">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors duration-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg order-2 sm:order-1"
          >
            ← Ana Sayfaya Dön
          </button>
          <div className="order-1 sm:order-2">
            <DownloadButton cvData={cvData} selectedTemplate={selectedTemplate} selectedColor={selectedColor} selectedFont={selectedFont} />
          </div>
        </div>

        {/* Seçici Controls - Mobil responsive */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 dark:border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300 relative z-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            Özelleştirme
          </h2>
          <div className="space-y-6">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            <ColorSelector
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />
            <FontSelector
              selectedFont={selectedFont}
              onFontChange={setSelectedFont}
            />
          </div>
        </div>

        {/* Ana içerik - Mobil responsive grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 relative z-10">
          {/* CV Form - Mobilde üstte */}
          <div className="xl:col-span-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 dark:border-gray-700 p-4 sm:p-6 transition-colors duration-300 relative z-20 order-2 xl:order-1">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
              CV Bilgileri
            </h2>
            <CVForm cvData={cvData} setCvData={setCvData} />
          </div>

          {/* CV Preview - Mobilde altta */}
          <div className="xl:col-span-7 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 dark:border-gray-700 p-4 sm:p-6 transition-colors duration-300 relative z-20 order-1 xl:order-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
              Önizleme
            </h2>
            <CVPreview cvData={cvData} selectedTemplate={selectedTemplate} selectedColor={selectedColor} selectedFont={selectedFont} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
