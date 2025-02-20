import './App.scss';
import SidebarMenu from './components/sideMenu';
import Router from './components/routes';
import { Layout, Space } from 'antd';
import { useState } from 'react';
import Layouts from './components/pages/homepage'
const { Sider, Content } = Layout;

const App = () => {
  const [select, setSelect] = useState();
  const handleSelectChange = (newSelect) =>{
    setSelect(newSelect);
  }  
  return(
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
    >
    <Layout>
      <Sider
      width={'260px'}
      height={'100vh'}
      theme="light"
      >
        <SidebarMenu setSelect = {handleSelectChange}/>
      </Sider>
      <Layout style={{maxHeight: '100vh'}}>
        <Content>
          <Router />
        </Content>
      </Layout>
    </Layout>
  </Space>  
  )
    
  };
export default App;
