"use client";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { MenuHeader } from "./Menu";

export function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className='flex items-center w-full h-20 fixed top-0 bg-white dark:bg-[#191919] z-50 border-b-[0.2px] md:border-0'>
      <div className='w-full container  mx-auto'>
        <div>
          <div className='flex items-center justify-between'>
            <Image
              src='https://res.cloudinary.com/gomesdev/image/upload/v1707685275/marcosgomes/logo_zvfe7c.svg'
              alt='logo'
              width={82}
              height={82}
              priority
              className='h-auto object-contain'
            />
            <ul className='hidden lg:flex items-center gap-10 text-gray dark:text-gray-200 font-semibold'>
              <Suspense>
                <MenuHeader />
              </Suspense>
              <li className='flex gap-4'>
                <Link
                  href='https://github.com/MarcosGomesDev'
                  target='_blank'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Github size={24} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/marcos-gomes-dev/'
                  target='_blank'
                  className='gap-3 mr-2 hover:opacity-80'
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='gap-3 hover:opacity-80'
                >
                  <Instagram size={24} />
                </Link>
              </li>
              <li>
                <DarkModeSwitcher />
              </li>
            </ul>
            <div
              onClick={() => setNav(!nav)}
              className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
            >
              {nav ? (
                <X size={30} className='text-blue dark:text-white' />
              ) : (
                <Menu size={30} className='text-blue dark:text-white' />
              )}
            </div>

            {nav && (
              <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#191919] text-gray-500 text-2xl'>
                <MenuHeader onClick={() => setNav(!nav)} />
                <li className='flex gap-4 mt-6'>
                  <Link
                    href='https://github.com/MarcosGomesDev'
                    target='_blank'
                    className='gap-3 mr-2 hover:opacity-80'
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/marcos-gomes-dev/'
                    target='_blank'
                    className='gap-3 mr-2 hover:opacity-80'
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href='https://www.instagram.com/'
                    target='_blank'
                    className='gap-3 hover:opacity-80'
                  >
                    <Instagram size={24} />
                  </Link>
                </li>
                <li className='mt-10'>
                  <DarkModeSwitcher />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
