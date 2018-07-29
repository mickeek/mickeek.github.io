import React, { Component } from "react";
import QRCode from "qrcode.react";
import { Layout, Row, Col, Modal, Button } from "antd";

import "./App.css";
import "antd/dist/antd.css";
import { InputForm } from "./InputForm";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    qrCodeValue: "",
    modalVisible: false
  };

  formInputComplete = ({ username, password, token, postfix }) => {
    const user = {
      username: username + postfix,
      password,
      token
    };

    console.log(user);

    this.setState({
      qrCodeValue: JSON.stringify(user),
      modalVisible: true
    });
  };

  render() {
    const { qrCodeValue, modalVisible } = this.state;

    return (
      <Layout style={{ height: "100vh" }}>
        <Header />
        <Content style={{ display: "flex" }}>
          <Row
            type="flex"
            justify="space-around"
            gutter={16}
            style={{ flexGrow: 1 }}
            align="middle"
          >
            <Col span={12} style={{ maxWidth: 600 }}>
              <InputForm formInputComplete={this.formInputComplete} />
            </Col>
          </Row>
          <Modal
            visible={modalVisible}
            title="Scan the QR code in the app"
            onCancel={() => this.setState({ modalVisible: false })}
            style={{ textAlign: "center" }}
            footer={
              <Button
                key="submit"
                type="primary"
                onClick={() => this.setState({ modalVisible: false })}
              >
                Okay, done.
              </Button>
            }
          >
            <QRCode size={254} value={qrCodeValue} />
          </Modal>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;
