import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Booking from './components/booking/Booking';
import Review from './components/review/Review';
import Services from './components/services/Services'

const App = () => {
  return (
    <HashRouter>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/review" element={<Review />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;