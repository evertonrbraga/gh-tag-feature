import React from "react";

import Header from "../../components/Header";
import User from "../../components/User";
import { Container } from "./styles";

const Users = () => {
  return (
    <Container>
      <Header addUser />
      <div className="middle">
        <User />
      </div>
    </Container>
  );
};

export default Users;
