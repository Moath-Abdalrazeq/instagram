import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Explore from './components/Explore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const blackTheme = createTheme({
  palette: {
    background: {
      default: '#000000',  
      paper: '#000000',    
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />  
      <Router>
        <div className="App">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
