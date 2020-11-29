import React, {Component} from 'react';
import { Row, Col, Layout, Divider, Form, Input, Button } from 'antd';
import './Contact.css';
export class Contact extends Component {

    render() {
        return(
            <Layout>
                <h1>Contacto</h1>
                <Row>
                    <Col span={12}>
                    <Form name="contact-form" netlify>
                        <Form.Item rules={[{ type: 'email', required: true }]}>
                            <Input style={{ width: 160 }} placeholder="Correo electronico" />
                        </Form.Item>
                        <Form.Item>
                            <Input.TextArea style={{ width: 300 }} placeholder="Consulta a realizar"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>
                    </Form>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={12}>
                        
                    </Col>
                </Row>
            </Layout>  
        );
    }
}



