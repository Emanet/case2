"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} 
        />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );

}
