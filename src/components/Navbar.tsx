import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = language === 'ar'
    ? [
        { label: 'الرئيسية', id: 'home' },
        { label: 'عطورنا', id: 'perfumes' },
        { label: 'من نحن', id: 'about' },
        { label: 'اتصل بنا', id: 'contact' }
      ]
    : [
        { label: 'Home', id: 'home' },
        { label: 'Our Perfumes', id: 'perfumes' },
        { label: 'About Us', id: 'about' },
        { label: 'Contact Us', id: 'contact' }
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img
              src="/1000028122.jpg"
              alt="Abu Al-Autoor Logo"
              className="h-14 w-14 object-contain"
            />
            <span className="text-2xl font-bold text-[#6B1B3D]">
              {language === 'ar' ? 'أبو العطور' : 'Abu Al-Autoor'}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#6B1B3D] hover:text-[#B8860B] transition-colors duration-300 font-semibold text-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#6B1B3D] transition-all duration-300"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#6B1B3D] p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 bg-white border-t border-gray-200 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-right px-4 py-3 text-[#6B1B3D] hover:bg-gray-50 rounded-lg transition-colors duration-300 font-semibold"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="w-full px-4 py-3 bg-[#B8860B] text-white rounded-lg hover:bg-[#6B1B3D] transition-all duration-300 font-semibold"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </nav>
  );
}
