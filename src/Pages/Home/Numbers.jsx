import React from 'react';
import CountUp from 'react-countup';

const Numbers = () => {
    return (
        <div className='my-10'>
            <div>
            <h1 className= 'text-2xl md:text-5xl  text-sky-500 font-bold text-center '>We Provide Best Teachers For You</h1>
            <p className='mt-5 text-center text-gray-600 font-semibold'>Our platform connects you with verified, experienced teachers across various languages — all in the palm of your hand . </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 md:px-25 py-10'>
              <div className="rounded-2xl h-[140px] flex flex-col justify-center items-center  bg-emerald-100 p-5" >
                
                <h1 className='text-left text-5xl  md:text-6xl font-bold'><CountUp end={199}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Experienced tutors</p>
              </div>
              <div className="rounded-2xl h-[140px]  flex flex-col justify-center items-center bg-sky-100 p-5" >
                
                <h1 className='text-left  text-5xl md:text-6xl font-bold'><CountUp end={467}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>5-star tutor reviews</p>
              </div>
              <div className="rounded-2xl h-[140px] flex flex-col justify-center items-center bg-emerald-100 p-5" >
             
                <h1 className='text-left text-5xl md:text-6xl font-bold'><CountUp end={1900}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Subjects taught</p>
              </div>
              <div className="rounded-2xl h-[140px] flex flex-col justify-center items-center  bg-sky-100 p-5" >
               
                <h1 className='text-left text-5xl md:text-6xl font-bold'><CountUp end={300}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Tutor nationalities</p>
              </div>
            </div>
        </div>
    );
};

export default Numbers;