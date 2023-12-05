// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tests from './pages/Tests';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Intro from './pages/Intro';
import Intro1 from './pages/Intro1';
import Footer from './components/Footer';






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/intro1" element={<Intro1 />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
