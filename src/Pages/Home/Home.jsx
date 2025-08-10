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
import Reviews from '../../Components/Reviews';


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
                            <h1 className="mb-5 text-4xl md:text-5xl text-sky-500  font-bold">LanguagePal</h1>
                            <p className="mb-5 text-lg md:w-2xl md:text-xl">
                                Learning new languages opens the door to understanding different cultures and broadens your communication skills. It also boosts cognitive abilities, memory, and confidence in real-world interactions.

                            </p>
                            <Link to='/register'> <button className="btn hover:scale-110 transition ease-in-out duration-300 bg-sky-500 font-bold text-white mx-2">Get Started</button></Link>

                            {/* <button className="btn bg-emerald-500 font-bold text-white mx-2">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* stats section */}
            <div>
                <Numbers></Numbers>
            </div>
            {/* category section */}
            <h1 className="text-4xl font-bold  text-sky-500 text-center my-20">Explore Language Categories</h1>
            <div className='grid grid-cols-1 md:px-20  my-20 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Link to='/find-tutors/bangla'>
                    <div className='bg-base-100  rounded-lg hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={bangladesh} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Bangladeshi Tutor</h1>
                            <p className='text-gray-600'>Learn bangla with fun and with professional teachers</p>
                        </div>
                        <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/urdu'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={pakistan} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Pakistan Tutor</h1>
                            <p className='text-gray-600'>Learning Urdu opens doors to rich culture, poetry, and history.</p>
                        </div>
                         <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/german'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={german} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>German Tutor</h1>
                            <p className='text-gray-600'>Learning German connects you to culture, innovation, and global opportunities.</p>
                        </div>
                         <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/arabic'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={palestine} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Palestine Tutor</h1>
                            <p className='text-gray-600'>Learning about Palestine deepens understanding of resilience, heritage, and human stories.</p>
                        </div>
                          <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/chinese'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={china} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Chinese Tutor</h1>
                            <p className='text-gray-600'>Learning Chinese unlocks cultural treasures, global connections, and lifelong opportunities.</p>
                        </div>
                          <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/japanese'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={japan} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Japanese Tutor</h1>
                            <p className='text-gray-600'>Learning Japanese opens doors to culture, language, and new friendships. It's about exploring new things.
</p>
                        </div>
                          <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/spanish'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={spain} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Spanish Tutor</h1>
                            <p className='text-gray-600'>Spanish is a widely spoken language full of passion and history.</p>
                        </div>
                         <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/english'>
                    <div className='bg-base-100 rounded-lg  hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={usa} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>English Tutor</h1>
                            <p className='text-gray-600'>English is a global language connecting people through communication and culture.
</p>
                        </div>
                          <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
                <Link to='/find-tutors/italian'>
                    <div className='bg-base-100 rounded-lg hover:bg-emerald-100 justify-around gap-2 p-5 shadow-lg'>
                        <div className="">
                            <img className='w-16 h-16  border rounded-full' src={italy} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-2xl font-bold '>Italian Tutor</h1>
                            <p className='text-gray-600'>Italian is a melodic language known for art, food, and history.</p>
                        </div>
                          <div className='pt-5 -ml-3'>
                            {/* <IoIosArrowDropright size={60} />  */}
                            <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                                See more 
                            </button>

                        </div>
                    </div>
                </Link>
            </div>
            {/* extra section 1 */}


            <div className="md:mx-20 rounded-2xl my-20 bg-emerald-50 mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-12">

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
                    <Link to='/find-tutors'>
                       <button className="btn bg-sky-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                               Explore
                            </button>
                    </Link>
                   
                </div>
            </div>


            {/* extra section 2 */}


            <div className="md:mx-20 rounded-2xl my-20 bg-sky-50 mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-12">
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-emerald-500">
                        Group Package
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Purchasing group packages for language learning can be a cost-effective way for friends, families, or teams to learn together. These packages often include discounts, shared access to premium resources, and opportunities for collaborative learning, making the experience more engaging and supportive.


                    </p>
                    <Link to='/find-tutors'>
                       <button className="btn bg-emerald-500 hover:scale-110 font-bold text-white mx-2 transition ease-in-out duration-300">
                               Explore
                            </button>
                    </Link>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={learning1}
                        className="mx-auto h-auto rounded-lg w-full max-w-[450px] object-cover"
                    />
                </div>
            </div>

            {/* reviews */}
            <div className=''>
                <Reviews></Reviews>
            </div>


        </div>
    );
};

export default Home;