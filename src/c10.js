import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function C10() {
  return (
    <div className='pre_reg_pg'>
      <div className='navbar'>
          <Link className='link' to='/'><button id='logout'>Logout</button></Link>
          <div class="dropdown">
              <Link to='/home'><button id='hme'>&#8962;</button></Link>
              <div class="dropdown-content">
                <a><Link className='link' to='/profile'><button id='profiles'>Profile</button></Link></a>
                <a><Link className='link' to='/set'><button id='profiles'>Settings</button></Link></a>
                <a><Link className='link' to='/vc'><button id='profiles'>Virtual Classroom</button></Link></a>
                <a><Link className='link' to='/credit'><button id='profiles'>Certificates</button></Link></a>
              </div>
          </div>
            <div id='heading'>
            Course Enrollment
          </div>
      </div>
        <div className='cbody'>
            <h1>Economics</h1> 
            <br/>
            <h1>Course Duration : 2 Weeks</h1>
            <br/>
            <h1>Number of Modules : 3</h1>
            <br/>
            <h1>Course Enrollment Fees : Rs.500/.</h1>
            <br/>
            <label>Choose Tutor : </label>
            <select name="cars" id="teacher">
              <option value="saab">--Select--</option>
              <option value="volvo">🕮 Tony Stark Rating : 4.8/5 </option>
              <option value="audi">🕮 Steve Rogers Rating : 4.7/5 </option>
              <option value="saab">🕮 Morgan Stark Rating : 4.5/5 </option>
              <option value="opel">🕮 Prince Tchalla Rating : 4.5/5 </option>
            </select>
            <br/>
            <br/>
            <Link className='link' to='/pay'><button id='pay'>Proceed to Payment</button></Link>
        </div>
    </div>
  );
}
export default C10;