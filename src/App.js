import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
