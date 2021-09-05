import { Col, Row,Typography  } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer() {
    const { Title } = Typography;
    const logo = useSelector((state) => state.cinema.cinemaList)
    return (
        <Footer>
            <Row>
                <Col span={8}>
                    <Title level={4}>Tix</Title>
                    <Row>
                        <Col span={4}>FAQ</Col>
                        <Col span={4}>Thỏa thuận sử dụng</Col>
                    </Row>
                    <Row>
                        <Col span={4}>Brand Guidelines</Col>
                        <Col span={4}>Chính sách bảo mật</Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Title level={4}>Đối tác</Title>
                    {logo? logo.map((item) =>(
                        <img key={item.maHeThongRap} src={logo.logo} alt={logo.maHeThongRap}/>
                    )): 'không tồn tại'}
                </Col>
                {/* <Col span={4}></Col>
                <Col span={4}></Col> */}
            </Row>
        </Footer>
    )
}
