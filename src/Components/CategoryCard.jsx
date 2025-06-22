import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import bangladesh from '../assets/countries/bangladesh.png'

const CategoryCard = () => {
    return (
        <div className='bg-base-100 rounded-lg flex justify-between gap-2 p-5 shadow-lg'>
           <div className="">
            <img src={bangladesh} alt="" />

           </div>
           <div className="">
            <h1 className='text-2xl font-bold '>Spanish Tutor</h1>
            <p className='text-gray-600'>Trusted and Reliable</p>
           </div>
           <div className='animate-bounce'>
            <IoIosArrowDropright  size={60}/>
           </div>
        </div>
    );
};

export default CategoryCard;