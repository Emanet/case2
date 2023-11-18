"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );

}
