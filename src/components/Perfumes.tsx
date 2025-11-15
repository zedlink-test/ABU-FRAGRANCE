import { ShoppingBag } from 'lucide-react';

interface PerfumesProps {
  language: 'ar' | 'en';
}

export default function Perfumes({ language }: PerfumesProps) {
  const perfumes = language === 'ar' ? [
    { name: 'عود ملكي', description: 'عطر شرقي فاخر بخلاصة العود الطبيعي', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'زهرة الياسمين', description: 'عطر زهري راقي برائحة الياسمين الطبيعي', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'مسك الليل', description: 'عطر مسكي ساحر يدوم طويلاً', image: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'عنبر فاخر', description: 'عطر كلاسيكي بخلاصة العنبر الأصيل', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'وردة دمشقية', description: 'عطر رومانسي مستوحى من الورد الدمشقي', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'صندل ملكي', description: 'عطر خشبي فاخر برائحة الصندل الطبيعي', image: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'زعفران ذهبي', description: 'عطر شرقي بخلاصة الزعفران الفاخر', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'كشمير الشرق', description: 'عطر ناعم بلمسة شرقية راقية', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ] : [
    { name: 'Royal Oud', description: 'Luxurious oriental perfume with natural oud extract', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'Jasmine Flower', description: 'Elegant floral perfume with natural jasmine scent', image: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'Night Musk', description: 'Enchanting musky perfume with long-lasting effect', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Luxury Amber', description: 'Classic perfume with authentic amber extract', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'Damascus Rose', description: 'Romantic perfume inspired by Damascus rose', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Royal Sandalwood', description: 'Luxury woody perfume with natural sandalwood', image: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'Golden Saffron', description: 'Oriental perfume with luxury saffron extract', image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    { name: 'Kashmir Orient', description: 'Soft perfume with elegant oriental touch', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const whatsappMessage = language === 'ar'
    ? 'مرحبا، أنا مهتم بـ'
    : 'Hello, I am interested in';

  const handleBuy = (perfumeName: string) => {
    const message = `${whatsappMessage} ${perfumeName}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="perfumes" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B1B3D] mb-4">
            {language === 'ar' ? 'عطورنا الفاخرة' : 'Our Luxury Perfumes'}
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'مجموعة متميزة من العطور الفاخرة المصنوعة من أجود المكونات الطبيعية'
              : 'A distinctive collection of luxury perfumes made from the finest natural ingredients'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#6B1B3D] mb-2">
                  {perfume.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {perfume.description}
                </p>
                <button
                  onClick={() => handleBuy(perfume.name)}
                  className="w-full bg-[#B8860B] hover:bg-[#6B1B3D] text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">
                    {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
