import {useState} from "react";
import {SanPham} from "./ProductList";
import { useNavigate } from "react-router-dom";

const ProductForm = (props: {
  danhSachSanPham: SanPham[];
  setDanhSachSanPham: any;
}) => {
  const {danhSachSanPham, setDanhSachSanPham} = props;
  const navigate = useNavigate();
  const [thongTinNguoiDungNhap, setThongTinNguoiDungNhap] = useState<SanPham>({
    id: "",
    ten: "",
    danhMuc: "Danh mục",
    gia:0,
    soLuong:0,
    moTa: "",
  });

  const xacThucThongTin = () => {
    if (!thongTinNguoiDungNhap.ten.trim().length) {
      alert("Vui lòng nhập tên sản phẩm !");
      return false;
    } else if (thongTinNguoiDungNhap.ten.trim().length < 3){
      alert("Vui lòng nhập tên sản phảm dài hơn 3 ký tự!");
      return false;
    }

    if (!thongTinNguoiDungNhap.gia){
      alert("Vui lòng nhập giá sản phẩm!");
      return false;
    } else if (thongTinNguoiDungNhap.gia < 0){
      alert("Giá sản phẩm phải lớn hơn 0");
      return false;
    }

    if (!thongTinNguoiDungNhap.soLuong){
      alert("Vui lòng nhập số lượng sản phẩm!");
      return false;
    } else if (thongTinNguoiDungNhap.gia < 0){
      alert("Số lượng sản phẩm phải lớn hơn 0");
      return false;
    }

    if (thongTinNguoiDungNhap.danhMuc === "Danh mục"){
      alert("Vui lòng chọn danh mục!");
      return false;
    }

    return true;
  };

  return (
    <div >
      <form style={{
      display:"flex",
      flexDirection:"column",
      width:500,
      border: "solid 1px black",
      padding:20,
      margin: "auto",
      marginTop: 20
    }}
        onSubmit={(e) => {
          e.preventDefault();
          const xacThuc = xacThucThongTin();
          console.log(thongTinNguoiDungNhap);
          if (xacThuc) {
            setDanhSachSanPham([
              ...danhSachSanPham,
              {
                ...thongTinNguoiDungNhap,
                id:"sp00" + (danhSachSanPham.length + 1).toString(),
              },
            ]);
          } else {
          }
        }}
      >
        <label>Tên sản phẩm: </label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              ten: e.target.value,
            });
          }}
          name="ten"
        />
        <label>Giá bán: </label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              gia: Number(e.target.value),
            });
          }}
          name="gia"
        />
        <label>Số lượng bán: </label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              soLuong: Number(e.target.value),
            });
          }}
          name="soLuong"
        />
        <label>Mô tả: </label>
        <textarea about="5px"
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              moTa: e.target.value,
            });
          }}
          name="ten"
        />
        <label>Danh mục: </label>
        <select
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              danhMuc: e.target.value as any,
            });
          }}
          name="danhMuc"
        >
          <option>Danh mục</option>
          <option>Điện tử</option>
          <option>Quần áo</option>
          <option>Đồ ăn</option>
          <option>Sách</option>
          <option>Khác</option>
        </select>
        <button type="submit" onClick={() => {
          navigate("/");
          alert("Thêm sản phẩm thành công")
        }}>Lưu thông tin</button>
      </form>
    </div>
  );
};

export default ProductForm;
