import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import FreeBook from './Freebook'
import axios from "axios"
import image from "../../public/banner.jpg"

function Course() {

    const [data, setData] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log("Error", error);
            }
        }
        getBook();
    }, [])
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl"> We are delighted to have you <span className='text-pink-500'>Here!!</span></h1>
                    <p className='mt-4'>Cupidatat eu excepteur consectetur nostrud sit in dolore aute. Occaecat pariatur non mollit ex consequat duis. Non tempor adipisicing ullamco non voluptate excepteur ullamco commodo sit nulla anim. Tempor deserunt mollit nisi eiusmod mollit. Laboris in fugiat enim sunt exercitation excepteur officia reprehenderit enim est consectetur non exercitation.</p>
                </div>
                <div className='grid grid-cols-4'>
                    {
                        data.map((data) => (
                            <Cards key={data.id} item={data} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course