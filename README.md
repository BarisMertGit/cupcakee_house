# Cupcake House Bake & Cake

Butik pasta ve cupcake atölyesi için modern, responsive tek sayfalık web sitesi.

## 🍰 Proje Hakkında

Bu proje, "Cupcake House Bake & Cake" adlı butik pasta atölyesi için tasarlanmış bir portfolyo/tanıtım web sitesidir. El yapımı pastalar, cupcake'ler ve özel tasarım tatlılar için galeri ve iletişim bilgilerini sunar.

## 📁 Dosya Yapısı

```
cupcakee_house/
├── index.html      # Ana HTML dosyası
├── styles.css      # Tüm CSS stilleri
├── script.js       # JavaScript işlevleri
├── images/         # Ürün görselleri
│   ├── red-ribbon-cake.jpg
│   ├── cupcake-box.jpg
│   ├── strawberry-cake.jpg
│   ├── wreath-cake.jpg
│   └── calla-lily-cake.jpg
└── README.md       # Bu dosya
```

## 🛠️ Kullanılan Teknolojiler

- **HTML5** - Semantic yapı
- **CSS3** - Modern özellikler (CSS Variables, Flexbox, Grid)
- **Vanilla JavaScript** - Framework kullanmadan saf JS
- **Google Fonts** - Inter & Playfair Display yazı tipleri

## 📖 Nasıl Çalışır?

### 1. HTML Yapısı (`index.html`)

Sayfa dört ana bölümden oluşur:

| Bölüm | Açıklama |
|-------|----------|
| **Header** | Navigasyon menüsü ve logo |
| **Hero** | Karşılama bölümü, slogan ve hoş geldiniz mesajı |
| **Gallery** | 5 adet ürün kartıyla galeri bölümü |
| **Contact** | WhatsApp, Instagram ve iletişim bilgileri |
| **Footer** | Telif hakkı bilgisi |

### 2. CSS Stilleri (`styles.css`)

- **CSS Custom Properties**: Renkler, fontlar ve spacing değerleri için değişkenler
- **Responsive Design**: 768px breakpoint ile mobil uyumluluk
- **Animasyonlar**: Hover efektleri ve geçişler

```css
/* Örnek renk paleti */
--color-brown-dark: #5D4037;
--color-pink: #E8B4B8;
--color-cream: #FDF8F5;
```

### 3. JavaScript İşlevleri (`script.js`)

| Özellik | Açıklama |
|---------|----------|
| **Header Scroll** | Sayfa kaydırıldığında header'a `scrolled` sınıfı eklenir |
| **Mobile Menu** | Hamburger menü toggle özelliği |
| **Smooth Scroll** | Tıklanan linke yumuşak geçiş |
| **Intersection Observer** | Galeri öğelerine scroll animasyonu |
| **Active Link** | Aktif bölümün navigasyonda vurgulanması |
| **Parallax Effect** | Hero bölümünde hafif parallax efekti |

## 🚀 Çalıştırma

### Yöntem 1: Tarayıcıda Doğrudan Açma
```bash
# index.html dosyasını çift tıklayarak tarayıcıda açın
open index.html
```

### Yöntem 2: Live Server ile
```bash
# VS Code Live Server eklentisi kullanarak
# veya Python ile basit bir sunucu başlatın:
python3 -m http.server 8000
# Tarayıcıda http://localhost:8000 adresini açın
```

## 🎨 Özellikler

- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Smooth scroll navigasyon
- ✅ Galeri hover efektleri
- ✅ WhatsApp sipariş hattı butonu
- ✅ Instagram portfolyo linki
- ✅ SEO meta etiketleri
- ✅ Lazy loading görüntüler

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## 📞 İletişim Bilgileri (Demo)

- **WhatsApp**: +90 555 123 45 67
- **E-posta**: siparis@cupcakehouse.com
- **Instagram**: @cupcakehouse