import React from 'react';
import { Navbar } from '../../components';

export const UserProfile = () => {

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
  return (
    <section className='w-full'>
      <Navbar />
      <div className='flex mx-auto flex-wrap h-screen'>
        <div className='mt-16 mb-10 w-full mx-4 flex flex-col px-4'>

          <div>{email}</div>
          <div>{firstName}</div>
          <div>{lastName}</div>
          <div>{github}</div>
          <div>{leetcode}</div>
          <div>{hackerrank}</div>
        </div>
      </div>
    </section>
  )
}