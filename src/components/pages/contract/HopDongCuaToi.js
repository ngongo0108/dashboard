import HeaderContent from '../../header';
import { Layout, Row, Col } from 'antd';
import { Descriptions } from 'antd';

const { Header } = Layout;

const HopDongCuaToi = () => {
  return (
    <>
      <Header style={{ backgroundColor: "unset", paddingInline: "0px" }}>
        <HeaderContent data='Hợp đồng của tôi' />
      </Header>
      <div className='contract'>
      
      <Row justify={"center"}>
        <Col>
          <h1>Thông tin hợp đồng</h1>
        </Col>
      </Row>      
      
        <Row justify={'center'}>
          <Col span={16}>
          <h2>Thông tin người lao động</h2>
            <Descriptions >
              <Row justify={"space-around"}>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Họ và tên:</label> 
                    <span>Nguyễn Văn Quản lý</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Giới tính:</label> 
                    <span>Nam</span>
                  </div>
                </Col>
              </Row>
              <Row justify={'start'}>
                <Col span={24}>
                <div className='contract_content'>
                    <label>Ngày sinh:</label> 
                    <span>xx-xx-xxxxs</span>
                  </div>
                  <div className='contract_content'>
                    <label>CMND|CCCD:</label> 
                    <span>0000xxx</span>
                  </div>
                  <div className='contract_content'>
                    <label>Địa chỉ:</label> 
                    <span>string</span>
                  </div>
                  <div className='contract_content'>
                    <label>Số điện thoại:</label> 
                    <span>0945xxxx</span>
                  </div>
                </Col>
              </Row>
            </Descriptions>
          
          <h2>Hợp đồng lao động</h2>
            <Descriptions title="1. Công việc phòng ban và thời hạn hợp đồng">
              <Row justify={"start"}>
                <Col span={24}>
                  <div className='contract_content'>
                    <label>Phòng ban công tác: </label> 
                    <span>Sales</span>
                  </div>
                  <div className='contract_content'>
                    <label>Loại hợp đồng: </label> 
                    <span>Hợp đồng xác định hạn</span>
                  </div>
                </Col>
              </Row>
              <Row justify={'space-around'}>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Từ ngày:</label> 
                    <span>05-08-2023</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Đến ngày:</label> 
                    <span>30-11-2023</span>
                  </div>
                </Col>
              </Row>
            </Descriptions>
            <Descriptions title="2. Lương, phục cấp và các khoản bổ sung khác">
              <Row>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Lương căn bản: </label> 
                    <span>90.000.000</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='contract_content'>
                    <label>Lương tính thuế:</label> 
                    <span>80.000.000</span>
                  </div>
                </Col>
              </Row>
              <Row justify={"space-around"}>
                <Col span={24}>
                  <div className='contract_content'>
                    <label id='lb'>Các phụ cấp (mỗi tháng): </label> 
                    <span></span>
                  </div>
                  <div className='contract_content'>
                    <label>Hình thức trả lương:</label> 
                    <span>Chuyển khoản</span>
                  </div>
                  <div id='bank'>
                    <div className='contract_content'>
                      <label>Số TK ngân hàng:</label> 
                      <span>string</span>
                    </div>
                    <div className='contract_content'>
                      <label>Chủ tài khoản:</label> 
                      <span>string</span>
                    </div>
                    <div className='contract_content'>
                      <label>Ngân hàng:</label> 
                      <span>string</span>
                    </div>
                  </div>
                </Col>
              </Row>
              
            </Descriptions>
            <Descriptions title="3. Thời gian làm việc và ghi chú">
              <Row justify={"start"}>
                <Col span={24} id = 'last'>
                  <div className='contract_content'>
                    <label id='lb'>Số ngày làm việc một tuần:</label> 
                    <span>5</span>
                  </div>
                  <div className='contract_content'>
                    <label id='lb'>Số người phụ thuộc:</label> 
                    <span>1</span>
                  </div>
                  <div className='contract_content'>
                    <label>Ghi chú: </label> 
                    <span></span>
                  </div>
                </Col>
              </Row>
            </Descriptions>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HopDongCuaToi;

