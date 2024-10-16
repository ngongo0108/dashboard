import { PlusOutlined, UnorderedListOutlined, PhoneOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, Table, Badge, Layout, Avatar } from 'antd'
import HeaderContent from '../../header'
const { Header } = Layout;
const colors = [
  "#7800B4",
  "#3C80F4",
  "#00BF48", 
  "#FC9703",
  "#AC00AE",
  "#029B87",
  "#FECA03",
  "#FE022E",
  "#FE9706",
  "#009D87",
];

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const columns = [
    {
      title: 'ID',
      width: 'auto',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      sorter: true,
    },
    {
      title: <div className="headertable"><TeamOutlined /> Tên phòng ban</div>,
      dataIndex: 'department',
      width: 'auto',
      fixed: 'left',
      key: '1',
      render: (text) => (
        <Badge
          color={
            text === 'Sales' ? '#CCA432' :
            text === 'Marketing' ? '#69BE98' :
            text === 'Finance' ? '#5642B9' :
            text === 'Human Resource' ? '#E12B32' :
            text === 'Operations' ? '#FC9828' :
            text === 'Engineering' ? '#2D9595' :
            text === 'Customer Support' ? '#9B3F92' :
            text === 'Research & Development' ? '#FE81BC' :
            text === 'Quanlity Assurance' ? '#3EA043' :
            text === 'Design' ? '#FA0201' :
            text === 'Chăm sóc khách hàng' ? '#0000FA' : ''
          }
          text={text}
          style={{ marginLeft: 10 }}
        />
      ),
    },
    {
      title: <div className="headertable"><TeamOutlined /> Quản lý</div>,
      dataIndex: 'manager',
      width: 'auto',
      key: '2',
      render: (manager) => (
          manager.length > 0 ? (
              <span style={{ alignItems: 'center', display: 'flex' }}>
                  <Avatar style={{ backgroundColor: getRandomItem(colors), color: 'white' }}>{manager[0].charAt(0).toUpperCase()}</Avatar>
                  <span style={{ margin: '0 3px' }}>{manager}</span>
              </span>
          ) : null
      ),
    },
    {
      title: <div className="headertable"># Số nhân viên</div>,
      dataIndex: 'numberEmployee',
      width: 'auto',
      key: '3',
    },
    {
      title: <div className="headertable"><UnorderedListOutlined/> Email</div>, 
      dataIndex: 'email',
      width: 'auto',
      key: '4',
    },
    {
      title: <div className="headertable"><PhoneOutlined /> Số điện thoại</div>,
      dataIndex: 'phone',
      width: 'auto',
      key: '5',
    },
];
const data = [
    { id: 1, department: 'Sales', manager: 'Nguyen Van Quan Ly', numberEmployee: 3, email: 'hrstaff@test.com', phone: 'string'},
    { id: 2, department: 'Marketing', manager: 'Nguyen Van Quan Ly', numberEmployee: 0, email: 'hrstaff@test.com', phone: 'string'},
    { id: 3, department: 'Finance', manager: '', numberEmployee: 0, email: '', phone: ''},
    { id: 4, department: 'Human Resource', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 5, department: 'Operations', manager: '', numberEmployee: 0, email: '', phone: ''},
    { id: 6, department: 'Engineering', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 7, department: 'Customer Support', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 8, department: 'Research & Development', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 9, department: 'Quanlity Assurance', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 10, department: 'Design', manager: '', numberEmployee: 0, email: '', phone: '' },
    { id: 11, department: 'Chăm sóc khách hàng', manager: '', numberEmployee: 1, email: '', phone: '' },
];
function PhongBan() {
    return (
        <>
          <Header style={{ backgroundColor: "unset", paddingInline: "0px",}}>
              <HeaderContent data='Danh sách phòng ban'/>
          </Header>
          
          <div className='contentPage'>
            <div className='btn'>
              <div className='add'>
                <Button type="primary"><PlusOutlined /> Thêm Nhân Viên</Button>
              </div>
            </div>
          </div> 
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ 
              x: "max-content", 
            }}
          />
        </>
    )
}

export default PhongBan