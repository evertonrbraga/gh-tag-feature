import React from "react";
import { Link } from "react-router-dom";
import {
  MdLocationOn,
  MdDomain,
  MdStar,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaTags } from "react-icons/fa";

import { Container } from "./styles";

const Repo = () => {
  return (
    <Container>
      <div className="left-side">
        <div className="top">
          <div className="infos">
            <div className="main-name">
              <Link to="/user">
                <h3>project-name-java</h3>
              </Link>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <p>
              Project application with component animations with React Native
            </p>
            <div className="tag">
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
    </Container>
  );
};

export default Repo;
