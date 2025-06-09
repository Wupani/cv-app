import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Github, Heart, ArrowRight, Zap, Shield, Menu, X, ExternalLink, Mail, Moon, Sun } from 'lucide-react';

const LandingPage = ({ onStartCreating }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('anasayfa');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  // Load dark mode preference on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const darkMode = JSON.parse(savedDarkMode);
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['anasayfa', 'ozellikler', 'sablonlar', 'nasil-calisir', 'hakkinda'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
              {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-orange-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a 
              href="#anasayfa" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Limnio
                </h1>
                <p className="text-xs text-gray-600">CV Oluşturucu</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#anasayfa" 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === 'anasayfa' 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </a>
              <a 
                href="#ozellikler" 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === 'ozellikler' 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Özellikler
              </a>
              <a 
                href="#sablonlar" 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === 'sablonlar' 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Şablonlar
              </a>
              <a 
                href="#nasil-calisir" 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === 'nasil-calisir' 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nasıl Çalışır
              </a>
              <a 
                href="#hakkinda" 
                className={`font-medium transition-colors duration-200 ${
                  activeSection === 'hakkinda' 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkında
              </a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-orange-400"
                  title={isDarkMode ? "Light Mode" : "Dark Mode"}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="mailto:wupaniyazilim@gmail.com"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-orange-400"
                  title="E-posta"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/wupani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-orange-400"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-orange-200 dark:border-gray-700 shadow-lg z-40 transition-colors duration-300">
              <div className="px-4 py-6 space-y-4">
                <a
                  href="#anasayfa"
                  className={`block font-medium transition-colors duration-200 ${
                    activeSection === 'anasayfa' 
                      ? 'text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ana Sayfa
                </a>
                <a
                  href="#ozellikler"
                  className={`block font-medium transition-colors duration-200 ${
                    activeSection === 'ozellikler' 
                      ? 'text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Özellikler
                </a>
                <a
                  href="#sablonlar"
                  className={`block font-medium transition-colors duration-200 ${
                    activeSection === 'sablonlar' 
                      ? 'text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Şablonlar
                </a>
                <a
                  href="#nasil-calisir"
                  className={`block font-medium transition-colors duration-200 ${
                    activeSection === 'nasil-calisir' 
                      ? 'text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nasıl Çalışır
                </a>
                <a
                  href="#hakkinda"
                  className={`block font-medium transition-colors duration-200 ${
                    activeSection === 'hakkinda' 
                      ? 'text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border-l-4 border-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hakkında
                </a>
                <div className="flex items-center space-x-4 pt-4 border-t border-orange-200 dark:border-gray-700">
                  <button
                    onClick={toggleDarkMode}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-orange-400"
                    title={isDarkMode ? "Light Mode" : "Dark Mode"}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <a
                    href="mailto:wupaniyazilim@gmail.com"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-orange-400"
                    title="E-posta"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/wupani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-orange-400"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div id="anasayfa" className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-8 animate-bounce-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-lg opacity-75"></div>
              <FileText className="relative w-16 h-16 text-orange-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6 animate-slide-up animation-delay-200" style={{fontWeight: 900}}>
            CV Oluşturucu
          </h1>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400 transition-colors duration-300">
              Basit fikirlerle <span className="text-orange-600 dark:text-orange-400 font-semibold">güçlü deneyimler</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-600 transition-colors duration-300">
              Hayalinizdeki işe adım atmak için profesyonel bir CV'ye ihtiyacınız var. 
              Karmaşık tasarım programları ya da pahalı hizmetler yerine, 
              <span className="text-orange-600 dark:text-orange-400 font-medium"> dakikalar içinde etkileyici CV'nizi oluşturun</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in animation-delay-800 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-scale-in animation-delay-1000"></div>
                <span>Tamamen ücretsiz</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in animation-delay-1000"></div>
                <span>Kayıt gerektirmez</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-scale-in animation-delay-1000"></div>
                <span>Verileriniz güvende</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 mb-20 animate-bounce-in animation-delay-1000">
            <button
              onClick={onStartCreating}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-1 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              <span>CV Oluşturmaya Başla</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>

        {/* Features */}
        <div id="ozellikler" className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 dark:from-orange-400/10 dark:to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">Modern Tasarım</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                Çeşitli profesyonel şablonlar arasından seçim yapın ve öne çıkan CV'ler oluşturun
              </p>
            </div>
          </div>
          
          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 dark:from-amber-400/10 dark:to-yellow-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">Hızlı & Kolay</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                CV'nizi yüksek kalitede PDF formatında anında indirin ve kullanmaya başlayın
              </p>
            </div>
          </div>
          
          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-600">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-400/10 dark:to-red-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">Güvenli & Özel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                Verileriniz yalnızca tarayıcınızda saklanır, hiçbir sunucuya gönderilmez
              </p>
            </div>
          </div>

          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-800">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/10 dark:to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">A4 Optimizasyonu</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                Tüm şablonlar A4 kağıt boyutuna göre optimize edilmiş, yazdırmaya hazır
              </p>
            </div>
          </div>

          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-400/10 dark:to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">Çoklu Dil Desteği</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                Türkçe arayüz ve yabancı dil becerileri için özel bölümler mevcut
              </p>
            </div>
          </div>

          <div className="group relative p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up animation-delay-1200">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-400/10 dark:to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center transition-colors duration-300">Yerel Depolama</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed text-lg transition-colors duration-300">
                Çalışmanız otomatik olarak kaydedilir, istediğiniz zaman kaldığınız yerden devam edin
              </p>
            </div>
          </div>
        </div>

        {/* Template Showcase */}
        <div id="sablonlar" className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-slide-up animation-delay-200">
              CV Şablonları
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up animation-delay-400 transition-colors duration-300">
              Profesyonel tasarımlarımızdan birini seçin ve dakikalar içinde etkileyici CV'nizi oluşturun
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Minimal Template Preview */}
            <div className="group relative h-full animate-slide-right animation-delay-600">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="p-4 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-3 transform scale-55 group-hover:scale-60 transition-transform duration-300 h-full">
                    {/* Header */}
                    <div className="text-center mb-3 pb-2 border-b-2 border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2"></div>
                      <h3 className="text-lg font-bold text-blue-600 mb-1">Ahmet Yılmaz</h3>
                      {/* Contact Info - Horizontal layout */}
                      <div className="flex flex-wrap justify-center gap-2 text-gray-600 text-xs">
                        <div className="flex items-center gap-1">
                          <span>📧</span>
                          <span>ahmet@email.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>📱</span>
                          <span>+90 555 123 4567</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>📍</span>
                          <span>İstanbul, Türkiye</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="mb-3">
                      <h4 className="font-semibold text-blue-600 mb-1 flex items-center gap-1 text-sm">
                        <span>👤</span> Özet
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        5+ yıl deneyimli yazılım geliştirici. React, Node.js ile...
                      </p>
                    </div>
                    
                    {/* Experience */}
                    <div className="mb-3">
                      <h4 className="font-semibold text-blue-600 mb-1 flex items-center gap-1 text-sm">
                        <span>💼</span> İş Deneyimi
                      </h4>
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">Senior Developer</p>
                        <p className="text-gray-500 text-xs">ABC Tech • 2020 - Günümüz</p>
                      </div>
                    </div>
                    
                    {/* Education */}
                    <div className="mb-3">
                      <h4 className="font-semibold text-blue-600 mb-1 flex items-center gap-1 text-sm">
                        <span>🎓</span> Eğitim
                      </h4>
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">Bilgisayar Mühendisliği</p>
                        <p className="text-gray-500 text-xs">Boğaziçi Üniversitesi • 2014 - 2018</p>
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-1 text-sm">Yetenekler</h4>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3">
                  <h3 className="text-lg font-bold text-white text-center">Minimal Şablon</h3>
                  <p className="text-blue-100 text-center text-xs mt-1">Temiz ve sade tasarım</p>
                </div>
              </div>
            </div>

            {/* Modern Template Preview */}
            <div className="group relative h-full animate-slide-right animation-delay-800">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="p-4 flex-1">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-55 group-hover:scale-60 transition-transform duration-300 h-full">
                    <div className="flex h-full">
                      {/* Sidebar */}
                      <div className="bg-gradient-to-b from-orange-600 to-orange-800 text-white p-3 w-1/3">
                        {/* Profile Section */}
                        <div className="text-center mb-3">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">👤</span>
                          </div>
                          <h3 className="font-bold text-sm mb-1">Ayşe Demir</h3>
                        </div>

                        {/* Contact Info */}
                        <div className="mb-3">
                          <h4 className="font-semibold mb-1 text-xs border-b border-white border-opacity-30 pb-1">
                            📞 İletişim
                          </h4>
                          <div className="text-xs space-y-1">
                            <div className="flex items-center gap-1">
                              <span>📧</span>
                              <span className="text-xs">ayse@email.com</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>📱</span>
                              <span className="text-xs">+90 555 987 6543</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>📍</span>
                              <span className="text-xs">İstanbul, Türkiye</span>
                            </div>
                          </div>
                        </div>

                        {/* Skills Preview */}
                        <div>
                          <h4 className="font-semibold mb-1 text-xs border-b border-white border-opacity-30 pb-1">
                            💡 Yetenekler
                          </h4>
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between items-center">
                              <span>Figma</span>
                              <div className="w-6 bg-white bg-opacity-20 rounded-full h-1">
                                <div className="bg-white h-1 rounded-full w-5/6"></div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Adobe XD</span>
                              <div className="w-6 bg-white bg-opacity-20 rounded-full h-1">
                                <div className="bg-white h-1 rounded-full w-4/6"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-3">
                        <div className="space-y-2">
                          {/* Experience */}
                          <div className="border-l-3 border-orange-400 pl-2">
                            <h4 className="font-semibold text-orange-600 text-xs mb-1">💼 DENEYIM</h4>
                            <p className="text-xs font-medium text-gray-800">Senior UX Designer</p>
                            <p className="text-xs text-gray-500">XYZ Studio • 2019 - Günümüz</p>
                          </div>
                          
                          {/* Education */}
                          <div className="border-l-3 border-orange-400 pl-2">
                            <h4 className="font-semibold text-orange-600 text-xs mb-1">🎓 EĞİTİM</h4>
                            <p className="text-xs font-medium text-gray-800">Grafik Tasarım</p>
                            <p className="text-xs text-gray-500">İTÜ • 2015 - 2019</p>
                          </div>
                          
                          {/* Summary */}
                          <div className="border-l-3 border-orange-400 pl-2">
                            <h4 className="font-semibold text-orange-600 text-xs mb-1">📝 ÖZET</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">
                              Kullanıcı odaklı tasarım deneyimi ile...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-3">
                  <h3 className="text-lg font-bold text-white text-center">Modern Şablon</h3>
                  <p className="text-orange-100 text-center text-xs mt-1">Renkli ve dinamik görünüm</p>
                </div>
              </div>
            </div>

            {/* Professional Template Preview */}
            <div className="group relative h-full animate-slide-right animation-delay-1000">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-orange-200 dark:border-gray-700 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="p-4 flex-1">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-55 group-hover:scale-60 transition-transform duration-300 h-full">
                    {/* Header */}
                    <div className="bg-indigo-50 border-b-2 border-indigo-200 p-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-500 text-lg">👤</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-indigo-700 text-sm mb-1">Mehmet Can</h3>
                          
                          {/* Contact Info - Professional grid layout */}
                          <div className="grid grid-cols-2 gap-1 text-gray-600 text-xs">
                            <div className="flex items-center gap-1">
                              <span>📧</span>
                              <span>mehmet@email.com</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>📱</span>
                              <span>+90 555 111 2233</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>📍</span>
                              <span>Ankara, Türkiye</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>🔗</span>
                              <span>linkedin.com/mehmet</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      {/* Summary */}
                      <div className="mb-2">
                        <div className="bg-indigo-50 border-l-4 border-indigo-200 pl-2 py-1 mb-1">
                          <h4 className="font-bold text-indigo-700 text-xs flex items-center gap-1">
                            <span>👤</span> Özet
                          </h4>
                        </div>
                        <p className="text-xs text-gray-700 ml-2 leading-relaxed">
                          8+ yıl deneyimli proje yöneticisi. Agile metodolojileri ve ekip liderliği konularında uzman...
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="mb-2">
                        <div className="bg-indigo-50 border-l-4 border-indigo-200 pl-2 py-1 mb-1">
                          <h4 className="font-bold text-indigo-700 text-xs flex items-center gap-1">
                            <span>💼</span> İş Deneyimi
                          </h4>
                        </div>
                        <div className="ml-2 border-l-2 border-gray-300 pl-2 relative">
                          <div className="absolute w-2 h-2 bg-white border-2 border-gray-400 rounded-full -left-1.5 top-0.5"></div>
                          <div className="text-xs text-gray-600">
                            <p className="font-semibold text-indigo-700">Senior PM</p>
                            <p className="text-gray-600 font-medium">DEF Corp • 2018 - Günümüz</p>
                            <p className="text-xs mt-0.5">Çok uluslu ekipler yönetimi ve proje koordinasyonu</p>
                          </div>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="mb-2">
                        <div className="bg-indigo-50 border-l-4 border-indigo-200 pl-2 py-1 mb-1">
                          <h4 className="font-bold text-indigo-700 text-xs flex items-center gap-1">
                            <span>🎓</span> Eğitim
                          </h4>
                        </div>
                        <div className="ml-2 border-l-2 border-gray-300 pl-2 relative">
                          <div className="absolute w-2 h-2 bg-white border-2 border-gray-400 rounded-full -left-1.5 top-0.5"></div>
                          <div className="text-xs text-gray-600">
                            <p className="font-semibold text-indigo-700">Endüstri Müh.</p>
                            <p className="text-gray-600">ODTÜ • 2012 - 2016</p>
                          </div>
                        </div>
                      </div>

                      {/* Certificates */}
                      <div>
                        <div className="bg-indigo-50 border-l-4 border-indigo-200 pl-2 py-1 mb-1">
                          <h4 className="font-bold text-indigo-700 text-xs flex items-center gap-1">
                            <span>🏆</span> Sertifikalar
                          </h4>
                        </div>
                        <div className="ml-2 text-xs text-gray-600">
                          <p className="font-medium">PMP Certification</p>
                          <p className="text-gray-500">PMI • 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-3">
                  <h3 className="text-lg font-bold text-white text-center">Professional Şablon</h3>
                  <p className="text-indigo-100 text-center text-xs mt-1">Kurumsal ve resmi görünüm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div id="nasil-calisir" className="max-w-6xl mx-auto">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-12 transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Nasıl Çalışır?
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="relative text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-orange-500/30">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Bilgilerinizi Girin</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    Kişisel bilgiler, deneyim ve becerilerinizi kolay formlar ile ekleyin
                  </p>
                </div>
                
                <div className="relative text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-amber-500/30">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse animation-delay-200"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Şablon Seçin</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    Beğendiğiniz tasarımı seçin ve gerçek zamanlı önizlemeyi görün
                  </p>
                </div>
                
                <div className="relative text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-yellow-500/30">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">PDF İndirin</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    Hazır CV'nizi PDF formatında anında indirin ve kullanmaya başlayın
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="hakkinda" className="mt-20">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl opacity-70 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-amber-100/30 dark:from-gray-700/30 dark:to-gray-600/30 rounded-3xl transition-colors duration-300"></div>
            
            <div className="relative p-12 text-center">
              {/* Header */}
              <div className="mb-12 animate-fade-in">
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-lg opacity-75"></div>
                    <div className="relative bg-gradient-to-r from-orange-500 to-amber-600 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                  Hakkında
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 transition-colors duration-300">
                  Bu CV oluşturucu, <span className="text-orange-600 dark:text-orange-400 font-semibold">Limnio</span> markası altında 
                  geliştirilen ücretsiz bir web uygulamasıdır. Tamamen tarayıcınızda çalışır ve 
                  verileriniz güvende kalır.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 animate-slide-up animation-delay-200">
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-2 text-lg transition-colors duration-300">Tamamen Ücretsiz</h3>
                  <p className="text-sm text-green-600 dark:text-green-300 leading-relaxed transition-colors duration-300">Hiçbir ödeme yapmadan kullanın, sınırsız CV oluşturun</p>
                </div>
                
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2 text-lg transition-colors duration-300">Açık Kaynak</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed transition-colors duration-300">Kaynak kodu herkese açık, şeffaf geliştirme</p>
                </div>
                
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2 text-lg transition-colors duration-300">Veri Güvenliği</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-300 leading-relaxed transition-colors duration-300">Verileriniz cihazınızda kalır, sunucuya gönderilmez</p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in animation-delay-400">
                <a
                  href="https://wupani.github.io/limnio-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <ExternalLink className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-orange-700 dark:text-orange-300 transition-colors duration-300">Limnio Web Sitesi</span>
                </a>
                <a
                  href="https://github.com/wupani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">GitHub Profili</span>
                </a>
                <a
                  href="mailto:wupaniyazilim@gmail.com"
                  className="group inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-amber-700 dark:text-amber-300 transition-colors duration-300">İletişim</span>
                </a>
              </div>

              {/* Footer */}
              <div className="border-t border-orange-200/50 dark:border-gray-600/50 pt-8 animate-fade-in animation-delay-600 transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  © 2025 <span className="text-orange-600 dark:text-orange-400 font-semibold">Limnio</span> - Emre Akyol. Tüm hakları saklıdır.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3 transition-colors duration-300">
                  Basit fikirlerle güçlü deneyimler
                </p>
                <div className="flex justify-center items-center gap-2 text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">
                  <Github className="w-3 h-3" />
                  <span>GitHub Pages ile barındırılır</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 