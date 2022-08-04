import React from 'react';

export const Footer = ({ marginLeft }) => {
  return (
    <footer className={`ml-[${marginLeft}] h-10 p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800`}>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://google.com/" className="hover:underline">Masai14™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://github.com/masai14" className="mr-4 hover:underline md:mr-6" rel="noreferrer" target="_blank">About</a>
        </li>
        {/* <li>
          <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li> */}
        {/* <li>
          <a href="/notyetimplmented" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li> */}
        <li>
          <a href="mailto:projectdsatracker7@gmail.com" className="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  )
}