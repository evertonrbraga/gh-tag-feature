import React from "react";
import { MdLocationOn, MdDomain, MdLink, MdArrowBack } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";

import Header from "../../components/Header";
import Repo from "../../components/Repo";
import { Container } from "./styles";

const User = () => {
  return (
    <Container>
      <Header />
      <div className="middle">
        <div className="box box01">
          <div className="card">
            <div className="black-part">
              <MdArrowBack className="icon" />
              <img
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                alt="User photo"
              />
            </div>

            <div className="white-part">
              <h2>John Doe Santos</h2>
              <p className="username">@johndoesantos</p>
              <div className="data-info">
                <p>Seguidores</p>
                <span>99</span>
              </div>
              <div className="data-info">
                <p>Seguindo</p>
                <span>99</span>
              </div>
              <div className="data-info">
                <p>Favoritos</p>
                <span>99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box box02">
          <div className="card">
            <div className="contents">
              <h3>Sobre</h3>
              <p>
                Desenvolvedor Javascript - React, React Native, Vue, TypeScript,
                GraphQL, Redux, NodeJS
              </p>
              <div className="info-container">
                <div className="data-info">
                  <MdDomain />
                  <p>GO.K Digital</p>
                </div>
                <div className="data-info">
                  <MdLocationOn />
                  <p>São Paulo, Brazil</p>
                </div>
                <div className="data-info">
                  <MdLink />
                  <p>rickbonejr.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box box03">
          <div className="card">
            <div className="contents">
              <h3>Destaques</h3>
              <div className="data-info">
                <BsBookmarksFill />
                <p>Developer Program Member</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box box04">
          <Repo />
          <Repo />
        </div>
      </div>
    </Container>
  );
};

export default User;
