import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, description, img } = course;
    const navigate = useNavigate();
    return (
        <Link to={`/course/${id}`} className="relative block bg-white">

            <img
                alt="Toy"
                src={img}
                className="h-56 w-full object-contain lg:h-72"
            />

            <div className="p-6">

                <h3 className="mt-4 text-lg font-bold">{name}</h3>

                <p className="mt-2 text-sm font-medium text-gray-600">{description.slice(0, 60)}...</p>

                <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4" onClick={() => navigate('/')}
                >
                    <span className="text-sm font-medium">Start Learning</span>
                </button>
            </div>
        </Link>
    );
};

export default Course;