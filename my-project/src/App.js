// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tests from './pages/Tests';
import Login from './pages/Login';
import Register from './pages/Register';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Intro from './pages/Intro';
import Intro1 from './pages/Intro1';
import Footer from './components/Footer';
import Roadmap1 from './pages/Roadmap1';
import Roadmap2 from './pages/Roadmap2';
import Afterquiz from './pages/Afterquiz';
import Day1 from './pages/Day1';
import Finishday1 from './pages/Finishd1';
import Finshroute from './pages/Finishroutes';
import Cert from './pages/Cert';
import Job from './pages/Job';
import Favorite from './pages/Favorite';












function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/intro1" element={<Intro1 />} />
        <Route path="/Roadmap1" element={<Roadmap1 />} />
        <Route path="/Roadmap2" element={<Roadmap2 />} />
        <Route path="/afterquiz" element={<Afterquiz />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/finishday1" element={<Finishday1 />} />
        <Route path="/finishroute" element={<Finshroute />} />
        <Route path="/cert" element={<Cert />} />
        <Route path="/job" element={<Job />} />
        <Route path="/favorite" element={<Favorite />} />







      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
