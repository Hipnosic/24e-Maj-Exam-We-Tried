import React from "react";
import { Button, Container } from "@mui/material";
import "./header.scss";

const Header = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    window.location.reload(false);
  };

  return (
    <>
      <header className="header">
        <Container className="header__container">
          <div className="logo">
            <span>Bookster</span>
          </div>
          <div className="user-status__container">
            <span>Browsing as {userData ? userData.role : "Guest"}</span>
            {userData ? (
              <Button inputProps={{ "data-testid": "SignOut" }} onClick={handleLogout}>Sign out</Button>
            ) : (
              <a href="/auth/login">Sign in</a>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
