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
          <button className='info-btn-email'><i class="fa fa-envelope"></i>Email</button>
          <button className='info-btn-link'><i class="fab fa-linkedin"></i>LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Info
