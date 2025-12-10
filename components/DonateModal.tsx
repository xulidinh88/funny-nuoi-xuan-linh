import React from 'react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all scale-100 animate-slide-up overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            🤑
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Quét Mã Để Nuôi Em</h3>
          <p className="text-slate-500 mb-6 text-sm">Mọi sự đóng góp đều được ghi nhận (vào bụng)</p>
          
          <div className="space-y-4">
             {/* QR Code generated from VietQR */}
             <div className="flex justify-center">
               <div className="p-2 border border-slate-200 rounded-xl shadow-sm bg-white">
                 <img 
                   src="https://img.vietqr.io/image/TCB-19070313726011-compact2.png?amount=0&addInfo=Ung%20ho%20du%20an%20nuoi%20toi&accountName=XUAN%20LINH" 
                   alt="QR Code Techcombank"
                   className="w-full max-w-[280px] h-auto rounded-lg"
                 />
               </div>
             </div>

             <div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-left">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-xs text-slate-500 uppercase font-bold">Ngân hàng</span>
                 <span className="text-xs font-bold text-slate-700">Techcombank</span>
               </div>
               <div className="flex justify-between items-center mb-1">
                 <span className="text-xs text-slate-500 uppercase font-bold">Số tài khoản</span>
                 <span className="text-lg font-mono text-rose-600 font-bold tracking-wider">19070313726011</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-xs text-slate-500 uppercase font-bold">Chủ tài khoản</span>
                 <span className="text-sm font-bold text-slate-700 uppercase">Xuan Linh</span>
               </div>
             </div>
          </div>

          <button 
            onClick={onClose}
            className="mt-6 w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Đã chuyển (hoặc chưa nhưng bấm cho vui)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;