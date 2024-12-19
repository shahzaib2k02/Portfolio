import React, { Suspense, lazy } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Contact = lazy(() => import('./routes/Contact'));
const Project = lazy(() => import('./routes/Project'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
