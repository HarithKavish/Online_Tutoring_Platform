import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function Payment() {
  return (
    <div className='pre_reg_pg'>
      <div className='navbar'>
          {/* <Link className='link' to='/'><button id='logout'>Logout</button></Link>
          <div class="dropdown">
              <Link to='/home'><button id='hme'>&#8962;</button></Link>
              <div class="dropdown-content">
                <a><Link className='link' to='/profile'><button id='profiles'>Profile</button></Link></a>
                <a><Link className='link' to='/set'><button id='profiles'>Settings</button></Link></a>
                <a><Link className='link' to='/vc'><button id='profiles'>Virtual Classroom</button></Link></a>
                <a><Link className='link' to='/credit'><button id='profiles'>Certificates</button></Link></a>
              </div>
          </div> */}
            <div id='heading'>
            Payment Details
          </div>
      </div>
        <div className='cbody' id='call'>
            <Link className='link' to='/verpay'><button id='pay'>Proceed to Verification</button></Link>
            <label>Payment Total : Rs.500/.</label>
            <br/>
            <br/>
            <label>Payment Method</label>
            <input type="" name="" value=""/>
            <br/>
            <br/>
            <label>UPI ID / Card Number</label>
            <input type="" name="" value=""/>
            <br/>
            <br/>
            <label>Expiry Date ( if applicable )</label>
            <input type="" name="" value=""/>
            <br/>
            <br/>
            <label>CVV (if applicable )</label>
            <input type="" name="" value=""/>
        </div>
    </div>
  );
}
export default Payment;