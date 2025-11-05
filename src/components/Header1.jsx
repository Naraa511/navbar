import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logo from '../assets/logo-lg-haais.png';


const navigation = [
  { name: 'Элсэлтийн бүртгэл', href: '#' },
  { name: 'Бүтэц бүрэлдэхүүн', href: '#' },
  { name: 'Төгсөгчид', href: '#' },
]
export default function Header1() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
      <header className='bg-white dark:bg-gray-900'>
      <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>ХААИС</span>
            <img alt='' src={ logo} className='h-14 w-auto'/>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700
          dark:text-gray-400'>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6'/>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href}
              className='text-sm/6 font-semibold  text-gray-900 dark:text-white'>
              {item.name}
            </a>
          ))}
        </div>
          </nav>
          
    </header>
  )
}
