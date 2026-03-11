import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";
import "./styles/base_app.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
