import React, {Component, useCallback, useState} from "react";
import '../styles/App.css';

const App = () => {

  const [userData, setUserData] = useState({
    name: null,
    email: null,
    gender: "male",
    phoneNumber: null,
    password: null,
  });

  const [user, setUser] = useState();
  const [isUserReady, setIsUserReady] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    password: true
  })

  console.log(isUserReady)

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((pre) => {
      return {...pre, [name]: value} 
    })
  }

  console.log(userData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!(userData.name && userData.email && userData.gender && userData.phoneNumber && userData.password)) {
      alert('All fields are mandatory');
      return
    }

    const RegEx = /^[a-z\s]+$/i;
    // console.log(RegEx.test(userData.name))
    const RegEx2 = /^[0-9\s]+$/i;
    // console.log(RegEx2.test(userData.name))
    const RegEx3 = /^[0-9a-zA-Z\s]+$/i;
    // console.log(RegEx3.test(userData.name))
    if(RegEx.test(userData.name)) {
      alert('Name is not alphanumeric');
      return
    }
    if(RegEx2.test(userData.name)) {
      alert('Name is not alphanumeric');
      return
    }
    if(!RegEx3.test(userData.name)) {
      alert('Name is not alphanumeric');
      return;
    }


    if(!userData.email.includes('@')) {
      alert('Email must contain @');
      return;
    }

    const RegEx4 = /^[0-9]+$/i
    if(!RegEx4.test(userData.phoneNumber)) {
      alert('Phone Number must contain only numbers');
      return;
    }


    if(userData.password.length < 6 ) {
      alert('Password must contain atleast 6 letters');
      return;
    }
    
    setUser(userData.email.slice(0, userData.email.indexOf('@')))
  }

  // console.log(user)
  return (
    <div id="main">
      <h2>{user && 
        `Hello ${user}`}</h2>
      <form>
        <label>Name <br/>
          <input type='text' data-testid='name' name="name" id='name' 
            onChange={(e) => handleFormData(e)}/><br/>
        </label><br/>

        <label>Email <br/>
          <input type='text' data-testid='email' name="email" id='email' 
            onChange={(e) => handleFormData(e)}/><br/>
        </label><br/>

        <label>Gender <br/>
          <select onChange={(e) => handleFormData(e)} data-testid = 'gender' id="gender" name="gender">
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select><br/>
        </label><br/>

        <label>Phone Number <br/>
          <input type='text' data-testid='phoneNumber' name="phoneNumber" id='phoneNumber' 
            onChange={(e) => handleFormData(e)}/><br/>
         </label><br/>

        <label>Password <br/>
          <input type='password' data-testid='password' name="password" id='password' 
            onChange={(e) => handleFormData(e)}/><br/>
        </label><br/>

        <button type="submit" data-testid='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default App;