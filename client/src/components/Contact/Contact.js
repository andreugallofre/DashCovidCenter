import React, {Component} from 'react';
import { Row, Col, Layout, Divider, Typography } from 'antd';
import './Contact.css';

const { Title } = Typography;
export class Contact extends Component {

    render() {
        return(
            <Layout>
                <Title>Contacto</Title>
                <Row>
                    <Col span={12}>
                        <form name="contact" method="POST" data-netlify="true">
                            <p>
                                <input type="text" name="name" placeholder="Name (optional)"/>
                            </p>
                            <p>
                                <input type="email" name="email" placeholder="Email (optional)"/>
                            </p>
                            <p>
                                <textarea name="message" placeholder="Write here your suggestions, either a speaker or topics for future T&W. We are open to everything!" required></textarea>
                            </p>
                            <p>
                                <button type="submit" class="form-button">Enviar</button>
                            </p>
                        </form>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={12}>
                        
                    </Col>
                </Row>
            </Layout>  
        );
    }
}



