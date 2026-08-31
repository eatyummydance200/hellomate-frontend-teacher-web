/** MVP 데모용 목업 데이터 — API 연동 전까지 화면 채우는 용도 */

export const currentUser = { initial: '김', name: '김민지', role: '국제교류처 담당자' };

export const dashStats = [
  { label: '이번 학기 발송 공지', value: 128 },
  { label: '평균 열람률', value: '86%' },
  { label: '등록 유학생', value: 312 },
  { label: '답변 대기 메시지', value: 7, tone: 'message' as const },
];

export const recentNotices = [
  { initial: '국', dept: '국제교류처', date: '2026.07.10', title: '2026년 1학기 외국인 학생 건강보험 신청 안내', readRate: 69 },
  { initial: '장', dept: '장학처', date: '2026.07.08', title: '글로벌 인재 장학금 신청 모집 (~7월 30일)', readRate: 86 },
  { initial: '학', dept: '학생처', date: '2026.07.05', title: '2026년 여름학기 수강신청 정정 기간 안내', readRate: 96 },
  { initial: '기', dept: '기숙사', date: '2026.07.03', title: '기숙사 세탁기 점검 안내', readRate: 92 },
];

export const needReply = [
  { initial: 'N', name: 'Nguyen Van An', preview: '베트남 · 서류 준비해서 방문하겠습니…' },
  { initial: 'B', name: 'Bat-Erdene Munkh', preview: '몽골 · 장학금 신청 마감일이 언제인가요?' },
  { initial: 'A', name: 'Aigerim Bekova', preview: '카자흐스탄 · 기숙사 방 변경 문의드려요' },
];

export const sentNotices = [
  { initial: '국', title: '2026년 1학기 외국인 학생 건강보험 신청 안내', meta: '국제교류처 · 2026.07.10 · 312명 발송', readRate: 69, urgent: true },
  { initial: '장', title: '글로벌 인재 장학금 신청 모집 (~7월 30일)', meta: '장학처 · 2026.07.08 · 312명 발송', readRate: 86 },
  { initial: '학', title: '2026년 여름학기 수강신청 정정 기간 안내', meta: '학생처 · 2026.07.05 · 312명 발송', readRate: 96 },
  { initial: '기', title: '기숙사 세탁기 점검 안내', meta: '기숙사 · 2026.07.03 · 148명 발송', readRate: 92 },
  { initial: '국', title: '외국인 유학생 비자(D-2) 연장 신청 안내', meta: '국제교류처 · 2026.06.28 · 312명 발송', readRate: 78 },
  { initial: '경', title: '여름방학 한국어 특별과정 수강생 모집', meta: '언어교육원 · 2026.06.20 · 312명 발송', readRate: 64 },
  { initial: '취', title: '외국인 유학생 교내 근로장학 신청 안내', meta: '취업지원처 · 2026.06.15 · 312명 발송', readRate: 71 },
];

export interface ChatMessage {
  side: 'other' | 'me';
  text: string;
  time: string;
}

export interface Student {
  id: string;
  initial: string;
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
  meta: string;
  noticeContext: string;
  messages: ChatMessage[];
}

export const students: Student[] = [
  {
    id: 'an',
    initial: 'N',
    name: 'Nguyen Van An',
    preview: '네, 서류 준비해서 방문하겠습니다 감사합니다!',
    time: '8분 전',
    unread: true,
    meta: '베트남 · 컴퓨터공학과 2학년 · 2023학번',
    noticeContext: '2026년 1학기 외국인 학생 건강보험 신청 안내',
    messages: [
      { side: 'other', text: '안녕하세요! 건강보험 관련해서 문의드립니다. 서류는 어디로 제출하나요?', time: '오전 9:12' },
      { side: 'me', text: '안녕하세요 An님! 국제교류처(본관 2층) 방문 또는 이메일로 제출 가능합니다 😊', time: '오전 9:15' },
      { side: 'other', text: '이메일 주소를 알 수 있을까요?', time: '오전 9:18' },
      { side: 'me', text: 'intl@hellomate.ac.kr 로 보내주시면 됩니다.\n신청서 양식은 공지사항에 첨부되어 있어요.', time: '오전 9:20' },
      { side: 'other', text: '네, 서류 준비해서 방문하겠습니다 감사합니다!', time: '오전 9:22' },
    ],
  },
  {
    id: 'munkh',
    initial: 'B',
    name: 'Bat-Erdene Munkh',
    preview: '장학금 신청 마감일이 언제인가요?',
    time: '22분 전',
    unread: true,
    meta: '몽골 · 경영학과 3학년 · 2022학번',
    noticeContext: '글로벌 인재 장학금 신청 모집 (~7월 30일)',
    messages: [
      { side: 'other', text: '장학금 신청 마감일이 언제인가요?', time: '오후 2:01' },
    ],
  },
  {
    id: 'aigerim',
    initial: 'A',
    name: 'Aigerim Bekova',
    preview: '알겠습니다, 확인 감사합니다 :)',
    time: '1시간 전',
    meta: '카자흐스탄 · 국제학과 1학년 · 2026학번',
    noticeContext: '기숙사 방 변경 신청 안내',
    messages: [
      { side: 'other', text: '기숙사 방 변경 문의드려요', time: '오후 12:40' },
      { side: 'me', text: '변경 신청은 생활관 행정실에서 접수합니다. 이번 주 금요일까지예요.', time: '오후 12:52' },
      { side: 'other', text: '알겠습니다, 확인 감사합니다 :)', time: '오후 1:03' },
    ],
  },
  {
    id: 'dita',
    initial: 'D',
    name: 'Dita Ayu Lestari',
    preview: '수강정정 관련해서 감사합니다!',
    time: '어제',
    meta: '인도네시아 · 미디어학과 2학년 · 2023학번',
    noticeContext: '2026년 여름학기 수강신청 정정 기간 안내',
    messages: [{ side: 'other', text: '수강정정 관련해서 감사합니다!', time: '오전 10:15' }],
  },
  {
    id: 'wang',
    initial: 'W',
    name: 'Wang Yifan',
    preview: '언어교환 프로그램 신청했습니다',
    time: '어제',
    meta: '중국 · 한국어교육과 3학년 · 2022학번',
    noticeContext: '2026 언어교환 프로그램 참가자 모집',
    messages: [{ side: 'other', text: '언어교환 프로그램 신청했습니다', time: '오후 4:30' }],
  },
];
