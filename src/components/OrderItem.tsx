import React from 'react'
import image from "../assets/made-to-stick-1024x688 1.png";

function OrderItem() {
  return (
    <div className='flex flex-col lg:flex-row md:flex-row my-5'>
    <img src={image} alt="" className='w-24 lg:w-2/12 md:w-2/12'/>
    <div className='flex   flex-col gap-3 items-start justify-center'>
        <h1 className='text-xl'>
        Title of the book
        </h1>

        <p>
            price : 90 $
        </p>
    <select name="" id="">
        <option value="">Accepted</option>
        <option value="">Rejected</option>
    </select>
</div>
</div>
  )
}

export default OrderItem