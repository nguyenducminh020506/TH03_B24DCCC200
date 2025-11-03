import {useState} from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export interface SanPham {
  id: string;
  ten: string;
  danhMuc: "Danh mục"|"Điện tử" | "Quần áo" | "Đồ ăn" | "Sách" | "Khác";
  gia: number;
  soLuong: number;
  moTa: string;
}

const PostList = (props: {
  danhSachSanPham: SanPham[];
  setDanhSachSanPham: any;
}) => {
  const {danhSachSanPham, setDanhSachSanPham} = props;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => {
          navigate("/add")
        }}>Thêm mới bài viết</button>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)"
      }}>
        {danhSachSanPham.map((item) => (
          <ProductCard
            sanPham={item}
            danhSachSanPham={danhSachSanPham}
            setDanhSachSanPham={setDanhSachSanPham}
          />
        ))}
      </div>
      
    </div>
  );
};

export default PostList;
