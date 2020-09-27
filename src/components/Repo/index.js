import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Input } from "antd";
import {
  MdSearch,
  MdLocationOn,
  MdDomain,
  MdStar,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaTags } from "react-icons/fa";

import { Button } from "../../components/Button";
import CustomTag from "../../components/CustomTag";
import { Container } from "./styles";

const Repo = ({ repo }) => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Container>
      <div className="left-side">
        <div className="top">
          <div className="infos">
            <div className="main-name">
              <Link to="/user">
                <h3>{repo?.full_name}</h3>
              </Link>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <p>
              Project application with component animations with React Native
            </p>
            <div className="tag" onClick={() => setVisible(true)}>
              <p>Gerenciar tags</p>
              <div className="icon-container">
                <FaTags className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>
            <MdDomain />
            <p>GO.K Digital</p>
          </span>
          <span>
            <MdLocationOn />
            <p>São Paulo, Brazil</p>
          </span>
          <span>
            <MdStar />
            <p>2</p>
          </span>
        </div>
      </div>
      <div className="right-side">
        <div className="icon-container">
          <MdStar className="icon" />
        </div>
      </div>
      <Modal
        centered
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <Input prefix={<MdSearch />} />
        <Button text="Salvar" width="100%" />
        <p>Cancelar</p>
        <CustomTag />
      </Modal>
    </Container>
  );
};

export default Repo;
