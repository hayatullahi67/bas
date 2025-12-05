import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Resources from './pages/Resources';
import Community from './pages/community';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Admin from './pages/Admin';
import Dashboard from './dashboard/Dashboard';
import UploadNews from './dashboard/UploadNews';
import UploadEvent from './dashboard/UploadEvent';
import SubmittedStories from './dashboard/SubmittedStories';
import Header from './components/Header';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/education" element={<Education />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<UploadNews />} />
          <Route path="upload-news" element={<UploadNews />} />
          <Route path="upload-event" element={<UploadEvent />} />
          <Route path="submitted-stories" element={<SubmittedStories />} />
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;