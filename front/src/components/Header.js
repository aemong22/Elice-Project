import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { UserStateContext, DispatchContext } from "../App";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });

    //로그아웃 시 App.js로 다시 렌더링 되기 때문에 state를 null로 바꾸어 login 페이지로 가도록 함
    window.localStorage.setItem("state", null);
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#home" id="navbar__title">
            Portfo<span style={{ color: "#ffcd4a" }}>11</span>o
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>나의 페이지</Nav.Link>
            <Nav.Link onClick={() => navigate("/network")}>네트워크</Nav.Link>
            <Nav.Link onClick={() => navigate("/companyNetwork")}>
              회사공고 네트워크
            </Nav.Link>
          </Nav>
          <Nav>{isLogin && <Nav.Link onClick={logout}>로그아웃</Nav.Link>}</Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
