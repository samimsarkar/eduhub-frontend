import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img, description } = course;
    return (
        <article className="flex flex-col md:flex-row bg-white transition hover:shadow-xl shadow-lg border">

            <div className='sm:basis-56'>
                <img
                    alt={name}
                    src={img}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <Link to="/">
                        <h3 className="font-bold uppercase text-gray-900">
                            {name}
                        </h3>
                    </Link>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                        to={`course/${id}`}
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                    >
                        Start Learning
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Course;