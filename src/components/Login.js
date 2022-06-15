import React from 'react'
import { useHistory } from 'react-router-dom'

export const Login = () => {

    let history = useHistory();
    const handleSubmit = ()=>{
        var x=document.getElementById('usname');
        var y=document.getElementById('psw');
        if(x.value!=='foo' || y.value!=='bar')
        alert('Please enter valid user name and password');
        else
        history.push("/home");
    }



  return (
    <div>
        
        <div className="container">
            <div className="main">

            
        <h1>Log In</h1>
            <form onSubmit={handleSubmit} >
                <div className="inputC">
                    <label >UserName</label>
                    <input type="text" name='usname' id='usname' required />
                </div>
                <div className="inputC">
                    <label >Password</label>
                    <input type="password" id='psw' required />
                </div>
                <button>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}
