import React from 'react';
import './Work.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

const Works = () => {
  return (
    <div className="works">
      <h1 className="work-title">My Works</h1>
      <div className="work-container">
        <div className="work-item">
          <img src={img1} className='img' alt="Project 1" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>

        <div className="work-item">
          <img src={img2} className='img' alt="Project 2" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>

        <div className="work-item">
          <img src={img3} className='img' alt="Project 3" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>

        <div className="work-item">
          <img src={img4} className='img' alt="Project 4" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>

        <div className="work-item">
          <img src={img5} className='img' alt="Project 5" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>

        <div className="work-item">
          <img src={img6} className='img' alt="Project 6" />
          <h2>Project Name</h2>
          <p>Description (i.e Nike photoshop)</p>
          <button>Case Study</button>
        </div>
      </div>
    </div>
  );
};

export default Works;
