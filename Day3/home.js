import './App.css';
// import {useRef} from 'react';
import React from 'react';
// import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import { logout, selectUser } from './redux/userSlice';
// import { selectUser } from './redux/userSlice';
// import { useSelector, useDispatch } from 'react-redux';

function Home() {

    
    // const name = useSelector(state => state.user);
    // const dispatch = useDispatch();

  return (
      <div className='pre_reg_pg'>
        <div className='navbar'>
            <Link className='link' to='/'><button id='logout'>Logout</button></Link>
            <div class="dropdown">
              <button id='hme'>&#8962;</button>
              <div class="dropdown-content">
                <a><Link className='link' to='/profile'><button id='profiles'>Profile</button></Link></a>
                <a><Link className='link' to='/set'><button id='profiles'>Settings</button></Link></a>
                <a><Link className='link' to='/vc'><button id='profiles'>Virtual Classroom</button></Link></a>
                <a><Link className='link' to='/credit'><button id='profiles'>Certificates</button></Link></a>
              </div>
            </div>
            <div id='heading'>
              Welcome Back  !
            </div>
        </div>
        <div className='handlebar1'>
          {/* <div className='cors'> */}
            {/* <div> */}
              <input className='search' type="text" id="firstName" placeholder=" Search"/>
            {/* </div> */}
            <div id='courses'>
              All Courses
            </div>
          {/* </div> */}
          {/* <div className='corList'> */}
            <Link className='link' to='/c1'><button className='cn'>
              1. English
            </button></Link>
            <Link className='link' to='/c2'><button className='cn'>
              2. Mathematics
            </button></Link>
            <Link className='link' to='/c3'><button className='cn'>
              3. Physics
            </button></Link>
            <Link className='link' to='/c4'><button className='cn'>
              4. Chemistry
            </button></Link>
            <Link className='link' to='/c5'><button className='cn'>
              5. Botany
            </button></Link>
            <Link className='link' to='/c6'><button className='cn'>
              6. Zoology
            </button></Link>
            <Link className='link' to='/c7'><button className='cn'>
              7. History
            </button></Link>
            <Link className='link' to='/c8'><button className='cn'>
              8. Geography
            </button></Link>
            <Link className='link' to='/c9'><button className='cn'>
              9. Civics
            </button></Link>
            <Link className='link' to='/c10'><button className='cn'>
              10. Economics
            </button></Link>
          {/* </div> */}
        </div>
        <div className='handlebar2'>
          <h1>Dashboard</h1>
        </div>
      </div>
  );
}
export default Home;