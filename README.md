# PDF Optimizer Studio

Ứng dụng nén, đổi khổ giấy, gộp, tách và xử lý PDF của **Trần Quang Hải**.

- Website độc lập: https://ifa-pdf.web.app
- Kho phát triển: https://github.com/tranquanghai-ops/PDF-Optimizer
- Firebase project / Hosting site: `ifa-pdf`
- Liên hệ: tranquanghai@tdtu.edu.vn

PDF được xử lý tại trình duyệt bằng Web Worker và WebAssembly, không gửi lên máy chủ. Các thư viện giao diện, PDF và OCR được tải qua CDN nên cần kết nối Internet.

## Nguồn gốc

Mã ứng dụng kế thừa từ [PDF-Optimizer-Resizer-Studio](https://github.com/tranquanghai-ops/PDF-Optimizer-Resizer-Studio), nhánh `main`, commit `b3b5fba08e5e176a75763c11ef53e033f619ba8f`. Kho gốc được giữ nguyên để bảo toàn tài liệu nghiên cứu.

Kho này đã kế thừa bộ ba `index.html`, `app-v53.html`, `pdf-tools.js`. Bản độc lập tiếp tục giữ các cải tiến hiện có trong kho đích: sửa đường dẫn tải công cụ, giữ nguyên tên file khi tải xuống và xử lý tên trùng trong ZIP. Tên tác giả hiển thị chỉ còn Trần Quang Hải; đã bỏ dòng ghi công AI.

## Chạy trên máy

Cài Node.js 20 trở lên, sau đó:

```sh
npm run build
npm start
```

Mở địa chỉ Hosting emulator được in ra, thường là `http://localhost:5000`. Không cần cài thư viện ứng dụng bằng npm; lệnh khởi chạy sẽ tải Firebase CLI khi cần.

## Triển khai độc lập

```sh
npx -y firebase-tools@latest login
npm run deploy
```

Lệnh deploy tự kiểm tra cú pháp và đóng gói ba tệp web vào `dist/`, sau đó chỉ triển khai Firebase Hosting của `ifa-pdf`. Không phụ thuộc TDTU TKNT Portal hoặc máy chủ xử lý PDF.

## Cấu trúc

- `index.html`: khởi động ứng dụng và tải công cụ mở rộng.
- `app-v53.html`: giao diện, xử lý PDF, Ghostscript WebAssembly tích hợp.
- `pdf-tools.js`: công cụ ảnh, OCR, chỉnh sửa và tách PDF.
- `scripts/build.cjs`: kiểm tra cú pháp và đóng gói tệp công khai.
- `firebase.json`, `.firebaserc`: cấu hình Hosting độc lập.
- `docs/AI-HANDOVER.md`: lịch sử tích hợp và ghi chú bảo trì.

Workflow tạo ZIP theo tag `v*` được giữ lại để tương thích với các nơi từng sử dụng gói phát hành.
