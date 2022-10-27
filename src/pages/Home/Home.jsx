import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import HeroSection from './HeroSection/HeroSection';
const Home = () => {
    const courses = useLoaderData();
    return (
        <>
            <HeroSection></HeroSection>
            <div className='p-6'>
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Choose Your Favourite <span className='text-warning'>Programming</span> Language</h2>

                    <p className="my-4 text-slate-700">
                        Pick a Programming Language that you want to learn & continue reading the tutorials. Our Advance guideline will make you an expert on the programming Language.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;