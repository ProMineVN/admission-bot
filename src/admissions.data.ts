export interface University {
  id: string;
  code: string;
  name: string;
  website: string;
  fanpage: string;
}

export interface Major {
  id: string;
  name: string;
  blocks: string[];
}

export interface AdmissionScore {
  majorId: string;
  year: number;
  block: string;
  score: number;
  note?: string;
}

export const universities: University[] = [
  {
    id: 'HUST',
    code: 'BKA',
    name: 'Đại học Bách khoa Hà Nội',
    website: 'https://www.hust.edu.vn/',
    fanpage: 'https://www.facebook.com/dhbkhanoi',
  },
  {
    id: 'NEU',
    code: 'KHA',
    name: 'Đại học Kinh tế Quốc dân',
    website: 'https://www.neu.edu.vn/',
    fanpage: 'https://www.facebook.com/daihockinhtequocdan',
  },
  {
    id: 'VNU',
    code: 'QHG',
    name: 'Đại học Quốc gia Hà Nội',
    website: 'https://vnu.edu.vn/',
    fanpage: 'https://www.facebook.com/VNU.DHQGHN',
  },
  {
    id: 'FTU',
    code: 'TMU',
    name: 'Đại học Ngoại thương',
    website: 'https://www.ftu.edu.vn/',
    fanpage: 'https://www.facebook.com/TruongDaihocNgoaiThuongFTU',
  },
  {
    id: 'UEL',
    code: 'KTS',
    name: 'Đại học Kinh tế - Luật (ĐHQG TP.HCM)',
    website: 'https://www.uel.edu.vn/',
    fanpage: 'https://www.facebook.com/uel.edu.vn',
  },
  {
    id: 'HCMUS',
    code: 'QST',
    name: 'Đại học Khoa học Tự nhiên (ĐHQG TP.HCM)',
    website: 'https://www.hcmus.edu.vn/',
    fanpage: 'https://www.facebook.com/daihockhoahoctunhien',
  },
  {
    id: 'HCMUT',
    code: 'BKC',
    name: 'Đại học Bách khoa (ĐHQG TP.HCM)',
    website: 'https://www.hcmut.edu.vn/',
    fanpage: 'https://www.facebook.com/dhbk.hcmut',
  },
  {
    id: 'UEH',
    code: 'KSA',
    name: 'Đại học Kinh tế TP.HCM',
    website: 'https://www.ueh.edu.vn/',
    fanpage: 'https://www.facebook.com/ueh.edu.vn',
  },
  {
    id: 'HUL',
    code: 'LBH',
    name: 'Đại học Luật Hà Nội',
    website: 'https://hlu.edu.vn/',
    fanpage: 'https://www.facebook.com/dhluathanoi',
  },
  {
    id: 'HANU',
    code: 'MHA',
    name: 'Đại học Hà Nội',
    website: 'https://www.hanu.vn/',
    fanpage: 'https://www.facebook.com/hanu.edu.vn',
  },
  {
    id: 'HVBC',
    code: 'HVBC',
    name: 'Học viện Báo chí và Tuyên truyền',
    website: 'https://ajc.edu.vn/',
    fanpage: 'https://www.facebook.com/hocvienbaochivatuyentruyen',
  },
  {
    id: 'UTC',
    code: 'GHA',
    name: 'Đại học Giao thông Vận tải',
    website: 'https://www.utc.edu.vn/',
    fanpage: 'https://www.facebook.com/truongdhgiaothongvantai',
  },
  {
    id: 'HVNH',
    code: 'NHH',
    name: 'Học viện Ngân hàng',
    website: 'https://www.hvnh.edu.vn/',
    fanpage: 'https://www.facebook.com/hocviennganhang.hvnh',
  },
];

