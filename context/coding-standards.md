# Coding Standards — OPM: The Strongest Guide

> Dự án frontend-only (không database, không backend), nên các quy tắc dưới đây lược bỏ phần Prisma/Zod/Server Actions mutation không cần thiết.

## TypeScript

- Strict mode enabled
- Không dùng `any` — dùng type cụ thể hoặc `unknown`
- Định nghĩa `interface`/`type` cho mọi props, data model (Character, GuideArticle...)
- Dùng type inference khi rõ ràng, khai báo type tường minh khi cần dễ đọc

## React

- Chỉ dùng function component (không class component)
- Dùng hooks cho state và side effect
- Mỗi component chỉ nên làm một việc — tách nhỏ khi component phình to
- Logic dùng lại nhiều nơi → tách thành custom hook (`src/hooks/`)

## Next.js

- **Mặc định dùng Server Component** — chỉ thêm `'use client'` khi thật sự cần:
  - Dùng hooks (`useState`, `useEffect`...)
  - Có tương tác (`onClick`, `onChange`...)
  - Dùng browser API (`localStorage`, `window`...)
- Fetch data (đọc JSON tĩnh) trực tiếp trong Server Component, không cần API route
- Dynamic route cho trang chi tiết: `app/[locale]/characters/[slug]/page.tsx` (dùng thư mục `app/` ở root, không dùng `src/`)
- Không cần Server Actions / API routes ở giai đoạn hiện tại (chưa có form ghi dữ liệu, webhook, hay client thứ 3 nào gọi vào)

## Tailwind CSS v4

**QUAN TRỌNG**: Dùng Tailwind CSS v4 — cấu hình bằng CSS, không phải JS.

- **KHÔNG** tạo `tailwind.config.ts` hoặc `tailwind.config.js` (đó là cách của v3)
- Toàn bộ theme (màu, spacing...) khai báo bằng directive `@theme` trong `src/app/globals.css`
- Dùng CSS custom properties cho màu sắc, spacing
- Không dùng cấu hình JavaScript

Ví dụ:
```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(50% 0.2 250);
  --color-hero: oklch(55% 0.18 90);
  --color-villain: oklch(45% 0.2 25);
}
```

## File Organization

> Project dùng thư mục `app/` ở root (không có `src/`).

- Components: `components/[feature]/ComponentName.tsx`
- Pages: `app/[locale]/[route]/page.tsx`
- Types: `types/[feature].ts`
- Lib/Utils: `lib/[utility].ts`
- Data tĩnh: `data/*.json`
- Bản dịch: `messages/en.json`, `messages/vi.json`

## Naming

- Components: PascalCase (`CharacterCard.tsx`)
- Files: trùng tên component hoặc kebab-case
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Types/Interfaces: PascalCase (không tiền tố, ví dụ `Character` chứ không phải `ICharacter`)

## Styling

- Dùng Tailwind CSS cho toàn bộ style
- Ưu tiên component có sẵn từ shadcn/ui
- Không dùng inline style
- Hỗ trợ cả **Dark mode và Light mode** ngang hàng — người dùng tự chọn qua toggle, không mặc định ép một mode

## Data Fetching

- Server Component đọc trực tiếp file JSON tĩnh trong `src/data/` (qua `import` hoặc `fs.readFile` lúc build)
- Không cần validate runtime (Zod) vì data do chính codebase kiểm soát, kiểm tra bằng TypeScript type lúc build là đủ
- Nếu sau này có form công khai cho cộng đồng nhập liệu → bổ sung lại Zod validate cho phần đó

## Error Handling

- Với trang không tìm thấy data (ví dụ slug không tồn tại) → dùng `notFound()` của Next.js
- Không cần pattern `{ success, data, error }` phức tạp vì không có mutation/Server Actions ở giai đoạn này

## Code Quality

- Không để lại code đã comment-out trừ khi có lý do rõ ràng
- Không để import/biến thừa không dùng
- Hàm nên dưới 50 dòng khi có thể