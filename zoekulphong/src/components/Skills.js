import '../index.css';
import Star from '../assets/blue-star.svg';

const Skills = () => {
  return (
    <div className="skills-container">
      {/* TODO: this is a stupid way to do this */}
      <p>PYTHON</p>
      <img src={Star} alt="Blue star" />
      <p>C++</p>
      <img src={Star} alt="Blue star" />
      <p>FIGMA</p>
      <img src={Star} alt="Blue star" />
      <p>HTML/CSS</p>
      <img src={Star} alt="Blue star" />
      <p>JAVASCRIPT</p>
      <img src={Star} alt="Blue star" />
      <p>REACTJS</p>
    </div>
  );
};

export default Skills;