export const majors: Major[] = [
  { id: 'IT1', name: 'Khoa học Máy tính', blocks: ['A00', 'A01'] },
  { id: 'ME1', name: 'Kỹ thuật Cơ điện tử', blocks: ['A00', 'A01'] },
  { id: 'ET1', name: 'Kỹ thuật Điện tử - Viễn thông', blocks: ['A00', 'A01'] },
  { id: 'MKT', name: 'Marketing', blocks: ['A00', 'A01', 'D01', 'D07'] },
  { id: 'ACC', name: 'Kế toán', blocks: ['A00', 'A01', 'D01'] },
  { id: 'FIN', name: 'Tài chính - Ngân hàng', blocks: ['A00', 'A01', 'D01', 'D07'] },
  { id: 'LAW', name: 'Luật học', blocks: ['A00', 'C00', 'D01'] },
  { id: 'CNTT', name: 'Công nghệ thông tin', blocks: ['A00', 'A01', 'D01'] },
  { id: 'QTKD', name: 'Quản trị Kinh doanh', blocks: ['A00', 'A01', 'D01', 'C00'] },
  { id: 'KDL', name: 'Kinh doanh Quốc tế', blocks: ['A00', 'A01', 'D01'] },
  { id: 'TA', name: 'Ngôn ngữ Anh', blocks: ['D01'] },
  { id: 'TRUYEN', name: 'Truyền thông Đa phương tiện', blocks: ['A01', 'D01', 'C00'] },
  { id: 'XD', name: 'Kỹ thuật Xây dựng', blocks: ['A00', 'A01'] },
  { id: 'OTO', name: 'Kỹ thuật Ô tô', blocks: ['A00', 'A01'] },
  { id: 'LOGI', name: 'Logistics và Quản lý chuỗi cung ứng', blocks: ['A00', 'A01', 'D01', 'D07'] },
  { id: 'TH', name: 'Toán học', blocks: ['A00', 'A01'] },
  { id: 'HH', name: 'Hóa học', blocks: ['A00', 'B00'] },
  { id: 'GDTC', name: 'Giáo dục Thể chất', blocks: ['T00', 'D01'] },
];

export const scores: Record<string, AdmissionScore[]> = {
  HUST: [
    { majorId: 'IT1', year: 2024, block: 'A00', score: 28.53 },
    { majorId: 'IT1', year: 2024, block: 'A01', score: 28.53 },
    { majorId: 'ME1', year: 2024, block: 'A00', score: 27.49 },
    { majorId: 'ET1', year: 2024, block: 'A01', score: 27.41 },
  ],
  NEU: [
    { majorId: 'MKT', year: 2024, block: 'D01', score: 27.78 },
    { majorId: 'ACC', year: 2024, block: 'D01', score: 27.29 },
    { majorId: 'FIN', year: 2024, block: 'D07', score: 27.3 },
  ],
  FTU: [
    { majorId: 'KDL', year: 2024, block: 'D01', score: 28.1 },
    { majorId: 'QTKD', year: 2024, block: 'A00', score: 28.1 },
    { majorId: 'TA', year: 2024, block: 'D01', score: 27.0 },
  ],
  UEL: [
    { majorId: 'QTKD', year: 2024, block: 'A00', score: 26.33 },
    { majorId: 'FIN', year: 2024, block: 'A01', score: 26.17 },
  ],
  HCMUS: [
    { majorId: 'CNTT', year: 2024, block: 'A00', score: 26.0 },
    { majorId: 'TH', year: 2024, block: 'A00', score: 25.55 },
    { majorId: 'HH', year: 2024, block: 'B00', score: 25.42 },
  ],
  HCMUT: [
    { majorId: 'IT1', year: 2024, block: 'A00', score: 84.16, note: 'Thang 90'},
    { majorId: 'XD', year: 2024, block: 'A00', score: 55.38, note: 'Thang 90'},
    { majorId: 'OTO', year: 2024, block: 'A01', score: 78.22, note: 'Thang 90'},
  ],
  UEH: [
    { majorId: 'MKT', year: 2024, block: 'D01', score: 26.8 },
    { majorId: 'IT1', year: 2024, block: 'A00', score: 25.0 },
    { majorId: 'QTKD', year: 2024, block: 'A00', score: 25.8 },
  ],
  HANU: [
    { majorId: 'TA', year: 2024, block: 'D01', score: 35.43, note: 'Môn ngoại ngữ nhân hệ số 2, thang điểm 40' },
    { majorId: 'CNTT', year: 2024, block: 'D01', score: 24.17 },
  ],
  HVBC: [
    { majorId: 'TRUYEN', year: 2024, block: 'A01', score: 27.0 },
    { majorId: 'TRUYEN', year: 2024, block: 'D01', score: 27.0 },
    { majorId: 'TA', year: 2024, block: 'D01', score: 35.2 },
  ],
  UTC: [
    { majorId: 'XD', year: 2024, block: 'A00', score: 23.19 },
    { majorId: 'ME1', year: 2024, block: 'A00', score: 25.66 },
    { majorId: 'LOGI', year: 2024, block: 'A01', score: 59.91	 },
  ],
  HVNH: [
    { majorId: 'FIN', year: 2024, block: 'A00', score: 100 },
    { majorId: 'ACC', year: 2024, block: 'D01', score: 26.25 },
    { majorId: 'MKT', year: 2024, block: 'D07', score: 24.8 },
  ],
};