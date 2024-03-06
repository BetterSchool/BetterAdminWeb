import React from 'react'
import UserGuardian from '../components/UserInfomation/Guardian/UserGuardian';
import UserPupil from '../components/UserInfomation/Pupil/UserPupil';



const IsStudent = true;
const IsGuardian = false;

const Person = {
  Firstname: "Tom",
  LastName: "Cook",
  PhoneNr: "123456789",
  Email: "BetterAdmin@coolsite.dk",
}


export default function UserInfomation() {
  if (IsStudent === true) {
    return(
        <UserPupil FirstName={Person.Firstname} LastName={Person.LastName} PhoneNr={Person.PhoneNr} Email={Person.Email}/>
    )
  }
  if (IsGuardian === false) {
    <UserGuardian/>
  }
}
