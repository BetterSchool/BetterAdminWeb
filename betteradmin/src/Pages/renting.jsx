import { useState } from "react";

import { Instrument } from "../JSON/Instruments";

export default function Renting() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [setInstrument] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    console.log(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.PreventDefault();
    console.log(firstname, lastname);
  };
  const handleInstrument = (e) => {
    setInstrument(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstname'>Fornavn:</label>
        <br />
        <input
          type='text'
          id='firstname'
          className=''
          value={firstname}
          onChange={handleFirstname}
        />
      </div>
      <div>
        <label htmlFor='lastname'>Efternavn:</label>
        <br />
        <input
          type='text'
          id='lastname'
          className=''
          value={lastname}
          onChange={handleLastName}
        />
      </div>
      <div>
        <label htmlFor='instument'>Vælg det instument der skal udlejes:</label>
        <br />
        <select
          id='instrumentPrice'
          name='instument'
          onChange={handleInstrument}
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
  );
}
