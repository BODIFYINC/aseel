import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'إطلاق خدمة الطوارئ المتطورة',
      description: 'افتتحنا قسم طوارئ جديد مجهز بأحدث الأجهزة الطبية لتقديم أفضل رعاية طبية طارئة',
      date: '2024-01-15',
      image: '/images/clinic-reception.jpg'
    },
    {
      id: 2,
      title: 'تدشين مختبر التحاليل المتقدم',
      description: 'افتتاح مختبر جديد مجهز بأحدث تقنيات التحاليل الطبية للحصول على نتائج دقيقة وسريعة',
      date: '2024-01-10',
      image: '/images/clinic-interior.jpg'
    },
    {
      id: 3,
      title: 'حملة التطعيم الموسمية',
      description: 'انطلاق حملة التطعيم الموسمية ضد الإنفلونزا وفيروس كورونا للأطفال والكبار',
      date: '2024-01-05',
      image: '/images/clinic-about.jpg'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-slate-900 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            آخر الأخبار
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            تابع آخر التطورات والأخبار الطبية في مصحة أسيل الغد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={item.id} className="bg-slate-800/60 border-medical-500/30 hover:border-medical-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-medical-500/20 opacity-0 animate-slide-in-right" style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <CardHeader>
                <div className="text-sm text-medical-400 mb-2">{item.date}</div>
                <CardTitle className="text-slate-100 group-hover:text-medical-300 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;