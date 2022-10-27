import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Module from './Module/Module';
import { FaDownload } from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const navigate = useNavigate();
    const { course, modules } = JSON.parse(courseDetails);
    const options = {
        orientation: 'portrait'
    };

    return (
        <div className='pt-14 bg-slate-400' ref={ref}>
            <div className="mx-auto max-w-5xl px-4 py-8">
                <section className="rounded-lg bg-gray-100 p-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                            alt={course.name}
                            src={course.img}
                            className="aspect-square w-full rounded-lg object-cover"
                        />

                        <blockquote className="sm:col-span-2">
                            <p className="text-xl font-medium sm:text-2xl">
                                {course.description}
                            </p>

                            <cite className="mt-8 inline-flex w-full items-center not-italic">
                                <div className='flex justify-between w-full items-center'>
                                    <p className="text-sm uppercase text-gray-500 sm:ml-3">
                                        <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                        <strong>{course.name}</strong>
                                    </p>
                                    <Pdf targetRef={ref} options={options} scale={0.6} filename="Knowledge-dot.pdf">
                                        {({ toPdf }) => <button className='btn btn-warning' onClick={toPdf}><FaDownload /> Download PDF</button>}
                                    </Pdf>
                                </div>
                            </cite>
                        </blockquote>
                    </div>
                </section>
            </div>
            <div className="mx-5">
                <div className="space-y-4 py-5 mx-auto" style={{ maxWidth: '900px' }}>
                    <h1 className='text-3xl font-bold bg-warning p-2'>See Course Modules</h1>
                    {
                        modules.map((module) => <Module key={module.id} module={module}></Module>)
                    }

                    <div className='flex flex-col md:flex-row items-center md:justify-between'>
                        <div></div>
                        <button type="button" className="text-gray-900 text-2xl font-extrabold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate(`/checkout/${course.id}`)}>Purchase Premium</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;