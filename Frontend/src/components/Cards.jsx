import React from 'react'
import img from "../../public/book.jpg"

function Cards({item}) {
  return (
    <>
      <div className='mt-4 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border">
          <figure>
            <img
              src={img}
              alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="px-3 py-4 badge badge-outline">${item.price}</div>
              <div className=" px-3 py-4 badge badge-outline cursor-pointer text-white bg-pink-500">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards