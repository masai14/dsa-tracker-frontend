import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails, updateUserDetails } from "../../redux/actions";
import { BiPencil } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { avatar } from "../../data/icons";

export const UserProfile = () => {
  const user = useSelector(store => store.user);
  const [data, setData] = useState({});
  const userDetails = useSelector(store => store.userDetails);
  const dispatch = useDispatch();
  const [isUpdateActive, setIsUpdateActive] = useState(false);
  const [email, firstName, lastName, github, leetcode, hackerrank] = ["a@a.com", "Akhil Kumar", "Adepu", "https://github.com"];
  /*
  
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    github: { type: String },
    leetcode: { type: String },
    hackerrank: { type: String },
    role: { type: String, enum: ['user', 'admin', 'superAdmin'], default: 'user' },

  */
  // console.log(userDetails);
  useEffect(() => {
    dispatch(getUserDetails(user));
  }, [])

  useEffect(() => {
    setData({ ...userDetails });
  }, [userDetails]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleUpdate = () => {
    delete (data._id);
    dispatch(updateUserDetails(user, userDetails._id, data));
    setIsUpdateActive(false);
  }
  // console.log(data);
  console.log(user);
  return (
    <section className='w-full'>
      <Navbar />
      {/* <div className='flex mx-auto flex-wrap h-screen'> */}
      {/* <div className='mt-16 mb-10 w-full mx-4 flex flex-col px-4'> */}
      <div className='container border mx-auto min-h-screen'>
        <div className='mt-16 p-16 mx-28'>
          <div className='flex flex-row gap-8'>
            <img src={avatar} alt="" className='h-96 w-96' />
            <div className='border-l-2 p-8 w-[70%] flex flex-col gap-8'>
              <div className='flex flex-row-reverse'>
                <button className='w-40 h-14 rounded-lg p-4 bg-[#1072B9] text-white font-bold flex text-lg items-center align-center px-8 gap-2' onClick={isUpdateActive ? () => { handleUpdate() } : () => { setIsUpdateActive(!isUpdateActive) }}>
                  {isUpdateActive ? <><div className='flex gap-2'>
                    <BsCheck2 className='text-2xl mt-[2px]' />
                    <span>Done</span>
                  </div></> : <><BiPencil />
                    <span>Update</span></>}
                </button>
              </div>
              <div className='grid text-xl gap-y-4' style={{ gridTemplateColumns: "0.3fr 1fr" }}>
                {/* {userDetails.firstName ?
                  <div className='p-4 px-2 flex flex-row gap-8'>
                    <span>First Name:</span>
                    <span className='max-w-[60%] overflow-hidden'>{userDetails.firstName}</span>
                  </div>
                  :
                  ""}
                
                {userDetails.lastName ?
                  <div className='p-4 px-2 flex flex-row gap-8'>
                    <span>Last Name:</span>
                    <span className='max-w-[60%] overflow-hidden'>{userDetails.lastName}</span>
                  </div>
                  :
                  ""}

                {userDetails.email ?
                  <div className='p-4 px-2 flex flex-row gap-8'>
                    <span>Email :</span>
                    <span className='max-w-[60%] overflow-hidden'>{userDetails.email}</span>
                  </div>
                  :
                  ""} */}

                <span className='p-2'>First Name :</span>
                {isUpdateActive ?
                  <input className='w-[60%] p-2 px-4 rounded bg-slate-300 focus:outline-none' type="text" name="firstName" value={data.firstName} onChange={handleChange} />
                  :
                  <span className='max-w-[60%] p-2'>{userDetails.firstName}</span>
                }

                <span className='p-2'>Last Name :</span>
                {isUpdateActive ?
                  <input className='w-[60%] p-2 px-4 rounded bg-slate-300 focus:outline-none' type="text" name="lastName" value={data.lastName} onChange={handleChange} />
                  :
                  <span className='max-w-[60%] p-2'>{userDetails.lastName}</span>
                }

                <span className='p-2'>Email :</span>
                <span className='max-w-[60%] p-2'>{userDetails.email}</span>

                <span className='p-2'>Password :</span>
                <span className='max-w-[60%] p-2'>********</span>

                <span className='p-2'>GitHub :</span>
                {isUpdateActive ?
                  <input className='w-[60%] p-2 px-4 rounded bg-slate-300 focus:outline-none' type="text" name="github" value={data.github} onChange={handleChange} />
                  :
                  <a href={userDetails.github} alt="github-link" target="_blank" rel="noreferrer" className='p-2 cursor-pointer'>
                    {userDetails.github}
                  </a>
                }

                <span className='p-2'>LeetCode :</span>
                {isUpdateActive ?
                  <input className='w-[60%] p-2 px-4 rounded bg-slate-300 focus:outline-none' type="text" name="leetcode" value={data.leetcode} onChange={handleChange} />
                  :
                  <a href={userDetails.leetcode} alt="leetcode-link" target="_blank" rel="noreferrer" className='p-2 cursor-pointer'>
                    {userDetails.leetcode}
                  </a>
                }

                <span className='p-2'>HackerRank :</span>
                {isUpdateActive ?
                  <input className='w-[60%] p-2 px-4 rounded bg-slate-300 focus:outline-none' type="text" name="hackerrank" value={data.hackerrank} onChange={handleChange} />
                  :
                  <a href={userDetails.hackerrank} alt="hackerrank-link" target="_blank" rel="noreferrer" className='p-2 cursor-pointer'>
                    {userDetails.hackerrank}
                  </a>
                }
              </div>
            </div>
            {/* <div>{email}</div>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{github}</div>
            <div>{leetcode}</div>
            <div>{hackerrank}</div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section >
  )
}