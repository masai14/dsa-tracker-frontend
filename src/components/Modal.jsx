import React, { useEffect, useState } from 'react';
import { Loader } from "./";
import { useDispatch, useSelector } from 'react-redux';
import { postQuestion } from '../redux/actions';

export const Modal = () => {
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
    useEffect(() => {
        // Stopping the scrolling function when the modal was opened 
        window.onscroll = function () {
            window.scrollTo(0, 0);
        };
    }, [window.onscroll])
    /*
    
    title: { type: String, required: true, unique:true},
        topic: { type: String, require: true },
        description: { type: String },
        link: { type: String, required: true },
        platform: { type: String },
        difficulty: { type: String, required: true },
        intuition: { type: String },
        code: { type: String },
        solved: { type: Boolean, default: false },
        isFav: { type: Boolean, default: false },
        isPublic: { type: Boolean, default: false }
    
    */

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            // console.log(e.target.name, ":", e.target.checked);
            setData({ ...data, [e.target.name]: e.target.checked });
        } else {
            // console.log(e.target.name, ":", e.target.value);
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const handlePostQuestion = () => {
        // console.log(user, data);
        dispatch(postQuestion(user, data));
    }

    return (
        <div className='py-16 absolute bg-[rgba(0,0,0,0.5)] w-full z-[9] h-full mt-12'>
            <div id="modal-container" className='container m-auto bg-white rounded-lg'>
                <form className="space-y-4 p-8" onSubmit={(e) => { e.preventDefault();  handlePostQuestion() }} >
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
                        </div>
                        <div className='grow'>
                            <label htmlFor="platform" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Platform <span className='text-red-800'>*</span></label>
                            <input value={data.platform} onChange={(e) => { handleChange(e) }} type="text" name="platform" id="platform" placeholder="Leetcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-12" required />
                        </div>
                        <div className='grow'>
                            <label htmlFor="difficulty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Difficulty <span className='text-red-800'>*</span></label>
                            <select onChange={(e) => { handleChange(e) }} id="difficulty" name="difficulty" defaultValue="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[3rem]">
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
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="solved" id="" className='mr-2 w-4 h-4' />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Solved <span className='text-red-800'>*</span></span>
                        </div>
                        <div>
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="isFav" id="" className='mr-2 w-4 h-4' />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Add a Bookmark <span className='text-red-800'>*</span></span>
                        </div>
                        <div>
                            <input onChange={(e) => { handleChange(e) }} type="checkbox" name="isPublic" id="" className='mr-2 w-4 h-4' />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Make Public <span className='text-red-800'>*</span></span>
                        </div>
                    </div>

                    <button type="submit" className='p-2  px-8 rounded-lg text-white font-semibold text-lg bg-[#1072B9]'>
                        Add
                        {/* <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg> */}
                        {/* <Loader /> */}
                    </button>

                </form>
            </div>
        </div>

        // <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        //     <div className="relative p-4 w-full max-w-md h-full md:h-auto">

        //         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        //             <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
        //                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //                 <span className="sr-only">Close modal</span>
        //             </button>
        //             <div className="py-6 px-6 lg:px-8">
        //                 <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        //                 <form className="space-y-6" action="#">
        //                     <div>
        //                         <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        //                         <input value={} onChange={(e)=>{handleChange(e)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        //                     </div>
        //                     <div>
        //                         <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        //                         <input value={} onChange={(e)=>{handleChange(e)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="flex justify-between">
        //                         <div className="flex items-start">
        //                             <div className="flex items-center h-5">
        //                                 <input value={} onChange={(e)=>{handleChange(e)}} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        //                             </div>
        //                             <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        //                         </div>
        //                         <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        //                     </div>
        //                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        //                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        //                         Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
