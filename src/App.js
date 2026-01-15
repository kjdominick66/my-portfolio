import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <BrowserRouter>
    function Navbar(){
      return(
        <nav>
          
        </nav>
      );
    }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
