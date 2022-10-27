import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <>
            <div className="lg:sticky lg:top-4">
                <details open className="overflow-hidden rounded bg-white border border-gray-200">
                    <summary
                        className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden"
                    >
                        <span className="text-sm font-medium"> Toggle Filters </span>

                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </summary>

                    <form className="border-t border-gray-200 lg:border-t-0">
                        <fieldset>
                            <legend
                                className="block w-full bg-gray-50 px-5 py-3 text-2xl font-medium"
                            >
                                All Courses
                            </legend>

                            {
                                courses?.map(course => <div className="space-y-2 px-5 py-4 text-slate-700" key={course.id}>
                                    <div className="flex items-center">
                                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                                    </div>
                                </div>
                                )
                            }
                        </fieldset>
                    </form>
                </details>
            </div>
        </>
    );
};

export default Sidebar;