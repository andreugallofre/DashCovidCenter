import React, { Component } from 'react';
import { Button, Modal, Form, Input, Layout, Typography, List } from 'antd';
import './Foro.css';
import { postNewPost, getAllPosts } from '../utils'

const { Title } = Typography;
let dataSource = [{ }];

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Nuevo Post"
        okText="Crear"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public' }} >
            <Form.Item name="user" label="User" rules={[ { required: true } ]} >
                <Input style={{marginTop: 0 , width: '100%'}}/>
            </Form.Item>
            <Form.Item name="title" label="Title" rules={[ { required: true } ]} >
                <Input style={{marginTop: 0 , width: '100%'}}/>
            </Form.Item>
            <Form.Item name="content" label="Description" rules={[ { required: true }, ]}> 
                <textarea style={{marginTop: 0, width: '100%'}}/> 
            </Form.Item>
        </Form>
      </Modal>
    );
  };

export class Foro extends Component {
    
    constructor(props) {
        super(props);
        this.state = { visible: false };
    };

    componentDidMount() {
        this.getData();   
    }


    onCreate = (values) => {
        console.log('Received values of form: ', values);
        postNewPost(values).then((response) => {
            // FER REFRESH O ALGO...
        }).catch((error) => {
            console.log(error);
            alert("Incorrect data");
        });

        this.setState({ visible: false })
    };


    getData = () => {
        let dataInfo = [{}];
        getAllPosts().then((response) => {
            dataInfo = response.data.data;
            console.log(response.data)
            for (let i = 0; i < dataInfo.length; ++i) {
                let newline = {
                    title: dataInfo[i].name,
                    description: dataInfo[i].desc
                };
                dataSource.push(newline);
            }
            dataSource.shift();
            this.render();
            return dataSource;

        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        return(
            <Layout>
                <Title>Foro</Title>
                <Button type="primary" onClick={() => { this.setState({ visible: true }) }} > New Post </Button>
                <CollectionCreateForm visible={this.state.visible} onCreate={this.onCreate} onCancel={() => { this.setState({ visible: false }) }} />
                <List
                    itemLayout="horizontal"
                    dataSource={dataSource}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta title={item.title} description={item.description} />
                    </List.Item>
                    )}
                />
            </Layout>  
        );
    }
}