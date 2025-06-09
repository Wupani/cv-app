import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, User, Briefcase, GraduationCap, Award, Heart, BookOpen } from 'lucide-react';

const ProfessionalTemplate = ({ cvData, selectedColor = 'indigo', selectedFont = 'roboto' }) => {
  const { personalInfo, summary, experience, education, skills, languages, hobbies, certificates, courses } = cvData;

  // Renk haritası
  const colorMap = {
    orange: { accent: 'text-orange-700', light: 'text-orange-600', bg: 'bg-orange-600', header: 'bg-orange-50', border: 'border-orange-200' },
    blue: { accent: 'text-blue-700', light: 'text-blue-600', bg: 'bg-blue-600', header: 'bg-blue-50', border: 'border-blue-200' },
    purple: { accent: 'text-purple-700', light: 'text-purple-600', bg: 'bg-purple-600', header: 'bg-purple-50', border: 'border-purple-200' },
    green: { accent: 'text-green-700', light: 'text-green-600', bg: 'bg-green-600', header: 'bg-green-50', border: 'border-green-200' },
    red: { accent: 'text-red-700', light: 'text-red-600', bg: 'bg-red-600', header: 'bg-red-50', border: 'border-red-200' },
    indigo: { accent: 'text-indigo-700', light: 'text-indigo-600', bg: 'bg-indigo-600', header: 'bg-indigo-50', border: 'border-indigo-200' },
    pink: { accent: 'text-pink-700', light: 'text-pink-600', bg: 'bg-pink-600', header: 'bg-pink-50', border: 'border-pink-200' },
    teal: { accent: 'text-teal-700', light: 'text-teal-600', bg: 'bg-teal-600', header: 'bg-teal-50', border: 'border-teal-200' },
    black: { accent: 'text-gray-800', light: 'text-gray-700', bg: 'bg-gray-800', header: 'bg-gray-50', border: 'border-gray-200' }
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
  
  const colors = colorMap[selectedColor] || colorMap.indigo;
  const fontFamily = fontMap[selectedFont] || fontMap.roboto;

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
      {/* Header */}
      <div className={`${colors.header} ${colors.border} border-b-2 p-2 mb-2`}>
        <div className="flex items-center gap-3">
          {personalInfo.photo ? (
            <img 
              src={personalInfo.photo} 
              alt="Profil Fotoğrafı" 
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
          )}
          <div className="flex-1">
            <h1 className={`font-bold ${colors.accent} mb-2`} style={{ lineHeight: '1.2', fontSize: '14px' }}>
              {personalInfo.fullName || 'Ad Soyad'}
            </h1>
            
            {/* Contact Info - Professional grid layout */}
            <div className="grid grid-cols-2 gap-3 text-gray-600" style={{ fontSize: '9px' }}>
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1 col-span-2">
                  <Linkedin className="w-3 h-3" />
                  <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        {/* Summary */}
        {summary && (
          <div className="mb-3">
            <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
              <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '12px' }}>
                <User className="w-3 h-3" />
                Özet
              </h2>
            </div>
            <p className="text-gray-700 ml-3" style={{ lineHeight: '1.3', fontSize: '10px' }}>
              {summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-3">
            <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
              <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '12px' }}>
                <Briefcase className="w-3 h-3" />
                İş Deneyimi
              </h2>
            </div>
            <div className="ml-3 space-y-2">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-300 pl-3 relative">
                  <div className="absolute w-3 h-3 bg-white border-2 border-gray-400 rounded-full -left-2 top-1"></div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className={`font-semibold ${colors.accent}`} style={{ lineHeight: '1.3', fontSize: '13px' }}>
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 font-medium" style={{ lineHeight: '1.3', fontSize: '12px' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-500 flex items-center gap-1" style={{ fontSize: '11px' }}>
                      <Calendar className="w-3 h-3" />
                      <span>
                        {formatDate(exp.startDate)} - {exp.current ? 'Devam' : formatDate(exp.endDate)}
                      </span>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700" style={{ lineHeight: '1.4', fontSize: '12px' }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-3">
            <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
              <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '14px' }}>
                <GraduationCap className="w-4 h-4" />
                Eğitim
              </h2>
            </div>
            <div className="ml-3 space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-gray-300 pl-3 relative">
                  <div className="absolute w-3 h-3 bg-white border-2 border-gray-400 rounded-full -left-2 top-1"></div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className={`font-semibold ${colors.accent}`} style={{ lineHeight: '1.3', fontSize: '13px' }}>
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

        {/* 2 Column Layout for Skills, Languages, Hobbies, Certificates */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-3">
                <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
                  <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '13px' }}>
                    <Award className="w-4 h-4" />
                    Yetenekler
                  </h2>
                </div>
                <div className="ml-3 space-y-2">
                  {skills.map((skill) => (
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
            {hobbies && hobbies.length > 0 && (
              <div className="mb-3">
                <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
                  <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '13px' }}>
                    <Heart className="w-4 h-4" />
                    Hobiler
                  </h2>
                </div>
                <div className="ml-3 flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
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
            {courses && courses.length > 0 && (
              <div className="mb-3">
                <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
                  <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '13px' }}>
                    <BookOpen className="w-4 h-4" />
                    Kurslar
                  </h2>
                </div>
                <div className="ml-3 space-y-2">
                  {courses.map((course) => (
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
            {languages.length > 0 && (
              <div className="mb-3">
                <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
                  <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '13px' }}>
                    <Globe className="w-4 h-4" />
                    Diller
                  </h2>
                </div>
                <div className="ml-3 space-y-2">
                  {languages.map((lang) => (
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
            {certificates && certificates.length > 0 && (
              <div className="mb-3">
                <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
                  <h2 className={`font-bold ${colors.accent} flex items-center gap-1`} style={{ fontSize: '13px' }}>
                    <Award className="w-4 h-4" />
                    Sertifikalar
                  </h2>
                </div>
                <div className="ml-3 space-y-2">
                  {certificates.map((cert) => (
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
        {(personalInfo.birthDate || personalInfo.birthPlace || personalInfo.nationality || 
          personalInfo.maritalStatus || personalInfo.gender || personalInfo.drivingLicense) && (
          <div className="mt-3 pt-2 border-t border-gray-200">
            <div className={`${colors.header} ${colors.border} border-l-4 pl-3 py-2 mb-2`}>
              <h3 className={`font-semibold ${colors.accent}`} style={{ fontSize: '13px' }}>Kişisel Bilgiler</h3>
            </div>
            <div className="ml-3 grid grid-cols-3 gap-2 text-center" style={{ fontSize: '10px' }}>
              {personalInfo.birthDate && (
                <div>
                  <strong className="text-gray-700 block">Doğum:</strong>
                  <span className="text-gray-600">{new Date(personalInfo.birthDate).toLocaleDateString('tr-TR')}</span>
                </div>
              )}
              {personalInfo.birthPlace && (
                <div>
                  <strong className="text-gray-700 block">Yer:</strong>
                  <span className="text-gray-600">{personalInfo.birthPlace}</span>
                </div>
              )}
              {personalInfo.nationality && (
                <div>
                  <strong className="text-gray-700 block">Uyruk:</strong>
                  <span className="text-gray-600">{personalInfo.nationality}</span>
                </div>
              )}
              {personalInfo.maritalStatus && (
                <div>
                  <strong className="text-gray-700 block">Medeni:</strong>
                  <span className="text-gray-600">{personalInfo.maritalStatus}</span>
                </div>
              )}
              {personalInfo.gender && (
                <div>
                  <strong className="text-gray-700 block">Cinsiyet:</strong>
                  <span className="text-gray-600">{personalInfo.gender}</span>
                </div>
              )}
              {personalInfo.drivingLicense && (
                <div>
                  <strong className="text-gray-700 block">Ehliyet:</strong>
                  <span className="text-gray-600">{personalInfo.drivingLicense}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate; 