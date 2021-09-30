import { useState } from "react";
import axios from 'axios';

const Authentication = ({userData, setUserData}) => {
    //register and login
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerResponse, setRegisterResponse] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  
  //already login and these states exist for mini-blog
  

  const isCompleteForm = (username, pw) => {
    return (username.length > 0 && pw.length > 0) ? true : false;
  }

  const register = (e) => {
    e.preventDefault()
    const userInfo = {
      username: registerUsername,
      password: registerPassword
    }
    axios.post('http://localhost:3030/api/user/register', userInfo)
      .then(res =>{
        setRegisterResponse(res.data)
      })
      .catch(err =>{
        setRegisterResponse(err)
    });
    setRegisterUsername('')
    setRegisterPassword('')
  }

  const login = (e) => {
    e.preventDefault()
    const userInfo = {
      username: loginUsername,
      password: loginPassword
    }
    axios.post('http://localhost:3030/api/user/login', userInfo)
      .then(res =>{
        setUserData(res.data)
      })
      .catch(err =>{
        alert(err, 'wrong username or password')
    });
    setLoginUsername('')
    setLoginPassword('')
  }

  return (
    <>
      <div>
        Register
        <br />
        <label htmlFor="registerUsername">Username:</label>
        <input type="text" id="registerUsername" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)}/>
        <label htmlFor="registerPassword">Password:</label>
        <input type="password" id="registerPassword" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}/>
        <button disabled={!isCompleteForm(registerUsername, registerPassword)} onClick={(e) => register(e)}>Create User</button>
        {registerResponse.length > 0 && registerResponse}
        <br />
        <br />
      </div>
      <div>
        Login
        <br />
        <label htmlFor="loginUsername">Username:</label>
        <input type="text" id="loginUsername" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" id="loginPassword" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
        <button disabled={!isCompleteForm(loginUsername, loginPassword)} onClick={(e) => login(e)}>Login</button>
      </div>
    </>
  )
}

export default Authentication;