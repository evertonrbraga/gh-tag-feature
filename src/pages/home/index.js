import React from "react";
import { Link } from "react-router-dom";

import homeImage from "../../assets/home-image.svg";
import githubIcon from "../../assets/github-medium-icon.svg";
import Button from "../../components/Button";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <div className="infos">
        <div className="contents">
          <img src={githubIcon} alt="Github icon" />
          <div className="form-contents">
            <h2>Cadastrar usuário</h2>
            <p>Cadastre um usuário com uma conta válida no GitHub</p>
            <input placeholder="@username" />
            <Button text="Cadastrar" />
            <Link to="/users">
              <Button text="Ver usuários" width="100%" bottom="0" />
            </Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={homeImage} alt="Man at work" />
        <h2>
          Gerencie e adicione <span className="bold">tags</span> aos seus{" "}
          <span className="bold">repositórios</span> favoritos.
        </h2>
      </div>
    </Container>
  );
};

export default Home;
