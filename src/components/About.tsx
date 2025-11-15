import { Award, Heart, Shield, Sparkles } from 'lucide-react';

interface AboutProps {
  language: 'ar' | 'en';
}

export default function About({ language }: AboutProps) {
  const features = language === 'ar' ? [
    { icon: Award, title: 'جودة عالية', description: 'نستخدم أفضل المكونات الطبيعية' },
    { icon: Shield, title: 'مصداقية', description: 'سمعتنا تتحدث عنا منذ سنوات' },
    { icon: Heart, title: 'صنع بحب', description: 'كل عطر مصنوع بعناية فائقة' },
    { icon: Sparkles, title: 'أصالة', description: 'عطور أصلية بضمان 100%' }
  ] : [
    { icon: Award, title: 'High Quality', description: 'We use the finest natural ingredients' },
    { icon: Shield, title: 'Credibility', description: 'Our reputation speaks for us for years' },
    { icon: Heart, title: 'Made with Love', description: 'Each perfume is crafted with care' },
    { icon: Sparkles, title: 'Authenticity', description: 'Original perfumes with 100% guarantee' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#6B1B3D] to-[#8B2651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'نحن متخصصون في تقديم أرقى العطور العالمية بجودة عالية وأسعار مناسبة. نؤمن بأن العطر ليس مجرد رائحة، بل هو تعبير عن الشخصية والذوق الرفيع.'
              : 'We specialize in providing the finest perfumes in the world with high quality and reasonable prices. We believe that perfume is not just a scent, but an expression of personality and refined taste.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B] rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            {language === 'ar' ? 'عملاؤنا السعداء' : 'Our Happy Customers'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#B8860B] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">
                  {language === 'ar'
                    ? '"عطور رائعة وجودة ممتازة، أنصح بها بشدة!"'
                    : '"Amazing perfumes with excellent quality, highly recommended!"'}
                </p>
                <p className="font-semibold">
                  {language === 'ar' ? `عميل ${index + 1}` : `Customer ${index + 1}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
