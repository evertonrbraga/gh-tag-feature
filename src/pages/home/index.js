import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { MdAccountCircle } from "react-icons/md";

import { setUserRequest } from "../../store/modules/user/actions";
import homeImage from "../../assets/home-image.svg";
import githubIcon from "../../assets/github-medium-icon.svg";
import Button from "../../components/Button";
import { Container } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const username = useRef("");

  const handleDispatch = () => {
    dispatch(setUserRequest(username.current.state.value));
    username.current.state.value = "";
  };

  return (
    <Container>
      <div className="infos">
        <div className="contents">
          <img src={githubIcon} alt="Github icon" />
          <div className="form-contents">
            <h2>Cadastrar usuário</h2>

            <p className="description">
              Cadastre um usuário com uma conta válida no GitHub
            </p>
            <Input
              ref={username}
              prefix={<MdAccountCircle className="icon" />}
              placeholder="@username"
            />
            <Button
              click={handleDispatch}
              text="Cadastrar"
              margin="20px 0 10px"
            />
            <Link to="/users">
              <Button text="Ver usuários" width="100%" />
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
