import PaymentHistory from "../PaymentHistory"
import GeneralSetting from "./GeneralSetting"
import UserNav from "./UserNav"



export default function UserPupil({FirstName, LastName, PhoneNr, Email}) {

  return (
    <>
      <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
            <UserNav/>
        </aside>
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
            <GeneralSetting FirstName={FirstName} LastName={LastName} PhoneNr={PhoneNr} Email={Email}/>
            <PaymentHistory/>
        </main>
      </div>
    </>
  )
}
