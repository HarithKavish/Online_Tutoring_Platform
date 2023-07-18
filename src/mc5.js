import './App.css';
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from "react-player"

function Mc5() {
  const user=useSelector(state => state.user.value)    
  // const [style, setStyle] = useState("");
  // const changeStyle = () => {
    //   setStyle("cont2");
    // document.getElementsByClassName("cn").style.color = "black";
    // };
    // const changeStyle = () => {
      //   setStyle("con1");
      // };

  return (
      <div  className='pre_reg_pg' >
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
              Botany
            </div>
        </div>
        <div className='handlebar1'>
            {/* <input className='search' type="text" id="firstName" placeholder=" Search"/> */}
            <div id='courses'>
              Reference Materials
            </div>
            <button className='cn'>
              Use the following video links as referrence materials.
            </button>
          {/* </div> */}
        </div>
        <div className='handlebar2'>
        <iframe
          id='vidlink'
          src="https://www.youtube.com/embed/wCO2DKBB4tA"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="allowfullscreen"
          title="video"
        />
        <iframe
          id='vidlink'
          src="https://www.youtube.com/embed/DgHzLW_urqc"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="allowfullscreen"
          title="video"
        />
        <iframe
          id='vidlink'
          src="https://www.youtube.com/embed/wCO2DKBB4tA"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="allowfullscreen"
          title="video"
        />
        <iframe
          id='vidlink'
          src="https://www.youtube.com/embed/DgHzLW_urqc"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="allowfullscreen"
          title="video"
        />
        </div>
      </div>
  );
}
export default Mc5;