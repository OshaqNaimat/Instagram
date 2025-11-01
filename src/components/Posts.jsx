import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";

const Posts = () => {
  return (
    <>
    <div className="container rounded-md shadow-lg w-[80%] mt-10 ">
      <div className="flex justify-between p-2 items-center">
        <div className="flex p-2 gap-2 items-center">
          <img className='w-[35px] h-[35px] cursor-pointer' 
          src="https://cdn-icons-png.freepik.com/256/10796/10796945.png?semt=ais_white_label" alt="" />
          <div className="">
            <div className="flex gap-2 items-center justify-center">
               <h4 className='font-semibold  text-[14px] cursor-pointer'>Username</h4>
             <GoDotFill size={6}/>
             <p className='text-gray-500'>Time</p>
            </div>

           <p className='text-sm'>Audio</p>  
          </div>
        </div>
        <BsThreeDots size={25} className='cursor-pointer'/>
      </div>
      <img className='w-full object-fit-cover'
       src="https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="" />
    </div>
    
    </>
  )
}

export default Posts