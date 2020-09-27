import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { MdSearch } from "react-icons/md";

import { setUserRequest } from "../../store/modules/user/actions";
import githubIcon from "../../assets/github-small-icon.svg";
import Button from "../../components/Button";
import { Container } from "./styles";

const Header = ({ addUser = false }) => {
  const dispatch = useDispatch();
  const username = useRef("");

  const handleDispatch = () => {
    dispatch(setUserRequest(username.current.state.value));
    username.current.state.value = "";
  };

  return (
    <Container>
      <div className="contents">
        <Link to="/">
          <img src={githubIcon} alt="GitHub icon" />
        </Link>

        {addUser && (
          <div class="add-user-container">
            <Input
              ref={username}
              prefix={<MdSearch />}
              placeholder="@username"
            />
            <Button
              click={handleDispatch}
              text="Adicionar novo"
              width="200px"
              bottom="0"
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
