import { Button, Checkbox, Form, Input } from "antd"
import background from "../../assets/image/background.png"
import image from "../../assets/image/image.png"
import "./Homepage.scss"
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Homepage = () => {
    return (
        <div className="homepage">
            
        <div className="content">
            <h1>Quản trị và phát triển nhân sự mở rộng</h1>
            {/* <h1>Đăng nhập website</h1> */}
            <Form
                name="basic" labelCol={{ span: 8,}}
                wrapperCol={{ span: 16,}}
                style={{ maxWidth: 600,}}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16,}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                    <Button type="primary" htmlType="submit">Đăng nhập</Button>
                </Form.Item>
            </Form>
        </div>
        <div className="content">
            
                <img
                    width={'50%'}
                    height={'50%'}
                    src={image}
                    alt=""
                />
             </div>
        </div>
    )
}
export default Homepage