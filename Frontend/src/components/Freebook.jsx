import "slick-carousel/slick/slick.css";
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import Cards from "./Cards";
function FreeBook() {

    const [data, setData] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                const data = res.data.filter((data) => data.category === "Free")
                setData(data);
                console.log(data);
            } catch (error) {
                console.log("Error", error);
            }
        }
        getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-5'>
                <div>
                    <h1 className="font-semibold "> Free Courses Offered</h1>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <Slider className="mt-4"{...settings}>
                        {data.map((item) => (
                            <>
                                <Cards item={item} key={item.id} />
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook
