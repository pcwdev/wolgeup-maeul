export type SurvivalGrade = "S" | "A" | "B" | "C" | "D";
export type CharacterMood = "happy" | "normal" | "tired" | "crisis";
export type CrisisCategory = "coffee" | "delivery" | "taxi" | "shopping" | "subscription";

export interface CurrentUser {
  anonymousId: string;
  nickname: string;
  grade: SurvivalGrade;
  dDay: number;
  todayStatus: string;
  todayQuote: string;
  mood: CharacterMood;
  hp: number;
  crisisCategories: CrisisCategory[];
  roomTheme: string;
  diaryEntry: string;
  visitorCount: number;
}

export interface FeedPost {
  id: string;
  anonymousId: string;
  nickname: string;
  grade: SurvivalGrade;
  dDay: number;
  content: string;
  crisisCategories: CrisisCategory[];
  likes: number;
  comments: number;
  timeAgo: string;
}

export interface GuestbookEntry {
  id: string;
  anonymousId: string;
  nickname: string;
  emoji: string;
  message: string;
  timeAgo: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  hpReward: number;
  completed: boolean;
}

export interface VillageNewsItem {
  id: string;
  emoji: string;
  message: string;
}

export const crisisCategoryLabels: Record<CrisisCategory, { emoji: string; label: string }> = {
  coffee: { emoji: "☕", label: "커피" },
  delivery: { emoji: "🍜", label: "배달" },
  taxi: { emoji: "🚕", label: "택시" },
  shopping: { emoji: "🛍️", label: "쇼핑" },
  subscription: { emoji: "📺", label: "구독" },
};

export const currentUser: CurrentUser = {
  anonymousId: "wm-2847",
  nickname: "익명#2847",
  grade: "B",
  dDay: 12,
  todayStatus: "빡빡",
  todayQuote: "커피값이 무서워요... 오늘도 라떼는 사치일까",
  mood: "tired",
  hp: 62,
  crisisCategories: ["coffee", "delivery"],
  roomTheme: "아늑한 원룸",
  diaryEntry:
    "점심 샐러드 먹었는데 저녁에 치킨 땡김... 월급날까지 버텨야지. 라면이라도 끓여먹을까.",
  visitorCount: 3,
};

export const squareFeed: FeedPost[] = [
  {
    id: "1",
    anonymousId: "wm-1092",
    nickname: "익명#1092",
    grade: "C",
    dDay: 5,
    content: "월요병인가 위기병인가... 이번 달은 왜 이렇게 길어",
    crisisCategories: ["coffee", "delivery"],
    likes: 12,
    comments: 3,
    timeAgo: "10분 전",
  },
  {
    id: "2",
    anonymousId: "wm-5521",
    nickname: "익명#5521",
    grade: "A",
    dDay: 18,
    content: "점심 도시락 3일째 성공 중 🍱 자랑 아닌 자랑",
    crisisCategories: ["delivery"],
    likes: 28,
    comments: 7,
    timeAgo: "32분 전",
  },
  {
    id: "3",
    anonymousId: "wm-7734",
    nickname: "익명#7734",
    grade: "D",
    dDay: 2,
    content: "택시 탔다가 후회 중... 다음엔 걸을게 진짜로",
    crisisCategories: ["taxi", "coffee"],
    likes: 45,
    comments: 15,
    timeAgo: "1시간 전",
  },
  {
    id: "4",
    anonymousId: "wm-3310",
    nickname: "익명#3310",
    grade: "B",
    dDay: 9,
    content: "넷플 구독 해지했는데 친구가 스포일러함. 인생이 뭔지",
    crisisCategories: ["subscription"],
    likes: 67,
    comments: 22,
    timeAgo: "2시간 전",
  },
];

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    anonymousId: "wm-1092",
    nickname: "익명#1092",
    emoji: "🐸",
    message: "화이팅... 같이 버텨요 우리",
    timeAgo: "2시간 전",
  },
  {
    id: "2",
    anonymousId: "wm-5521",
    nickname: "익명#5521",
    emoji: "🌻",
    message: "커피 대신 물 마시기 성공했어요! 응원해요",
    timeAgo: "5시간 전",
  },
  {
    id: "3",
    anonymousId: "wm-9901",
    nickname: "익명#9901",
    emoji: "🐱",
    message: "방 분위기 좋다 ㅋㅋ 라면 끓이는 소리 들리는 듯",
    timeAgo: "어제",
  },
  {
    id: "4",
    anonymousId: "wm-4412",
    nickname: "익명#4412",
    emoji: "🦊",
    message: "D-12면 아직 버틸 만해요! 힘내세요",
    timeAgo: "어제",
  },
];

export const todayQuests: Quest[] = [
  {
    id: "1",
    title: "점심 도시락 챙기기",
    description: "배달 앱 열지 않기",
    hpReward: 10,
    completed: false,
  },
  {
    id: "2",
    title: "커피 대신 물 마시기",
    description: "카페 앱 삭제는 내일",
    hpReward: 5,
    completed: true,
  },
  {
    id: "3",
    title: "오늘의 한마디 남기기",
    description: "광장에 생존 일기 올리기",
    hpReward: 8,
    completed: false,
  },
  {
    id: "4",
    title: "방명록에 응원 남기기",
    description: "누군가에게 힘이 되기",
    hpReward: 5,
    completed: false,
  },
  {
    id: "5",
    title: "택시 앱 안 열어보기",
    description: "걸어서 10분은 걸어",
    hpReward: 12,
    completed: false,
  },
];

export const villageNews: VillageNewsItem[] = [
  { id: "1", emoji: "🏘️", message: "오늘 마을에 127명이 생존 중" },
  { id: "2", emoji: "☕", message: "커피 위기 카테고리 1위 달성 (뭐야 이게)" },
  { id: "3", emoji: "🎉", message: "익명#5521님이 도시락 3일 연속 달성!" },
];

export const roomDecorItems = [
  { id: "1", emoji: "🛏️", label: "침대" },
  { id: "2", emoji: "💻", label: "노트북" },
  { id: "3", emoji: "🍜", label: "라면" },
  { id: "4", emoji: "🪴", label: "화분" },
  { id: "5", emoji: "📚", label: "책장" },
  { id: "6", emoji: "🎮", label: "게임기" },
];
