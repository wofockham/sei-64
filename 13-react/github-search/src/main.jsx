import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Just a variable that contains some JSX, NOT a component:
const routes = (
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/profile/:username" element={ <Profile /> } />    
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { routes }
  </React.StrictMode>,
);
