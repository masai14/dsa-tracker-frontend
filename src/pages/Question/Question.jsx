import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Loader, Modal } from '../../components';
import { BsLaptop } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestion } from '../../redux/actions';

export const Question = () => {//{ title, topic, link, difficulty, solved, platform }
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const { id } = useParams();
  const [modalActive, setModalActive] = useState(false);
  const { code, description, difficulty, intuition, isFav, isPublic, link, platform, solved, title, topic } = useSelector(store => store.question);
  const error = useSelector(store => store.error);
  // console.log(description && description.split("\n").map(el => el + "\n").join(""));
  useEffect(() => {
    try {
      dispatch(getQuestion(user, id));
    } catch (err) {
      // console.log("question", err.message);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [id]);
  const [accordion, setAccordion] = useState(false);

  return (<>
    {error.value ? <>{error.message} <a href='/auth' className='underline'>Redirect to login?</a></> :
      <div>
        <Navbar />
        {modalActive && <Modal setModalActive={setModalActive} questionId={id} question={{ code, description, difficulty, intuition, isFav, isPublic, link, platform, solved, title, topic }} />}
        {isLoading ? <div className='min-h-screen w-48 m-auto pt-64'>
          <Loader width="w-48" height="h-48" />
        </div> : <div className='min-h-screen flex mx-auto flex-wrap'>
          <div className='mt-16 mb-10 w-full mx-4 flex flex-col px-4'>

            <div className='border rounded-lg bg-white my-4 p-6 shadow-dynamic flex flex-col'>
              <div id="header" className='flex justify-between p-4 pb-0'>
                <div className='flex gap-6'>
                  <h1 className='text-3xl font-semibold leading-[3rem] text-[#515151]'>{title}</h1>
                  {solved ? <div className='my-2 font-semibold text-sm leading-5 text-[#275808] bg-[#F4FFF2] p-3 rounded-lg'>Solved</div> : <div className='my-2 font-semibold text-sm leading-5 text-[#F88646] bg-[#FFFCB1] p-3 rounded-lg'>Not Solved Yet</div>}
                  {isFav ? <div className='my-2 font-semibold text-sm leading-5 text-[#275808] bg-[#F4FFF2] p-3 rounded-lg'>Favorite</div> : <div className='my-2 font-semibold text-sm leading-5 text-[#F88646] bg-[#FFFCB1] p-3 rounded-lg'>Not Favorite</div>}
                  {isPublic ? <div className='my-2 font-semibold text-sm leading-5 text-[#275808] bg-[#F4FFF2] p-3 rounded-lg'>Public</div> : <div className='my-2 font-semibold text-sm leading-5 text-[#F88646] bg-[#FFFCB1] p-3 rounded-lg'>Not Public</div>}
                </div>
                <button className='w-32 h-14 rounded-lg p-4 bg-[#1072B9] text-white font-bold flex text-lg items-center align-center px-8 gap-2' onClick={() => { setModalActive(true) }}>
                  <BiPencil />
                  <span>Edit</span>
                </button>
              </div>


              <div className='w-full flex flex-row px-4'>
                <div className='flex flex-col w-1/2'>
                  <div className='w-full text-lg flex flex-row gap-3 overflow-hidden'>
                    <span className='max-w-[60%] overflow-hidden whitespace-nowrap text-[#1072B9] font-semibold'>{topic.trim().split(",").map(el => el.trim()).join(", ")}</span>
                    <span className='text-[#8F8F8F] font-normal'>Difficulty Level: {difficulty === '3' ? <span className='text-[#EB3131] font-semibold'>Hard</span> : difficulty === '2' ? <span className='text-[#F88646] font-semibold'>Medium</span> : <span className='text-[#1BCB2D] font-semibold'>Easy</span>}</span>
                  </div>
                  <div className='mt-4 text-base font-normal leading-5'>
                    Updated on 23/1/2022
                  </div>
                </div>
              </div>

              <div className='flex flex-row p-4 gap-6 max-h-[34rem]'>
                <div className='w-1/2 border rounded-lg p-4'>
                  <div className='flex flex-col '>
                    <div className='text-lg font-semibold mb-2'>Description:</div>
                    <div className='max-h-[28.5rem] overflow-scroll'>{description && description.split("\n").map((el, i) => {
                      return <p key={`des${i}`}>{el}</p>;
                    })}</div>
                  </div>
                </div>
                <div className='w-1/2 border rounded-lg p-4'>
                  <div className='flex flex-col '>
                    <div className='text-lg font-semibold mb-2'>Intuition:</div>
                    <div className='max-h-[28.5rem] overflow-scroll'>{intuition && intuition.split("\n").map((el, i) => {
                      return <p key={`int${i}`}>{el}</p>;
                    })}</div>
                  </div>
                </div>
              </div>


              <div id='code-accordion' className='mx-4 border rounded-lg cursor-pointer' onClick={() => { setAccordion(!accordion) }}>
                <div className={`px-4 py-3 ${accordion && 'border-b-2'} bg-gray-100 flex justify-between`}>
                  <span className='text-lg'>Code</span> <HiOutlineChevronDown className='text-2xl' />
                </div>
                {accordion && <pre className='p-4'><code>{code && code.split("\n").map((el, i) => {
                  return <p key={`code${i}`}>{el}</p>;
                })}</code></pre>}
              </div>





              <div className='flex flex-col w-full place-items-end'>
                <div className='flex flex-row gap-6 mt-4'>
                  {/* <div className='p-2 text-[#3B89C2] text-base font-bold'>View Details</div> */}
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
          </div>
        </div>
        }
        <div className='w-full'>
          <Footer marginLeft={0} />
        </div>
      </div>}</>
  )
}