import {useState} from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList, {SanPham} from "./components/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";

function App() {
  const [danhSachSanPham, setDanhSachSanPham] = useState<SanPham[]>([
    {
    id: "sp001",
    ten: "Iphone 17 Pro Max 2TB",
    danhMuc: "Điện tử",
    gia: 49000000,
    soLuong: 25,
    moTa: "Công nghệ tân tiến, thiết kế sang trọng"
  },
  {
    id: "sp002",
    ten: "Áo GUCCI nam 2025",
    danhMuc: "Quần áo",
    gia: 1290000,
    soLuong: 15,
    moTa: "Thời thượng, thiết kế phong cách Ý"
  },
  {
    id: "sp003",
    ten: "Lẩu thịt chó Bắc Giang",
    danhMuc: "Đồ ăn",
    gia: 280000,
    soLuong: 100,
    moTa: "Đặc sản Bắc Giang, hương vị đậm đà"
  },
  {
    id: "sp004",
    ten: "Sách “Đắc Nhân Tâm”",
    danhMuc: "Sách",
    gia: 89000,
    soLuong: 40,
    moTa: "Cuốn sách kinh điển về nghệ thuật giao tiếp"
  },
  {
    id: "sp005",
    ten: "Túi LV da cà sấu bạch tạng",
    danhMuc: "Khác",
    gia: 215000,
    soLuong: 30,
    moTa: "Limited, thiết kế nhỏ gọn, Quý tộc"
  },
  {
    id: "sp006",
    ten: "MacBook Pro M2 1TB",
    danhMuc: "Điện tử",
    gia: 3990000,
    soLuong: 10,
    moTa: "Màn hình AMOLED, pin 5000mAh, hiệu năng vượt trội"
  },
  {
    id: "sp007",
    ten: "Quần jeans nam Evisu 113",
    danhMuc: "Quần áo",
    gia: 899000,
    soLuong: 20,
    moTa: "Form ôm, chất liệu denim cao cấp,GenZ  style"
  },
  {
    id: "sp008",
    ten: "Mì ly Hảo Hảo tôm chua cay",
    danhMuc: "Đồ ăn",
    gia: 6500,
    soLuong: 200,
    moTa: "Mì ăn liền, hương vị đậm đà, tiện lợi"
  },
  {
    id: "sp009",
    ten: "Sách cuộc đời của Cristiano Ronaldo ",
    danhMuc: "Sách",
    gia: 99000,
    soLuong: 35,
    moTa: "Tác phẩm nổi tiếng về Ronaldo"
  },
  {
    id: "sp010",
    ten: "Balo Nike Elite chống nước 15.6 inch",
    danhMuc: "Khác",
    gia: 320000,
    soLuong: 18,
    moTa: "Thiết kế thời trang, nhiều ngăn tiện dụng"
  }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/add"
          element={
            <ProductForm
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
