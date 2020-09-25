import React from "react";

import githubIcon from "../../assets/github-small-icon.svg";
import Button from "../../components/Button";
import User from "../../components/User";
import { Container } from "./styles";

const Users = () => {
  return (
    <Container>
      <header>
        <div className="contents">
          <img src={githubIcon} alt="GitHub icon" />
          <Button text="Adicionar novo" width="200px" bottom="0" />
        </div>
      </header>
      <section>
        <User />
      </section>
    </Container>
  );
};

export default Users;
