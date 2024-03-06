import React from 'react'
const Student = {
    DateOfBirth: "05-03-2024",
    Gender: "Mand",
    StartDate: "",
    Note: "",
    School:""
  }

export default function GeneralSetting({FirstName, LastName, PhoneNr, Email}) {
  return (
    <>
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          En oversigt over dine generelle infomationer
        </p>

        <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Fornavn</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{FirstName}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Efternavn</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{LastName}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{Email}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Tlf nr.</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{PhoneNr}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Fødselsdag</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{Student.DateOfBirth}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Køn</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{Student.Gender}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>

          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Tlf nr.</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{PhoneNr}</div>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Update
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </>
  )
}
