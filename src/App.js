import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';

function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<About />}/>
      
    </Routes>
  </Router>
   </>
  );
}

export default App;
