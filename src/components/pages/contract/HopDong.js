import { UnorderedListOutlined, MenuOutlined, CalendarOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Table, Tag, Badge, Layout, Avatar, Pagination } from 'antd'
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
      title: <div className="headertable">ID</div>,
      width: 'auto',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      sorter: true,
    },
    {
        title: <div className="headertable"><UserOutlined /> Tạo bởi</div>,
        dataIndex: 'maker',
        width: 'auto',
        fixed: 'left',
        key: '1',
        render: (maker) => {
            let letter = maker[0].charAt(0).toUpperCase();
            const randomColor = getRandomItem(colors); // Lấy màu ngẫu nhiên
            return (
                <span style={{ alignItems: 'center', display: 'flex' }}>
                    <Avatar style={{ backgroundColor: randomColor, color: 'white' }}>{letter}</Avatar>
                    <span style={{ margin: '0 3px' }}>{maker}</span>
                </span>
            );
        },
    },
    {
        title: <div className="headertable"><UnorderedListOutlined/> Loại hợp đồng</div>,
        dataIndex: 'contract',
        fixed: 'left',
        width: 'auto',
        key: '2',
        render: (text) => (
            <Badge
            color={
                text === 'Hợp đồng xác định hạn' ? '#CCA432' :
                text === 'Hợp đồng tạm thời' ? '#69BE98' : ''
            }
            text={text}
            style={{ marginLeft: 10 }}
            />
        ),
    },
    {
        title: <div className="headertable"><UnorderedListOutlined/> Trạng thái</div>, 
        dataIndex: 'status',
        width: 'auto',
        key: '3',
        render: (text) => (
            <Tag
            color={
                text === 'Hiệu lực' ? 'purple' :
                text === 'Vô hiệu lực' ? 'red' : ''
            }
            >{text}</Tag>
        ),
    },
    {
        title: <div className="headertable"><UnorderedListOutlined/> Loại lương</div>, 
        dataIndex: 'salary',
        width: 'auto',
        key: '4',
        render: (text) => (
            <Tag
            color={
                text === 'Gross To Net' ? 'blue' :
                text === 'No salary' ? 'red' : ''
            }
            >{text}</Tag>
        ),
    },
    {
        title: <div className="headertable"># Người phụ thuộc</div>,
        dataIndex: 'dependent',
        width: 'auto',
        key: '5',
    },
    {
        title: <div className="headertable"><CalendarOutlined /> Ngày bắt đầu</div>,
        dataIndex: 'startdate',
        width: 'auto',
        key: '6',
    },
    {
        title: <div className="headertable"><CalendarOutlined /> Ngày kết thúc</div>,
        dataIndex: 'enddate',
        width: 'auto',
        key: '7',
    },
    {
        title: <div className="headertable"># Lương thỏa thuận</div>,
        dataIndex: 'negotiable',
        width: 'auto',
        key: '8',
        render: (text) => (
            <p style={{margin: '0px'}}>{text} <span style={{textDecoration: 'underline'}}>đ</span></p>
        )
    },
    {
        title: <div className="headertable"><MenuOutlined /> Lương đóng thuế</div>,
        dataIndex: 'taxable',
        width: 'auto',
        key: '9',
        render: (text) => (
            <p style={{margin: '0px'}}>{text} <span style={{textDecoration: 'underline'}}>đ</span></p>
        )
    },
    {
        title: <div className="headertable"># Tổng phụ cấp</div>,
        dataIndex: 'allowance',
        width: 'auto',
        key: '10',
        render: (text) => (
            <p style={{margin: '0px'}}>{text} <span style={{textDecoration: 'underline'}}>đ</span></p>
        )
    },
    {
        title: <div className="headertable"><MenuOutlined /> Ghi chú</div>,
        dataIndex: 'note',
        width: 'auto',
        key: '11',
        render: (text) => (
            <p style={{ margin: '0px', fontWeight: 400, fontStyle: 'oblique', color: text === '' || text === 'No salary' ? 'gray' : 'black' }}>
              {text === '' ? 'Chưa có ghi chú' : text}
            </p>
        ),
    },
    {
        title: <div className="headertable"><CalendarOutlined /> Thời gian tạo</div>,
        dataIndex: 'datecreate',
        width: 'auto',
        key: '12',
    },
    {
        title: <div className="headertable"><CalendarOutlined /> Thời gian thay đổi</div>,
        dataIndex: 'datechange',
        width: 'auto',
        key: '13',
    },
];
const data = [
    { key: 1, id: 1, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: 'leader', datecreate:'', datechange: '' },
    { key: 2, id: 2, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 3, id: 3, maker: 'Quan Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 4, id: 4, maker: 'Van Nguyen Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 5, id: 5, maker: 'Van Nguyen Quan', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 6, id: 6, maker: 'Van Nguyen Quan Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 7, id: 7, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 8, id: 8, maker: 'Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 9, id: 9, maker: 'Van ', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 11, id: 11, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 12, id: 12, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 13, id: 13, maker: 'Quan Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 14, id: 14, maker: 'Van Nguyen Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 15, id: 15, maker: 'Van Nguyen Quan', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 16, id: 16, maker: 'Van Nguyen Quan Ly', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 17, id: 17, maker: 'Van Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 18, id: 18, maker: 'Nguyen', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
    { key: 19, id: 19, maker: 'Van ', contract: 'Hợp đồng xác định hạn', status: 'Hiệu lực', salary: 'Gross To Net', dependent: '1', startdate: 'Th 08 5, 2023, 00:00', enddate: 'Th 11 30, 2023, 00:00', negotiable: '90.000.000', taxable: '80.000.000', allowance: '0', note: '', datecreate:'', datechange: '' },
];
const paginationConfig = {
    pageSize: 8, // Số phần tử trên mỗi trang
    total: data.length, // Tổng số phần tử
  };
const { Search } = Input;
const onSearch = (value) => console.log(value);
function HopDong() {
    return (
        <>
            <Header style={{ backgroundColor: "unset", paddingInline: "0px"}}>
            <HeaderContent data='Hợp đồng nhân viên'/>
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
                </div> 
            </div> 
            <Table
            columns={columns}
            dataSource={data}
            scroll={{
                x: "max-content",
            }}
            pagination={paginationConfig}
            />
        </>
    )
}

export default HopDong