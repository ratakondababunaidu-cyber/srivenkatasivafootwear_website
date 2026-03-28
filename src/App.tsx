/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-500 selection:text-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
