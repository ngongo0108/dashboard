import { Layout, Steps, Form, Input, Button, Col, Row, DatePicker, Radio, Dropdown, message, Space, notification } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import HeaderContent from '../../header'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;
const SubmitButton = ({ form, name }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {name}
    </Button>
  );
};
const TaoNhanVienMoi = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const [account, setAccount] = useState(null);
  const [info, setInfo] = useState(null);
  const onFinishFormCreate = (values) => {
    setAccount(values);
    setCurrent(1);
  }
  const onFinishFormInfo = (values) => {
    setInfo(values);
    setCurrent(2);
  }
  
  const nagative = useNavigate();
  const forms = [
    <FormCreate onFinish={onFinishFormCreate} initialValues={account}/>,
    <FormInfo onFinish={onFinishFormInfo} initialValues={info}/>,
  ];
  const openNotification = () => {
    const duration = 1;
    notification["success"]({
      message: `Thêm nhân viên thành công`,
      duration: duration,
    });
    nagative("/toanbonhanvien")
  };
  return (
    <div>
      <Header style={{ backgroundColor: "unset", paddingInline: "0px",}}>
        <HeaderContent data='Danh sách phòng ban'/>
      </Header>
      <div className='addEmployee'>
      <Row justify="center">
        <Col span={16}>
          <Steps 
          style={{ padding: "32px 16px"}}
          current={current}
          >
            <Steps.Step title='Tạo tài khoản'></Steps.Step>
            <Steps.Step title='Thông tin cá nhân'></Steps.Step>
          </Steps>
          
        </Col>
      </Row>
      {forms[current]}
      {
        current === 0 && (
          <>
            <Row justify={"space-around"}>
              <Col span={16} className='btnAdd'>
                <Col>
                  <Form.Item>
                    <Button type="primary" disabled>QUAY LẠI</Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={()=> next()}>TIẾP</Button>
                  </Form.Item>
                </Col>
              </Col>
            </Row>
          </>
        )
      }
      {
        current === 1 && (
          <>
            <Row justify="space-around" >
              <Col span={16} className='btnAdd'>         
                <Col>
                  <Form.Item>
                    <Button type="primary" onClick={()=> prev()}>QUAY LẠI</Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={() => openNotification()}>HOÀN THÀNH</Button>
                  </Form.Item>
                </Col>
              </Col>
            </Row>
          </>
        )
      }
      </div>
    </div>
  )
}
export default TaoNhanVienMoi;

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Sales',
    key: '1',
  },
  {
    label: 'Marketing',
    key: '2',
  },
  {
    label: 'Finance',
    key: '3',
  },
  {
    label: 'Human Resource',
    key: '4',
  },
  {
    label: 'Operations',
    key: '5',
  },
  {
    label: 'Engineering',
    key: '6',
  },
  {
    label: 'Customer Support',
    key: '7',
  },
  {
    label: 'Research & Development',
    key: '8',
  },
  {
    label: 'Quanlity Assurance',
    key: '9',
  },
  {
    label: 'Design',
    key: '10',
  },
  {
    label: 'Chăm sóc khách hàng',
    key: '11',
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const FormCreate = ({onFinish, initialValues}) => {
  const [form] = Form.useForm();
  return(
    <Form form={form} onFinish={onFinish} initialValues={initialValues} name="validateOnly" layout="vertical" autoComplete="off">
      <Row justify="center">
        <Col span={16}>
          <Form.Item
            name={"name"} label="Tên đăng nhập" rule = {[{required: true, message: "Vui lòng nhập tên đăng nhập"}]}
          >
            <Input placeholder="Nhập tên đăng nhập"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <Form.Item
          name={"email"} label="Email" rule = {[{required: true, message: "Vui lòng nhập email"}]}
          >
            <Input placeholder="Nhập email"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <Form.Item
            name={"password"} label="Mật khẩu" rule = {[{required: true, message: "Mật khẩu cần ít nhất 1 ký tự đặt biệt, 1 chữ in hoa và một số"}]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <Form.Item
            name={"passwordagain"} label="Xác nhận mật khẩu" rule = {[{required: true, message: "Vui lòng nhập đúng mật khẩu"}]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
    </Form>    
  )
}
const FormInfo = ({onFinish, initialValues}) => {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  const onChange = (value) => {
    setValue(value.target.value);
  };
  return(
    <Form form={form} onFinish={onFinish} initialValues={initialValues} name="validateOnly" layout="vertical" autoComplete="off">
      <Row justify="center">
        <Col span={8}>
          <Form.Item
            name={"firstname"} label="Họ" 
          >
            <Input placeholder="Nhập họ"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"lastname"} label="Tên" 
          >
            <Input placeholder="Nhập tên"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Form.Item
            name={"gender"} label="Giới tính" 
          >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"Nữ"}>Nữ</Radio>
            <Radio value={"Nam"}>Nam</Radio>
          </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"country"} label="Quốc tịch" 
          >
            <Input placeholder="Nhập quốc tịch"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Form.Item
            name={"phone"} label="Số điện thoại" 
          >
          <Input placeholder="Nhập số điện thoại"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"birthday"} label="Ngày sinh" 
          >
            <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <Form.Item
            name={"address"} label="Địa chỉ" 
            >
            <Input placeholder="Nhập địa chỉ"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Form.Item
            name={"department"} label="Phòng ban" 
          >
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Chọn phòng ban
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"CCCD"} label="CCCD|CMND" 
          >
            <Input placeholder="Nhập CCCD|CMND"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
        <Form.Item
            name={"bankName"} label="Tên tài khoản ngân hàng" 
          >
            <Input placeholder="Nhập tên tài khoản ngân hàng"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"bankNumber"} label="Số tài khoản ngân hàng" 
          >
            <Input placeholder="Nhập số tài khoản ngân hàng"/>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <Form.Item
            name={"bank"} label="Ngân hàng" 
            >
            <Input placeholder="Nhập ngân hàng"/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

// const TaoNhanVienMoi = () => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
//       <Form.Item
//         name="name"
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="age"
//         label="Age"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
      // <Form.Item>
      //   <Space>
      //     <SubmitButton form={form} name='Hoàn thành'/>
      //     <Button htmlType="reset">Reset</Button>
      //   </Space>
      // </Form.Item>
//     </Form>
//   );
// };
// export default TaoNhanVienMoi;