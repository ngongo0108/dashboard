import HeaderContent from '../../header'
import { Layout } from 'antd'
const { Header } = Layout;
function DonKhacCuaToi() {
    return (
        <>
          <Header style={{ backgroundColor: "unset", paddingInline: "0px",}}>
              <HeaderContent data='Đơn khác của tôi'/>
          </Header>
          
        </>
    )
}

export default DonKhacCuaToi