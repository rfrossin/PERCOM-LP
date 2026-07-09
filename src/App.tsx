import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Comercial from './pages/Comercial';
import Corporate from './pages/Corporate';
import Residencial from './pages/Residencial';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-[var(--color-ink)] selection:bg-[var(--color-ink)] selection:text-[var(--color-paper)]">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/comercial" element={<Comercial />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/residencial" element={<Residencial />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
