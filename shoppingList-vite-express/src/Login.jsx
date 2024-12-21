/* eslint-disable react/prop-types */
import { useState } from 'react';


const Login = ({displayLogin, setDisplayLogin}) => {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [loginMessage, setLoginMessage] = useState('Please enter login information')

    const loginDetails = [
        {
            userName: "Lovish",
            password: 123
        },
        {
            userName: "Manish",
            password: 123
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        let checkDetails = loginDetails.find((i) => {
            return (i.userName == userName) && (i.password == password)
        })
        if (checkDetails) {
            setDisplayLogin(!displayLogin);
        }
        else {
            setLoginMessage('❌ Access Denied')
            setUserName('');
            setPassword('');
        }
    }

  return (
      <div className="login-container">
          <h2 className="login-title">👤 Login</h2>
          <p className='login-message'>{loginMessage}</p>
          <form onSubmit={handleSubmit}>
            <input placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} onFocus={()=>setLoginMessage('Please enter login information')}></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setLoginMessage('Please enter login information')}></input>
            <button type='submit' disabled={!userName || !password}>Login</button>
          </form>
    </div>
  )
}

export default Login;