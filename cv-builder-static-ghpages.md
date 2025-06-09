# 📄 Firebase'siz Modern CV Oluşturucu (GitHub Pages İçin)

## 🎯 Amaç
Hiçbir sunucu kullanmadan, tamamen tarayıcı üzerinde çalışan, modern tasarımlı ve Lucide ikonlar içeren bir CV oluşturucu web uygulaması geliştirmek. Uygulama GitHub Pages üzerinden ücretsiz yayınlanabilir.

---

## 🌟 Özellikler

### 🔐 Backend Yok!
- Tüm veriler `localStorage`'da saklanır (kullanıcı bilgisayarında)
- Firebase, sunucu, veritabanı kullanılmaz

### 🖥️ Genel Özellikler
- Landing Page (ana sayfa)
- CV Oluşturucu Arayüz (form tabanlı)
- Gerçek zamanlı önizleme
- Şablon seçimi (2–3 farklı tasarım)
- Tek tıklamayla PDF indirme
- Responsive (mobil/masaüstü uyumlu)
- Modern UI + Lucide icon desteği

---

## 🧱 Teknolojiler

| Amaç             | Araç                |
|------------------|---------------------|
| Arayüz           | React.js            |
| Stil             | Tailwind CSS        |
| PDF Aktarımı     | html2pdf.js         |
| İkonlar          | Lucide Icons        |
| Yayınlama        | GitHub Pages        |
| Veri Saklama     | localStorage        |

---

## 📁 Klasör Yapısı (Modüler)

```
cv-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── CVForm.jsx
│   │   ├── CVPreview.jsx
│   │   ├── TemplateSelector.jsx
│   │   └── DownloadButton.jsx
│   ├── templates/
│   │   ├── MinimalTemplate.jsx
│   │   └── ModernTemplate.jsx
│   ├── utils/
│   │   └── pdfExporter.js
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🔑 Sayfa Akışı

1. **Landing Page**
   - Tanıtım metni
   - “CV Oluşturmaya Başla” butonu
   - Basit, ikon destekli, modern görünüm

2. **CV Oluşturma Sayfası**
   - Form: Ad, e-posta, eğitim, deneyim, yetenekler
   - Şablon seçimi
   - Canlı önizleme
   - PDF indir

---

## 🚀 Yayınlama

### GitHub Pages ile:
- `npm run build`
- `gh-pages` paketi ile deploy: `npm run deploy`

---

## ✅ Cursor AI İçin Notlar

- Tüm bileşenler `components/` altında ayrı modüller olmalı
- Şablonlar `templates/` klasöründe bulunmalı
- PDF dönüşümü `utils/` altında tek bir dosyada
- Tüm stiller Tailwind ile yazılmalı, CSS dosyası kullanılmamalı
- Lucide ikonlar kullanılarak kullanıcıya görsel sadelik sunulmalı
- `localStorage` ile veri saklama yapılmalı (kullanıcı verisi uçucu değil)

---

Bu yapı ile sıfır maliyetle profesyonel bir CV oluşturucu geliştirilebilir ve GitHub Pages üzerinden herkese sunulabilir.