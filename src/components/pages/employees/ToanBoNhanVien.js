import { PlusOutlined, UnorderedListOutlined, PhoneOutlined, MenuOutlined, CalendarOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Space, Dropdown, Input, Table, Tag, Badge, Layout, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons';
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
        title: '',
        width: 'auto',
        dataIndex: '...',
        key: '...',
        fixed: 'left',
        render: () => (
            <EllipsisOutlined />
        ),
    },
    {
        title: '',
        dataIndex: 'avatar',
        key: 'avatar',
        width: 'auto',
        fixed: 'left',
        render: (status) => (
            status ? 
            (
                <Avatar icon={<UserOutlined />} style = {{background: '#0280FA'}}/>
            ) : 
            (
                <Avatar icon={<UserOutlined />} />
            )
        ), 
    },
    {
      title: <div className="headertable">ID</div>,
      width: 'auto',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      sorter: true,
    },
    {
        title: <div className="headertable"><MenuOutlined /> Tên nhân viên</div>,
        dataIndex: 'employee',
        width: 'auto',
        fixed: 'left',
        key: '1',
        render: (employee) => {
            let letter = employee[0].charAt(0).toUpperCase();
            const randomColor = getRandomItem(colors); // Lấy màu ngẫu nhiên
            return (
                <span style={{ alignItems: 'center', display: 'flex' }}>
                    <Avatar style={{ backgroundColor: randomColor, color: 'white' }}>{letter}</Avatar>
                    <span style={{ margin: '0 3px' }}>{employee}</span>
                </span>
            );
        },
    },
    {
        title: <div className="headertable"><UnorderedListOutlined/> Phòng ban</div>,
        dataIndex: 'department',
        width: 'auto',
        key: '2',
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
                text === 'Quanliy Assurance' ? '#3EA043' :
                text === 'Design' ? '#FA0201' :
                text === 'Chăm sóc khách hàng' ? '#0000FA' : ''
            }
            text={text}
            style={{ marginLeft: 10 }}
            />
        ),
    },
    {
        title: <div className="headertable"><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        width: 'auto',
        key: '3',
    },
    {
        title: <div className="headertable"><UnorderedListOutlined/> Giới tính</div>, 
        dataIndex: 'gender',
        width: 'auto',
        key: '4',
        render: (text) => (
            <Tag
            color={
                text === 'Nam' ? 'blue' :
                text === 'Nữ' ? 'red' : ''
            }
            >{text}</Tag>
        ),
    },
    {
        title: <div className="headertable"><MenuOutlined /> Email</div>,
        dataIndex: 'email',
        width: 'auto',
        key: '5',
    },
    {
        title: <div className="headertable"><MenuOutlined /> Ngân hàng</div>,
        dataIndex: 'bank',
        width: 'auto',
        key: '6',
    },
    {
        title: <div className="headertable"><CalendarOutlined /> Ngày sinh</div>,
        dataIndex: 'birthday',
        width: 'auto',
        key: '7',
    },
    {
        title: <div className="headertable"><MenuOutlined /> Địa chỉ</div>,
        dataIndex: 'address',
        width: 'auto',
        key: '8',
    },
    {
        title: <div className="headertable"><MenuOutlined /> Quốc gia</div>,
        dataIndex: 'country',
        width: 'auto',
        key: '9',
    },
    {
        title: <div className="headertable"># TK Ngân hàng</div>,
        dataIndex: 'banknumber',
        width: 'auto',
        key: '10',
    },
];
const data = [
    { key: 1, avatar: 'Q', id: 1, employee: 'Van Nguyen', department: 'Sales', phone: 'string', gender: 'Nữ', email: 'hrmanager@test.com', bank: 'string', birthday: '6 tháng 8 năm 2023', address: 'string', country: 'string', banknumber: 'string', status: true},
    { key: 2, avatar: 'L', id: 2, employee: 'Nguyen Van Quan Ly', department: 'Sales', phone: 'string', gender: 'Nam', sonhanvien: 0, email: 'staff@test.com', bank: 'string', birthday: '6 tháng 8 năm 2023', address: 'string', country: 'string', banknumber: 'string', status: true},
    { key: 3, avatar: '', id: 3, employee: 'Nguyen Van Nhan Vien', department: 'Chăm sóc khách hàng', phone: 'string', gender: 'Nam', email: 'hrstaff@test.com', bank: 'string', birthday: '6 tháng 8 năm 2023', address: 'string', country: 'string', banknumber: 'string', status: false},
    { key: 4, avatar: '', id: 4, employee: 'Human', department: 'Sales', phone: 'string', gender: 'Nam', email: 'test1@gmail.com', bank: 'string', birthday: '4 tháng 8 năm 2023', address: 'string', country: 'string', banknumber: 'string', status: false },
];
const items = [
    {
      label: '1st menu item',
      key: '0',
    },
    {
      label: '2nd menu item',
      key: '1',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
];
const { Search } = Input;
const onSearch = (value) => console.log(value);
function ToanBoNhanVien() {
    return (
        <>
            <Header style={{ backgroundColor: "unset", paddingInline: "0px"}}>
                <HeaderContent data='Danh sách nhân viên'/>
            </Header>
            <div className='contentPage'>
                <div className='btn'>
                    <div className='search'>
                        <Search
                        placeholder="Tìm kiếm ..."
                        allowClear
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                        />
                    </div>
                    <div className='dropdown'>
                        <Dropdown
                            menu={{items,}}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Toàn bộ phòng ban
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                        <Button>Làm mới</Button>
                    </div>
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

export default ToanBoNhanVien