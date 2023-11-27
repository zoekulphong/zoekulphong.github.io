import '../index.css';

import Skills from './Skills.js';
import Carousel from './Carousel.js';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main-container">
        <img src="url(../assets/title-portrait.png)" />
        <div>
          <h2>About</h2>
          <p>Hi! I’m Zoe, a computer science and visual arts student at the University of Kansas (KU). I am the Director of HackKU, KU’s annual 36-hour hackathon. In my free time, I enjoy painting, drawing, crocheting, and travelling.</p>
        </div>
      </div>
      <Skills />
      <Carousel />
    </div>
  );
};

export default About;