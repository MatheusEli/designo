import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import LocationsPage from './pages/Locations';
import AboutPage from './pages/About';
import GraphicDesignPage from './pages/GraphicDesign';
import AppDesignPage from './pages/AppDesign';
import WebDesign from './pages/WebDesign';

function App() {
  return (
  <div className='container'>
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/web-design" element={<WebDesign />}/>
      <Route exact path="/app-design" element={<AppDesignPage />}/>
      <Route exact path="/graphic-design" element={<GraphicDesignPage />}/>
      <Route exact path="/about" element={<AboutPage />}/>
      <Route exact path="/locations" element={<LocationsPage />}/>
      <Route exact path="/contact" element={<ContactPage />}/>
    </Routes>
  </div>
  );
}

export default App;
