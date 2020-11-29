import React, { Component } from 'react';
import { Button, Modal, Form, Input, Layout, Typography, List, Divider } from 'antd';
import './Foro.css';
import { postNewPost, getAllPosts, postNewReponse } from '../utils'

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
            <Form.Item name="user" label="Usuario" rules={[ { required: true } ]} >
                <Input style={{marginTop: 0 , width: '100%'}}/>
            </Form.Item>
            <Form.Item name="title" label="Titulo" rules={[ { required: true } ]} >
                <Input style={{marginTop: 0 , width: '100%'}}/>
            </Form.Item>
            <Form.Item name="content" label="Mensaje" rules={[ { required: true }, ]}> 
                <textarea style={{marginTop: 0, width: '100%'}}/> 
            </Form.Item>
        </Form>
      </Modal>
    );
  };

  const CollectionCreateForm2 = ({ visible, onCreate, onCancel, IDpost }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Comentario"
        okText="Crear"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values.content, values.user, IDpost);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public' }} >
            <Form.Item name="user" label="Usuario" rules={[ { required: true } ]} >
                <Input style={{marginTop: 0 , width: '100%'}}/>
            </Form.Item>
            <Form.Item name="content" label="Mensaje" rules={[ { required: true }, ]}> 
                <textarea style={{marginTop: 0, width: '100%'}}/> 
            </Form.Item>
        </Form>
      </Modal>
    );
  };

export class Foro extends Component {
    
    constructor(props) {
        super(props);
        this.state = { visible: false, visible2: false };
    };

    componentDidMount() {
        this.getData();   
    }


    onCreate = (values) => {
        console.log('Received values of form: ', values);
        postNewPost(values).then((response) => {
            this.getData();
        }).catch((error) => {
            console.log(error);
            alert("Incorrect data");
        });

        this.setState({ visible: false })
    };

    onCreate2 = (content, user, IDpost) => {
        postNewReponse(content, user, IDpost).then((response) => {
            this.getData();
        }).catch((error) => {
            console.log(error);
            alert("Incorrect data");
        });

        this.setState({ visible2: false })
    };


    getData = () => {
        let dataInfo = [{}];
        getAllPosts().then((response) => {
            dataInfo = response.data;
            for (let i = 0; i < dataInfo.length; ++i) {
                let newline = {
                    title: dataInfo[i].title,
                    user: dataInfo[i].user,
                    content: dataInfo[i].content,
                    responses: dataInfo[i].responses
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
                <Button type="primary" onClick={() => { this.setState({ visible: true }) }} style={{width: '20%'}}> Nuevo Post </Button>
                <CollectionCreateForm visible={this.state.visible} onCreate={this.onCreate} onCancel={() => { this.setState({ visible: false }) }} />
                <List 
                    itemLayout="horizontal"
                    dataSource={dataSource}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta title={item.title} description={item.user} />
                        {item.content}
                        <Divider />
                        Comentarios:
                        <List 
                            itemLayout="horizontal"
                            dataSource={item.responses}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta description={item.user} />
                                {item.content}
                            </List.Item>
                            )}
                        />
                        <Button type="primary" onClick={() => { this.setState({ visible2: true }) }} style={{width: '20%'}}> Contestar </Button>
                        <CollectionCreateForm2 visible={this.state.visible2} onCreate={this.onCreate2} onCancel={() => { this.setState({ visible2: false }) }} />
                    </List.Item>
                    )}
                />
            </Layout>  
        );
    }
}