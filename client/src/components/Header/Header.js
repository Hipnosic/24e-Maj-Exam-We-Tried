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
<<<<<<< HEAD
            <span>Bookster</span>
=======
            <span>Bookster website</span>
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
          </div>
          <div className="user-status__container">
            <span>Browsing as {userData ? userData.role : "Guest"}</span>
            {userData ? (
<<<<<<< HEAD
              <Button onClick={handleLogout}>Sign out</Button>
=======
              <Button
                inputProps={{ "data-testid": "SignOut" }}
                onClick={handleLogout}
              >
                Sign out
              </Button>
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
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
