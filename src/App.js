import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/HomePage/Home";
import Profile from "./components/ProfilePage/Profile";
import Messages from "./components/MassagesPage/Messages";
import Explore from "./components/ExplorePage/Explore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BlankPages from "./components/BlankPages";
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
          <Grid item xs={12} sm={3} md={0.5}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/blank" element={<BlankPages/>} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
