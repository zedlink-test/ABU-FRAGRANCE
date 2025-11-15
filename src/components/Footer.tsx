import { Facebook, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  language: 'ar' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/people/%D8%A3%D8%A8%D9%88-%D8%A7%D9%84%D8%B9%D8%B7%D9%88%D8%B1/61578060434563/#', label: 'Facebook' },
    { icon: MessageCircle, url: 'https://wa.me/+213778057076', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#6B1B3D] to-[#4A1229] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/1000028122.jpg"
              alt="Abu Al-Autoor Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-bold text-[#B8860B]">
              {language === 'ar' ? 'أبو العطور' : 'Abu Al-Autoor'}
            </span>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3 text-[#B8860B]">
              {language === 'ar' ? 'تابعنا' : 'Follow Us'}
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-[#B8860B] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@abou.fragrance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#B8860B] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'جودة . سعر . مصداقية'
                : 'Quality . Price . Credibility'}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
  <p className="text-white/70">
    {language === 'ar'
      ? '© 2024 أبو العطور. جميع الحقوق محفوظة.'
      : '© 2024 Abu Al-Autoor. All rights reserved.'}
  </p>

  <p className="text-white/70 mt-2">
    {language === 'ar' ? (
      <>
        تم التطوير بواسطة{" "}
        <a
          href="https://zedlink.netlify.app"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZED-LINK Solutions
        </a>
      </>
    ) : (
      <>
        Developed By{" "}
        <a
          href="https://zedlink.netlify.app"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZED-LINK Solutions
        </a>
      </>
    )}
  </p>
</div>

      </div>
    </footer>
  );
}
