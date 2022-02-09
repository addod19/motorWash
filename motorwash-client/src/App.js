import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/users" element={<Signup/>} />
            {/* Home */}
            {/* Services */}
            {/* Who we are */}
            {/* Pricing */}
            {/* Gallery */}
            {/* Contact */}
            {/* Register */}
            {/* Login */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
