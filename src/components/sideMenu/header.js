import React from 'react';
import { Avatar, Space } from 'antd';

const HeaderMenu = () => {
    return (
        <Space>
            <Avatar shape="square" size="large" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" 
                style={{marginLeft: '20px'}}
            />
            <span style={{fontWeight: '600'}}>&nbsp;&nbsp;Nguyễn Văn Quản Lý</span>
        </Space>
    )
}

export default HeaderMenu;