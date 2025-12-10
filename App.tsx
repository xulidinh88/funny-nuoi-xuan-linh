import React, { useState } from 'react';
import Hero from './components/Hero';
import StatementTable from './components/StatementTable';
import BotChat from './components/BotChat';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';

const App: React.FC = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass shadow-sm transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">
              XL
            </div>
            <span className="font-bold text-lg tracking-tight">Nuôi Xuân Linh</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-primary transition-colors">Trang chủ</a>
            <a href="#statement" className="hover:text-primary transition-colors">Sao kê minh bạch</a>
            <a href="#chat" className="hover:text-primary transition-colors">Chất vấn</a>
          </div>

          <button 
            onClick={() => setIsDonateModalOpen(true)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition-colors"
          >
            Ủng hộ tôi
          </button>
        </div>
      </nav>

      <main>
        <Hero onDonateClick={() => setIsDonateModalOpen(true)} />
        
        {/* Statistics Section - Mocking impact */}
        <section className="py-12 bg-white border-b border-slate-100">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">0đ</div>
                    <div className="text-sm text-slate-500">Đã quyên góp thật</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">100+</div>
                    <div className="text-sm text-slate-500">Ly trà sữa đã uống</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">1</div>
                    <div className="text-sm text-slate-500">Người được nuôi (Tôi)</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">∞</div>
                    <div className="text-sm text-slate-500">Sự mặt dày</div>
                 </div>
              </div>
           </div>
        </section>

        <StatementTable />
        
        <div id="chat">
           <BotChat />
        </div>
      </main>

      <Footer />
      
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
    </div>
  );
};

export default App;