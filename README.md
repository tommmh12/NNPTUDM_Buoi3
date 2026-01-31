# Dashboard - Products API

Ứng dụng Node.js và Web Dashboard để lấy và hiển thị danh sách sản phẩm từ API.

## API sử dụng
- **URL**: https://api.escuelajs.co/api/v1/products
- **Method**: GET

## Cấu trúc file

- `dashboard.js` - Module Node.js chứa hàm `getAllProducts()`
- `dashboard.html` - Giao diện web dashboard với bảng hiển thị sản phẩm
- `test-dashboard.js` - File test để kiểm tra hàm
- `package.json` - Cấu hình Node.js project

## Cách sử dụng

### 1. Xem Dashboard trên Web (Khuyến nghị)
Mở file `dashboard.html` trong trình duyệt:
```bash
# Windows
start dashboard.html

# Mac
open dashboard.html

# Linux
xdg-open dashboard.html
```

Hoặc kéo thả file `dashboard.html` vào trình duyệt.

**Tính năng Dashboard:**
- ✅ Hiển thị toàn bộ sản phẩm trong bảng đẹp mắt
- ✅ Dòng đen trắng xen kẽ (zebra striping)
- ✅ Hiển thị đầy đủ tất cả hình ảnh của sản phẩm
- ✅ Hover vào hình để phóng to
- ✅ Thống kê: tổng sản phẩm, danh mục, giá trung bình
- ✅ Responsive design
- ✅ Gradient màu đẹp

### 2. Chạy Node.js (Backend)

#### Chạy trực tiếp dashboard.js
```bash
node dashboard.js
```

#### Chạy file test
```bash
node test-dashboard.js
```

### 3. Sử dụng trong code khác
```javascript
const { getAllProducts } = require('./dashboard');

// Sử dụng hàm
getAllProducts()
    .then(products => {
        console.log('Danh sách sản phẩm:', products);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
```

## Hàm getAllProducts()

Hàm này sử dụng `fetch` API để lấy tất cả sản phẩm từ server.

**Trả về**: Promise chứa mảng các sản phẩm

**Ví dụ dữ liệu trả về**:
```json
[
  {
    "id": 1,
    "title": "Product Name",
    "price": 100,
    "description": "Product description",
    "category": {
      "id": 1,
      "name": "Category Name"
    },
    "images": ["url1", "url2", "url3"]
  }
]
```

## Tính năng CSS Dashboard

### Hiệu ứng dòng đen trắng xen kẽ
```css
tbody tr:nth-child(odd) {
    background-color: #ffffff;  /* Dòng lẻ - trắng */
}

tbody tr:nth-child(even) {
    background-color: #f8f9fa;  /* Dòng chẵn - xám nhạt */
}
```

### Hiển thị toàn bộ hình ảnh
- Mỗi sản phẩm hiển thị tất cả hình ảnh (thường 3 hình)
- Kích thước: 100x100px
- Hover để phóng to 1.5x
- Bo góc và shadow đẹp mắt

### Responsive
- Tự động điều chỉnh trên mobile
- Bảng có thể scroll ngang nếu cần

## Yêu cầu hệ thống

- **Cho Web Dashboard**: Trình duyệt hiện đại (Chrome, Firefox, Edge, Safari)
- **Cho Node.js**: Node.js version 18 trở lên (hỗ trợ native fetch API)

## Lưu ý

- Hàm sử dụng async/await để xử lý bất đồng bộ
- Có xử lý lỗi (error handling) khi API không phản hồi
- Dashboard tự động load dữ liệu khi mở trang
- Hình ảnh lỗi sẽ hiển thị placeholder
- Code đơn giản, dễ hiểu và dễ bảo trì

## Screenshots

Dashboard hiển thị:
- Header với gradient màu tím đẹp
- Thống kê tổng quan (số sản phẩm, danh mục, giá TB)
- Bảng với dòng đen trắng xen kẽ
- Tất cả hình ảnh của mỗi sản phẩm
- Hover effects mượt mà
