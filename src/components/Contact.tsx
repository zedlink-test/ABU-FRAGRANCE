import { Phone, MapPin, Mail } from 'lucide-react';

interface ContactProps {
  language: 'ar' | 'en';
}

export default function Contact({ language }: ContactProps) {
  const contactInfo = language === 'ar' ? {
    title: 'اتصل بنا',
    phone: 'الهاتف',
    address: 'العنوان',
    email: 'البريد الإلكتروني',
    phoneNumber: '76 70 05 0778',
    addressText: 'ساحة الشهداء "زنيقة لعرايس القصبة"،16000 الجزائر',
    emailAddress: 'info@abufragrance.com'
  } : {
    title: 'Contact Us',
    phone: 'Phone',
    address: 'Address',
    email: 'Email',
    phoneNumber: '0778 05 70 76',
    addressText: 'Martyrs Square "Casbah Brides Alley", Algiers 16000, Algeria',
    emailAddress: 'info@abufragrance.com'
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B1B3D] mb-4">
            {contactInfo.title}
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeInUp">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 bg-[#B8860B] rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6B1B3D] mb-2">
                  {contactInfo.phone}
                </h3>
                <p className="text-gray-600" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {contactInfo.phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 bg-[#B8860B] rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6B1B3D] mb-2">
                  {contactInfo.address}
                </h3>
                <p className="text-gray-600" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {contactInfo.addressText}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 bg-[#B8860B] rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6B1B3D] mb-2">
                  {contactInfo.email}
                </h3>
                <p className="text-gray-600">
                  {contactInfo.emailAddress}
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.76817145280074!2d3.0601007225015886!3d36.783569925486624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3003d14dd17%3A0x49e7e9b35606453b!2z2KPYqNmIINin2YTYudi32YjYsQ!5e1!3m2!1sen!2sdz!4v1763233511379!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
