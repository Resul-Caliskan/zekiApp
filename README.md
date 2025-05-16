📚 ZekiApp – Akıllı Soru Çözüm Asistanı
ZekiApp, öğrencilerin telefon kameralarıyla çektikleri soruları otomatik olarak algılayan, OCR (Optik Karakter Tanıma) ile metne çeviren ve bu metni LaTeX formatında düzenleyerek AI destekli bir sistem (ChatGPT) ile çözümler sunan bir mobil uygulamadır.
🚀 Özellikler

📷 OCR Desteği: Öğrencilerin yüklediği soru fotoğraflarını yüksek doğrulukla tanır.
🧠 AI Çözümleme: Sorular ChatGPT API'si üzerinden çözdürülerek detaylı çözümler sunulur.
🔣 LaTeX Formatlama: OCR sonrası metin, matematiksel ifadeler için LaTeX formatına dönüştürülür.
📊 Öğrenme Takibi (Geliştiriliyor): Öğrencilerin zorlandığı konular analiz edilip raporlanır.
✨ Yeni Soru Üretme (Geliştiriliyor): Çözülen sorulara benzer yeni sorular üretilebilir.

🧩 Kullanılan Teknolojiler

React Native (Expo)
Firebase (Auth, Firestore, Storage)
Python Backend (FastAPI ile)
[pix2text](https://www.breezedeus.com/pix2text) OCR (Sunucu tarafı)
OpenAI GPT API (ChatGPT-4)
MathJax / KaTeX (LaTeX gösterimi)

🖼️ Uygulama Akışı

Fotoğraf Yükleme – Öğrenci uygulamadan soru fotoğrafını çeker veya yükler.
OCR & LaTeX Dönüşüm – Görselden metin çıkarılır ve LaTeX formatına dönüştürülür.
AI ile Çözüm – Soru, OpenAI API üzerinden çözdürülür.
Sonuçların Gösterimi – Kullanıcıya çözüm adım adım sunulur.

📲 Kurulum
Mobil Uygulama (React Native + Expo)
bashgit clone https://github.com/Resul-Caliskan/zekiApp.git
cd zekiApp
npm install
npx expo start
Uygulamayı Expo Go ile test edebilirsiniz.
Python Backend (AI API + OCR Servisi)
Backend klasörü proje içinde ayrı bir dizindedir (örn: /backend).
bashcd backend
pip install -r requirements.txt
uvicorn main:app --reload
Ortam Değişkenleri
.env dosyasına aşağıdaki gibi OpenAI API anahtarınızı eklemeyi unutmayın:
iniOPENAI_API_KEY=your_openai_api_key
🧪 Örnek Soru ve Çözüm
Girdi (Fotoğraf):
[Soru fotoğrafı]
OCR Çıktısı (LaTeX):
latex\frac{2x + 3}{x - 1} = 5
AI Çözümü:
markdown1. Her iki tarafı x - 1 ile çarp:
   (2x + 3) = 5(x - 1)

2. Dağıt:
   2x + 3 = 5x - 5

3. Taraf değiştir:
   8 = 3x  → x = \frac{8}{3}
📌 Yol Haritası

 OCR entegrasyonu (Tesseract + Backend)
 LaTeX formatlama
 ChatGPT ile çözüm entegrasyonu
 Benzer soru üretme (GPT ile)
 Öğrenci öğrenme takibi
 Admin panel / içerik yönetimi

🤝 Katkıda Bulun
Katkılarınızı memnuniyetle karşılıyoruz! Fork'layın, geliştirin, PR gönderin.
Her türlü öneri, hata bildirimi veya geliştirme için Issues sayfasını kullanabilirsiniz.
📬 İletişim

Geliştirici: Resul Çalışkan
E-posta: [resul@example.com]
LinkedIn: linkedin.com/in/resulcaliskan


💡 ZekiApp, eğitimde fırsat eşitliğini desteklemek amacıyla geliştirilmiş açık kaynaklı bir projedir.
