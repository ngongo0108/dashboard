import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import PhongBan from "../pages/employees/PhongBan"
import PhongBanCuaToi from "../pages/employees/PhongBanCuaToi"
import ToanBoNhanVien from "../pages/employees/ToanBoNhanVien"
import TaoNhanVienMoi from "../pages/employees/TaoNhanVienMoi"
import DonKhac from "../pages/otherform/DonKhac"
import DonKhacCuaToi from "../pages/otherform/DonkhacCuaToi"
import HopDong from "../pages/contract/HopDong"
import HopDongCuaToi from "../pages/contract/HopDongCuaToi"

function Router() {
    return(
       <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/phongban" element={<PhongBan/>}/>
            <Route path="/phongbancuatoi" element={<PhongBanCuaToi/>}/>
            <Route path="/toanbonhanvien" element={<ToanBoNhanVien/>}/>
            <Route path="/taonhanvienmoi" element={<TaoNhanVienMoi/>}/>
            <Route path="/donkhac" element={<DonKhac/>}/>
            <Route path="/donkhaccuatoi" element={<DonKhacCuaToi/>}/>
            <Route path="/hopdong" element={<HopDong/>}/>
            <Route path="/hopdongcuatoi" element={<HopDongCuaToi/>}/>
       </Routes>
    )
}

export default Router