import './scss/styles.scss';

import Header from './components/Header';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className='main_content'>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
