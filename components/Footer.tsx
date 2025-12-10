import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Dự Án Nuôi Tôi</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Một dự án phi lợi nhuận (cho bạn) và siêu lợi nhuận (cho tôi). 
              Mọi nội dung trên trang web này chỉ mang tính chất giải trí, châm biếm. 
              Vui lòng không chuyển tiền thật.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Liên kết (Chết)</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật (Không có)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tuyển dụng (Cần người chuyển tiền)</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Đăng ký nhận tin</h3>
            <p className="text-xs text-slate-500 mb-3">Nhận thông báo mỗi khi tôi hết tiền.</p>
            <div className="flex gap-2">
               <input type="email" placeholder="Email của bạn..." className="bg-white border border-slate-300 rounded px-3 py-2 text-sm w-full outline-none focus:border-primary" />
               <button className="bg-slate-900 text-white px-4 py-2 rounded text-sm hover:bg-slate-800">Gửi</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Dự Án Nuôi Tôi. All rights reserved by Xuan Linh.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Facebook</span>
             <span>TikTok</span>
             <span>OnlyFans (Just kidding)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;