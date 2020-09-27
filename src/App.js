import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/App";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
