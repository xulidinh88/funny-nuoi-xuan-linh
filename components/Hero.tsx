import React from 'react';

interface HeroProps {
  onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-purple-50 to-rose-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-600 mb-8 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-rose-600 mr-2"></span>
          Đang kêu gọi đợt 5: Mùa hè nóng quá cần tiền đi Đà Lạt
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-slate-900 sm:text-7xl mb-6">
          Dự Án <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Nuôi Xuân Linh</span>
          <br />
          <span className="italic text-4xl sm:text-6xl font-serif font-light text-slate-600 mt-2 block">Vì một tương lai béo tốt</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 mb-10">
          "Một miếng khi đói bằng một gói khi no, nhưng một gói khi no thì ăn vẫn ngon." 
          Hãy chung tay giúp Xuân Linh đạt được ước mơ tự do tài chính mà không cần làm gì cả.
          Mọi khoản đóng góp đều được (cố gắng) minh bạch.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onDonateClick}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            Nuôi Tôi Ngay
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;