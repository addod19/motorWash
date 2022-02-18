import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <div className="app">
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/users" element={<Signup/>} />
            <Route exact path="/login" element={<Login/>} />
            {/* Services */}
            {/* Who we are */}
            {/* Pricing */}
            {/* Gallery */}
            {/* Contact */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
