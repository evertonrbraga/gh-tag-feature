import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { Input } from "antd";
import {
  MdSearch,
  MdFilterList,
  MdLocationOn,
  MdDomain,
  MdLink,
  MdArrowBack,
} from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";

import { getStarredReposRequest } from "../../store/modules/repo/actions";
import Header from "../../components/Header";
import Repo from "../../components/Repo";
import { Container } from "./styles";

const User = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = useState(null);

  const starreds = useSelector(({ repo }) => repo.starredRepos);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("users"));
    const matchUser = localUser.find((user) => user.id === location.state.id);
    dispatch(getStarredReposRequest(matchUser.login));
    setUser(matchUser);
  }, [dispatch, location.state.id]);

  return (
    <Container>
      <Header />
      <div className="middle">
        <div className="box box01">
          <div className="card">
            <div className="black-part">
              <Link to="/users">
                <MdArrowBack className="icon" />
              </Link>

              <img src={user?.avatar_url} alt="User avatar" />
            </div>

            <div className="white-part">
              <h2>{user?.name}</h2>
              <p className="username">{user?.login}</p>
              <div className="data-info">
                <p>Seguidores</p>
                <span>{user?.followers}</span>
              </div>
              <div className="data-info">
                <p>Seguindo</p>
                <span>{user?.following}</span>
              </div>
              <div className="data-info">
                <p>Favoritos</p>
                <span>{starreds?.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box box02">
          <div className="card">
            <div className="contents">
              <h3>Sobre</h3>
              <p>{user?.bio}</p>
              <div className="info-container">
                <div className="data-info">
                  <MdDomain />
                  <p>{user?.company ? user?.company : "undefined"}</p>
                </div>
                <div className="data-info">
                  <MdLocationOn />
                  <p>{user?.location ? user?.location : "undefined"}</p>
                </div>
                <div className="data-info">
                  <MdLink />
                  <p>site.com.br</p>
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
          <div className="input-container">
            <Input prefix={<MdSearch />} />
            <Input prefix={<MdFilterList />} />
          </div>
          {starreds?.map((repo) => (
            <Repo repo={repo} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default User;
