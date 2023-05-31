import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = new FormData(event.currentTarget);
    const userData = {
      username: loginData.get("username"),
      password: loginData.get("password"),
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed");
        } else {
          console.log(data);
          // TODO: add JWT token
          sessionStorage.setItem(
            "userData",
            JSON.stringify({
              name: data.name,
              role: data.role,
              token: data.token,
            })
          );
          console.log(
            "Successfully logged in, username: ",
            data.name,
            " role: ",
            data.role,
            " token: ",
            data.token
          );
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          bgcolor: "lightgray",
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            inputProps={{ "data-testid": "username-input" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{ "data-testid": "password-input" }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Proceed as a guest
            <Link to="/"></Link>
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/auth/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
