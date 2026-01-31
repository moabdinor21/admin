
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  lastSent?: string;
}

export interface MessageLog {
  id: string;
  customerId: string;
  customerName: string;
  type: 'Email' | 'SMS' | 'Notification';
  content: string;
  timestamp: string;
  status: 'Sent' | 'Failed';
}

export enum View {
  Dashboard = 'DASHBOARD',
  Customers = 'CUSTOMERS',
  SendMessage = 'SEND_MESSAGE',
  History = 'HISTORY',
  Store = 'STORE',
  Download = 'DOWNLOAD',
  Hosting = 'HOSTING'
}
