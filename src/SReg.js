import './App.css';
import {useRef} from 'react';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

function SReg() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [contuct,setContuct] = useState(null);
    const [collegename,setCollegename] = useState(null);
    const [year,setYear] = useState(null);
    const [age,setAge] = useState(null);
    const [feild,setFeild] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
          setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
          setEmail(value);
        }
        if(id === "conduct"){
          setContuct(value);
        }
        if(id === "collegename"){
         setCollegename(value);
        }
        if(id === "year"){
          setYear(value);
        }
        if(id === "age"){
          setAge(value);
        }
        if(id === "feild"){
          setFeild(value);
        }
        if(id === "password"){
          setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }
        // const handleSubmit  = () => {
        //     console.log(firstName,lastName,email,password,confirmPassword);
        // }
        const handleSubmit = () =>{
            let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                contuct:contuct,
                collegename:collegename,
                year:year,
                age:age,
                feild:feild,
                password:password,
                confirmPassword:confirmPassword,
            }       
            // const newPostKey = push(child(ref(database), 'posts')).key;
            // const updates = {};
            // updates['/' + newPostKey] = obj
            // return update(ref(database), updates);
        }
    return (
        <div className='pre_reg_pg'>
            <div className="bdy">
                    <div className='bbg'>
                        <h1 id='register_prepage1'>
                            Student Registration
                        </h1>
                        <div className="username">
                            <label className="form__label" for="firstName">First Name </label>
                            <br/>
                            <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder=""/>
                        </div>
                        <br/>
                        <div className="lastname">
                            <label className="form__label" for="lastName">Last Name </label>
                            <br/>
                            <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="email">
                            <label className="form__label" for="email">Email </label>
                            <br/>
                            <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="contuct">
                            <label className="form__label" for="contuct">Contact</label>
                            <br/>
                            <input  type="number" id="contuct" className="form__input" value={contuct} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="collegename">
                            <label className="form__label" for="collegename">School/College </label>
                            <br/>
                            <input  type="text" id="collegename" className="form__input" value={collegename} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="year">
                            <label className="form__label" for="year">Year of Study </label>
                            <br/>
                            <input  type="text" id="year" className="form__input" value={year} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="age">
                            <label className="form__label" for="age">Age </label>
                            <br/>
                            <input  type="number" id="age" className="form__input" value={age} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="feild">
                            <label className="form__label" for="feild">Interested Fields </label>
                            <br/>
                            <input  type="text" id="feild" className="form__input" value={feild} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="password">
                            <label className="form__label" for="password">Password </label>
                            <br/>
                            <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div className="confirm-password">
                            <label className="form__label" for="confirmPassword">Confirm Password </label>
                            <br/>
                            <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                        </div>
                        <br/>
                        <div>
                        <button id="footer" onClick={()=>handleSubmit()} type="submit" class="btn"><Link className='link' to='/'>Submit</Link></button>
                        {/* <button onClick={()=>handleSubmit()} type="submit" class="btn"><Link to="/">Submit</Link> </button> */}
                        </div>
                        <br/>
                    </div>
            </div>
        </div> 
    );
}
export default SReg;