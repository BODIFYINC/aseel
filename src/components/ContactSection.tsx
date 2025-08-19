
const ContactSection = () => {
  const contactMethods = [
    {
      icon: '📞',
      title: 'الهاتف',
      info: '+2180927330040 / +2180917330040',
      link: 'tel:+2180927330040',
      description: 'اتصل بنا مباشرة'
    },
    {
      icon: '💬',
      title: 'واتساب',
      info: 'راسلنا على واتساب',
      link: 'https://wa.me/2180925142211',
      description: 'تواصل سريع ومباشر'
    },
    {
      icon: '📱',
      title: 'تيك توك',
      info: '@aseilalgaid',
      link: 'https://www.tiktok.com/@aseilalgaid',
      description: 'تابعونا للنصائح الطبية'
    },
    {
      icon: '📘',
      title: 'فيسبوك',
      info: 'مصحة أسيل الغد',
      link: 'https://www.facebook.com/aseelalgad',
      description: 'آخر الأخبار والتحديثات'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-navy-800 to-medical-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">تواصل معنا</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا بأي طريقة تناسبكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-800/50 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-navy-700/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-medical-500/30 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
              <p className="text-slate-200 mb-2">{method.info}</p>
              <p className="text-sm text-slate-300">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Quick contact section */}
        <div className="bg-navy-800/50 backdrop-blur-lg rounded-2xl p-8 border border-medical-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">اتصل بنا الآن</h3>
              <p className="text-slate-200 mb-6">
                فريقنا الطبي متاح لاستقبال استفساراتكم والرد على جميع أسئلتكم
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-500/30 rounded-full flex items-center justify-center border border-medical-500/50">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">الهاتف الأساسي</p>
                    <p className="text-slate-200 dir-ltr text-right">+2180927330040</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-500/30 rounded-full flex items-center justify-center border border-medical-500/50">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">الهاتف الثانوي</p>
                    <p className="text-slate-200 dir-ltr text-right">+2180917330040</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center animate-slide-in-right">
              <div className="bg-navy-700/40 rounded-2xl p-8 border border-medical-500/30">
                <h4 className="text-xl font-semibold mb-4">خدمة عملاء متميزة</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-medical-200">24/7</div>
                    <div className="text-sm text-slate-300">خدمة مستمرة</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-medical-200">15+</div>
                    <div className="text-sm text-slate-300">تخصص طبي</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/2180925142211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>💬</span>
                  راسلنا على واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
