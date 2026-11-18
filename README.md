
'useState' (Trạng thái cục bộ):
-Dữ liệu: Ô tìm kiếm ('searchTerm'), form đăng nhập ('username', 'password').
-Lý do: Dữ liệu tạm thời, chỉ dùng cho riêng một component hoặc trang độc lập, không cần chia sẻ sang nơi khác.

*'Context API' (Trạng thái cấu hình toàn cục):
-Dữ liệu:Giao diện sáng/tối ('ThemeContext'), thông tin người dùng ('AuthContext').
-Lý do:Dùng chung ở nhiều nơi (như Header và toàn bộ app), ít thay đổi liên tục, giúp tránh phải truyền props qua nhiều tầng.

*'Redux Toolkit' (Trạng thái nghiệp vụ toàn cục):
-Dữ liệu:Danh sách sản phẩm từ API ('productsSlice'), giỏ hàng ('cartSlice').
-Lý do:Dữ liệu lớn, dùng chung ở nhiều trang, cần gọi API bất đồng bộ ('createAsyncThunk') và xử lý logic phức tạp (thêm/xóa sản phẩm, tính tổng tiền).