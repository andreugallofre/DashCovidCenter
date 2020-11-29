import React, { Component } from "react";
import { Typography } from "antd";

import { Card, Layout } from "antd";
import "./Dashboard.css";
import MenuCiudades from "../Menu/Ciudades";
const { Title, Text } = Typography;
export class Dashboard extends Component {
  renderCard(data) {
    const { title, total, dia, cssClass } = data;
    const color = dia.pert > 0 ? "danger" : "success";
    const percentage = dia.pert > 0 ? `+${dia.pert}%` : `-${dia.pert}%`;
    return (
      <Card title={title} bordered={true} className={cssClass}>
        <div class="dash-card">
          <div className="first">
            <Text code>{dia.data}</Text>
            <Title level={3} className="title">
              {dia.total}
            </Title>
            <Text type={color}> {percentage} </Text>
          </div>
          <div className="divider" />
          <div>
            <Text code>TOTAL</Text>
            <Title level={3} className="title">
              {total}
            </Title>
          </div>
        </div>
      </Card>
    );
  }

  render() {
    return (
      <Layout className="container">
        <Title className="title" level={2}>
          Dades de Catalunya
        </Title>
        <div className="cards">
          {this.renderCard({
            title: "Casos confirmats",
            total: 133.751,
            dia: {
              data: "22/11",
              total: 123,
              pert: 16.8,
            },
            cssClass: "blue-card",
          })}

          {this.renderCard({
            title: "Defuncions",
            total: 133.751,
            dia: {
              data: "22/11",
              total: 123,
              pert: 16.8,
            },
            cssClass: "grey-card",
          })}

          {this.renderCard({
            title: "Altes hospitalariess",
            total: 133.751,
            dia: {
              data: "22/11",
              total: 123,
              pert: 16.8,
            },
            cssClass: "green-card",
          })}
        </div>
        <div className="content">
          <div className="into">
            <MenuCiudades
              items={["Barcelona", "Girona", "Lleida", "Tarragona"]}
            />
            <div className="cards">
              {this.renderCard({
                title: "Casos confirmats",
                total: 133.751,
                dia: {
                  data: "22/11",
                  total: 123,
                  pert: 16.8,
                },
                cssClass: "blue-card",
              })}

              {this.renderCard({
                title: "Defuncions",
                total: 133.751,
                dia: {
                  data: "22/11",
                  total: 123,
                  pert: 16.8,
                },
                cssClass: "grey-card",
              })}

              {this.renderCard({
                title: "Altes hospitalariess",
                total: 133.751,
                dia: {
                  data: "22/11",
                  total: 123,
                  pert: 16.8,
                },
                cssClass: "green-card",
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
