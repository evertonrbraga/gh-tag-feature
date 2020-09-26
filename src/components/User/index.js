import React from "react";
import { Link } from "react-router-dom";
import {
  MdLocationOn,
  MdDomain,
  MdStar,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import { Container } from "./styles";

const Repo = () => {
  return (
    <Container>
      <div className="left-side">
        <div className="top">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt="User avatar"
          />
          <div className="infos">
            <div className="main-name">
              <Link to="/user">
                <h2>John Doe Santos</h2>
              </Link>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <p>@johndoesantos</p>
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
          <IoMdTrash className="icon" />
        </div>
      </div>
    </Container>
  );
};

export default Repo;
