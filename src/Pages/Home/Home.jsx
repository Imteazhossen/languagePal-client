import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import { Link } from 'react-router';
import Numbers from './Numbers';
import { IoIosArrowDropright } from 'react-icons/io';
import bangladesh from '../../assets/countries/bangladesh.png'
import pakistan from '../../assets/countries/pakistan.jpg'
import china from '../../assets/countries/CHAINA.png'
import spain from '../../assets/countries/spain.jpg'
import italy from '../../assets/countries/italy.png'
import palestine from '../../assets/countries/palastine.jpg'
import usa from '../../assets/countries/USA.png'
import german from '../../assets/countries/german.png'
import japan from '../../assets/countries/japan.png'
import learning1 from '../../assets/extraSection/learning1.jpg'
import learning2 from '../../assets/extraSection/learning2.jpg'


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div>
                <div
                    className="hero min-h-[80vh] opacity-85 "
                    style={{
                        backgroundImage:
                            `url(${bannerImg})`,
                    }}
                >
                    <div className="hero-overlay "></div>

                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className="mb-5 text-5xl md:text-7xl text-sky-500  font-bold">LanguagePal</h1>
                            <p className="mb-5 text-lg md:text-xl">
                                Learning new languages opens the door to understanding different cultures and broadens your communication skills. It also boosts cognitive abilities, memory, and confidence in real-world interactions.

                            </p>
                            <Link to='/register'> <button className="btn bg-sky-500 font-bold text-white mx-2">Get Started</button></Link>

                            <button className="btn bg-emerald-500 font-bold text-white mx-2">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* stats section */}
            <div>
                <Numbers></Numbers>
            </div>
            {/* category section */}
            <h1 className="text-5xl font-bold  text-sky-500 text-center my-20">Explore Language Categories</h1>
            <div className='grid grid-cols-1 md:px-20  my-20 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div className='bg-white  rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={bangladesh} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Bangladeshi Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={pakistan} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Pakistani Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={german} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>German Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={palestine} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Palestine Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={china} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Chinese Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={japan} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Japanese Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={spain} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Spanish Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={usa} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>English Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>
                <div className='bg-white rounded-lg flex hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                    <div className="">
                        <img className='w-16 h-16  border rounded-full' src={italy} alt="" />
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold '>Italian Tutor</h1>
                        <p className='text-gray-600'>Trusted and Reliable</p>
                    </div>
                    <div className='animate-bounce pt-5'>
                        <IoIosArrowDropright size={60} />
                    </div>
                </div>

            </div>
            {/* extra section 1 */}


            <div className="max-w-screen-xl my-20 bg-emerald-50 mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-12">

                <div className="w-full lg:w-1/2">
                    <img
                        src={learning2}
                        className="mx-auto h-auto rounded-lg w-full max-w-[450px] object-cover"
                    />
                </div>


                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-sky-500">
                        Learn Anytime
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Recorded language classes offer flexible and convenient learning, allowing students to study at their own pace, anytime and anywhere. These classes are especially helpful for reviewing difficult topics, improving pronunciation, and building consistent practice habits without time pressure.

                    </p>
                    <button className="btn bg-sky-500 text-white w-max">Explore</button>
                </div>
            </div>


            {/* extra section 2 */}


            <div className="max-w-screen-xl my-20 bg-sky-50 mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-12">
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-emerald-500">
                        Group Package
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                       Purchasing group packages for language learning can be a cost-effective way for friends, families, or teams to learn together. These packages often include discounts, shared access to premium resources, and opportunities for collaborative learning, making the experience more engaging and supportive.


                    </p>
                    <button className="btn bg-emerald-500 text-white w-max">Purchase</button>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={learning1}
                        className="mx-auto h-auto rounded-lg w-full max-w-[450px] object-cover"
                    />
                </div>



            </div>


        </div>
    );
};

export default Home;