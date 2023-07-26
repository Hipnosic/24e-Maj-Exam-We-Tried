//Den tillhandahållna filen definierar rubrikkomponenten, som representerar rubrikdelen av en webbplats. Den inkluderar en logotyp, användarstatusvisning (som indikerar användarens roll eller "Gäst") och en inloggnings-/utloggningsknapp baserad på närvaron av användardata i sessionslagringen. Om du klickar på knappen "Logga ut" tas användardata bort från sessionslagringen och sidan laddas om, medan länken "Logga in" omdirigerar användaren till inloggningssidan. Komponenten utformas med en CSS-modul (header.scss).
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
            <span>Bookster website</span>
          </div>
          <div className="user-status__container">
            <span>Browsing as {userData ? userData.role : "Guest"}</span>
            {userData ? (
              <Button
                inputProps={{ "data-testid": "SignOut" }}
                onClick={handleLogout}
              >
                Sign out
              </Button>
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
