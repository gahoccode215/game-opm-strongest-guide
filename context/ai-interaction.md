# AI Interaction Guidelines — OPM: The Strongest Guide

## Communication

- Trả lời ngắn gọn, đi thẳng vào vấn đề
- Giải thích ngắn gọn cho các quyết định không hiển nhiên
- Hỏi trước khi refactor lớn hoặc thay đổi kiến trúc
- Không tự thêm tính năng ngoài spec trong `project-overview.md`
- Không bao giờ xóa file khi chưa được xác nhận

## Workflow

Quy trình chung áp dụng cho mọi feature/fix:

1. **Document** - Ghi lại feature trong `@context/current-feature.md`
2. **Branch** - Tạo branch mới cho feature/fix
3. **Implement** - Code theo đúng nội dung đã ghi ở `@context/current-feature.md`
4. **Test** - Kiểm tra trực tiếp trên trình duyệt. Chạy `npm run build` và fix hết lỗi (unit test bổ sung sau khi dự án ổn định hơn)
5. **Iterate** - Chỉnh sửa lại nếu cần
6. **Commit** - Chỉ commit sau khi build pass và mọi thứ hoạt động đúng
7. **Merge** - Merge vào `main`
8. **Delete Branch** - Xóa branch sau khi merge
9. **Review** - Review code AI tạo ra định kỳ hoặc khi cần
10. Đánh dấu hoàn thành trong `@context/current-feature.md` và thêm vào lịch sử

**Không commit khi chưa được cho phép và khi build chưa pass.** Nếu build fail, fix lỗi trước tiên.

## Branching

- Tạo branch mới cho mỗi feature/fix
- Đặt tên: `feature/[ten-feature]` hoặc `fix/[ten-fix]`
- Hỏi trước khi xóa branch sau khi đã merge

## Commits

- Hỏi trước khi commit (không tự động commit)
- Dùng conventional commit message (`feat:`, `fix:`, `chore:`...)
- Mỗi commit tập trung vào một feature/fix, không gộp nhiều việc
- Không để dòng "Generated with Claude" trong commit message

## When Stuck

- Nếu thử 2-3 lần không được, dừng lại và giải thích vấn đề
- Không tiếp tục đoán mò sửa linh tinh
- Hỏi lại nếu requirement chưa rõ ràng

## Code Changes

- Chỉ sửa tối thiểu để hoàn thành task
- Không refactor phần code không liên quan nếu chưa được yêu cầu
- Không tự thêm tính năng "có thì tốt" ngoài phạm vi task
- Giữ đúng pattern đang có sẵn trong codebase (component structure, naming, Server/Client component...)

## Code Review

Review code AI tạo ra định kỳ, đặc biệt chú ý:

- **Performance**: re-render thừa do thiếu `key`/`memo`, import data JSON không cần thiết nhiều lần, dùng `'use client'` khi không thật sự cần
- **Logic errors**: các trường hợp edge case (thiếu field trong data, slug không tồn tại...)
- **Patterns**: có khớp với cấu trúc/coding standard hiện tại của codebase không (xem `coding-standards.md`)
- **Data integrity**: khi sửa file JSON trong `src/data/`, kiểm tra đúng type định nghĩa trong `src/types/`, không thiếu field bắt buộc