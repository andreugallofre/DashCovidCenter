import React, {Component} from 'react';
import { Card, Layout } from 'antd';
import './Dashboard.css';
export class Dashboard extends Component {

    render() {
        return(
            <Layout>
                <h1>Dashboard</h1>
                <div>
                    <Card title="Casos confirmats" bordered={true}>
                        Card content
                    </Card>
                    <Card title="Defuncions" bordered={true}>
                        Card content
                    </Card>
                    <Card title="Altes hospitalaries" bordered={true}>
                        Card content
                    </Card>
                </div>
                <div>
                    <div>
                        <Card title="Casos confirmats" bordered={true}>
                            Card content
                        </Card>
                        <Card title="Defuncions" bordered={true}>
                            Card content
                        </Card>
                        <Card title="Altes hospitalaries" bordered={true}>
                            Card content
                        </Card>
                    </div>
                </div>

            </Layout>  
        );
    }
}
