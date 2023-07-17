import './App.css';
import {useRef} from 'react';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

function App() {
  // const ref = useRef();

  // const handleBackClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };


  return (
    <div className='pre_reg_pg'>
      <div className='bdy'>
        <div className='bbg'>
          <div>
            <h1 id='register_prepage'>User Role</h1>
            <br/>
          </div>
          <div className='prepage_btnbox'>
            <Link className='link' to='/sreg'><button  id='student_regbtn'>Student</button></Link>
            <br/>
            <Link className='link' to='/treg'><button id='tutor_regbtn'>Tutor</button></Link>
          </div>
          {/* <div className='nav_btn'>
            <button onClick={handleBackClick} id='prev_btn'>&#706;</button>
            <button id='nxt_btn'>&#707;</button>
          </div> */}
        </div>
      </div>
     
    </div>
  );
}
export default App;