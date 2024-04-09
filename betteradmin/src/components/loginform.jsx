import { useState } from "react"

export default function Loginform() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  //Error checker
  const[loginattempt, setLoginattempt] = useState("");
  const[errorEmail, SetErrorEmail] = useState(false);
  const[errorPassword, SetErrorPassword] = useState(false);

  //Handling of Email input
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }
  const handleLogin = (e) =>{
    e.preventDefault();
    if (email === "") {
      SetErrorEmail(true);
      
    } else if (password === "") {
      SetErrorPassword(true);
      
    }
    else{
      SetErrorEmail(false);
      SetErrorPassword(false);
    }
  }
  const errorMessageEmail =()=>{
    return(
      <div style={{display: errorEmail? "" : "none",}}>
        <span>Du mangler at skrive din E-mail</span>        
      </div>
    );
  }
  const errorMessagePassword =()=>{
    return(
      <div style={{display: errorPassword? "" : "none",}}>
        <span>Du mangler at skrive dit password</span>        
      </div>
    );
  }
  return (
    <>
        <h1>Login form</h1>
        {errorMessageEmail()}
        {errorMessagePassword()}
        <br/>
        <form>
            <label>Email</label>
            <br/>

            <input
                placeholder="E-mail"
                onChange={handleEmail}
                value={email}
                type="email"
                required
            />
            <br/>
            <label>Password</label>
            <br/>

            <input
                placeholder="Password"
                onChange={handlePassword}
                value={password}
                type="password"
                required
            />
            <br/>
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" onClick={handleLogin}>
              Login
            </button>
        </form>
    </>
  );
}
