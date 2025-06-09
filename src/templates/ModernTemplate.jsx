import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, User, Briefcase, GraduationCap, Award, Heart, BookOpen } from 'lucide-react';

const ModernTemplate = ({ cvData, selectedColor = 'orange', selectedFont = 'poppins' }) => {
  // Renk haritası
  const colorMap = {
    orange: { gradient: 'from-orange-600 to-orange-800', accent: 'text-orange-600', bg: 'bg-orange-600' },
    blue: { gradient: 'from-blue-600 to-blue-800', accent: 'text-blue-600', bg: 'bg-blue-600' },
    purple: { gradient: 'from-purple-600 to-purple-800', accent: 'text-purple-600', bg: 'bg-purple-600' },
    green: { gradient: 'from-green-600 to-green-800', accent: 'text-green-600', bg: 'bg-green-600' },
    red: { gradient: 'from-red-600 to-red-800', accent: 'text-red-600', bg: 'bg-red-600' },
    indigo: { gradient: 'from-indigo-600 to-indigo-800', accent: 'text-indigo-600', bg: 'bg-indigo-600' },
    pink: { gradient: 'from-pink-600 to-pink-800', accent: 'text-pink-600', bg: 'bg-pink-600' },
    teal: { gradient: 'from-teal-600 to-teal-800', accent: 'text-teal-600', bg: 'bg-teal-600' },
    black: { gradient: 'from-gray-800 to-gray-900', accent: 'text-gray-800', bg: 'bg-gray-800' }
  };
  
  // Font haritası
  const fontMap = {
    inter: 'Inter, sans-serif',
    poppins: 'Poppins, sans-serif',
    roboto: 'Roboto, sans-serif',
    opensans: 'Open Sans, sans-serif',
    lato: 'Lato, sans-serif',
    playfair: 'Playfair Display, serif',
    merriweather: 'Merriweather, serif',
    sourceserif: 'Source Serif Pro, serif'
  };
  
  const colors = colorMap[selectedColor] || colorMap.orange;
  const fontFamily = fontMap[selectedFont] || fontMap.poppins;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'short' });
  };

  const getLevelText = (level) => {
    const levels = {
      beginner: 'Başlangıç',
      intermediate: 'Orta',
      advanced: 'İleri',
      expert: 'Uzman',
      native: 'Ana Dil'
    };
    return levels[level] || 'Orta';
  };

  const getLevelColor = (level) => {
    const colors = {
      beginner: 'bg-red-100 text-red-700',
      intermediate: 'bg-yellow-100 text-yellow-700',
      advanced: 'bg-green-100 text-green-700',
      expert: 'bg-blue-100 text-blue-700',
      native: 'bg-purple-100 text-purple-700'
    };
    return colors[level] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div 
      className="bg-white w-full overflow-hidden" 
      style={{ 
        fontFamily, 
        height: '297mm', 
        minHeight: '297mm',
        maxHeight: '297mm',
        lineHeight: '1.2',
        fontSize: '10px'
      }}
    >
      <div className="flex w-full" style={{ height: '297mm', minHeight: '297mm' }}>
        {/* Sidebar */}
        <div 
          className={`bg-gradient-to-b ${colors.gradient} text-white p-2 flex flex-col overflow-hidden`}
          style={{ 
            width: '25%', 
            height: '297mm', 
            minHeight: '297mm',
            maxHeight: '297mm'
          }}
        >
          {/* Profile Section */}
          <div className="text-center mb-3 flex-shrink-0">
            {cvData.personalInfo.photo ? (
              <img 
                src={cvData.personalInfo.photo} 
                alt="Profil Fotoğrafı" 
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border border-white border-opacity-30"
              />
            ) : (
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8" />
              </div>
            )}
            <h1 className="font-bold mb-2 text-center" style={{ lineHeight: '1.2', fontSize: '14px' }}>
              {cvData.personalInfo.fullName || 'Ad Soyad'}
            </h1>
          </div>

          {/* Contact Info */}
          <div className="mb-3 flex-1 overflow-hidden">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-1 border-b border-white border-opacity-30 pb-1 text-center" style={{ fontSize: '11px' }}>
              <Phone className="w-3 h-3" />
              İletişim
            </h3>
            <div className="space-y-2" style={{ fontSize: '9px' }}>
              {cvData.personalInfo.email && (
                <div className="flex items-start gap-1">
                  <Mail className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all text-center" style={{ lineHeight: '1.3' }}>{cvData.personalInfo.email}</span>
                </div>
              )}
              {cvData.personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span className="text-center" style={{ lineHeight: '1.3' }}>{cvData.personalInfo.phone}</span>
                </div>
              )}
              {cvData.personalInfo.location && (
                <div className="flex items-start gap-1">
                  <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="text-center" style={{ lineHeight: '1.3' }}>{cvData.personalInfo.location}</span>
                </div>
              )}
              {cvData.personalInfo.website && (
                <div className="flex items-start gap-1">
                  <Globe className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all text-center" style={{ lineHeight: '1.3' }}>{cvData.personalInfo.website.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
              {cvData.personalInfo.linkedin && (
                <div className="flex items-start gap-1">
                  <Linkedin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all text-center" style={{ lineHeight: '1.3' }}>{cvData.personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
            </div>
            
            {/* Ek Kişisel Bilgiler */}
            {(cvData.personalInfo.birthDate || cvData.personalInfo.birthPlace || cvData.personalInfo.nationality || 
              cvData.personalInfo.maritalStatus || cvData.personalInfo.gender || cvData.personalInfo.drivingLicense || 
              cvData.personalInfo.customField) && (
              <div className="mt-3 pt-2 border-t border-white border-opacity-30">
                <h4 className="font-semibold mb-2 text-white text-opacity-90 text-center" style={{ fontSize: '10px' }}>Kişisel Bilgiler</h4>
                <div className="space-y-2" style={{ fontSize: '8px' }}>
                  {cvData.personalInfo.birthDate && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Doğum:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {new Date(cvData.personalInfo.birthDate).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                  )}
                  {cvData.personalInfo.birthPlace && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Yer:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {cvData.personalInfo.birthPlace}
                      </span>
                    </div>
                  )}
                  {cvData.personalInfo.nationality && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Uyruk:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {cvData.personalInfo.nationality}
                      </span>
                    </div>
                  )}
                  {cvData.personalInfo.maritalStatus && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Medeni:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {cvData.personalInfo.maritalStatus}
                      </span>
                    </div>
                  )}
                  {cvData.personalInfo.gender && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Cinsiyet:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {cvData.personalInfo.gender}
                      </span>
                    </div>
                  )}
                  {cvData.personalInfo.drivingLicense && (
                    <div className="mb-2 text-center">
                      <strong className="text-white text-opacity-90 block">Ehliyet:</strong>
                      <span className="text-white text-opacity-80" style={{ lineHeight: '1.2' }}>
                        {cvData.personalInfo.drivingLicense}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Stats Footer */}
          <div className="pt-2 border-t border-white border-opacity-30 flex-shrink-0" style={{ marginTop: 'auto' }}>
            <div className="grid grid-cols-2 gap-2 text-center">
              {cvData.experience.length > 0 && (
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-bold" style={{ fontSize: '11px' }}>{cvData.experience.length}</div>
                  <div className="opacity-80" style={{ fontSize: '8px' }}>Deneyim</div>
                </div>
              )}
              {cvData.education.length > 0 && (
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-bold" style={{ fontSize: '11px' }}>{cvData.education.length}</div>
                  <div className="opacity-80" style={{ fontSize: '8px' }}>Eğitim</div>
                </div>
              )}
              {cvData.skills.length > 0 && (
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-bold" style={{ fontSize: '11px' }}>{cvData.skills.length}</div>
                  <div className="opacity-80" style={{ fontSize: '8px' }}>Yetenek</div>
                </div>
              )}
              {cvData.languages.length > 0 && (
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-bold" style={{ fontSize: '11px' }}>{cvData.languages.length}</div>
                  <div className="opacity-80" style={{ fontSize: '8px' }}>Dil</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div 
          className="bg-white p-2 overflow-hidden" 
          style={{ 
            width: '75%', 
            height: '297mm', 
            minHeight: '297mm',
            lineHeight: '1.2' 
          }}
        >
          {/* Summary */}
          {cvData.summary && (
            <div className="mb-2">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '12px' }}>
                <User className={`w-3 h-3 ${colors.accent}`} />
                Özet
              </h2>
              <p className="text-gray-700" style={{ lineHeight: '1.3', fontSize: '10px' }}>
                {cvData.summary}
              </p>
            </div>
          )}

          {/* Experience */}
          {cvData.experience.length > 0 && (
            <div className="mb-2">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '12px' }}>
                <Briefcase className={`w-3 h-3 ${colors.accent}`} />
                İş Deneyimi
              </h2>
              <div className="space-y-2">
                {cvData.experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-300 pl-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800" style={{ lineHeight: '1.2', fontSize: '11px' }}>
                          {exp.position}
                        </h3>
                        <p className="text-gray-600 font-medium" style={{ lineHeight: '1.2', fontSize: '10px' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-gray-500 flex items-center gap-1" style={{ fontSize: '9px' }}>
                        <Calendar className="w-2.5 h-2.5" />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? 'Devam' : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-gray-700" style={{ lineHeight: '1.3', fontSize: '10px' }}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {cvData.education.length > 0 && (
            <div className="mb-3">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '12px' }}>
                <GraduationCap className={`w-3 h-3 ${colors.accent}`} />
                Eğitim
              </h2>
              <div className="space-y-2">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-gray-300 pl-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800" style={{ lineHeight: '1.2', fontSize: '11px' }}>
                          {edu.degree} {edu.field && `- ${edu.field}`}
                        </h3>
                        <p className="text-gray-600 font-medium" style={{ lineHeight: '1.2', fontSize: '10px' }}>
                          {edu.school}
                        </p>
                      </div>
                      <div className="text-gray-500 flex items-center gap-1" style={{ fontSize: '9px' }}>
                        <Calendar className="w-2.5 h-2.5" />
                        <span>
                          {formatDate(edu.startDate)} - {edu.current ? 'Devam' : formatDate(edu.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2 Column Layout for Skills, Languages, Hobbies, Certificates, Courses */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              {/* Skills */}
              {cvData.skills.length > 0 && (
                <div className="mb-3">
                  <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '11px' }}>
                    <Award className={`w-3 h-3 ${colors.accent}`} />
                    Yetenekler
                  </h2>
                  <div className="space-y-2">
                    {cvData.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between">
                        <span className="text-gray-700 flex-1" style={{ fontSize: '10px', lineHeight: '1.2' }}>
                          {skill.name}
                        </span>
                        <span 
                          className={`px-2 py-1 rounded-full text-center font-medium ${getLevelColor(skill.level)}`}
                          style={{ fontSize: '8px', minWidth: '50px' }}
                        >
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hobbies */}
              {cvData.hobbies && cvData.hobbies.length > 0 && (
                <div className="mb-3">
                  <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '13px' }}>
                    <Heart className={`w-4 h-4 ${colors.accent}`} />
                    Hobiler
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {cvData.hobbies.map((hobby) => (
                      <span 
                        key={hobby.id} 
                        className={`${colors.bg} text-white px-3 py-1 rounded-full font-medium text-center`}
                        style={{ fontSize: '11px' }}
                      >
                        {hobby.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Courses */}
              {cvData.courses && cvData.courses.length > 0 && (
                <div className="mb-3">
                  <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '13px' }}>
                    <BookOpen className={`w-4 h-4 ${colors.accent}`} />
                    Kurslar
                  </h2>
                  <div className="space-y-2">
                    {cvData.courses.map((course) => (
                      <div key={course.id} className="bg-gray-100 rounded p-2">
                        <div className="font-medium text-gray-800 text-center" style={{ lineHeight: '1.3', fontSize: '12px' }}>{course.name}</div>
                        <div className="text-gray-600 text-center" style={{ lineHeight: '1.3', fontSize: '11px' }}>{course.institution}</div>
                        <div className="flex justify-center gap-2 text-center" style={{ fontSize: '10px' }}>
                          {course.date && (
                            <span className="text-gray-500">{formatDate(course.date)}</span>
                          )}
                          {course.duration && (
                            <span className="text-gray-500">• {course.duration}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div>
              {/* Languages */}
              {cvData.languages.length > 0 && (
                <div className="mb-3">
                  <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '13px' }}>
                    <Globe className={`w-4 h-4 ${colors.accent}`} />
                    Diller
                  </h2>
                  <div className="space-y-2">
                    {cvData.languages.map((lang) => (
                      <div key={lang.id} className="flex items-center justify-between">
                        <span className="text-gray-700 flex-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                          {lang.name}
                        </span>
                        <span 
                          className={`px-3 py-1 rounded-full text-center font-medium ${getLevelColor(lang.level)}`}
                          style={{ fontSize: '10px', minWidth: '60px' }}
                        >
                          {getLevelText(lang.level)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates */}
              {cvData.certificates && cvData.certificates.length > 0 && (
                <div className="mb-3">
                  <h2 className="font-bold text-gray-800 mb-2 flex items-center gap-1" style={{ fontSize: '13px' }}>
                    <Award className={`w-4 h-4 ${colors.accent}`} />
                    Sertifikalar
                  </h2>
                  <div className="space-y-2">
                    {cvData.certificates.map((cert) => (
                      <div key={cert.id} className="bg-gray-100 rounded p-2">
                        <div className="font-medium text-gray-800 text-center" style={{ lineHeight: '1.3', fontSize: '12px' }}>{cert.name}</div>
                        <div className="text-gray-600 text-center" style={{ lineHeight: '1.3', fontSize: '11px' }}>{cert.institution}</div>
                        {cert.date && (
                          <div className="text-gray-500 text-center" style={{ fontSize: '10px' }}>
                            {formatDate(cert.date)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate; 