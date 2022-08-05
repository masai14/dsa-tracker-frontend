import React, { useEffect, useState } from 'react';
import { Loader } from "./";
import { useDispatch, useSelector } from 'react-redux';
import { postQuestion, SET_ERROR, getQuestion, updateQuestion } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import { BsPlusLg, BsCheck2 } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';

export const Modal = ({ setModalActive, questionId, question }) => {
    const [isLoading, setIsLoading] = useState(false);
    const error = useSelector(store => store.error);
    const [data, setData] = useState({
        title: "",
        topic: "",
        description: "",
        link: "",
        platform: "",
        difficulty: "1",
        intuition: "",
        code: "",
        solved: false,
        isFav: false,
        isPublic: false,
    });
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     // Stopping the scrolling function when the modal was opened 
    //     // window.onscroll = function () {
    //     //     window.scrollTo(0, 0);
    //     // };
    // }, [window.onscroll])

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            // console.log(e.target.name, ":", e.target.checked);
            setData({ ...data, [e.target.name]: e.target.checked });
        } else if (e.target.name === "platform") {
            // console.log(e.target.name, ":", e.target.value);
            setData({ ...data, [e.target.name]: e.target.value.toLowerCase().trim() });
        } else {
            // console.log(e.target.name, ":", e.target.value);
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const handlePostQuestion = async () => {
        setIsLoading(true);
        // console.log(46, data);
        // if (!data["platform"]) {
        //     try {
        //         let domain = (new URL(data["link"]));
        //         // console.log(domain);
        //         let hostname = domain.hostname.split(".");
        //         setData({ ...data, "platform": hostname.length === 3 ? hostname[1].toLowerCase() : hostname[0].toLowerCase() });
        //     } catch (err) {
        //         console.log(err.message);
        //     }
        // }
        dispatch(postQuestion(user, data));
        setTimeout(() => {
            setIsLoading(false);
            setModalActive(false);
        }, 3000)
    }

    const checkData = () => {
        for (let key in data) {
            if (data[key].trim().length === 0) {
                setData({ ...data, [key]: data[key].trim() });
                return false;
            }
        }
        // for (let key in data) {
        //     setData({ ...data, [key]: data[key].trim() });
        // }
        return true;
    }

    const handleUpdateQuestion = async () => {
        setIsLoading(true);
        // console.log(46, data);
        // if (!data["platform"]) {
        //     try {
        //         let domain = (new URL(data["link"]));
        //         // console.log(domain);
        //         let hostname = domain.hostname.split(".");
        //         setData({ ...data, "platform": hostname.length === 3 ? hostname[1].toLowerCase() : hostname[0].toLowerCase() });
        //     } catch (err) {
        //         console.log(err.message);
        //     }
        // }
        dispatch(updateQuestion(user, questionId, data));
        setTimeout(() => {
            setIsLoading(false);
            setModalActive(false);
        }, 3000);
    }

    useEffect(() => {
        if (questionId) {
            setData(question);
        }
    }, [])


    const getDomain = () => {
        console.log(data.link);
        // if (data.link) {
        //     console.log(data.link);
        //     try {
        //         let domain = (new URL(data["link"]));
        //         // console.log(domain);
        //         let hostname = domain.hostname.split(".");
        //         setData({ ...data, "platform": hostname.length === 3 ? hostname[1].toLowerCase() : hostname[0].toLowerCase() });
        //     } catch (err) {
        //         console.log(err.message);
        //     }
        // }
    }

    return (<>
        <div className='py-16 absolute bg-[rgba(0,0,0,0.5)] w-full z-[9] h-full mt-12'>
            <div id="modal-container" className='container m-auto bg-white rounded-lg'>
                <div className='flex text-lg flex-row-reverse mr-4 pt-4' onClick={() => { setModalActive(false) }}>
                    <BsPlusLg className='rotate-45' />
                </div>
                <form className="space-y-4 p-8" onSubmit={questionId ? (e) => { e.preventDefault(); handleUpdateQuestion() } : (e) => { e.preventDefault(); handlePostQuestion() }} >
                    <div className='flex gap-6'>
                        <div className='grow-[2]'>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title <span className='text-red-800'>*</span></label>
                            <input value={data.title} onChange={(e) => { handleChange(e) }} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Search in sorted and rotated array" required />
                        </div>
                        <div className='grow'>
                            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Topic <span className='text-red-800'>*</span></label>
                            <input value={data.topic} onChange={(e) => { handleChange(e) }} type="text" name="topic" id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Array,Binary Search,..." required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description <span className='text-red-800'>*</span></label>
                        <textarea value={data.description} onChange={(e) => { handleChange(e) }} type="text" name="description" id="description" placeholder={`Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [1, 4, 6, 8, 11, 13, 15] might become [8, 11, 13, 15, 1, 4, 6]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array. Your algorithm’s runtime complexity must be in the order of O(log n).`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-[8rem]" required />
                    </div>
                    <div className='flex flex-row gap-6'>
                        <div className='grow'>
                            <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link <span className='text-red-800'>*</span></label>
                            <input value={data.link} onChange={(e) => { handleChange(e) }} type="text" name="link" id="link" placeholder="https://leetcode.com/problems/search-in-rotated-sorted-array/" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-12" required />
                            {/*  onPaste={() => { getDomain() }}  */}
                        </div>
                        <div className='grow'>
                            <label htmlFor="platform" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Platform <span className='text-red-800'>*</span></label>
                            <input value={data.platform} onChange={(e) => { handleChange(e) }} type="text" name="platform" id="platform" placeholder="Leetcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-12" required />
                            {/* onFocus={() => { getDomain() }}  */}
                        </div>
                        <div className='grow'>
                            <label htmlFor="difficulty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Difficulty <span className='text-red-800'>*</span></label>
                            <select onChange={(e) => { handleChange(e) }} id="difficulty" name="difficulty" defaultValue={data.difficulty || "1"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[3rem]">
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <div className='grow'>
                            <label htmlFor="intuition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intuition <span className='text-red-800'>*</span></label>
                            <textarea value={data.intuition} onChange={(e) => { handleChange(e) }} type="text" name="intuition" id="intuition" placeholder="You have given an array which is sorted and rotated, and a target value, you need to return return the index of the target." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-[12rem]" required />
                        </div>
                        <div className='grow'>
                            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code <span className='text-red-800'>*</span></label>
                            <textarea value={data.code} onChange={(e) => { handleChange(e) }} type="text" name="code" id="code" placeholder="You have given an array which is sorted and rotated, and a target value, you need to return return the index of the target." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-[12rem]" required />
                        </div>
                    </div>

                    <div className='flex flex-row gap-10'>
                        <div>
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="solved" id="" className='mr-2 w-4 h-4' checked={data.solved || false} />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Solved <span className='text-red-800'>*</span></span>
                        </div>
                        <div>
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="isFav" id="" className='mr-2 w-4 h-4' checked={data.isFav || false} />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Add a Bookmark <span className='text-red-800'>*</span></span>
                        </div>
                        <div>
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="isPublic" id="" className='mr-2 w-4 h-4' checked={data.isPublic || false} />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Make Public <span className='text-red-800'>*</span></span>
                        </div>
                    </div>

                    <button type="submit" id="submitButton" className='p-2 px-8 rounded-lg text-white font-semibold text-lg bg-[#1072B9]' disabled={isLoading}>
                        {isLoading ?
                            <>
                                <Loader />
                                <span className='ml-3'>Adding</span>
                            </> :
                            // isSuccess ?
                            //     <div className='flex gap-2'>
                            //         <BsPlusLg className='text-lg mt-1' />
                            //         <span>Add</span>
                            //     </div>
                            //     :
                            <>{questionId ?
                                <div className='flex gap-2 -ml-2'>
                                    <BsCheck2 className='text-2xl mt-[2px]' />
                                    <span>Done</span>
                                </div>
                                :
                                <div className='flex gap-2'>
                                    <BsPlusLg className='text-lg mt-1' />
                                    <span>Add</span>
                                </div>
                            }</>
                        }
                    </button>

                </form>
            </div>
        </div>
        {error.value && <ToastContainer />}
    </>
    )
}
