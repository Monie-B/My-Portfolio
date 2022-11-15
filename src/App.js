import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
