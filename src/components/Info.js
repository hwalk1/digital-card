import React from "react";
import profile from "../317px-Profile.png"

function Info() {
  return (
    <div >
      <img src={profile} className='info--profile'alt='Hayden Walker'></img>
      <div className="info--cont">
        <div className='info--text'>
          <h2>Hayden Walker</h2>
          <h3>Junior Software Developer</h3>
        </div>
        <div className='info-btn'>
          <a className='info-btn-email' href='mailto:haydenjwalker1@gmail.com' ><i class="fa fa-envelope"></i>Email</a>
          <a className='info-btn-link' href='https://www.linkedin.com/in/hwalk1/'><i class="fab fa-linkedin"></i>LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Info
