import { useState } from "react"

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
        // console.log("User oprettet!")
        // console.log("Fornavn:" , firstname)
        // console.log("Efternavn:" , lastname)
        // console.log("Email:" , email)
        // console.log("Password:" ,password)

        return(
            <div style={{display: submitted ? "" :"none",}}>
                <span>Bruger med navn {firstname} {lastname} er blevet oprettet</span>
            </div>
        );
    }
    const errorMessage = () =>{
        // console.log("User kunne ikke oprettes!")
        // console.log("Fornavn:" , firstname)
        // console.log("Efternavn:" , lastname)
        // console.log("Email:" , email)
        // console.log("Password:" ,password)

        return(
            <div style={{display: error ? "" :"none",}}>
                <span>Fejl! brugeren kunne ikke oprettes</span>
            </div>
        );
    }
    return(
        <div>
        <>
            <h1>Bruger oprettelse</h1>
        </>
        <> 
            {errorMessage()}
            {successMessage()}
        </>
        <form>
            <>
                <label>Fornavn: </label>
                <input 
                    onChange={handleFirstName}
                    value={firstname}
                    type="text"   
                    required={true} 
                />
            </>
            <>
                <label>EfterNavn: </label>
                <input 
                    onChange={handleLastName}
                    value={lastname}
                    type="text"    
                />
            </>
            <>
                <label>Email: </label>
                <input 
                    onChange={handleEmail}
                    value={email}
                    type="email"    
                />
            </>
            <>
                <label>password: </label>
                <input 
                    onChange={handlePassword}
                    value={password}
                    type="text"    
                />
            </>
            <button onClick={handleSubmit} type="submit">
                Opret
            </button>
        </form>
    </div>
    );
}
