import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course/Course';
import Sidebar from './Sidebar/Sidebar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <>
            <section className='pt-9 bg-slate-400'>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
                        <Sidebar></Sidebar>
                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    <span className="hidden sm:inline"> Showing </span>
                                    6 of 6 Courses
                                </p>

                                <div className="ml-4">
                                    <label htmlFor="SortBy" className="sr-only"> Sort </label>

                                    <select
                                        id="SortBy"
                                        name="sort_by"
                                        className="rounded border-gray-100 text-sm"
                                    >
                                        <option readOnly>Sort</option>
                                        <option value="title-asc">Title, A-Z</option>
                                        <option value="title-desc">Title, Z-A</option>
                                    </select>
                                </div>
                            </div>

                            <div
                                className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                {
                                    courses?.map(course => <Course key={course.id} course={course}></Course>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                window.addEventListener('resize', () => {
                    const desktopScreen = window.innerWidth < 768

                    document.querySelector('details').open = !desktopScreen
                })
            }

        </>
    );
};

export default Courses;