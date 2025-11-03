import {SanPham} from "./ProductList";
import { useNavigate } from "react-router-dom";

const ProductCard = (props: {
  sanPham: SanPham;
  danhSachSanPham: SanPham[];
  setDanhSachSanPham: any;
}) => {
  const {sanPham, danhSachSanPham, setDanhSachSanPham} = props;
  const navigate = useNavigate();

  const deleteSanPham = () => {
    setDanhSachSanPham(
      danhSachSanPham.filter((item) => item.id !== sanPham.id)
    );
  };

  return (
    <div
      style={{
        width: 300,
        height: 200,
        border: "2px solid black",
        padding: 12,
        margin: 12,
      }}
    >
      <h3>Tên: {sanPham.ten}</h3>
      <div>Giá tiền: {sanPham.gia}</div>
      <div>Số lượng {sanPham.soLuong}</div>
      <div>
        <button onClick={() => {
          navigate(`/products/${sanPham.id}`);
        }}>Xem chi tiết</button>
        <button onClick={() => {
          navigate(`/edit/${sanPham.id}`);
        }}>Chỉnh sửa</button>
        <button onClick={() => deleteSanPham()}>Xóa</button>
      </div>
    </div>
  );
};

export default ProductCard;
