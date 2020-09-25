import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/App";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
