"use client"
import React from 'react'

function GetCouponCode() {
  return (
    <div className='flex border border-gray-400 rounded-md'>
        <input type="text"placeholder="Here's my email" className='px-4 text-black text-small-medium py-1 rounded-s-md' />
        <div className='text-center flex justify-center w-full items-center cursor-pointer text-small-bold'>
            <h1>submit</h1>
        </div>
    </div>
  )
}

export default GetCouponCode