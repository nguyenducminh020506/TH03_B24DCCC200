import { useNavigate, useParams } from "react-router-dom";
import { SanPham } from "./ProductList";

const ProductDetail = (props: {
  danhSachSanPham: SanPham[];
  setDanhSachSanPham: any;
}) => {
  const { danhSachSanPham } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  const sanPham = danhSachSanPham.find(sp => sp.id === id);

  if (!sanPham) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div style={{
        width: 300,
        height: 400,
        border: "2px solid black",
        padding: 12,
        marginTop: 12,
        margin: "auto",
      }}
    >
      <h2>Chi tiết sản phẩm</h2>
      <p>Tên: {sanPham.ten}</p>
      <p>Giá: {sanPham.gia} VND</p>
      <p>Số lượng: {sanPham.soLuong}</p>
      <p>Danh mục: {sanPham.danhMuc}</p>
      <p>Mô tả: {sanPham.moTa}</p>

      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;
