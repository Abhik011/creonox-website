import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import Whywebsite2025 from './pages/Whywebsite2025';
import AiAndUXBlog from './pages/AiAndUXBlogjs';
import StartupMistakesBlog from './pages/StartupMistakesBlog'; 
import GooglePasswordManager from './pages/GooglePasswordManager';
function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Whywebsite2025" element={<Whywebsite2025/>} />
          <Route path="/AiAndUXBlog" element={<AiAndUXBlog/>} />
          <Route path="/StartupMistakesBlog" element={<StartupMistakesBlog/>}/>
          <Route path="/GooglePasswordManager" element={<GooglePasswordManager/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
