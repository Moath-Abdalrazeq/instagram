import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import InstagramLogo from "../../assets/InstagramLogo";
import iPhoneImage from "../../assets/iPhoneScreen.png";
import AndroidImage from "../../assets/androidScreen.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          background: "rgba(121, 121, 121, 0.00)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          position: "relative",
          margin: "80px",
        }}
      >
        <img
          src={AndroidImage}
          alt="Android Screen"
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={iPhoneImage}
          alt="iPhone Screen"
          style={{
            width: "120%",
            width: "120%",
            position: "absolute",
            top: "55%",
            left: "80%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <Container maxWidth="xs">
          <Paper
            elevation={3}
            style={{
              background: "#1D1D1D",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography align="center">
              <InstagramLogo />
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ background: "white" }}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                type="email"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              <TextField
                style={{ background: "white" }}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>

              <Typography
                variant="body2"
                align="center"
                style={{
                  marginTop: "10px",
                  color: "rgba(255, 255, 255, 0.53)",
                }}
              >
                OR
              </Typography>
              <Button
                variant="text"
                color="primary"
                fullWidth
                style={{ marginTop: "10px" }}
              >
                Log in with Facebook
              </Button>
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
              >
                <Link href="#" color="rgba(255, 255, 255, 0.53)">
                  Forgot password?
                </Link>
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{
                  marginTop: "10px",
                  color: "rgba(255, 255, 255, 0.53)",
                }}
              >
                Don't have an account? <Link href="/signup">Sign up</Link>
              </Typography>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
