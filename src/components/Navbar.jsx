import React, { useState, useEffect } from 'react';
import { avatar, logo } from "../data/icons";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [activeUserMenu, setActiveUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const user = useSelector(store => store.user);
  const { firstName, email } = useSelector(store => store.userDetails);
  const navigate = useNavigate();

  const searchDebounce = () => {
    let inDebounce = null;
    return () => {
      inDebounce && clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        getData();
      }, 1000);
    }
  }

  async function getData() {
    try {
      let res = await axios.post("https://dsa-tracker-api.herokuapp.com/api/question/search", {
        key: searchQuery
      }, {
        headers: {
          "authorization": `Bearer ${user}`
        }
      })
      // console.log(res.data);
      setSearchData([...res.data.questions]);
    } catch (err) {
      // console.log(err.message);
    }
  }

  useEffect(() => {
    if (searchQuery.length >= 3) {
      searchDebounce()();
    } else {
      setSearchData([]);
    }
  }, [searchQuery]);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg z-10 fixed w-full">
      <div className="flex flex-wrap justify-between items-center mx-12">


        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="App Logo" />
        </a>

        <div className='flex gap-8'>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" name="searchBar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
              <div className='absolute bg-white w-full'>{searchData && searchData.map((el, i) => {
                return <div className='border-b-2 p-2 cursor-pointer' key={el._id + i} onClick={() => { setSearchData([]); navigate(`/question/${el._id}`) }}>{el.title}</div>
              })}</div>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>



          <div className="flex items-center md:order-3">
            <button type="button" className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={() => setActiveUserMenu(!activeUserMenu)}>
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8" src={avatar} alt="user" />
            </button>
            {/* <!-- Dropdown menu --> */}

            {activeUserMenu &&
              <div className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block absolute top-12 right-8" id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">{firstName}</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{email}</span>
                </div>
                <ul className="py-1" aria-labelledby="user-menu-button">
                  <li>
                    <a href="/profile" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="/auth" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => { localStorage.removeItem("userTokenDSA") }}>Sign out</a>
                  </li>
                </ul>
              </div>
            }
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>




          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="mailto:projectdsatracker7@gmail.com" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>

        </div>


      </div>
    </nav>

  );
}