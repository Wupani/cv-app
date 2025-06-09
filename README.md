# 📄 CV Oluşturucu

Modern, kullanıcı dostu ve tamamen ücretsiz bir CV oluşturucu web uygulaması. Firebase veya herhangi bir sunucu gerektirmez - tüm veriler tarayıcınızda güvenle saklanır.

## ✨ Özellikler

- **🏠 Landing Page**: Kullanıcı dostu giriş sayfası
- **📝 Form Tabanlı CV Oluşturma**: Adım adım CV bilgilerini girme
- **👁️ Gerçek Zamanlı Önizleme**: Değişiklikleri anında görün
- **🎨 Çoklu Şablon**: Minimal ve Modern tasarım seçenekleri
- **📄 PDF İndirme**: Yüksek kalitede PDF export
- **📱 Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **🔐 Gizlilik**: Veriler sadece tarayıcınızda saklanır (localStorage)
- **🎯 Sıfır Maliyet**: GitHub Pages ile ücretsiz barındırma

## 🛠️ Teknolojiler

- **React.js** - Kullanıcı arayüzü
- **Tailwind CSS** - Styling
- **Lucide Icons** - Modern ikonlar
- **html2pdf.js** - PDF export
- **GitHub Pages** - Deployment

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/cv-app.git
cd cv-app
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 📦 Deployment

### GitHub Pages ile:

1. `package.json` dosyasındaki `homepage` alanını güncelleyin:
```json
"homepage": "https://yourusername.github.io/cv-app"
```

2. Build ve deploy:
```bash
npm run build
npm run deploy
```

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── LandingPage.jsx     # Ana sayfa
│   ├── CVForm.jsx          # CV form bileşeni
│   ├── CVPreview.jsx       # CV önizleme
│   ├── TemplateSelector.jsx # Şablon seçici
│   └── DownloadButton.jsx  # PDF indirme butonu
├── templates/
│   ├── MinimalTemplate.jsx # Minimal CV şablonu
│   └── ModernTemplate.jsx  # Modern CV şablonu
├── utils/
│   └── pdfExporter.js      # PDF export fonksiyonu
├── App.js                  # Ana uygulama
└── index.js               # Uygulama giriş noktası
```

## 🎯 Kullanım

1. **Ana Sayfa**: "CV Oluşturmaya Başla" butonuna tıklayın
2. **Şablon Seçin**: Beğendiğiniz tasarımı seçin
3. **Bilgileri Girin**: Sol panelden CV bilgilerinizi ekleyin:
   - Kişisel bilgiler
   - Özet
   - İş deneyimi
   - Eğitim
   - Yetenekler
   - Diller
4. **Önizleme**: Sağ panelde gerçek zamanlı önizleme görün
5. **İndir**: "PDF İndir" butonuyla CV'nizi kaydedin

## 🔧 Özelleştirme

### Yeni Şablon Ekleme:

1. `src/templates/` klasörüne yeni şablon dosyası ekleyin
2. `src/components/TemplateSelector.jsx` dosyasına şablonu ekleyin
3. `src/components/CVPreview.jsx` dosyasına şablon render'ını ekleyin

### Stil Değişiklikleri:

Tailwind CSS kullanılmıştır. Stilleri değiştirmek için:
- Component dosyalarındaki `className` değerlerini düzenleyin
- `tailwind.config.js` dosyasından global ayarları değiştirin

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Branch'i push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- [GitHub Pages](https://pages.github.com/)
