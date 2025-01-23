import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutArkestra from './components/AboutArkestra.js';
import ArkestraFooter from './components/ArkestraFooter.js';
import ArkestraHome from './components/ArkestraHome.js';
import ArkestraNavbar from './components/ArkestraNavbar.js';
import PerformerProfile from './components/PerformerProfile.js';
import ScrollToTop from './components/ScrollToTop.js';
import AllYoutubeVideo from './components/AllYoutubeVideo.js';
import PageNotFound from './components/PageNotFound.js'; // Optional 404 page
import ArkestraInfo from './components/ArkestraInfo.js';
import LanguageWise from './components/LanguageWise.js';
import AllNews from './components/AllNews.js';
import AllStories from './components/AllStories.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <ArkestraNavbar />
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<ArkestraHome />} />
            <Route path="/performer/:tag" element={<PerformerProfile />} />
            <Route path="/about" element={<AboutArkestra />} />
            <Route path="/allVideos" element={<AllYoutubeVideo />} />
            <Route path="/arkestra" element={<ArkestraInfo />} />
            <Route path="/languages/:language" element={<LanguageWise />} />
            <Route path="/allNews" element={<AllNews />} />
            <Route path="/allStories" element={<AllStories />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <ArkestraFooter />
      </div>
    </Router>
  );
}

export default App;
