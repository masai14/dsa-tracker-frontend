import React, { useState, useEffect } from 'react';
import { Sidebar, Navbar, Card, Footer, Modal, Loader } from '../../components';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../../redux/actions';

const dummyData = [
  {
    title: "Search in sorted and Rotated Array",
    topic: "Array,Binary Search",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "2",
    solved: false,
  },
  {
    title: "Dp Nations",
    topic: "Dynamic Programming",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "1",
    solved: true,
  },
  {
    title: "Parking Lot",
    topic: "System Design",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "3",
    solved: false,
  },
  {
    title: "Pre-order Traversal",
    topic: "Binary Tree",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "2",
    solved: true,
  },
  {
    title: "Search in sorted and Rotated Array",
    topic: "Array,Binary Search",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "2",
    solved: false,
  },
  {
    title: "Dp Nations",
    topic: "Dynamic Programming",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "1",
    solved: true,
  },
  {
    title: "Parking Lot",
    topic: "System Design",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "3",
    solved: false,
  },
  {
    title: "Pre-order Traversal",
    topic: "Binary Tree",
    platform: "Leetcode",
    link: "https://leetcode.com/",
    difficulty: "2",
    solved: true,
  }
]

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const questions = useSelector(store => store.questions);
  console.log(questions);
  const [modalActive, setModalActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalPages = 10;
  const platforms = [
    {
      "name": 'hackerRank',
      "count": 5
    },
    {
      "name": 'Leetcode',
      "count": 2
    },
    {
      "name": 'codechef',
      "count": 8
    },
    {
      "name": 'oj',
      "count": 4
    },];

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      fetch("http://localhost:2345/user/check", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${user}`
        }
      }).then(res => res.json()).then(res => {
        if (res.message === true) {
          dispatch(getQuestions(user));
        } else {
          navigate('/auth')
        }
      }).catch((err) => {
        // console.log(err.message);
      })
    }

    return () => {
      // setIsLoading(false);
    }
  }, []);

  useEffect(() => { 
    setData([...questions]);
  }, [questions])

  return (<>
    {isLoading ? <Loader /> :
      <section className='w-full'>
        <Navbar />
        {modalActive && <Modal />}
        <div className='flex mx-auto flex-wrap botto'>
          <Sidebar platforms={platforms} />
          <div className='ml-[19rem] mt-16 mb-10 w-full mx-4 flex flex-col px-4'>
            <div id="header" className='flex justify-between py-4 my-8'>
              <h1 className='text-4xl font-semibold leading-[3rem] text-[#1A1A1A]'>My Problems</h1>
              <button className='w-60 h-14 rounded-lg p-4 bg-[#1072B9] text-white font-bold flex text-lg items-center align-center justify-around' onClick={() => { setModalActive(!modalActive) }}>
                <span>+</span>
                <span>Add a new Problem</span>
              </button>
            </div>
            {data.length && data.map((item, index) => {
              return <Card key={index} {...item} />
            })}
            <div className='flex flex-row gap-3 mt-4 text-xl justify-between w-[6rem]'>
              <div>
                <button type='button' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="pt-[0.30rem] disabled:opacity-20">
                  <MdOutlineArrowBackIosNew />
                </button>
              </div>
              <div>
                {currentPage}
              </div>
              <div>
                <button type='button' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="pt-[0.30rem] disabled:opacity-20">
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer marginLeft={'17rem'} />
      </section>}
  </>
  )
}