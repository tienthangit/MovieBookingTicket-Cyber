import { Col, Row,Typography  } from 'antd'
import React from 'react'
// import { useSelector } from 'react-redux'

export default function Footer() {
    const { Title } = Typography;
    // const logo = useSelector((state) => state.cinema.cinemaList)
    return (
        <Footer>
            <Row>
                <Col span={8}>
                    <Title level={4}>Tix</Title>
                    <Row>
                        <Col span={4}>FAQ</Col>
                        <Col span={4}>FAQ</Col>
                    </Row>
                </Col>
                <Col span={8}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>
        </Footer>
    )
}
