JAGUAR Chess - تطبيق ويب (PWA) + استضافة + جوجل
================================================

الملفات
  index.html            اللعبة
  manifest.webmanifest  بيانات التطبيق (الاسم، الأيقونات، الألوان)
  sw.js                 يخزّن اللعبة عشان تشتغل بدون إنترنت بعد أول فتح
  icons/                أيقونات التطبيق (من صورتك)
  robots.txt, sitemap.xml

1) قبل الرفع
   - استبدل YOUR-DOMAIN.com بدومينك الحقيقي في index.html (canonical و og:url و og:image)
     وفي robots.txt و sitemap.xml.
   - (مفضّل) حمّل three.js إصدار r128 من
       https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
     واحفظه باسم three.min.js جنب index.html. الـ service worker بيخزّنه،
     فاللعبة تشتغل أوفلاين وماتعتمدش على أي CDN.

2) الرفع
   - لازم HTTPS (Netlify / Cloudflare Pages / GitHub Pages كلهم بيدوه تلقائياً).
   - ارفع الفولدر كله بحيث index.html في الجذر. التطبيق ما بيتثبّتش لو فتحته كملف من الجهاز مباشرة.

3) التثبيت كتطبيق
   - أندرويد (Chrome): هيظهر زرار "ثبّت التطبيق" في قائمة اللعبة، أو من قائمة المتصفح "Install app".
   - iPhone (Safari): مشاركة ثم "إضافة إلى الشاشة الرئيسية".
   - كمبيوتر (Chrome/Edge): أيقونة التثبيت في شريط العنوان.

4) ملف APK لأندرويد (بعد ما الموقع يشتغل على HTTPS)
   - الأسهل: ادخل pwabuilder.com، حط رابط موقعك، اختار Package for Android، وحمّل الـ APK/AAB.
   - للنشر على Google Play محتاج حساب مطوّر (رسوم لمرة واحدة) وتحتفظ بمفتاح التوقيع.
   - بدائل: Bubblewrap أو Capacitor لو عايز تحكم أكتر.

5) جوجل
   سجّل الموقع في Search Console، أضف sitemap.xml، واطلب فهرسة الصفحة. الأرشفة بتاخد أيام لأسابيع.
