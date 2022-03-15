import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './componens/styled/Theme.styled';
import GlobalStyles from './componens/styled/Global.Styled';
import { useState } from 'react';
import TempHome from './TempHome';
import AnimLoad from './AnimLoad';

function App() {

  const[theme, setTheme] = useState(lightTheme);

  

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home/>
        {/* <TempHome/> */}
        {/* <AnimLoad/> */}
      </ThemeProvider>
      
    </div>
  );
}

export default App;
