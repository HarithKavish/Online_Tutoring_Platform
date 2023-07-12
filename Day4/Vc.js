import './App.css';
// import {useRef} from 'react';
import React from 'react';
// import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Vc() {
  // const ref = useRef();

  // const handleBackClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };
  return (
    <div className='pre_reg_pg'>
      <div className='navbar'>
          <Link className='link' to='/'><button id='logout'>Logout</button></Link>
          <div class="dropdown">
              <Link to='/home'><button id='hme'>&#8962;</button></Link>
              <div class="dropdown-content">
                <a><Link className='link' to='/profile'><button id='profiles'>Profile</button></Link></a>
                <a><Link className='link' to='/set'><button id='profiles'>Settings</button></Link></a>
                <a><Link className='link' to='/credit'><button id='profiles'>Certificates</button></Link></a>
              </div>
          </div>
          <div id='heading'>
            Virtual Classroom
          </div>
      </div>
      {/* <br/> */}
      <div className='handlebar'>
            <div className='bardiv'>
                Courses
            </div>
            <div className='bardiv'>
                Assignments
            </div>
            <div className='bardiv'>
                Assessments
            </div>
            <div className='bardiv'>
                Live
            </div>
      </div>
    </div>
  );
}
export default Vc;