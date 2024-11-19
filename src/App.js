import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/metaverse" element={<h1>Metaverse Page</h1>} />
          <Route path="/messages" element={<h1>Messages Page</h1>} />
          <Route path="/upload" element={<h1>Upload Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
