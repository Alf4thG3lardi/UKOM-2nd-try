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

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/> <Intro/> <Expert/> <Keunggulan/> <Faq/> <About/> <Portofolio/> <Form/> <Review/> <Footer/> </>}></Route>
          <Route path='/portofolio' element={<><Navbar/><Portofolliopage/><Contact/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
