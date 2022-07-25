import React from 'react';

export const Sidebar = ({ platforms }) => {
  return (
    <aside className="w-[18rem] fixed border-r-2 " aria-label="Sidebar">
      <div className="py-4 px-6 mt-16 bg-white h-screen overflow-y-scroll -mb-8">


        <h1 className='text-2xl font-semibold'>Sort By</h1>
        <select id="sort" defaultValue="dateDesc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4">
          <option value="dateDesc">Recently Updated</option>
          <option value="dateAsc">Old Records</option>
          <option value="e2h">Easy to hard</option>
          <option value="h2e">Hard to Easy</option>
        </select>

        <h1 className='text-2xl mt-8 font-semibold'>Filter By</h1>
        <li className='flex gap-4 items-center p-2.5 text-base font-normal text-gray-900 rounded-lg'>
          <input type="checkbox" name="favourites" id="favouritesCheck" />
          <label htmlFor="favourites">Favourites</label>
        </li>
        <h2 className='text-xl p-2.5 -mt-2'>Difficulty</h2>
        <ul className='text-base'>
          <li className='flex gap-4 items-center p-2 pt-0 px-8 font-normal text-gray-900 rounded-lg'>
            <input type="checkbox" name="easy" id="easyCheck" />
            <label htmlFor="easy">Easy</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input type="checkbox" name="medium" id="mediumCheck" />
            <label htmlFor="medium">Medium</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input type="checkbox" name="hard" id="hardCheck" />
            <label htmlFor="hard">Hard</label>
          </li>
        </ul>

        <h2 className='text-xl p-2.5 -mt-2'>Platform</h2>
        <ul className='text-base'>
          {platforms.length && platforms.map((item, index) => {
            return <li key={index} className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
              <input type="checkbox" name={item.name.toLowerCase()} id={`${item.name.toLowerCase()}Check`} />
              <label htmlFor={item.name.toLowerCase()}>{item.name.length <= 3 ? item.name.toUpperCase() : item.name[0].toUpperCase() + item.name.substring(1).toLowerCase()}{"  "} ({ item.count})</label>
            </li>
          }
          )}
        </ul>

        <h2 className='text-xl p-2.5 -mt-2'>Status</h2>
        <ul className='text-base'>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input type="checkbox" name="solved" id="solvedCheck" />
            <label htmlFor="solved">Solved</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input type="checkbox" name="unsolved" id="unsolvedCheck" />
            <label htmlFor="unsolved">Not Solved</label>
          </li>
        </ul>



      </div>
    </aside >
  )
}