import React, { useEffect, useState } from 'react'
import banner from '../../public/banner.jpg'
function Banner() {

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex dark:bg-slate-900 dark:text-white">
                <div className="w-1/2 mt-28 ">
                    <div className="space-y-7">
                        <h1 className="font-bold text-5xl">
                            Hello, Aniket Welcomes here to learn <span className="text-pink-500">something new everyday!!!</span>
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 mr-14 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow text-black" placeholder="Email" />
                        </label>
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                </div>

                <div className="w-1/2">
                    <img src={banner} className="h-92 w-92"></img>
                </div>
            </div>
        </>
    )
}

export default Banner