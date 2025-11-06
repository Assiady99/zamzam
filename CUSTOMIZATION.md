# 🎨 دليل التخصيص - موقع زمزم للمواد الغذائية

## 📝 المحتوى

1. [تخصيص الألوان](#تخصيص-الألوان)
2. [تخصيص الصور والفيديو](#تخصيص-الصور-والفيديو)
3. [تخصيص النصوص](#تخصيص-النصوص)
4. [إضافة منتجات جديدة](#إضافة-منتجات-جديدة)
5. [تعديل معلومات التواصل](#تعديل-معلومات-التواصل)
6. [تخصيص الأنيميشنات](#تخصيص-الأنيميشنات)

---

## 🎨 تخصيص الألوان

### 1. تغيير الألوان الأساسية

افتح ملف `style.css` وابحث عن القسم `:root`:

```css
:root {
    /* غيّر هذه القيم بالألوان المطلوبة */
    --primary-color: #10b981;    /* اللون الأساسي */
    --secondary-color: #059669;  /* اللون الثانوي */
    --accent-color: #34d399;     /* لون التمييز */
    --dark-color: #1f2937;       /* لون داكن */
    --light-color: #f9fafb;      /* لون فاتح */
}
```

### 2. أمثلة لنظم ألوان مختلفة

#### نظام ألوان أزرق:
```css
:root {
    --primary-color: #3b82f6;    /* أزرق */
    --secondary-color: #2563eb;  /* أزرق غامق */
    --accent-color: #60a5fa;     /* أزرق فاتح */
}
```

#### نظام ألوان برتقالي:
```css
:root {
    --primary-color: #f97316;    /* برتقالي */
    --secondary-color: #ea580c;  /* برتقالي غامق */
    --accent-color: #fb923c;     /* برتقالي فاتح */
}
```

#### نظام ألوان بنفسجي:
```css
:root {
    --primary-color: #8b5cf6;    /* بنفسجي */
    --secondary-color: #7c3aed;  /* بنفسجي غامق */
    --accent-color: #a78bfa;     /* بنفسجي فاتح */
}
```

### 3. تغيير ألوان المنتجات

في ملف `index.html`، ابحث عن بطاقات المنتجات وغيّر التدرجات:

```html
<!-- مثال: تغيير لون بطاقة المياه -->
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600">
    <!-- غيّر from-blue-500 و to-cyan-600 بالألوان المطلوبة -->
</div>
```

#### أمثلة للتدرجات:
```html
<!-- تدرج وردي -->
from-pink-500 to-rose-600

<!-- تدرج أخضر -->
from-green-500 to-emerald-600

<!-- تدرج أرجواني -->
from-purple-500 to-violet-600

<!-- تدرج ذهبي -->
from-yellow-500 to-amber-600
```

---

## 🖼️ تخصيص الصور والفيديو

### 1. تغيير الفيديو الرئيسي

في ملف `index.html`، ابحث عن قسم Hero Section:

```html
<video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
    <!-- ضع رابط الفيديو الخاص بك هنا -->
    <source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
</video>
```

#### مصادر فيديوهات مجانية:
- [Coverr.co](https://coverr.co) - فيديوهات مجانية عالية الجودة
- [Pexels Videos](https://pexels.com/videos) - مكتبة ضخمة
- [Pixabay](https://pixabay.com/videos) - فيديوهات مجانية

#### نصائح للفيديو:
```
✅ الحجم: يفضل أقل من 10 MB
✅ المدة: 10-30 ثانية (حلقة Loop)
✅ الجودة: 1920x1080 (Full HD)
✅ الصيغة: MP4 (H.264)
```

### 2. تغيير صور المنتجات

ابحث عن علامات `<img>` في قسم Products:

```html
<img src="https://images.unsplash.com/photo-XXXXXX" alt="Water" class="...">
<!-- استبدل برابط صورتك -->
<img src="images/your-product.jpg" alt="منتجك" class="...">
```

#### نصائح للصور:
```
✅ الحجم: 800x800 بيكسل (للمنتجات)
✅ الحجم: يفضل أقل من 200 KB
✅ الصيغة: JPG أو WebP
✅ الخلفية: شفافة PNG للمنتجات
```

### 3. مصادر صور مجانية
- [Unsplash](https://unsplash.com) - صور احترافية مجانية
- [Pexels](https://pexels.com) - مكتبة ضخمة
- [Freepik](https://freepik.com) - صور ورسومات
- [Pixabay](https://pixabay.com) - مجاني تماماً

---

## ✍️ تخصيص النصوص

### 1. تغيير اسم الشركة والشعار

في ملف `index.html`، ابحث عن:

```html
<!-- في القائمة -->
<h1 class="text-3xl font-bold text-white logo-text">
    <span class="text-emerald-400">زمزم</span>
    <span class="text-xs block text-gray-300">للمواد الغذائية</span>
</h1>

<!-- في Hero Section -->
<h2 class="text-6xl md:text-8xl font-black text-white mb-6 animate-fade-in">
    شركة <span class="text-emerald-400 hero-highlight">زمزم</span>
</h2>
```

### 2. تغيير الشعار التسويقي

```html
<p class="text-xl md:text-2xl text-emerald-200 mb-12 animate-slide-up">
    من الطبيعة... إلى طاولتك
    <!-- غيّر هذا النص بشعارك -->
</p>
```

### 3. تعديل وصف المنتجات

ابحث عن كل بطاقة منتج وعدّل النص:

```html
<p class="text-blue-100 text-lg mb-6 leading-relaxed">
    مياه نقية معبأة بأحدث التقنيات، تحافظ على نقائها الطبيعي وطعمها المنعش
    <!-- ضع وصف منتجك هنا -->
</p>
```

### 4. تعديل قسم "من نحن"

```html
<!-- الرؤية -->
<p class="text-gray-700 leading-relaxed text-lg">
    أن نكون الشركة الرائدة في تقديم المنتجات الغذائية...
    <!-- ضع رؤيتك هنا -->
</p>

<!-- المهمة -->
<p class="text-gray-700 leading-relaxed text-lg">
    تزويد عملائنا بمنتجات غذائية طبيعية...
    <!-- ضع مهمتك هنا -->
</p>
```

---

## ➕ إضافة منتجات جديدة

### خطوات إضافة منتج جديد:

1. **انسخ بنية بطاقة منتج موجودة:**

```html
<!-- Product Card Template -->
<div class="product-card group">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-COLOR1 to-COLOR2 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
        
        <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <i class="fas fa-ICON_NAME text-5xl text-white"></i>
                </div>
                <div class="text-white/60 text-6xl font-black">06</div>
            </div>
            
            <h3 class="text-3xl font-black text-white mb-3">اسم المنتج</h3>
            <p class="text-COLOR-100 text-lg mb-6 leading-relaxed">
                وصف المنتج هنا...
            </p>
            
            <div class="flex items-center gap-3 mb-6">
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">ميزة 1</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">ميزة 2</span>
            </div>

            <div class="product-image-container">
                <img src="YOUR_IMAGE_URL" alt="المنتج" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500">
            </div>
        </div>
    </div>
</div>
```

2. **خصص البطاقة:**
   - غيّر `from-COLOR1 to-COLOR2` بألوان تدرج مناسبة
   - غيّر `fa-ICON_NAME` باسم الأيقونة من Font Awesome
   - غيّر الرقم `06` بالرقم التالي
   - أضف اسم ووصف المنتج
   - أضف رابط صورة المنتج

3. **ألصق البطاقة الجديدة** في قسم Products بعد البطاقة الأخيرة

### مثال: إضافة منتج "العسل":

```html
<div class="product-card group">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
        
        <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <i class="fas fa-honey-pot text-5xl text-white"></i>
                </div>
                <div class="text-white/60 text-6xl font-black">06</div>
            </div>
            
            <h3 class="text-3xl font-black text-white mb-3">العسل الطبيعي</h3>
            <p class="text-amber-100 text-lg mb-6 leading-relaxed">
                عسل طبيعي 100% من أنقى المناحل، غني بالفيتامينات والمعادن
            </p>
            
            <div class="flex items-center gap-3 mb-6">
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">طبيعي 100%</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">صحي</span>
            </div>

            <div class="product-image-container">
                <img src="YOUR_HONEY_IMAGE.jpg" alt="العسل" class="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500">
            </div>
        </div>
    </div>
</div>
```

---

## 📞 تعديل معلومات التواصل

### 1. تغيير معلومات الاتصال

في ملف `index.html`، ابحث عن قسم Contact:

```html
<!-- الموقع -->
<p class="text-gray-600">المملكة العربية السعودية - الرياض</p>
<!-- غيّر بعنوانك -->

<!-- الهاتف -->
<p class="text-gray-600" dir="ltr">+966 XX XXX XXXX</p>
<!-- غيّر برقم هاتفك -->

<!-- البريد الإلكتروني -->
<p class="text-gray-600">info@zamzam-food.com</p>
<!-- غيّر ببريدك الإلكتروني -->
```

### 2. تغيير روابط وسائل التواصل

```html
<!-- Facebook -->
<a href="#" class="...">
    <!-- غيّر # برابط صفحة الفيسبوك -->
    <i class="fab fa-facebook-f text-xl text-white"></i>
</a>

<!-- Twitter -->
<a href="#" class="...">
    <!-- غيّر # برابط حساب تويتر -->
    <i class="fab fa-twitter text-xl text-white"></i>
</a>

<!-- Instagram -->
<a href="#" class="...">
    <!-- غيّر # برابط حساب إنستغرام -->
    <i class="fab fa-instagram text-xl text-white"></i>
</a>

<!-- LinkedIn -->
<a href="#" class="...">
    <!-- غيّر # برابط صفحة لينكد إن -->
    <i class="fab fa-linkedin-in text-xl text-white"></i>
</a>
```

---

## 🎬 تخصيص الأنيميشنات

### 1. تغيير سرعة الأنيميشنات

في ملف `style.css`:

```css
/* مثال: تغيير سرعة fadeIn */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* الاستخدام */
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    /* غيّر 1s بالمدة المطلوبة (0.5s, 2s, إلخ) */
}
```

### 2. إيقاف الأنيميشنات (اختياري)

إذا أردت إيقاف بعض الأنيميشنات:

```css
/* أضف هذا في نهاية style.css */
.animate-fade-in,
.animate-slide-up,
.product-card {
    animation: none !important;
}
```

### 3. تخصيص تأثير Parallax

في ملف `script.js`:

```javascript
// ابحث عن Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        /* غيّر 0.5 بقيمة أخرى:
           - 0.3 = حركة أبطأ
           - 0.7 = حركة أسرع
        */
    }
});
```

---

## 🎨 أمثلة تخصيص سريعة

### مثال 1: تغيير النظام لنظام أزرق كامل

```css
/* في style.css */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #2563eb;
    --accent-color: #60a5fa;
}
```

```html
<!-- في index.html - Hero Section -->
<span class="text-blue-400">زمزم</span>

<!-- غيّر جميع emerald-400 إلى blue-400 -->
<!-- غيّر جميع green-600 إلى blue-600 -->
```

### مثال 2: إضافة لوغو الشركة

```html
<!-- في Navigation -->
<div class="logo-container flex items-center gap-3">
    <img src="images/logo.png" alt="Logo" class="w-12 h-12">
    <h1 class="text-3xl font-bold text-white logo-text">
        <span class="text-emerald-400">زمزم</span>
    </h1>
</div>
```

### مثال 3: تغيير الخطوط

```html
<!-- في <head> -->
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
```

```css
/* في style.css */
body {
    font-family: 'Cairo', sans-serif;
}
```

---

## 🔗 روابط مفيدة

### أدوات الألوان:
- [Coolors.co](https://coolors.co) - مولد نظم الألوان
- [Adobe Color](https://color.adobe.com) - عجلة الألوان
- [ColorHunt](https://colorhunt.co) - لوحات ألوان جاهزة

### أدوات الأيقونات:
- [Font Awesome](https://fontawesome.com/icons) - بحث الأيقونات
- [Iconify](https://iconify.design) - مكتبة أيقونات ضخمة

### أدوات الصور:
- [TinyPNG](https://tinypng.com) - ضغط الصور
- [Remove.bg](https://remove.bg) - إزالة الخلفية
- [Squoosh](https://squoosh.app) - تحسين الصور

### أدوات التطوير:
- [Can I Use](https://caniuse.com) - دعم المتصفحات
- [CSS Gradient](https://cssgradient.io) - مولد التدرجات
- [Animate.css](https://animate.style) - أنيميشنات جاهزة

---

## 💡 نصائح احترافية

### ✅ أفضل الممارسات:
1. احتفظ بنسخة احتياطية قبل التعديل
2. اختبر على متصفحات مختلفة
3. تأكد من الاستجابة للموبايل
4. استخدم صور محسّنة
5. احتفظ بنظام ألوان متناسق

### ⚠️ تجنب:
1. استخدام صور كبيرة الحجم
2. الإفراط في الأنيميشنات
3. ألوان متضاربة
4. نصوص صغيرة جداً
5. روابط معطلة

---

## 📞 الدعم

إذا واجهت أي مشكلة في التخصيص:
1. راجع هذا الدليل
2. تحقق من الكونسول في المتصفح (F12)
3. تأكد من صحة الكود
4. ارجع للنسخة الأصلية إذا لزم الأمر

---

**استمتع بتخصيص موقعك!** 🎨✨

*نتمنى لك تجربة رائعة مع موقع زمزم للمواد الغذائية* 🌿