import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { MdSearch } from "react-icons/md";

import githubIcon from "../../assets/github-small-icon.svg";
import Button from "../../components/Button";
import { Container } from "./styles";

const Header = ({ addUser = false }) => {
  return (
    <Container>
      <div className="contents">
        <Link to="/">
          <img src={githubIcon} alt="GitHub icon" />
        </Link>

        {addUser && (
          <div>
            <Input prefix={<MdSearch />} />
            <Button text="Adicionar novo" width="200px" bottom="0" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
