import React, { Dispatch } from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import useTypedSelector from "../hooks/useTypedSelector";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Logout } from "../redux/slices/UserSlice";
import Head from 'next/head'

interface IHeader {
  children: React.ReactNode;
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>;
  setWhatTab: Dispatch<React.SetStateAction<string>>;
}

const MainHeader = (props: IHeader) => {
  const { isAuth, isAdmin } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(Logout());
  };

  const openAuthHandler = (what: string) => {
    props.setWhatTab(what);
    props.setAuthVisible(true);
  }

  return (
    <>
      <Head>
        <title>Bal-Academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="header">
        <Container>
          <div className="header__logo">
            <a href="#">
              <Image
                src="/assets/img/logoPng.png"
                height={45}
                width={180}
                alt="Logo"
              />
            </a>
          </div>
          <ul className="header__header-links">
            <li>
                <a href="#test">Test</a>
            </li>
            <li>
              <a href="#AboutSection">About</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
          <div className="header__buttons">
            {!isAuth ? (
              <button
                className="header__log-in"
                onClick={() => openAuthHandler("SingIn")}
              >
                Log in
              </button>
            ) : (
              <>
                {isAdmin
                  ? <Link href="/users">
                    <a className="header__log-in">Users</a>
                  </Link>
                  : null
                }
                <Link href="/home">
                  <a className="header__log-in">Home</a>
                </Link>
                <button className="header__log-in" onClick={logoutHandler}>
                  Logout
                </button>
              </>
            )}

            <button
              className="header__try"
              onClick={() => openAuthHandler("Register")}
            >
              Try for free
            </button>
          </div>
        </Container>
      </header>
      {props.children}
    </>
  );
};

export default MainHeader;
