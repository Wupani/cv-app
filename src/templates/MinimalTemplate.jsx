import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, User, Briefcase, GraduationCap, Award, Heart, BookOpen } from 'lucide-react';

const MinimalTemplate = ({ cvData, selectedColor = 'blue', selectedFont = 'inter' }) => {
  // Renk haritası
  const colorMap = {
    orange: { accent: 'text-orange-600', line: 'border-orange-600', bg: 'bg-orange-600' },
    blue: { accent: 'text-blue-600', line: 'border-blue-600', bg: 'bg-blue-600' },
    purple: { accent: 'text-purple-600', line: 'border-purple-600', bg: 'bg-purple-600' },
    green: { accent: 'text-green-600', line: 'border-green-600', bg: 'bg-green-600' },
    red: { accent: 'text-red-600', line: 'border-red-600', bg: 'bg-red-600' },
    indigo: { accent: 'text-indigo-600', line: 'border-indigo-600', bg: 'bg-indigo-600' },
    pink: { accent: 'text-pink-600', line: 'border-pink-600', bg: 'bg-pink-600' },
    teal: { accent: 'text-teal-600', line: 'border-teal-600', bg: 'bg-teal-600' },
    black: { accent: 'text-gray-800', line: 'border-gray-800', bg: 'bg-gray-800' }
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
  
  const colors = colorMap[selectedColor] || colorMap.blue;
  const fontFamily = fontMap[selectedFont] || fontMap.inter;

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
      className="bg-white p-2 w-full overflow-hidden" 
      style={{ 
        fontFamily, 
        height: '297mm', 
        minHeight: '297mm',
        maxHeight: '297mm',
        lineHeight: '1.2',
        fontSize: '10px'
      }}
    >
      {/* Header */}
      <div className="text-center mb-3 pb-2 border-b-2 border-gray-200">
        {cvData.personalInfo.photo && (
          <img 
            src={cvData.personalInfo.photo} 
            alt="Profil Fotoğrafı" 
            className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
          />
        )}
        <h1 className={`font-bold ${colors.accent} mb-2`} style={{ lineHeight: '1.2', fontSize: '14px' }}>
          {cvData.personalInfo.fullName || 'Ad Soyad'}
        </h1>
        
        {/* Contact Info - Compact horizontal layout */}
        <div className="flex flex-wrap justify-center gap-3 text-gray-600" style={{ fontSize: '9px' }}>
          {cvData.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>{cvData.personalInfo.email}</span>
            </div>
          )}
          {cvData.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{cvData.personalInfo.phone}</span>
            </div>
          )}
          {cvData.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{cvData.personalInfo.location}</span>
            </div>
          )}
          {cvData.personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>{cvData.personalInfo.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {cvData.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              <span>{cvData.personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {cvData.summary && (
        <div className="mb-3">
          <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '12px' }}>
            <User className="w-3 h-3" />
            Özet
          </h2>
          <p className="text-gray-700" style={{ lineHeight: '1.3', fontSize: '10px' }}>
            {cvData.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {cvData.experience.length > 0 && (
        <div className="mb-3">
          <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '12px' }}>
            <Briefcase className="w-3 h-3" />
            İş Deneyimi
          </h2>
          <div className="space-y-2">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="mb-2">
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
                  <p className="text-gray-700 ml-2" style={{ lineHeight: '1.3', fontSize: '10px' }}>
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
          <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '14px' }}>
            <GraduationCap className="w-4 h-4" />
            Eğitim
          </h2>
          <div className="space-y-2">
            {cvData.education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800" style={{ lineHeight: '1.3', fontSize: '13px' }}>
                      {edu.degree} {edu.field && `- ${edu.field}`}
                    </h3>
                    <p className="text-gray-600 font-medium" style={{ lineHeight: '1.3', fontSize: '12px' }}>
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-gray-500 flex items-center gap-1" style={{ fontSize: '11px' }}>
                    <Calendar className="w-3 h-3" />
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
              <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '13px' }}>
                <Award className="w-4 h-4" />
                Yetenekler
              </h2>
              <div className="space-y-2">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between">
                    <span className="text-gray-700 flex-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                      {skill.name}
                    </span>
                    <span 
                      className={`px-3 py-1 rounded-full text-center font-medium ${getLevelColor(skill.level)}`}
                      style={{ fontSize: '10px', minWidth: '60px' }}
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
              <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '13px' }}>
                <Heart className="w-4 h-4" />
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
              <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '13px' }}>
                <BookOpen className="w-4 h-4" />
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
              <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '13px' }}>
                <Globe className="w-4 h-4" />
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
              <h2 className={`font-semibold ${colors.accent} mb-2 flex items-center gap-1`} style={{ fontSize: '13px' }}>
                <Award className="w-4 h-4" />
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

      {/* Personal Info Footer */}
      {(cvData.personalInfo.birthDate || cvData.personalInfo.birthPlace || cvData.personalInfo.nationality || 
        cvData.personalInfo.maritalStatus || cvData.personalInfo.gender || cvData.personalInfo.drivingLicense) && (
        <div className="mt-3 pt-2 border-t border-gray-200">
          <h3 className={`font-semibold ${colors.accent} mb-2 text-center`} style={{ fontSize: '13px' }}>Kişisel Bilgiler</h3>
          <div className="grid grid-cols-3 gap-2 text-center" style={{ fontSize: '10px' }}>
            {cvData.personalInfo.birthDate && (
              <div>
                <strong className="text-gray-700 block">Doğum:</strong>
                <span className="text-gray-600">{new Date(cvData.personalInfo.birthDate).toLocaleDateString('tr-TR')}</span>
              </div>
            )}
            {cvData.personalInfo.birthPlace && (
              <div>
                <strong className="text-gray-700 block">Yer:</strong>
                <span className="text-gray-600">{cvData.personalInfo.birthPlace}</span>
              </div>
            )}
            {cvData.personalInfo.nationality && (
              <div>
                <strong className="text-gray-700 block">Uyruk:</strong>
                <span className="text-gray-600">{cvData.personalInfo.nationality}</span>
              </div>
            )}
            {cvData.personalInfo.maritalStatus && (
              <div>
                <strong className="text-gray-700 block">Medeni:</strong>
                <span className="text-gray-600">{cvData.personalInfo.maritalStatus}</span>
              </div>
            )}
            {cvData.personalInfo.gender && (
              <div>
                <strong className="text-gray-700 block">Cinsiyet:</strong>
                <span className="text-gray-600">{cvData.personalInfo.gender}</span>
              </div>
            )}
            {cvData.personalInfo.drivingLicense && (
              <div>
                <strong className="text-gray-700 block">Ehliyet:</strong>
                <span className="text-gray-600">{cvData.personalInfo.drivingLicense}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate; 