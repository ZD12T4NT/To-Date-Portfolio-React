import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';

const theme = {
  mobile: '768px'
}

function App() {
  return (
  <ThemeProvider theme={theme}>
   <>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<About />}/>
    </Routes>
  </Router>
   </>
   </ThemeProvider>
  );
}

export default App;
