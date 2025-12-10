import React, { useState } from 'react';
import { ExpenseItem } from '../types';

const MOCK_DATA: ExpenseItem[] = [
  { id: '1', date: '2025-10-01', description: 'Trà sữa Full Topping (Size XL)', amount: 65000, category: 'Ăn uống', note: 'Cần đường để code' },
  { id: '2', date: '2025-10-02', description: 'Gói Netflix Premium 4K', amount: 260000, category: 'Giải trí', note: 'Nghiên cứu thị trường phim ảnh' },
  { id: '3', date: '2025-10-03', description: 'Vé máy bay đi chữa lành', amount: 2500000, category: 'Tâm linh', note: 'Tâm hồn bị tổn thương do deadline' },
  { id: '4', date: '2025-10-05', description: 'Mạng Wifi gói Super Fast', amount: 350000, category: 'Cá nhân', note: 'Để upload sao kê cho nhanh' },
  { id: '5', date: '2025-10-06', description: 'Mua quần áo mới', amount: 1200000, category: 'Cá nhân', note: 'Mặc đẹp để livestream xin donate' },
  { id: '6', date: '2025-10-07', description: 'Tiền điện (Máy lạnh 16 độ)', amount: 1500000, category: 'Cá nhân', note: 'Nóng quá không chịu nổi' },
  { id: '7', date: '2025-10-08', description: 'Ủng hộ quỹ người yêu cũ', amount: 50000, category: 'Tâm linh', note: 'Trả nghiệp' },
  { id: '8', date: '2025-10-10', description: 'Đi Spa tắm trắng', amount: 800000, category: 'Cá nhân', note: 'Tẩy trần bụi đời' },
];

const StatementTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = MOCK_DATA.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSpent = MOCK_DATA.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div id="statement" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Minh Bạch Tài Chính (Sao Kê)</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Chúng tôi cam kết công khai mọi khoản chi tiêu. Nếu bạn thấy khoản nào vô lý, thì đó là do bạn chưa hiểu được tầm nhìn vĩ mô của dự án.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Controls */}
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Tìm kiếm khoản chi (ví dụ: trà sữa)..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-slate-600">
              Tổng chi tiêu: <span className="text-rose-600 font-bold text-lg">{totalSpent.toLocaleString('vi-VN')} đ</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold border-b border-slate-200">Ngày</th>
                  <th className="p-4 font-semibold border-b border-slate-200">Nội dung</th>
                  <th className="p-4 font-semibold border-b border-slate-200">Danh mục</th>
                  <th className="p-4 font-semibold border-b border-slate-200 text-right">Số tiền</th>
                  <th className="p-4 font-semibold border-b border-slate-200">Ghi chú (Giải trình)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 whitespace-nowrap text-slate-500">{item.date}</td>
                      <td className="p-4 font-medium text-slate-900">{item.description}</td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                          ${item.category === 'Ăn uống' ? 'bg-green-100 text-green-700' : 
                            item.category === 'Giải trí' ? 'bg-purple-100 text-purple-700' :
                            item.category === 'Tâm linh' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'}`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 text-right font-mono text-rose-600">-{item.amount.toLocaleString('vi-VN')} đ</td>
                      <td className="p-4 italic text-slate-500">"{item.note}"</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      Không tìm thấy dữ liệu. Có thể do lỗi đánh máy hoặc đã bị xóa để bảo vệ sự riêng tư.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-400">
            Dữ liệu được cập nhật Real-time bằng cơm. Sai số +/- 50% tùy cảm hứng.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementTable;