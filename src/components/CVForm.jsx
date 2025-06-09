import React, { useState } from 'react';
import { Plus, Trash2, User, Briefcase, GraduationCap, Award, Globe, FileText, ChevronLeft, ChevronRight, Check, Camera, X, Heart, BookOpen, Zap } from 'lucide-react';

const CVForm = ({ cvData, setCvData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeOptionalFields, setActiveOptionalFields] = useState({
    birthDate: false,
    birthPlace: false,
    drivingLicense: false,
    gender: false,
    nationality: false,
    maritalStatus: true, // Varsayılan olarak seçili (görselde seçili gözüküyor)
    website: false,
    linkedin: false,
    customField: false
  });

  const steps = [
    { id: 1, title: 'Kişisel Bilgiler', icon: User, color: 'orange' },
    { id: 2, title: 'Özet', icon: FileText, color: 'amber' },
    { id: 3, title: 'İş Deneyimi', icon: Briefcase, color: 'yellow' },
    { id: 4, title: 'Eğitim', icon: GraduationCap, color: 'lime' },
    { id: 5, title: 'Yetenekler', icon: Award, color: 'emerald' },
    { id: 6, title: 'Diller', icon: Globe, color: 'cyan' },
    { id: 7, title: 'Hobiler', icon: Heart, color: 'pink' },
    { id: 8, title: 'Sertifikalar', icon: BookOpen, color: 'violet' },
    { id: 9, title: 'Kurslar', icon: Zap, color: 'indigo' }
  ];

  const drivingLicenseOptions = [
    { value: 'A', label: 'A Sınıfı' },
    { value: 'A1', label: 'A1 Sınıfı' },
    { value: 'A2', label: 'A2 Sınıfı' },
    { value: 'B', label: 'B Sınıfı' },
    { value: 'C', label: 'C Sınıfı' },
    { value: 'D', label: 'D Sınıfı' },
    { value: 'E', label: 'E Sınıfı' },
    { value: 'F', label: 'F Sınıfı' },
    { value: 'G', label: 'G Sınıfı' }
  ];

  const updatePersonalInfo = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateDrivingLicenses = (licenseType) => {
    const currentLicenses = cvData.personalInfo.drivingLicense ? cvData.personalInfo.drivingLicense.split(', ') : [];
    let newLicenses;
    
    if (currentLicenses.includes(licenseType)) {
      newLicenses = currentLicenses.filter(license => license !== licenseType);
    } else {
      newLicenses = [...currentLicenses, licenseType];
    }
    
    updatePersonalInfo('drivingLicense', newLicenses.join(', '));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updatePersonalInfo('photo', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    updatePersonalInfo('photo', '');
  };

  const toggleOptionalField = (field) => {
    setActiveOptionalFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    
    // Eğer alan devre dışı bırakılıyorsa değeri temizle
    if (activeOptionalFields[field]) {
      updatePersonalInfo(field, '');
    }
  };

  const updateSummary = (value) => {
    setCvData(prev => ({ ...prev, summary: value }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now(),
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        current: false
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now(), name: '', level: 'intermediate' }]
    }));
  };

  const updateSkill = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (id) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const addLanguage = () => {
    setCvData(prev => ({
      ...prev,
      languages: [...prev.languages, { id: Date.now(), name: '', level: 'intermediate' }]
    }));
  };

  const updateLanguage = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.map(lang => 
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (id) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  const addHobby = () => {
    setCvData(prev => ({
      ...prev,
      hobbies: [...prev.hobbies, { id: Date.now(), name: '' }]
    }));
  };

  const updateHobby = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      hobbies: prev.hobbies.map(hobby => 
        hobby.id === id ? { ...hobby, [field]: value } : hobby
      )
    }));
  };

  const removeHobby = (id) => {
    setCvData(prev => ({
      ...prev,
      hobbies: prev.hobbies.filter(hobby => hobby.id !== id)
    }));
  };

  // Örnek ekleme fonksiyonları
  const addExampleSkills = () => {
    const exampleSkills = [
      { id: Date.now(), name: 'Takım Çalışması', level: 'expert' },
      { id: Date.now() + 1, name: 'Liderlik', level: 'advanced' },
      { id: Date.now() + 2, name: 'İletişim', level: 'expert' },
      { id: Date.now() + 3, name: 'Problem Çözme', level: 'advanced' },
      { id: Date.now() + 4, name: 'Zaman Yönetimi', level: 'advanced' },
      { id: Date.now() + 5, name: 'Proje Yönetimi', level: 'intermediate' },
      { id: Date.now() + 6, name: 'Analitik Düşünce', level: 'advanced' },
      { id: Date.now() + 7, name: 'Müşteri Odaklılık', level: 'expert' }
    ];
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, ...exampleSkills]
    }));
  };

  const addExampleLanguages = () => {
    const exampleLanguages = [
      { id: Date.now(), name: 'Türkçe', level: 'native' },
      { id: Date.now() + 1, name: 'İngilizce', level: 'advanced' },
      { id: Date.now() + 2, name: 'Almanca', level: 'intermediate' }
    ];
    setCvData(prev => ({
      ...prev,
      languages: [...prev.languages, ...exampleLanguages]
    }));
  };

  const addExampleHobbies = () => {
    const exampleHobbies = [
      { id: Date.now(), name: 'Kitap Okuma' },
      { id: Date.now() + 1, name: 'Fotoğrafçılık' },
      { id: Date.now() + 2, name: 'Yüzme' },
      { id: Date.now() + 3, name: 'Müzik Dinleme' },
      { id: Date.now() + 4, name: 'Seyahat' }
    ];
    setCvData(prev => ({
      ...prev,
      hobbies: [...prev.hobbies, ...exampleHobbies]
    }));
  };

  // Sertifikalar CRUD fonksiyonları
  const addCertificate = () => {
    setCvData(prev => ({
      ...prev,
      certificates: [...prev.certificates, {
        id: Date.now(),
        name: '',
        institution: '',
        date: '',
        credentialId: '',
        url: ''
      }]
    }));
  };

  const updateCertificate = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      certificates: prev.certificates.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertificate = (id) => {
    setCvData(prev => ({
      ...prev,
      certificates: prev.certificates.filter(cert => cert.id !== id)
    }));
  };

  const addExampleCertificates = () => {
    const exampleCertificates = [
      { 
        id: Date.now(), 
        name: 'Proje Yönetimi Sertifikası', 
        institution: 'PMI', 
        date: '2023-06',
        credentialId: 'PMP-123456',
        url: ''
      },
      { 
        id: Date.now() + 1, 
        name: 'İngilizce Dil Sertifikası', 
        institution: 'TOEFL', 
        date: '2023-08',
        credentialId: 'TOEFL-789012',
        url: ''
      },
      { 
        id: Date.now() + 2, 
        name: 'Dijital Pazarlama', 
        institution: 'Google', 
        date: '2023-10',
        credentialId: 'GOOGLE-345678',
        url: ''
      }
    ];
    setCvData(prev => ({
      ...prev,
      certificates: [...prev.certificates, ...exampleCertificates]
    }));
  };

  const addCourse = () => {
    setCvData(prev => ({
      ...prev,
      courses: [...(prev.courses || []), {
        id: Date.now(),
        name: '',
        institution: '',
        date: '',
        duration: '',
        description: ''
      }]
    }));
  };

  const updateCourse = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      courses: (prev.courses || []).map(course => 
        course.id === id ? { ...course, [field]: value } : course
      )
    }));
  };

  const removeCourse = (id) => {
    setCvData(prev => ({
      ...prev,
      courses: (prev.courses || []).filter(course => course.id !== id)
    }));
  };

  const addExampleCourses = () => {
    const exampleCourses = [
      {
        id: Date.now() + 1,
        name: 'React ve Redux ile Modern Web Geliştirme',
        institution: 'Udemy',
        date: '2024-01',
        duration: '40 saat',
        description: 'Modern React hooks, Redux toolkit ve TypeScript kullanımı'
      },
      {
        id: Date.now() + 2,
        name: 'AWS Cloud Practitioner',
        institution: 'Amazon Web Services',
        date: '2023-11',
        duration: '30 saat',
        description: 'Bulut bilişim temelleri ve AWS servisleri'
      },
      {
        id: Date.now() + 3,
        name: 'Digital Marketing Fundamentals',
        institution: 'Google Digital Garage',
        date: '2023-09',
        duration: '20 saat',
        description: 'SEO, SEM, sosyal medya pazarlama ve analitik'
      }
    ];
    
    setCvData(prev => ({
      ...prev,
      courses: [...(prev.courses || []), ...exampleCourses]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepId) => {
    setCurrentStep(stepId);
  };

  // Check if personal info is complete
  const isPersonalInfoComplete = () => {
    const { fullName, email, phone, location } = cvData.personalInfo;
    return fullName.trim() && email.trim() && phone.trim() && location.trim();
  };

  // Check if summary is complete
  const isSummaryComplete = () => {
    return cvData.summary.trim().length > 0;
  };

  // Check if experience is complete
  const isExperienceComplete = () => {
    return cvData.experience.length > 0 && cvData.experience.every(exp => 
      exp.company.trim() && exp.position.trim() && exp.startDate
    );
  };

  // Check if education is complete
  const isEducationComplete = () => {
    return cvData.education.length > 0 && cvData.education.every(edu => 
      edu.school.trim() && edu.degree.trim()
    );
  };

  // Check if skills are complete
  const isSkillsComplete = () => {
    return cvData.skills.length > 0 && cvData.skills.every(skill => skill.name.trim());
  };

  // Check if languages are complete
  const isLanguagesComplete = () => {
    return cvData.languages.length > 0 && cvData.languages.every(lang => lang.name.trim());
  };

  // Check if hobbies are complete
  const isHobbiesComplete = () => {
    return cvData.hobbies.length > 0 && cvData.hobbies.every(hobby => hobby.name.trim());
  };

  // Check if certificates are complete
  const isCertificatesComplete = () => {
    return cvData.certificates.length > 0 && cvData.certificates.every(cert => cert.name.trim() && cert.institution.trim());
  };

  const isCoursesComplete = () => {
    return true; // Kurslar opsiyonel
  };

  const getStepStatus = (stepId) => {
    switch(stepId) {
      case 1: return isPersonalInfoComplete();
      case 2: return isSummaryComplete();
      case 3: return isExperienceComplete();
      case 4: return isEducationComplete();
      case 5: return isSkillsComplete();
      case 6: return isLanguagesComplete();
      case 7: return isHobbiesComplete();
      case 8: return isCertificatesComplete();
      case 9: return isCoursesComplete();
      default: return false;
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Kişisel Bilgiler</h3>
        <p className="text-gray-600 dark:text-gray-400">Temel bilgilerinizi girin. Bu bilgiler CV'nizin en üstünde yer alacak.</p>
      </div>

      {/* Fotoğraf Ekleme Alanı */}
      <div className="flex flex-col items-center mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Profil Fotoğrafı (Opsiyonel)</h4>
        
        {cvData.personalInfo.photo ? (
          <div className="relative group">
            <img 
              src={cvData.personalInfo.photo} 
              alt="Profil Fotoğrafı" 
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-200 dark:border-gray-600 shadow-lg"
            />
            <button
              onClick={removePhoto}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className="cursor-pointer group">
            <div className="w-32 h-32 border-2 border-dashed border-orange-300 dark:border-gray-600 rounded-full flex flex-col items-center justify-center hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <Camera className="w-8 h-8 text-orange-400 dark:text-gray-500 mb-2" />
              <span className="text-sm text-orange-600 dark:text-gray-400 text-center px-2">Fotoğraf<br/>Ekle</span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        )}
        
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2 max-w-xs">
          JPG, PNG veya GIF formatında, maksimum 5MB boyutunda fotoğraf yükleyebilirsiniz.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Ahmet Yılmaz *"
            value={cvData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            className="light-input rounded-lg px-3 py-2 w-full"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            📝 Tam adınızı ve soyadınızı yazın
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="ahmet.yilmaz@gmail.com *"
            value={cvData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="light-input rounded-lg px-3 py-2 w-full"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            📧 İşverenler sizinle bu e-posta ile iletişime geçecek
          </p>
        </div>
        <div>
          <input
            type="tel"
            placeholder="+90 555 123 45 67 *"
            value={cvData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="light-input rounded-lg px-3 py-2 w-full"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            📞 Ülke kodu ile birlikte telefon numaranızı girin
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="İstanbul, Türkiye *"
            value={cvData.personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            className="light-input rounded-lg px-3 py-2 w-full"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            📍 Şehir ve ülke bilginizi yazın (örn: Ankara, Türkiye)
          </p>
        </div>
      </div>

      {/* Ek Bilgi Alanları Seçiciler */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Ek Bilgi Alanları (Opsiyonel)</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
          {[
            { key: 'birthDate', label: 'Doğum tarihi' },
            { key: 'birthPlace', label: 'Doğum yeri' },
            { key: 'drivingLicense', label: 'Ehliyet' },
            { key: 'gender', label: 'Cinsiyet' },
            { key: 'nationality', label: 'Uyruk' },
            { key: 'maritalStatus', label: 'Medeni durum' },
            { key: 'website', label: 'İnternet sitesi' },
            { key: 'linkedin', label: 'LinkedIn' },
            { key: 'customField', label: 'Özel alan' }
          ].map((field) => (
            <button
              key={field.key}
              onClick={() => toggleOptionalField(field.key)}
              className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                activeOptionalFields[field.key]
                  ? 'bg-purple-100 border-purple-300 text-purple-700 dark:bg-purple-900/30 dark:border-purple-700 dark:text-purple-300'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600'
              }`}
            >
              + {field.label}
            </button>
          ))}
        </div>

        {/* Aktif Ek Alanlar */}
        {Object.entries(activeOptionalFields).some(([_, active]) => active) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {activeOptionalFields.birthDate && (
              <div>
                <input
                  type="date"
                  placeholder="Doğum Tarihi"
                  value={cvData.personalInfo.birthDate}
                  onChange={(e) => updatePersonalInfo('birthDate', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  🎂 Doğum tarihiniz yaş hesabı için kullanılabilir
                </p>
              </div>
            )}
            {activeOptionalFields.birthPlace && (
              <div>
                <input
                  type="text"
                  placeholder="İstanbul, Türkiye"
                  value={cvData.personalInfo.birthPlace}
                  onChange={(e) => updatePersonalInfo('birthPlace', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  🏙️ Doğduğunuz şehir ve ülke (örn: Ankara, Türkiye)
                </p>
              </div>
            )}
            {activeOptionalFields.drivingLicense && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ehliyet Sınıfları
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {drivingLicenseOptions.map((license) => {
                    const isSelected = cvData.personalInfo.drivingLicense?.split(', ').includes(license.value) || false;
                    return (
                      <button
                        key={license.value}
                        type="button"
                        onClick={() => updateDrivingLicenses(license.value)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600'
                        }`}
                      >
                        {license.label}
                      </button>
                    );
                  })}
                </div>
                {cvData.personalInfo.drivingLicense && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Seçili: {cvData.personalInfo.drivingLicense}
                  </p>
                )}
              </div>
            )}
            {activeOptionalFields.gender && (
              <div>
                <select
                  value={cvData.personalInfo.gender}
                  onChange={(e) => updatePersonalInfo('gender', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                >
                  <option value="">Cinsiyet seçin</option>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Belirtmek istemiyorum">Belirtmek istemiyorum</option>
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  👤 Bazı sektörlerde cinsiyet bilgisi önemli olabilir
                </p>
              </div>
            )}
            {activeOptionalFields.nationality && (
              <div>
                <input
                  type="text"
                  placeholder="Türkiye Cumhuriyeti"
                  value={cvData.personalInfo.nationality}
                  onChange={(e) => updatePersonalInfo('nationality', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  🏛️ Vatandaşlığınızın bulunduğu ülke adını yazın
                </p>
              </div>
            )}
            {activeOptionalFields.maritalStatus && (
              <div>
                <select
                  value={cvData.personalInfo.maritalStatus}
                  onChange={(e) => updatePersonalInfo('maritalStatus', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                >
                  <option value="">Medeni durum seçin</option>
                  <option value="Bekar">Bekar</option>
                  <option value="Evli">Evli</option>
                  <option value="Boşanmış">Boşanmış</option>
                  <option value="Dul">Dul</option>
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  💑 Medeni durumunuz, bazı pozisyonlar için önemli olabilir
                </p>
              </div>
            )}
            {activeOptionalFields.website && (
              <div>
                <input
                  type="url"
                  placeholder="https://www.ahmetyilmaz.com"
                  value={cvData.personalInfo.website}
                  onChange={(e) => updatePersonalInfo('website', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  🌐 Kişisel web siteniz veya portföy linkiniz
                </p>
              </div>
            )}
            {activeOptionalFields.linkedin && (
              <div>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/ahmet-yilmaz"
                  value={cvData.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  💼 LinkedIn profil linkinizi tam olarak yazın
                </p>
              </div>
            )}
            {activeOptionalFields.customField && (
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Referans: Mehmet Özkan - Proje Yöneticisi"
                  value={cvData.personalInfo.customField}
                  onChange={(e) => updatePersonalInfo('customField', e.target.value)}
                  className="light-input rounded-lg px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  ✏️ Eklemek istediğiniz özel bilgi (referans, sertifika no vb.)
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">* Zorunlu alanlar</p>
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Özet</h3>
        <p className="text-gray-600 dark:text-gray-400">Kendinizi ve profesyonel hedeflerinizi kısaca tanıtın. Bu bölüm işverenlerin ilk gördüğü kısımdır.</p>
      </div>
      
      <div>
        <textarea
          placeholder="Örnek: 5 yıllık yazılım geliştirme deneyimim olan, React ve JavaScript konularında uzman bir Front-end Developer'ım. Kullanıcı dostu, performanslı web uygulamaları geliştirme konusunda tutkuluyum. Takım çalışmasına yatkın, sürekli öğrenmeye açık ve problem çözme odaklı bir yaklaşıma sahibim. Modern teknolojileri takip ederek projelerimde en güncel çözümleri uygulamayı hedefliyorum."
          value={cvData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={7}
          className="w-full light-textarea rounded-lg px-3 py-2"
          maxLength={600}
        />
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span>📝 {cvData.summary.length}/600 karakter • Yaklaşık {Math.ceil(cvData.summary.split(' ').filter(word => word.length > 0).length)} kelime</span>
          <span className={cvData.summary.length < 100 ? 'text-red-500' : cvData.summary.length > 500 ? 'text-yellow-500' : 'text-green-500'}>
            {cvData.summary.length < 100 ? 'Çok kısa' : cvData.summary.length > 500 ? 'Biraz uzun' : 'İdeal uzunluk'}
          </span>
        </div>
      </div>
      
      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
        <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">💡 Etkili özet yazma rehberi:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700 dark:text-amber-300">
          <div>
            <h5 className="font-medium mb-1">✅ Dahil edilmesi gerekenler:</h5>
            <ul className="space-y-1">
              <li>• Deneyim süreniz (örn: 5 yıllık)</li>
              <li>• Ana uzmanlık alanlarınız</li>
              <li>• Önemli başarılarınız</li>
              <li>• Kişilik özellikleriniz</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-1">❌ Kaçınılması gerekenler:</h5>
            <ul className="space-y-1">
              <li>• Çok genel ifadeler</li>
              <li>• Kişisel hayat detayları</li>
              <li>• Abartılı övgüler</li>
              <li>• Çok uzun paragraflar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">İş Deneyimi</h3>
        <p className="text-gray-600 dark:text-gray-400">Çalıştığınız şirketleri ve pozisyonlarınızı ekleyin.</p>
      </div>

      <div className="text-center">
        <button
          onClick={addExperience}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          İş Deneyimi Ekle
        </button>
      </div>
      
      {cvData.experience.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-orange-200 dark:border-gray-600 rounded-xl bg-orange-50/50 dark:bg-gray-800/50">
          <Briefcase className="w-12 h-12 text-orange-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz iş deneyimi eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.experience.map((exp, index) => (
            <div key={exp.id} className="light-card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Deneyim #{index + 1}</h4>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Teknoloji A.Ş. *"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🏢 Çalıştığınız şirketin tam adını yazın
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Yazılım Geliştirici *"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    👔 Görev yaptığınız pozisyonun adı
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="month"
                    placeholder="Başlangıç Tarihi *"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📅 İşe başladığınız ay ve yıl
                  </p>
                </div>
                <div>
                  <input
                    type="month"
                    placeholder="Bitiş Tarihi"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                    className="light-input rounded px-3 py-2 w-full disabled:opacity-50"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📅 {exp.current ? 'Halen çalışıyorsunuz' : 'İşten ayrıldığınız ay ve yıl'}
                  </p>
                </div>
              </div>
              
              <label className="light-label mb-4">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                  className="light-checkbox"
                />
                <span className="text-sm">Halen çalışıyorum</span>
              </label>
              
              <div>
                <textarea
                  placeholder="• React ve TypeScript kullanarak modern web uygulamaları geliştirdim&#10;• 5 kişilik geliştirici ekibinde çalışarak proje yönetimi deneyimi kazandım&#10;• Kullanıcı deneyimini %30 artıran yeni özellikler tasarladım&#10;• Code review süreçlerinde aktif rol aldım ve takım arkadaşlarına mentorluk yaptım"
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  rows={4}
                  className="w-full light-textarea rounded px-3 py-2"
                  maxLength={800}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>💼 Ana görevlerinizi ve başarılarınızı • ile ayırarak listeleyin</span>
                  <span>{exp.description.length}/800</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Eğitim</h3>
        <p className="text-gray-600 dark:text-gray-400">Eğitim geçmişinizi ve aldığınız dereceleri ekleyin.</p>
      </div>

      <div className="text-center">
        <button
          onClick={addEducation}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Eğitim Ekle
        </button>
      </div>
      
      {cvData.education.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-lime-200 dark:border-gray-600 rounded-xl bg-lime-50/50 dark:bg-gray-800/50">
          <GraduationCap className="w-12 h-12 text-lime-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz eğitim bilgisi eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={edu.id} className="light-card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Eğitim #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="İstanbul Teknik Üniversitesi *"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🏫 Okuduğunuz okul/üniversitenin tam adı
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Lisans Derecesi *"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🎓 Aldığınız derece (Lise, Önlisans, Lisans, Yüksek Lisans vb.)
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Bilgisayar Mühendisliği"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  className="w-full light-input rounded px-3 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  📚 Okuduğunuz bölüm veya alan (opsiyonel)
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="month"
                  placeholder="Başlangıç Tarihi"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="light-input rounded px-3 py-2"
                />
                <input
                  type="month"
                  placeholder="Bitiş Tarihi"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  disabled={edu.current}
                  className="light-input rounded px-3 py-2 disabled:opacity-50"
                />
              </div>
              
              <label className="light-label">
                <input
                  type="checkbox"
                  checked={edu.current}
                  onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                  className="light-checkbox"
                />
                <span className="text-sm">Halen devam ediyorum</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Yetenekler</h3>
        <p className="text-gray-600 dark:text-gray-400">Sahip olduğunuz teknik ve kişisel yetenekleri ekleyin.</p>
      </div>

      <div className="text-center space-y-3">
        <div className="flex justify-center gap-3">
          <button
            onClick={addSkill}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Yetenek Ekle
          </button>
          <button
            onClick={addExampleSkills}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            ✨ Örnek Yetenekler
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 İpucu: "Örnek Yetenekler" butonuyla hızlıca başlayabilirsiniz
        </p>
      </div>
      
      {cvData.skills.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-emerald-200 dark:border-gray-600 rounded-xl bg-emerald-50/50 dark:bg-gray-800/50">
          <Award className="w-12 h-12 text-emerald-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz yetenek eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cvData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center gap-4 light-card">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="React.js - TypeScript - Problem Çözme"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="w-full light-input rounded px-3 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">
                  💡 Teknik yetenekler (programlama dilleri, araçlar) veya soft skills (liderlik, iletişim)
                </p>
              </div>
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                className="light-select rounded px-3 py-2 min-w-[120px]"
              >
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta</option>
                <option value="advanced">İleri</option>
                <option value="expert">Uzman</option>
              </select>
              <button
                onClick={() => removeSkill(skill.id)}
                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200 flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderLanguages = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Diller</h3>
        <p className="text-gray-600 dark:text-gray-400">Konuştuğunuz dilleri ve seviyelerini ekleyin.</p>
      </div>

      <div className="text-center space-y-3">
        <div className="flex justify-center gap-3">
          <button
            onClick={addLanguage}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Dil Ekle
          </button>
          <button
            onClick={addExampleLanguages}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            🌍 Örnek Diller
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 İpucu: "Örnek Diller" butonuyla hızlıca başlayabilirsiniz
        </p>
      </div>
      
      {cvData.languages.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-cyan-200 dark:border-gray-600 rounded-xl bg-cyan-50/50 dark:bg-gray-800/50">
          <Globe className="w-12 h-12 text-cyan-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz dil eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cvData.languages.map((language, index) => (
            <div key={language.id} className="flex items-center gap-4 light-card">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="İngilizce - Almanca - Fransızca"
                  value={language.name}
                  onChange={(e) => updateLanguage(language.id, 'name', e.target.value)}
                  className="w-full light-input rounded px-3 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">
                  🌍 Konuşabildiğiniz dilleri yazın (ana dilinizi de ekleyebilirsiniz)
                </p>
              </div>
              <select
                value={language.level}
                onChange={(e) => updateLanguage(language.id, 'level', e.target.value)}
                className="light-select rounded px-3 py-2 min-w-[120px]"
              >
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta</option>
                <option value="advanced">İleri</option>
                <option value="native">Ana dil</option>
              </select>
              <button
                onClick={() => removeLanguage(language.id)}
                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200 flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderHobbies = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Hobiler</h3>
        <p className="text-gray-600 dark:text-gray-400">İlgi alanlarınızı ve hobilerinizi ekleyin.</p>
      </div>

      <div className="text-center space-y-3">
        <div className="flex justify-center gap-3">
          <button
            onClick={addHobby}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Hobi Ekle
          </button>
          <button
            onClick={addExampleHobbies}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            💝 Örnek Hobiler
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 İpucu: "Örnek Hobiler" butonuyla hızlıca başlayabilirsiniz
        </p>
      </div>
      
      {cvData.hobbies.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-pink-200 dark:border-gray-600 rounded-xl bg-pink-50/50 dark:bg-gray-800/50">
          <Heart className="w-12 h-12 text-pink-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz hobi eklenmemiş</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvData.hobbies.map((hobby, index) => (
            <div key={hobby.id} className="flex items-center gap-4 light-card">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Kitap Okuma - Fotoğrafçılık - Seyahat"
                  value={hobby.name}
                  onChange={(e) => updateHobby(hobby.id, 'name', e.target.value)}
                  className="w-full light-input rounded px-3 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">
                  ❤️ İlgilendiğiniz konular ve hobileriniz (kişiliğinizi yansıtır)
                </p>
              </div>
              <button
                onClick={() => removeHobby(hobby.id)}
                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200 flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Kurslar ve Sertifikalar</h3>
        <p className="text-gray-600 dark:text-gray-400">Aldığınız sertifikaları, kursları ve eğitimleri ekleyin.</p>
      </div>

      <div className="text-center space-y-3">
        <div className="flex justify-center gap-3">
          <button
            onClick={addCertificate}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Sertifika Ekle
          </button>
          <button
            onClick={addExampleCertificates}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            🏆 Örnek Sertifikalar
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 İpucu: "Örnek Sertifikalar" butonuyla hızlıca başlayabilirsiniz
        </p>
      </div>
      
      {cvData.certificates.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-violet-200 dark:border-gray-600 rounded-xl bg-violet-50/50 dark:bg-gray-800/50">
          <BookOpen className="w-12 h-12 text-violet-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz sertifika eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.certificates.map((certificate, index) => (
            <div key={certificate.id} className="light-card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Sertifika #{index + 1}</h4>
                <button
                  onClick={() => removeCertificate(certificate.id)}
                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="AWS Certified Cloud Practitioner *"
                    value={certificate.name}
                    onChange={(e) => updateCertificate(certificate.id, 'name', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🏆 Aldığınız sertifikanın tam adı
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Amazon Web Services (AWS) *"
                    value={certificate.institution}
                    onChange={(e) => updateCertificate(certificate.id, 'institution', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🏢 Sertifikayı veren kurum veya kuruluş
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="month"
                    placeholder="Alınma Tarihi"
                    value={certificate.date}
                    onChange={(e) => updateCertificate(certificate.id, 'date', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📅 Sertifikayı aldığınız ay ve yıl
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="AWS-CLF-C01-12345"
                    value={certificate.credentialId}
                    onChange={(e) => updateCertificate(certificate.id, 'credentialId', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🔑 Sertifika numarası veya kimlik kodu (varsa)
                  </p>
                </div>
              </div>
              
              <div>
                <input
                  type="url"
                  placeholder="https://www.credly.com/badges/xxxx-xxxx-xxxx"
                  value={certificate.url}
                  onChange={(e) => updateCertificate(certificate.id, 'url', e.target.value)}
                  className="w-full light-input rounded px-3 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  🔗 Sertifikayı doğrulayabileceğiniz web sitesi linki (opsiyonel)
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Kurslar</h3>
        <p className="text-gray-600 dark:text-gray-400">Aldığınız kursları ve eğitimleri ekleyin. Bu bilgiler öğrenme isteğinizi gösterir.</p>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <div className="flex gap-3">
          <button
            onClick={addCourse}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Kurs Ekle
          </button>
          <button
            onClick={addExampleCourses}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            ⚡ Örnek Kurslar
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 İpucu: "Örnek Kurslar" butonuyla hızlıca başlayabilirsiniz
        </p>
      </div>
      
      {(!cvData.courses || cvData.courses.length === 0) ? (
        <div className="text-center py-12 border-2 border-dashed border-indigo-200 dark:border-gray-600 rounded-xl bg-indigo-50/50 dark:bg-gray-800/50">
          <Zap className="w-12 h-12 text-indigo-300 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Henüz kurs eklenmemiş</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.courses.map((course, index) => (
            <div key={course.id} className="light-card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Kurs #{index + 1}</h4>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="React Native ile Mobil Uygulama Geliştirme *"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📚 Aldığınız kursun tam adı
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Udemy - BTK Akademi *"
                    value={course.institution}
                    onChange={(e) => updateCourse(course.id, 'institution', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    🏢 Kursu aldığınız kurum veya platform
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="month"
                    placeholder="Tamamlanma Tarihi"
                    value={course.date}
                    onChange={(e) => updateCourse(course.id, 'date', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📅 Kursu tamamladığınız ay ve yıl
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="40 saat - 6 hafta"
                    value={course.duration}
                    onChange={(e) => updateCourse(course.id, 'duration', e.target.value)}
                    className="light-input rounded px-3 py-2 w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    ⏱️ Kursun süresi (saat, hafta, gün)
                  </p>
                </div>
              </div>
              
              <div>
                <textarea
                  placeholder="React Native kullanarak hem iOS hem Android için mobil uygulama geliştirme teknikleri, API entegrasyonu, state management ve performans optimizasyonu konularında uzmanlaştım."
                  value={course.description}
                  onChange={(e) => updateCourse(course.id, 'description', e.target.value)}
                  className="w-full light-input rounded px-3 py-2 h-20 resize-none"
                  maxLength={300}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>💡 Kursta öğrendiklerinizi kısaca açıklayın</span>
                  <span>{course.description.length}/300</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderStepContent = () => {
    switch(currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderSummary();
      case 3: return renderExperience();
      case 4: return renderEducation();
      case 5: return renderSkills();
      case 6: return renderLanguages();
      case 7: return renderHobbies();
      case 8: return renderCertificates();
      case 9: return renderCourses();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Adım {currentStep} / {steps.length}
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {Math.round((currentStep / steps.length) * 100)}% Tamamlandı
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-orange-500 to-amber-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = getStepStatus(step.id);
            const isCurrent = currentStep === step.id;
            
            return (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isCurrent 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg' 
                    : isCompleted
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {isCompleted && !isCurrent ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Icon className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            currentStep === 1
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Önceki
        </button>

        <div className="text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentStep} / {steps.length}
          </span>
        </div>

        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            currentStep === steps.length
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:scale-105'
          }`}
        >
          Sonraki
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CVForm; 