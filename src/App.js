// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key='general' pageSize={10} country="in" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pageSize={10} country="in" category="sports" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key='business' pageSize={10} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={10} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key='general' pageSize={10} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key='health' pageSize={10} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key='science' pageSize={10} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pageSize={10} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App


News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.string
};

News.defaultProps = {
  country: 'in',
  category: 'science',
  pageSize: 10

};