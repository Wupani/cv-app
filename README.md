# 🚀 Türkiye'nin En Modern CV Oluşturucu Platformu

<div align="center">

![CV Builder Logo](https://img.shields.io/badge/CV-Builder-orange?style=for-the-badge&logo=react)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://wupani.github.io/cv-app)
[![GitHub Stars](https://img.shields.io/github/stars/Wupani/cv-app?style=for-the-badge&logo=github)](https://github.com/Wupani/cv-app/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**Basit fikirlerle güçlü deneyimler** ✨

Hayalinizdeki işe adım atmak için profesyonel bir CV'ye ihtiyacınız var. Karmaşık tasarım programları ya da pahalı hizmetler yerine, dakikalar içinde etkileyici CV'nizi oluşturun!

[🎯 Hemen Deneyin](https://wupani.github.io/cv-app) • [📋 Özellikler](#-özellikler) • [🛠️ Kurulum](#️-kurulum) • [🤝 Katkıda Bulun](#-katkıda-bulunma)

</div>

---

## 📸 Önizleme

<div align="center">
  <img src="https://via.placeholder.com/800x400/f97316/ffffff?text=CV+Builder+Demo" alt="CV Builder Demo" width="800"/>
  <p><i>Modern, kullanıcı dostu arayüz ile dakikalar içinde profesyonel CV oluşturun</i></p>
</div>

## ✨ Özellikler

<table>
<tr>
<td width="50%">

### 🎨 **Modern Tasarım**
- 3 farklı profesyonel şablon
- Temiz ve sade görünüm
- Renkli ve dinamik seçenekler
- Kurumsal ve resmi stil

### 📱 **Mobil Uyumlu**
- iPhone SE'den 4K monitöre responsive
- Touch-friendly arayüz
- Tüm cihazlarda mükemmel görünüm
- Dark mode desteği

### ⚡ **Hızlı & Kolay**
- Dakikalar içinde CV oluşturun
- Gerçek zamanlı önizleme
- Otomatik kaydetme (localStorage)
- Tek tıkla PDF indirme

</td>
<td width="50%">

### 🔒 **Güvenli & Özel**
- Veriler sadece tarayıcınızda
- Hiçbir sunucuya gönderilmez
- Kayıt gerektirmez
- Tamamen ücretsiz

### 🌍 **Türkçe Optimizasyonu**
- Türk iş piyasası için optimize
- Ehliyet kategorileri (A, B, C...)
- Doğum yeri ve tarih alanları
- Medeni durum ve cinsiyet

### 📄 **A4 PDF Çıktısı**
- Yazdırmaya hazır format
- Yüksek kalite çıktı
- Standart CV boyutları
- Otomatik sayfa düzeni

</td>
</tr>
</table>

## 🛠️ Teknoloji Stack'i

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

### Core Technologies
- **React 19** - Modern kullanıcı arayüzü
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **html2pdf.js** - Client-side PDF generation
- **GitHub Pages** - Ücretsiz hosting

### Build Tools
- **Create React App** - Zero-config build setup
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **gh-pages** - Automated deployment

## 🚀 Hızlı Başlangıç

### 📋 Ön Gereksinimler

- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn**
- **Git**

### ⚡ Kurulum

```bash
# 1. Projeyi klonlayın
git clone https://github.com/Wupani/cv-app.git
cd cv-app

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm start

# 4. Tarayıcınızda açın
# http://localhost:3000
```

### 🏗️ Production Build

```bash
# Production build oluştur
npm run build

# Build'i test et
npx serve -s build
```

### 🌐 GitHub Pages'e Deploy

```bash
# package.json'da homepage'i güncelleyin
"homepage": "https://yourusername.github.io/cv-app"

# Deploy edin
npm run deploy
```

## 📁 Proje Yapısı

```
📦 cv-app
├── 📂 public/
│   ├── 🌟 favicon.svg          # Custom favicon
│   ├── 📄 index.html           # Main HTML template
│   └── 📋 manifest.json        # PWA manifest
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🏠 LandingPage.jsx     # Ana sayfa + tanıtım
│   │   ├── 📝 CVForm.jsx          # CV form bileşeni
│   │   ├── 👁️ CVPreview.jsx       # Gerçek zamanlı önizleme
│   │   ├── 🎨 TemplateSelector.jsx # Şablon seçici
│   │   ├── 🌈 ColorSelector.jsx   # Renk seçici
│   │   ├── 🔤 FontSelector.jsx    # Font seçici
│   │   └── 📥 DownloadButton.jsx  # PDF indirme
│   ├── 📂 templates/
│   │   ├── 🎯 MinimalTemplate.jsx  # Minimal CV şablonu
│   │   ├── 🚀 ModernTemplate.jsx   # Modern CV şablonu
│   │   └── 💼 ProfessionalTemplate.jsx # Kurumsal şablon
│   ├── 📂 utils/
│   │   └── 📄 pdfExporter.js      # PDF export utility
│   ├── ⚙️ App.js                  # Ana uygulama
│   ├── 🎨 index.css              # Global styles
│   └── 🚀 index.js               # Entry point
├── 📄 package.json
├── 📋 README.md
└── ⚙️ tailwind.config.js
```

## 🎯 Kullanım Kılavuzu

### 1️⃣ **Ana Sayfa**
- Güzel tanıtım sayfası ile karşılanırsınız
- 6 özellik kartı ile uygulamanın gücünü görün
- 3 şablon önizlemesi ile seçim yapın
- "CV Oluşturmaya Başla" butonuna tıklayın

### 2️⃣ **Şablon & Renk Seçimi**
- **Minimal**: Temiz ve sade tasarım
- **Modern**: Renkli sidebar düzeni
- **Professional**: Kurumsal görünüm
- 9 farklı renk seçeneği
- 8 farklı font seçeneği

### 3️⃣ **CV Bilgilerini Girme**

<details>
<summary><strong>📝 Kişisel Bilgiler</strong></summary>

- Ad Soyad (zorunlu)
- E-posta ve telefon
- Adres bilgisi
- Web sitesi ve LinkedIn
- Profil fotoğrafı
- Doğum tarihi ve yeri
- Ehliyet kategorileri
- Medeni durum ve cinsiyet

</details>

<details>
<summary><strong>📋 Özet Bölümü</strong></summary>

- 600 karakter limiti
- Gerçek zamanlı karakter sayacı
- Yazma ipuçları ve örnekler
- "Çok kısa" / "İdeal" / "Çok uzun" geri bildirimi

</details>

<details>
<summary><strong>💼 İş Deneyimi</strong></summary>

- Pozisyon adı
- Şirket adı ve lokasyon
- Başlangıç ve bitiş tarihleri
- "Halen çalışıyorum" seçeneği
- 800 karakter detaylı açıklama

</details>

<details>
<summary><strong>🎓 Eğitim</strong></summary>

- Okul/Üniversite adı
- Bölüm ve derece
- Başlangıç ve bitiş tarihleri
- Not ortalaması (opsiyonel)

</details>

<details>
<summary><strong>🔧 Yetenekler & Diller</strong></summary>

- Teknik yetenekler (tags)
- Yabancı dil seviyeleri
- Hobi ve ilgi alanları
- Sertifikalar ve kurslar

</details>

### 4️⃣ **PDF İndirme**
- Tek tıkla yüksek kalite PDF
- A4 boyutunda optimize
- Yazdırmaya hazır format
- Dosya adı: "Ad_Soyad_CV.pdf"

## 🔧 Geliştirici Rehberi

### 🎨 **Yeni Şablon Ekleme**

1. `src/templates/` klasörüne yeni dosya oluşturun:
```jsx
// YeniTemplate.jsx
import React from 'react';

const YeniTemplate = ({ cvData, selectedColor, selectedFont }) => {
  // Şablon JSX'i
  return (
    <div className="bg-white p-4">
      {/* Şablon içeriği */}
    </div>
  );
};

export default YeniTemplate;
```

2. `TemplateSelector.jsx`'e şablonu ekleyin:
```jsx
const templates = [
  // ... mevcut şablonlar
  { id: 'yeni', name: 'Yeni Şablon', description: 'Açıklama' }
];
```

3. `CVPreview.jsx`'de render edin:
```jsx
case 'yeni':
  return <YeniTemplate cvData={cvData} selectedColor={selectedColor} selectedFont={selectedFont} />;
```

### 🌈 **Yeni Renk Teması**

`ColorSelector.jsx` dosyasında yeni renk ekleyin:
```jsx
const colors = [
  // ... mevcut renkler
  { id: 'purple', name: 'Mor', class: 'bg-purple-500' }
];
```

### 📱 **Responsive Breakpoints**

```css
/* Tailwind breakpoints */
sm: 640px   /* Küçük tabletler */
md: 768px   /* Tabletler */
lg: 1024px  /* Küçük laptoplar */
xl: 1280px  /* Masaüstü */
2xl: 1536px /* Büyük ekranlar */
```

## 🧪 Test Etme

```bash
# Tüm testleri çalıştır
npm test

# Test coverage raporu
npm test -- --coverage

# E2E testler (gelecekte)
npm run test:e2e
```

## 📊 Performans

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Bundle Size**: ~260KB (gzipped)
- **Load Time**: <2 saniye (3G bağlantıda)
- **Core Web Vitals**: Tüm metrikler yeşil

## 🌟 Yol Haritası

### 🔄 **Yakın Zamanda**
- [ ] 📧 Email ile CV gönderme
- [ ] 🌐 Çoklu dil desteği (EN, DE, FR)
- [ ] 💾 Cloud backup (isteğe bağlı)
- [ ] 📊 CV analiz ve önerileri

### 🚀 **Gelecek Planlar**
- [ ] 🤖 AI destekli içerik önerileri
- [ ] 🎨 Custom şablon editörü
- [ ] 📈 CV takip sistemi
- [ ] 💼 İş ilanları entegrasyonu

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak istiyorsanız:

### 🐛 **Bug Report**
[Issue oluşturun](https://github.com/Wupani/cv-app/issues/new?template=bug_report.md) ve şunları belirtin:
- Hata açıklaması
- Tekrar etme adımları
- Beklenen davranış
- Ekran görüntüleri

### ✨ **Feature Request**
[Feature isteği](https://github.com/Wupani/cv-app/issues/new?template=feature_request.md) oluşturun:
- Özellik açıklaması
- Kullanım senaryosu
- Mockup'lar (varsa)

### 🔧 **Development**
1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add: amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

### 📋 **Code Style**
```bash
# ESLint kuralları
npm run lint

# Prettier formatting
npm run format

# Pre-commit hooks aktif
npm run prepare
```

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

```
MIT License - Özgürce kullanın, değiştirin ve dağıtın! 🎉
```

## 🙏 Teşekkürler

### 💖 **Açık Kaynak Projeler**
- [React](https://reactjs.org/) - Kullanıcı arayüzü kütüphanesi
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Modern icon library
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - PDF generation

### 🌟 **İlham Kaynakları**
- [Canva Resume Builder](https://www.canva.com/resumes/)
- [Resume.io](https://resume.io/)
- [Zety](https://zety.com/)

### 👥 **Katkıda Bulunanlar**

<a href="https://github.com/Wupani/cv-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Wupani/cv-app" />
</a>

---

<div align="center">

**Basit fikirlerle güçlü deneyimler** ✨

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

[🚀 Live Demo](https://wupani.github.io/cv-app) • 
[📱 Mobile Demo](https://wupani.github.io/cv-app) • 
[💻 Desktop Demo](https://wupani.github.io/cv-app)

© 2025 [Limnio](https://wupani.github.io/limnio-website/) - Emre Akyol. Tüm hakları saklıdır.

</div>
