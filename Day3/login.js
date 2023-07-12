import './App.css';
import {useRef} from 'react';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from './redux/userSlice';

// function Login() {
  // const ref = useRef();

  // const handleBackClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

function Login(){
  
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password,setPassword] = useState("");

//   const dispatch = useDispatch();
//       const handleSubmit  = (e) => {
//         e.preventDefault();
//         dispatch(
//           login({
//             email:email,
//             password:password,
//             loggedIn:true,
//           }));
//         console.log(email,password);
        // console.log(firstName,lastName,email,password,confirmPassword);

      // }
      // const handleSubmit = () =>{
          // let obj = {
          //     email:email,
          //     password:password,
          // }       
          // const newPostKey = push(child(ref(database), 'posts')).key;
          // const updates = {};
          // updates['/' + newPostKey] = obj
          // return update(ref(database), updates);
      // }
  return (
    <div className='pre_reg_pg'>
      <div className='bdy'>
        <div className='login_img'>
          {/* <h1 id='title'>Discover</h1> */}
          {/* <img src="ntre_cnt.jpg" alt=""/> */}
        </div>
        {/* <form className='login' onSubmit={(e)=> handleSubmit(e)}> */}
        <form className='login'>
            <br/>
            <div id='login_heading'>Login</div>
            <br/>
            <br/>
            <br/>
            <div className="un">
                <label className="form__label" for="email">Username</label>
                <input  type="email" id="email" className="form__input"  placeholder=""/>
                {/* <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder=""/> */}

            </div>
            <br/>
            <div className="pw">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder=""/>
                {/* <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder=""/> */}
            </div>
            <br/>
            <Link className='link' to='/home'><button id='login_btn'>Login</button></Link>
            <br/>
            <br/>
            <Link className='link1' to='/prereg'><button id='signup'>New User ? Sign up</button></Link>
            <br/>
            <br/>
            <br/>
        </form>
      </div>
    </div>
  );
}
export default Login;