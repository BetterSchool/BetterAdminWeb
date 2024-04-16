import { useState } from "react"
import Registersuccess from "./RegisterSuccess";
import RegisterError from "./RegisterError";

export default function RegisterForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    //States som tjekker for fejl
    const [submitted, setSubmitted] = useState(false);
    const [error, SetError] = useState(false);

    //Håndtere Fornavn ændring
    const handleFirstName = (e) =>{
        setFirstname(e.target.value);
        setSubmitted(false)
    }

    //Håndtere Efternavn ændring
    const handleLastName = (e) =>{
        setLastname(e.target.value);
        setSubmitted(false)
    }

    //Håndtere Password ændring
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setSubmitted(false)
    }

    //Håndtere Email ændring
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setSubmitted(false)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (firstname === "" || lastname === "" || password === "" || email === "") {
            setSubmitted(false);
            SetError(true);
        }else{
            setSubmitted(true);
            SetError(false);
        }
    }
    //Error and Success Message
    const successMessage = () =>{
        return(
            <div style={{display: submitted ? "" :"none",}}>
                <Registersuccess firstname={firstname}/>
            </div>
        );
    }
    const errorMessage = () =>{
        return(
            <div style={{display: error ? "" :"none",}}>
                <RegisterError/>
            </div>
        );
    }
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Oprettelse af ny konto
          </h2>
        </div>
        {errorMessage()}
        {successMessage()}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6">
            <div>
                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                  Fornavn
                </label>
                <div className="mt-2">
                  <input
                  value={firstname}
                  onChange={handleFirstName}
                    id="fistname"
                    name="firstname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                  Efternavn
                </label>
                <div className="mt-2">
                  <input
                  value={lastname}
                  onChange={handleLastName}
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  value={email}
                  onChange={handleEmail}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={handlePassword}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                    Husk mig
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Glemt dit kodeord?
                  </a>
                </div>
              </div>

              <div>
                <button
                onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login ind
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    //     <div>
    //     <>
    //         <h1>Bruger oprettelse</h1>
    //     </>
    //     <> 
    //         {errorMessage()}
    //         {successMessage()}
    //     </>
    //     <form>
    //         <>
    //             <label>Fornavn: </label>
    //             <input 
    //                 onChange={handleFirstName}
    //                 value={firstname}
    //                 type="text"   
    //                 required
    //             />
    //         </>
    //         <>
    //             <label>EfterNavn: </label>
    //             <input 
    //                 onChange={handleLastName}
    //                 value={lastname}
    //                 type="text"  
    //                 required  
    //             />
    //         </>
    //         <>
    //             <label>Email: </label>
    //             <input 
    //                 onChange={handleEmail}
    //                 value={email}
    //                 type="email"   
    //                 required 
    //             />
    //         </>
    //         <>
    //             <label>password: </label>
    //             <input 
    //                 onChange={handlePassword}
    //                 value={password}
    //                 type="text"    
    //                 required
    //             />
    //         </>
    //         <button onClick={handleSubmit} type="submit">
    //             Opret
    //         </button>
    //     </form>
    // </div>
    );
}
