import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './Components/Navbar/Home/Home';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Navbar />
      </CssBaseline>
      <Home/>
    </ThemeProvider>

  );
}

export default App;
