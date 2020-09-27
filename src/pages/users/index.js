import React, { useState } from "react";

import Header from "../../components/Header";
import User from "../../components/User";
import { Container } from "./styles";

const Users = () => {
  const [users] = useState(JSON.parse(localStorage.getItem("users")));

  return (
    <Container>
      <Header addUser />
      <div className="middle">
        {users?.map((user) => (
          <User user={user} />
        ))}
      </div>
    </Container>
  );
};

export default Users;
