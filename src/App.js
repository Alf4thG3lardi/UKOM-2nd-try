import Intro from './Home page/Intro/intro';
import About from './Home page/about/about';
import Faq from './Home page/faq/faq';
import Navbar from './Home page/navbar/navbar';
import Form from './Form-Client/form-clients';
import Footer from './Home page/footer/footer';
import Portofolio from './Home page/portofolio/portofolio';
import Expert from './Home page/expert/expert';
import Keunggulan from './Home page/keunggulan/keunggulan';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portofolliopage from './Portofolio page/portofolliopage';
import Contact from './Portofolio page/contact/contact';
import Review from './Home page/review/review';
import Isi from './Features/Web Instan/isi/isi';
import Konten from './Features/Web Custom/konten/konten';
import Pricing from './Home page/pricing/pricing';

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/> <Intro/> <Expert/> <Keunggulan/> <Faq/> <About/> <Portofolio/> <Review/> <Form/> <Footer/> </>}></Route>
          <Route path='/portofolio' element={<><Navbar/><Portofolliopage/><Contact/><Footer/></>}></Route>
          <Route path='/web/instan' element={<><Navbar/><Isi/><Footer/></>}></Route>
          <Route path='/web/custom' element={<><Navbar/><Konten/><Footer/></>}></Route>
          <Route path='/pricing' element={<><Navbar/><Pricing/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
