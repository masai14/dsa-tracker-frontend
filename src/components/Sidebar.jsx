import React from 'react';
import { useSelector } from 'react-redux';

export const Sidebar = ({ queryObj, setQueryObj }) => {
  const platforms = useSelector(store => store.data.platforms);

  const handleChange = (e) => {
    if (e.target.name === "selectSort") {
      setQueryObj({ ...queryObj, sortBy: e.target.value })
    }else if (e.target.name === "favourites") {
      setQueryObj({ ...queryObj, [e.target.name]: e.target.checked });//queryObj[e.target.name] === undefined ? true : ![e.target.name][e.target.value]
    } else {
      const [filter, subFilter] = e.target.name.split(" ");
      // console.log(filter, ",", subFilter);
      // console.log(filter, ",", subFilter, ",", queryObj.difficulty["1"]);
      setQueryObj({ ...queryObj, [filter]: { ...queryObj[filter], [subFilter]: e.target.checked } });//[[filter][subFilter]] === undefined ? true : 
    }
    // setQueryObj({ ...queryObj, [e.target.name]: { ...[e.target.name], [[e.target.name][e.target.value]]: [e.target.name][e.target.value] === undefined ? true : ![e.target.name][e.target.value] } });
  }
  return (
    <aside className="w-[18rem] fixed border-r-2 " aria-label="Sidebar">
      <div className="py-4 px-6 mt-16 bg-white h-screen overflow-y-scroll -mb-8">


        <h1 className='text-2xl font-semibold'>Sort By</h1>
        <select id="sort" defaultValue="dateDesc" name="selectSort" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4">
          <option value="dateDesc">Recently Updated</option>
          <option value="dateAsc">Old Records</option>
          <option value="e2h">Easy to hard</option>
          <option value="h2e">Hard to Easy</option>
        </select>

        <h1 className='text-2xl mt-8 font-semibold'>Filter By</h1>
        <li className='flex gap-4 items-center p-2.5 text-base font-normal text-gray-900 rounded-lg'>
          <input type="checkbox" name="favourites" id="favouritesCheck" onChange={handleChange} />
          <label htmlFor="favourites">Favourites</label>
        </li>
        <h2 className='text-xl p-2.5 -mt-2'>Difficulty</h2>
        <ul className='text-base'>
          <li className='flex gap-4 items-center p-2 pt-0 px-8 font-normal text-gray-900 rounded-lg'>
            <input onChange={handleChange} type="checkbox" name="difficulty 1" id="easyCheck" />
            <label htmlFor="difficulty 1">Easy</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input onChange={handleChange} type="checkbox" name="difficulty 2" id="mediumCheck" />
            <label htmlFor="difficulty 2">Medium</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input onChange={handleChange} type="checkbox" name="difficulty 3" id="hardCheck" />
            <label htmlFor="difficulty 3">Hard</label>
          </li>
        </ul>

        <h2 className='text-xl p-2.5 -mt-2'>Platform</h2>
        <ul className='text-base'>
          {platforms && platforms.map((item, index) => {
            return <li key={index} className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
              <input onChange={handleChange} type="checkbox" name={"platform " + item._id.toLowerCase()} id={`${item._id.toLowerCase()}Check`} />
              <label htmlFor={"platform " + item._id.toLowerCase()}>{item._id.length <= 3 ? item._id.toUpperCase() : item._id[0].toUpperCase() + item._id.substring(1).toLowerCase()}{"  "} ({item.count})</label>
            </li>
          }
          )}
        </ul>

        <h2 className='text-xl p-2.5 -mt-2'>Status</h2>
        <ul className='text-base'>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input onChange={handleChange} type="checkbox" name="status solved" id="solvedCheck" />
            <label htmlFor="status solved">Solved</label>
          </li>
          <li className='flex gap-4 items-center p-2 px-8 font-normal text-gray-900 rounded-lg'>
            <input onChange={handleChange} type="checkbox" name="status unsolved" id="unsolvedCheck" />
            <label htmlFor="status unsolved">Not Solved</label>
          </li>
        </ul>



      </div>
    </aside >
  )
}