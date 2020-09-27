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

const User = ({ user }) => {
  const { id, avatar_url, name, login, company, location } = user;
  return (
    <Container>
      <div className="left-side">
        <div className="top">
          <img src={avatar_url} alt="User avatar" />
          <div className="infos">
            <div className="main-name">
              <Link
                to={{
                  pathname: "/user",
                  state: {
                    id,
                  },
                }}
              >
                <h2>{name}</h2>
              </Link>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <p>{login}</p>
          </div>
        </div>
        <div className="bottom">
          <span>
            <MdDomain />
            <p>{company ? company : "undefined"}</p>
          </span>
          <span>
            <MdLocationOn />
            <p>{location ? location : "undefined"}</p>
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

export default User;
