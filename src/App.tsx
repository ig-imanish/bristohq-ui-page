import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Components from './pages/Components';
import Contribute from './pages/Contribute';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Templates from './pages/Templates';

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<Components />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/charts" element={<Templates />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
