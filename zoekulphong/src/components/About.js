import '../index.css';

import Main from './AboutMain.js';
import Skills from './Skills.js';
import Carousel from './Carousel.js';

const About = () => {
  return (
    <div className="about-container">
      <Main />
      <Skills />
      <Carousel />
    </div>
  );
};

export default About;