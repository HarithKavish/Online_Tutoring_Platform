import './App.css';
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from "react-player"

function Asse() {
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
              Assessments
            </div>
        </div>
        <div className='handlebar1'>
            {/* <input className='search' type="text" id="firstName" placeholder=" Search"/> */}
            <div id='courses'>
              Assessment 1
            </div>
            <button className='cn'>
              Choose the best option.
            </button>
              {/* <input type="file" id="myFile" name="filename"></input> */}
          {/* </div> */}
        </div>
        <div className='handlebar2'>
            {/* <div className='upp'>
                <input type="file" id="actual-btn" hidden/>
                <label for="actual-btn" id='upld'>Choose File</label>
            </div> */}
            <iframe src="https://forms.microsoft.com/r/5JR70vkzyR" 
                width="100%"
                height="100%" 
                frameborder="0" marginheight="0"
                marginwidth="0">
                Loading…
            </iframe>
            {/* <iframe 
            id='vidlink'
                width="560" height="315" 
                src="https://www.youtube.com/embed/DzLdFmPncms" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen="allowfullscreen">
            </iframe> */}
        </div>
      </div>
  );
}
export default Asse;