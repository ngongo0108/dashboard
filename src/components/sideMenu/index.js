import React, { useEffect } from 'react';
import { MailOutlined, HomeOutlined, UserAddOutlined, ClockCircleOutlined, AuditOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderMenu from './header.js'
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('Dashboard','/', <HomeOutlined />),
    getItem(<p>NHÂN VIÊN</p>, '1', '', [
    getItem('Phòng ban', '/phongban', <TeamOutlined />),
    getItem('Phòng ban của tôi', '/phongbancuatoi', <TeamOutlined />),
    getItem('Toàn bộ nhân viên', '/toanbonhanvien', <TeamOutlined />),
    getItem('Tạo nhân viên mới', '/taonhanvienmoi', <UserAddOutlined />),
    ]),
    getItem(<p>TĂNG CA</p>, '2', '', [
        getItem('Đơn tăng ca nhân viên', '/dontangca', <ClockCircleOutlined />),
        getItem('Đơn tăng ca của tôi', '/dontangcacuatoi', <ClockCircleOutlined />),
    ]),
    getItem(<p>NGHỈ PHÉP</p>, '3', '', [
        getItem('Đơn nghỉ phép nhân viên', '/donnghiphep', <AuditOutlined />),
        getItem('Đơn nghỉ phép của tôi', '/donnghiphepcuatoi', <AuditOutlined />),
    ]),
    getItem(<p>ĐƠN KHÁC</p>, '4', '', [
        getItem('Danh sách đơn khác', '/donkhac', <MailOutlined />),
        getItem('Đơn khác của tôi', '/donkhaccuatoi', <MailOutlined />),
    ]),
    getItem(<p>QUẢN LÍ LƯƠNG</p>, '5', '', [
        getItem('Lương nhân viên', 'luong', <TeamOutlined />),
        getItem('Lương của tôi', 'luongcuatoi', <TeamOutlined />),
    ]),
    getItem(<p>HỢP ĐỒNG</p>, '6', '', [
        getItem('Hợp đồng nhân viên', '/hopdong', <MailOutlined />),
        getItem('Hợp đồng của tôi', '/hopdongcuatoi', <MailOutlined />),
    ]),
    getItem(<p>TUYỂN DỤNG</p>, '7', '', [
        getItem('Danh sách ứng viên', '/ungvien', <TeamOutlined />),
    ]),
];

const SidebarMenu = (props) => {
  const navigate = useNavigate();
  useEffect(()=> {
    const saveSelectedKey = sessionStorage.getItem('selectedKey');
    if (saveSelectedKey) {
      props.setSelect(saveSelectedKey);
    }
  },[]);

  const onClick = (items) => {
    const select = items.key;
    localStorage.setItem('selectedKey',select);
    props.setSelect(select);
    navigate(items.key);
  };
  
  const saveSelectedKey = localStorage.getItem('selectedKey');
  return (
    <>
    <HeaderMenu/>
    <div className='SideMenu'>
      <Menu
        onClick={onClick}
        style={{
          width: 260,
        }}
        defaultSelectedKeys={[saveSelectedKey || '/']}
        defaultOpenKeys={['1', '2', '3', '4', '5', '6', '7']}
        mode="inline"
        items={items}

      />
    </div>
    
    </>
    
  );
};
export default SidebarMenu;
