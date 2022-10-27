import React from 'react';

const Module = ({ module }) => {
    const { title, details } = module;
    return (
        <details className="group">
            <summary
                className="flex cursor-pointer items-center justify-between rounded-lg bg-orange-400 p-4"
            >
                <h2 className="font-medium text-gray-900">
                    {title}
                </h2>

                <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </summary>

            <p className="p-4 leading-relaxed text-gray-700 bg-white">
                {details}
            </p>
        </details>
    );
};

export default Module;