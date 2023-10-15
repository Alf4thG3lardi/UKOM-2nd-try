import Intro from './Home page/Intro/intro';
import About from './Home page/about/about';
import Faq from './Home page/faq/faq';
import Navbar from './Home page/navbar/navbar';
import Form from './Form-Client/form-clients';
import Footer from './Home page/footer/footer';
import Portofolio from './Home page/portofolio/portofolio';
import Expert from './Home page/expert/expert';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Intro/>
      <Expert/>
      <Faq/>
      <About/>
      <Portofolio/>
      <Form/>
      <Footer/> 
    </div>
  );
}

export default App;
