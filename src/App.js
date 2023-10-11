import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SidebarMenu/Sidebar";
import Home from "./components/HomePage/Home";
import Profile from "./components/ProfilePage/Profile";
import Messages from "./components/MassagesPage/Messages";
import Explore from "./components/ExplorePage/Explore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BlankPages from "./components/BlankPages";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const blackTheme = createTheme({
  palette: {
    background: {
      default: "#000000",
      paper: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Router>
        <Grid container>
          <Grid item md={3} lg={1} ></Grid>

          <Grid item>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/blank" element={<BlankPages />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
