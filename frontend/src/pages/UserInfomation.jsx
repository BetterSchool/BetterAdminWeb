import React from 'react'
import UserGuardian from '../components/UserInfomation/UserGuardian';
import UserPupil from '../components/UserInfomation/UserPupil';



const IsStudent = true;
const IsGuardian = false;

const Person = {
  Firstname: "Tom",
  LastName: "Cook",
  PhoneNr: "123456789",
  Email: "BetterAdmin@coolsite.dk",
}


export default function UserInfomation() {
<>
<h1>Hej</h1>
</>
  if (IsStudent === true) {
    return(
      <UserPupil FirstName={Person.Firstname} LastName={Person.LastName} PhoneNr={Person.PhoneNr} Email={Person.Email}/>
    )
  }
  if (IsGuardian === false) {
    <UserGuardian/>
  }
}
