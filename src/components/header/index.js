import {LogoutOutlined} from '@ant-design/icons'
import { Typography, Button } from 'antd'
function HeaderContent({data}) {
    return (
        <>
                <Typography.Title level={4}>{data}</Typography.Title>
                <div style ={{float: 'right', display: 'flex'}}>
                <Button className="btn_logout" ><LogoutOutlined /></Button>
                </div>
        </>
        
    )
}

export default HeaderContent