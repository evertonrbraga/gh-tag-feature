import React from "react";

import Infos from "./pages/home";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/App";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Infos />
    </Container>
  );
}

export default App;
