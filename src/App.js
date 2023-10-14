import Intro from './Home page/Intro/intro';
import About from './Home page/about/about';
import Faq from './Home page/faq/faq';
import Navbar from './Home page/navbar/navbar';
import Form from './Form-Client/form-clients';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Intro/>
      <Faq/>
      <About/>
      <Form/>
    </div>
  );
}

export default App;
