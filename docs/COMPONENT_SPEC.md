# 월급마을 컴포넌트 명세

## 디렉토리 구조

```
src/
├── components/
│   ├── ui/
│   │   ├── PixelButton.tsx
│   │   ├── PixelCard.tsx
│   │   ├── PixelPanel.tsx
│   │   ├── PixelHeader.tsx
│   │   ├── CharacterAvatar.tsx
│   │   ├── SurvivalBadge.tsx
│   │   └── SpeechBubble.tsx
│   └── layout/
│       ├── AppShell.tsx
│       └── BottomNav.tsx
├── lib/
│   ├── utils.ts
│   └── mock-data.ts
└── app/
    ├── page.tsx              # 마을 홈
    ├── room/page.tsx         # 내 방
    ├── square/page.tsx       # 광장
    ├── guestbook/page.tsx    # 방명록
    ├── survival-card/page.tsx
    └── quest/page.tsx
```

---

## UI 컴포넌트

### PixelButton

픽셀 스타일 버튼. 둥근 모서리 없음.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | 색상 변형 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 크기 |
| `disabled` | `boolean` | `false` | 비활성 |
| `fullWidth` | `boolean` | `false` | 전체 너비 |
| `children` | `ReactNode` | — | 라벨 |
| `onClick` | `() => void` | — | 클릭 핸들러 |

**스타일:**
- `primary`: accent-orange 배경, brown-700 테두리
- `secondary`: cream-200 배경
- `ghost`: 투명 배경, 테두리만
- `danger`: accent-red 배경
- 호버: `translate-y-[-1px]` + shadow-pixel
- 액티브: `translate-y-[1px]` shadow 제거

---

### PixelCard

콘텐츠를 감싸는 기본 카드. 피드 아이템, 타일 메뉴에 사용.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `variant` | `'default' \| 'highlight' \| 'danger'` | `'default'` | 배경 변형 |
| `padding` | `'none' \| 'sm' \| 'md'` | `'md'` | 내부 패딩 |
| `interactive` | `boolean` | `false` | 호버/클릭 가능 |
| `children` | `ReactNode` | — | 내용 |
| `className` | `string` | — | 추가 클래스 |

**스타일:**
- cream-100 배경, brown-700 2px 픽셀 테두리
- `highlight`: accent-yellow 좌측 4px 띠
- `interactive`: cursor-pointer + 호버 밝기

---

### PixelPanel

섹션 구분용 패널. 내 방 상태창, 퀘스트 보상 영역에 사용.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `title` | `string` | — | 패널 제목 (선택) |
| `icon` | `string` | — | 제목 앞 이모지 |
| `children` | `ReactNode` | — | 내용 |
| `className` | `string` | — | 추가 클래스 |

**스타일:**
- cream-200 배경, inset 픽셀 테두리 느낌
- 제목: `font-display text-pixel-sm`

---

### PixelHeader

페이지 상단 헤더.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `title` | `string` | — | 페이지 제목 |
| `subtitle` | `string` | — | 부제 (선택) |
| `showBack` | `boolean` | `false` | 뒤로가기 버튼 |
| `rightAction` | `ReactNode` | — | 우측 액션 슬롯 |

**스타일:**
- brown-700 하단 2px 픽셀 보더
- cream-100 배경
- title: `font-display text-pixel-lg`
- showBack 시 `←` 픽셀 버튼

---

### CharacterAvatar

도트 캐릭터 아바타. CSS 픽셀 아트.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `mood` | `'happy' \| 'normal' \| 'tired' \| 'crisis'` | `'normal'` | 표정/상태 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 32/48/64px |
| `showHp` | `boolean` | `false` | HP 바 표시 |
| `hp` | `number` | `50` | HP 0~100 |

**구현:**
- SVG 또는 div 기반 픽셀 그리드
- mood별 색상/표정 변경
- `image-rendering: pixelated`

---

### SurvivalBadge

생존 등급 뱃지 (S/A/B/C/D).

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `grade` | `'S' \| 'A' \| 'B' \| 'C' \| 'D'` | — | 등급 |
| `size` | `'sm' \| 'md'` | `'md'` | 크기 |
| `showLabel` | `boolean` | `true` | "생존등급" 라벨 |

**등급별 색상:** DESIGN_SYSTEM.md 참조

---

### SpeechBubble

캐릭터 말풍선. 오늘의 한마디 표시.

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `children` | `ReactNode` | — | 말풍선 텍스트 |
| `tail` | `'left' \| 'bottom' \| 'right'` | `'bottom'` | 꼬리 방향 |
| `variant` | `'default' \| 'thought'` | `'default'` | 말풍선/생각풍선 |

**스타일:**
- cream-50 배경, brown-700 테두리
- `float` 애니메이션 (optional)
- thought: 둥근 점 3개 꼬리

---

## 레이아웃 컴포넌트

### AppShell

| Prop | Type | 설명 |
|------|------|------|
| `children` | `ReactNode` | 페이지 콘텐츠 |
| `hideNav` | `boolean` | 하단 네비 숨김 |

- `max-w-md mx-auto min-h-screen`
- cream-50 배경
- BottomNav 포함

### BottomNav

4탭 고정 하단 네비게이션.

| 탭 | href | label |
|----|------|-------|
| 마을 | `/` | 마을 |
| 내 방 | `/room` | 내 방 |
| 광장 | `/square` | 광장 |
| 방명록 | `/guestbook` | 방명록 |

- `usePathname()`으로 active 상태
- active: accent-orange 상단 2px 띠

---

## 유틸리티

### `cn(...inputs)`

`clsx` + `tailwind-merge` 조합. 클래스 병합.

### `mock-data.ts`

정적 mock 데이터 export:

- `currentUser` — 현재 유저 생존 정보
- `squareFeed` — 광장 피드 목록
- `guestbookEntries` — 방명록 목록
- `todayQuests` — 오늘의 퀘스트
- `villageNews` — 마을 소식

**금액 필드 없음** — DESIGN_SYSTEM 공개/비공개 정책 준수.

---

## Tailwind 커스텀 클래스

| 클래스 | 설명 |
|--------|------|
| `pixel-border` | 2px 계단형 테두리 |
| `pixel-border-inset` | inset 테두리 |
| `shadow-pixel` | 4px 단색 그림자 |
| `shadow-pixel-sm` | 2px 단색 그림자 |
| `font-display` | Press Start 2P |
| `font-body` | Noto Sans KR |
| `text-pixel-*` | 픽셀 타이포 스케일 |

---

## 사용 예시

```tsx
import { PixelCard } from '@/components/ui/PixelCard'
import { SurvivalBadge } from '@/components/ui/SurvivalBadge'
import { currentUser } from '@/lib/mock-data'

<PixelCard>
  <div className="flex items-center gap-3">
    <SurvivalBadge grade={currentUser.grade} />
    <span>D-{currentUser.dDay}</span>
  </div>
</PixelCard>
```
