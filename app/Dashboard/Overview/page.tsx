'use client'

import styles from '@/styles/Home.module.css';
//import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useMedia } from 'react-use';
import { useRouter } from 'next/navigation'
import Script from 'next/script';

//import Logo from '../images/loop.svg';

//const inter = Inter({ subsets: ['latin'] });

// Menu
const menuItems = [
  {
    menu: 'About',
    link: '/about',
  },
  {
    menu: 'Product',
    link: '/product',
  },
  {
    menu: 'Services',
    link: '/services',
  },
  {
    menu: 'Contact Us',
    link: '/contact',
  },
];

export default function Page() {

  const router = useRouter()

  const displayMenu = () => {
    return menuItems.map((item) => (
      <Link
        key={item.menu}
        href={item.link}
        className='pb-5 hover:text-yellow md:pb-0 md:pl-6'
      >
        {item.menu}
      </Link>
    ));
  };

    const isDesktop = useMedia('(min-width: 768px)', true);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    
    <>
    <Head>
      <title>Next & Tailwind Sidebar</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />



    </Head>
    <main >
      <div className='flex justify-between p-2 shadow-lg items-center'>
        {/* Logo */}

        {/* Menu links */}
        <div >
          <div className='text-red'>
            {isDesktop ? (
              displayMenu()
            ) : (
              <>
                <button
                  className='border-none bg-none'
                  onClick={() => toggleSidebar()}
                >
                  <FaBars />
                </button>
                <div
                  className={
                    open
                      ? 'absolute top-0 right-0 z-50 h-screen w-3/5 bg-white shadow-md'
                      : 'hidden'
                  }
                >
                  <div className='flex flex-col text-center'>
                    <button
                      className='mb-7 mt-7 mr-1 flex justify-end px-5 text-xl'
                      onClick={() => toggleSidebar()}
                    >
                      <GrClose />
                    </button>
                    {displayMenu()}
                  </div>
                </div>
              </>
            )}
          </div>
          
        </div>
      </div>
      <div className="grid h-screen px-4 bg-green place-content-center">
      <h1 className="font-black text-gray-200 text-7xl">Dashboard/Overview</h1>
      <button
          type="button"
          onClick={() => router.push('/Dashboard')}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Back to Dashboard
        </button>
        <button
          type="button"
          onClick={() => {throw new Error("Error was generated in Dashboard/Overview")}}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Trigger Error
        </button>
        </div>
    </main>
  </>
 

  )
}