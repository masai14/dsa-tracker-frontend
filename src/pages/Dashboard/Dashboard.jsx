import React, { useState, useEffect } from 'react';
import { Sidebar, Navbar, Card, Footer, Modal, Loader } from '../../components';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../../redux/actions';

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const { questions, totalPages } = useSelector(store => store.data);
  const [modalActive, setModalActive] = useState(false);
  const [queryObj, setQueryObj] = useState({
    favourites: false,
    difficulty: {},
    platform: {},
    page: 1,
    status: {},
    sortBy: "dateDesc"
  });
  const [isLoading, setIsLoading] = useState(false);
  // console.log(platforms);

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
          dispatch(getQuestions(user, queryObj));
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
  }, [user, queryObj, setQueryObj]);

  useEffect(() => {
    setData([...questions]);
  }, [questions])
  // console.log("data:", data);
  return (<>
    {isLoading ? <Loader /> :
      <section className='w-full'>
        <Navbar />
        {modalActive && <Modal />}
        <div className='flex mx-auto flex-wrap'>
          <Sidebar queryObj={queryObj} setQueryObj={setQueryObj} />
          <div className='ml-[19rem] mt-16 mb-10 w-full mx-4 flex flex-col px-4'>
            <div id="header" className='flex justify-between py-4 my-8'>
              <h1 className='text-4xl font-semibold leading-[3rem] text-[#1A1A1A]'>My Problems</h1>
              <button className='w-60 h-14 rounded-lg p-4 bg-[#1072B9] text-white font-bold flex text-lg items-center align-center justify-around' onClick={() => { setModalActive(!modalActive) }}>
                <span>+</span>
                <span>Add a new Problem</span>
              </button>
            </div>
            <div className='min-h-screen'>
              {data.length !== 0 && data.map((item, index) => {
                return <Card key={index} {...item} />
              })}
            </div>
            <div className='flex flex-row gap-3 mt-4 text-xl justify-between w-[6rem]'>
              <div>
                <button type='button' disabled={queryObj.page === 1} onClick={() => setQueryObj({ ...queryObj, page: queryObj.page - 1 })} className="pt-[0.30rem] disabled:opacity-20">
                  <MdOutlineArrowBackIosNew />
                </button>
              </div>
              <div>
                {queryObj.page}
              </div>
              <div>
                <button type='button' disabled={queryObj.page === totalPages} onClick={() => setQueryObj({ ...queryObj, page: queryObj.page + 1 })} className="pt-[0.30rem] disabled:opacity-20">
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