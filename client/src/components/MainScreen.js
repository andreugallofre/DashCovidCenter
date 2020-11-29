import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, WechatOutlined, InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './MainScreen.css';
import { Contact } from './Contact/Contact';
import { Dashboard } from './Dashboard/Dashboard';
import Chatbot from './ChatBot/ChatBot';

export class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          home: true, 
          tests: false, 
          foro: false, 
          faqs: false, 
          contact: false,
          current: '1'
        };
    };

    toHome = () => {
        this.setState({ home: true, tests: false, foro: false, faqs: false, contact: false, current: '1' })             
    };

    toTest = () => {
        this.setState({ home: false, tests: true, foro: false, faqs: false, contact: false, current: '2' })             
    };

    toForo = () => {
        this.setState({ home: false, tests: false, foro: true, faqs: false, contact: false, current: '3' })             
    };

    toFaqs = () => {
        this.setState({ home: false, tests: false, foro: false, faqs: true, contact: false, current: '4' })             
    };

    toContact = () => {
        this.setState({ home: false, tests: false, foro: false, faqs: false, contact: true, current: '5' })             
    };

    render() {
      const { current } = this.state;

        return (
            <Layout>
                <Menu selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="1" onClick={this.toHome} icon={<HomeOutlined />}> Inicio </Menu.Item>
                    <Menu.Item key="0" onClick={()=> window.open("https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/situacionActual.htm", "_blank")}> Ministerio de Sanidad </Menu.Item>
                    {/* <Menu.Item key="2" onClick={this.toTest} icon={<ShopOutlined />}> Centro de Pruebas </Menu.Item> */}
                    <Menu.Item key="3" onClick={this.toForo} icon={<WechatOutlined />}> Foro </Menu.Item>
                    <Menu.Item key="4" onClick={this.toFaqs} icon={<InfoCircleOutlined />}> Preguntas Frequentes </Menu.Item>
                    <Menu.Item key="5" onClick={this.toContact} icon={<QuestionCircleOutlined />}> Contact </Menu.Item>
                </Menu>

                <Layout className="main-component">
                    { this.state.home ? <Dashboard /> : null }
                    { this.state.contact ? <Contact /> : null }
                </Layout>
                <Chatbot />
            </Layout>
        );
    }
}
