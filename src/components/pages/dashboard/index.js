import { Table, Layout } from 'antd';
import HeaderContent from '../../header'
const { Header } = Layout;

const Dashboard = () => (
  <>
    <Header style={{ backgroundColor: "unset", paddingInline: "0px"}}>
      <HeaderContent data='Dashboard'/>
    </Header>

  </>
  
);
export default Dashboard;