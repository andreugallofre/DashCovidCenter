import React, {Component} from 'react';
import { Card, Layout, Typography } from 'antd';
import './Dashboard.css';

const { Title } = Typography;
export class Dashboard extends Component {

    render() {
        return(
            <Layout>
                <Title>Dashboard</Title>
                <div class="row-cards">
                    <Card title="Casos confirmats" bordered={true} className="card-size">
                        Card content
                    </Card>
                    <Card title="Defuncions" bordered={true} className="card-size">
                        Card content
                    </Card>
                    <Card title="Altes hospitalaries" bordered={true} className="card-size">
                        Card content
                    </Card>
                </div>
                <div>
                    <div class="row-cards">
                        <Card title="Casos confirmats" bordered={true} className="card-size">
                            Card content
                        </Card>
                        <Card title="Defuncions" bordered={true} className="card-size">
                            Card content
                        </Card>
                        <Card title="Altes hospitalaries" bordered={true} className="card-size">
                            Card content
                        </Card>
                    </div>
                </div>

            </Layout>  
        );
    }
}
