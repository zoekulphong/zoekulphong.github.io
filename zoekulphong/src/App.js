import './index.css';

import Title from './components/Title.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="app-container">
      <Title />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
