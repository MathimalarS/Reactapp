import React from 'react';
import './register.css';

function Register() {
  return (
    <div className='log'>
      
    <div className='reg'>
      <label htmlFor="user">Name</label>
      <input type="text" id="user" name="user" placeholder="" />
  
      <br />
      <label htmlFor="dob">DOB</label>
      <input type="date" id="dob" required />
      <br />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="" />
      <br />
      <br />
      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="tel" placeholder="Enter your phone number" required />
      <br />
      <br />
      <center><button>SIGN UP</button></center>
    </div>
    </div>
  );
}

export default Register;