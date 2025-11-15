interface HeroProps {
  language: 'ar' | 'en';
}

export default function Hero({ language }: HeroProps) {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6B1B3D] via-[#8B2651] to-[#6B1B3D]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B8860B] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8860B] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <img
            src="/1000028122.jpg"
            alt="Abu Fragrance"
            className="w-48 h-48 mx-auto mb-8 object-contain drop-shadow-2xl animate-float"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {language === 'ar' ? 'أبو العطور' : 'Abu Fragrance'}
          </h1>
          <p className="text-2xl md:text-3xl text-[#B8860B] mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {language === 'ar' ? 'جودة . سعر . مصداقية' : 'Quality . Price . Credibility'}
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            {language === 'ar'
              ? 'اكتشف عالم العطور الفاخرة حيث تلتقي الأصالة بالجودة'
              : 'Discover the world of luxury perfumes where authenticity meets quality'}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
