import React from 'react'

import { Link} from "react-router-dom";

import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline'
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const secondaryNavigation = [
    { name: 'Mine infomationer', href: '/UserSettings', icon: UserCircleIcon, current: true },
    { name: 'Mine Skole oplysninger', href: '/SchoolSettings', icon: FingerPrintIcon, current: false },
    { name: 'Tiligere udlejninger', href: '/RentHistory', icon: BellIcon, current: false },
    { name: 'Betalinger historik', href: '/PaymentHistory', icon: CubeIcon, current: false },
    { name: 'Hold', href: '#', icon: CreditCardIcon, current: false },
  ]


export default function UserNav() {
  return (
      <nav className="flex-none px-4 sm:px-6 lg:px-0">
        <ul className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
          {secondaryNavigation.map((item) => (
              <Link
                to={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-50 text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                    'h-6 w-6 shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
          ))}
        </ul>
      </nav>
  )
}
