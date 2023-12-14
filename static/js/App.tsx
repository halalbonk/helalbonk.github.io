import './App.css';
import About from './pages/About';
import BonkArt from './pages/BonkArt';
import Home from './pages/Home';
import Integrations from './pages/Integrations';
import { Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import Nft from './pages/Nft';
import Header from './components/Header';
import Footer from './components/Footer';
import AgreementModal from './components/AgreementModal';
import './style/global/global.css';
import './style/global/loading.css';
import './style/global/text.css';
import { ScrollTop } from './components/ScrollTop';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <ScrollTop />
            <Header />
            <AgreementModal />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/bonkart" element={<BonkArt />} />
                  <Route path="/nft" element={<Nft />} />
                  <Route path="*" element={<Navigate to="/" />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
