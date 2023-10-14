import Intro from './Home page/Intro/intro';
import About from './Home page/about/about';
import Faq from './Home page/faq/faq';
import Navbar from './Home page/navbar/navbar';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Intro/>
      <Faq/>
      <About/>
    </div>
  );
}

export default App;
