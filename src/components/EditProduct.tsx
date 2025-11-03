import { useState, useEffect } from "react";
import { SanPham } from "./ProductList";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = (props: {
  danhSachSanPham: SanPham[];
  setDanhSachSanPham: any;
}) => {
  const { danhSachSanPham, setDanhSachSanPham } = props;
  const navigate = useNavigate();
  const {id} = useParams();

  const [thongTinNguoiDungNhap, setThongTinNguoiDungNhap] = useState<SanPham>({
    id: "",
    ten: "",
    danhMuc: "Danh mục",
    gia: 0,
    soLuong: 0,
    moTa: "",
  });

  useEffect(() => {
    if (id) {
      const sanPhamCanSua = danhSachSanPham.find((sp) => sp.id === id);
      if (sanPhamCanSua) {
        setThongTinNguoiDungNhap(sanPhamCanSua);
      } else {
        alert("Không tìm thấy sản phẩm cần sửa!");
        navigate("/");
      }
    } else {
      alert("Không có ID sản phẩm được cung cấp để sửa!");
      navigate("/");
    }
  }, [id, danhSachSanPham, navigate]);

  const xacThucThongTin = () => {
    if (!thongTinNguoiDungNhap.ten.trim().length) {
      alert("Vui lòng nhập tên sản phẩm !");
      return false;
    } else if (thongTinNguoiDungNhap.ten.trim().length < 3) {
      alert("Vui lòng nhập tên sản phảm dài hơn 3 ký tự!");
      return false;
    }

    if (thongTinNguoiDungNhap.gia === null || thongTinNguoiDungNhap.gia === undefined) {
      alert("Vui lòng nhập giá sản phẩm!");
      return false;
    } else if (thongTinNguoiDungNhap.gia <= 0) {
      alert("Giá sản phẩm phải lớn hơn 0");
      return false;
    }

    if (thongTinNguoiDungNhap.soLuong === null || thongTinNguoiDungNhap.soLuong === undefined) {
      alert("Vui lòng nhập số lượng sản phẩm!");
      return false;
    } else if (thongTinNguoiDungNhap.soLuong <= 0) {
      alert("Số lượng sản phẩm phải lớn hơn 0");
      return false;
    }

    if (thongTinNguoiDungNhap.danhMuc === "Danh mục") {
      alert("Vui lòng chọn danh mục!");
      return false;
    }

    return true;
  };

  const handleEditProduct = () => {
    const xacThuc = xacThucThongTin();
    if (xacThuc) {
      const danhSachMoi = danhSachSanPham.map((sanPham) => {
        if (sanPham.id === thongTinNguoiDungNhap.id) {
          return thongTinNguoiDungNhap;
        }
        return sanPham;
      });

      setDanhSachSanPham(danhSachMoi);
      alert("Sửa sản phẩm thành công");
      navigate("/");
    }
  };

  return (
    <div>
      <h3>Chỉnh sửa sản phẩm: {thongTinNguoiDungNhap.ten || "Đang tải..."}</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          border: "solid 1px black",
          padding: 20,
          margin: "auto",
          marginTop: 20,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleEditProduct();
        }}
      >
        <label>Tên sản phẩm: </label>
        <input
          value={thongTinNguoiDungNhap.ten}
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
          value={thongTinNguoiDungNhap.gia}
          type="number"
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
          value={thongTinNguoiDungNhap.soLuong}
          type="number"
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              soLuong: Number(e.target.value),
            });
          }}
          name="soLuong"
        />
        <label>Mô tả: </label>
        <textarea
          value={thongTinNguoiDungNhap.moTa}
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              moTa: e.target.value,
            });
          }}
          name="moTa"
        />
        <label>Danh mục: </label>
        <select
          value={thongTinNguoiDungNhap.danhMuc}
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
        <button type="submit">Lưu thông tin</button>
        <button type="button" onClick={() => navigate("/")}>
          Hủy
        </button>
      </form>
    </div>
  );
};

export default EditProduct;