import React from 'react';
import logo from "../logo192.png";
import { BsLaptop } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Card = ({ _id, title, topic, link, difficulty, solved, platform, updatedAt }) => {
  // console.log({ _id, title, topic, link, difficulty, solved, platform });
  // console.log(updatedAt, new Date());
  // console.log(new Date(updatedAt).toLocaleString().split(",")[0]);
  const navigate = useNavigate();
  return (
    <div className='border rounded-lg bg-white mb-4 p-6 shadow-dynamic flex justify-between'>
      <div className='flex flex-col w-1/2'>
        <div className='font-semibold text-2xl leading-8 text-[#515151]'>{title}</div>
        <div className='w-full text-sm flex flex-row gap-3 overflow-hidden my-2'>
          <span className='max-w-[60%] overflow-hidden whitespace-nowrap text-[#1072B9] font-semibold'>{topic.trim().split(",").map(el => el.trim()).join(", ")}</span>
          <span className='text-[#8F8F8F] font-normal'>Difficulty Level: {difficulty === '3' ? <span className='text-[#EB3131] font-semibold'>Hard</span> : difficulty === '2' ? <span className='text-[#F88646] font-semibold'>Medium</span> : <span className='text-[#1BCB2D] font-semibold'>Easy</span>}</span>
        </div>
        <div className='mt-4 text-base font-normal leading-5'>
          Updated on {new Date(updatedAt).toLocaleString().split(",")[0]}
        </div>
      </div>
      <div className='flex flex-col w-1/2 place-items-end'>
        {solved ? <div className='font-semibold text-sm leading-5 text-[#275808] bg-[#F4FFF2] p-3 rounded-lg'>Solved</div> : <div className='font-semibold text-sm leading-5 text-[#F88646] bg-[#FFFCB1] p-3 rounded-lg'>Not Solved Yet</div>}
        <div className='flex flex-row gap-6 mt-4'>
          <div className='p-2 text-[#3B89C2] text-base font-bold cursor-pointer' onClick={() => { navigate(`/question/${_id}`) }}>View Details</div>
          <div className='p-2 border-2 rounded-lg flex flex-row gap-2 border-platform'>
            <span className='border-r-2 pr-2 flex flex-row'>
              <BsLaptop className='w-6 h-6 mr-1' />
              {platform.length <= 3 ? platform.toUpperCase() : platform[0].toUpperCase() + platform.substring(1).toLowerCase()}
            </span>
            <span className='text-[#3B89C2] text-base font-bold cursor-pointer' onClick={() => { window.open(link) }}>Attempt Problem</span>
          </div>
        </div>
      </div>
    </div>
  )
}