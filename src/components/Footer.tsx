
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'gallery', label: 'صور' },
    { id: 'testimonials', label: 'آراء العملاء' },
    { id: 'hours', label: 'أوقات العمل' },
    { id: 'location', label: 'الموقع' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const socialLinks = [
    {
      name: 'واتساب',
      url: 'https://wa.me/2180925142211',
      icon: '💬'
    },
    {
      name: 'تيك توك',
      url: 'https://www.tiktok.com/@aseilalgaid',
      icon: '📱'
    },
    {
      name: 'فيسبوك',
      url: 'https://www.facebook.com/aseelalgad',
      icon: '📘'
    }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer content */}
      <div className="section-padding border-b border-navy-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-medical-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">أ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">مصحة أسيل الغد</h3>
                  <p className="text-slate-300">رعاية طبية شاملة</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                منشأة طبية متكاملة في مدينة سبها تقدم خدمات طبية متخصصة على يد نخبة من الأطباء المتميزين على مدار الساعة.
              </p>
              
              <div className="space-y-2">
                <p className="text-slate-300">
                  <span className="font-semibold">الهاتف:</span> +2180927330040 / +2180917330040
                </p>
                <p className="text-slate-300">
                  <span className="font-semibold">العنوان:</span> سبها، ليبيا
                </p>
                <p className="text-slate-300">
                  <span className="font-semibold">ساعات العمل:</span> 24/7
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-slate-300 hover:text-medical-400 transition-colors duration-300 text-right w-full"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links and services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">تابعونا</h4>
              <div className="space-y-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-medical-400 transition-colors duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>

              <div className="bg-medical-900/20 rounded-lg p-4 border border-medical-700/30">
                <h5 className="font-semibold mb-2 text-medical-300">خدمة طوارئ</h5>
                <p className="text-sm text-slate-300">متاحة 24 ساعة يومياً</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-right">
              © 2025 مصحة أسيل الغد - جميع الحقوق محفوظة
            </p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="bg-medical-600 hover:bg-medical-700 text-white p-2 rounded-full transition-colors duration-300"
                aria-label="العودة للأعلى"
              >
                <span className="block w-5 h-5 text-center">↑</span>
              </button>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span>صنع بـ</span>
                <span className="text-red-400">❤️</span>
                <span>في ليبيا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
