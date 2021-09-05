import React from 'react'
import Header from '../../Components/Header'
import { Row, Col, Typography } from 'antd';
import { useSelector } from 'react-redux'


function Layout(props) {
    const { Title } = Typography;
    const cinema = useSelector((state) => state.cinema)
    return (
        <div>
            <Header />
            {props.children}
            {/* <div style={{ background: "red", height: 50, marginTop: 20 }}>
               FOOTER
           </div> */}
            <div>
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
                        <Row>
                            {cinema ? cinema.cinemaList?.map((item) => (
                                <Col span={2}><img key={item.maHeThongRap} src={item.logo} alt={item.maHeThongRap} style={{ width: 30 }} /></Col>
                            )) : 'không tồn tại'}
                        </Row>

                    </Col>
                    <Col span={4}>
                        <Title level={4}>MOBILE APP</Title>
                        <Row>
                            <Col span={4}><img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="logo" style={{ width: 30 }} /></Col>
                            <Col span={4}><img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="logo" style={{ width: 30 }} /></Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Title level={4}>SOCIAL</Title>
                        <Row>
                            <Col span={4}><img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="logo" style={{ width: 30 }} /></Col>
                            <Col span={4}><img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="logo" style={{ width: 30 }} /></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Layout
