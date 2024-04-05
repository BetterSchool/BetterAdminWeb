import { useState } from "react";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { Instrument } from "../JSON/Instruments";

export default function Renting() {
  const [setFirstname] = useState("");
  const [setLastname] = useState("");

   const handleSubmit = (e) => {
    setLastname(user.family_name);
    setFirstname(user.given_name);
    console.log(user.family_name, user.given_name);
    console.log(e)
    e.PreventDefault();
  };

  const {user} = useKindeAuth();
  return (
    <>
    <p>Hej {user.given_name} {user.family_name}</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='instument'>Vælg det instument der skal udlejes:</label>
        <br />
        <select
          id='Price'
          name='instument'
        >
          {Instrument.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Pris:</label>
        <br />
        <label htmlFor='instrumentPrice'></label>
      </div>
      <button
        className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        type='submit'
      >
        {" "}
        Lej{" "}
      </button>
    </form>
    </>
  );
}
