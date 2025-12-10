export interface ExpenseItem {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: 'Cá nhân' | 'Ăn uống' | 'Giải trí' | 'Tâm linh';
  note: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageView {
  HOME = 'HOME',
  STATEMENT = 'STATEMENT',
  CHAT = 'CHAT',
}