import React from 'react'

const Basket = () => {
  return (
    <div className='hidden md:bg-white md:block md:h-screen md:fixed md:top-0 md:w-1/4'>
        <div className="orders h-1/2">
        <div className="heading h-24 flex flex-col align-center justify-center">
            <h1 className='text-2xl font-bold text-center text-gray-700'>Your Basket</h1>
        </div>
        <div className="para px-4 mt-8">
            <p className='capitalize text-sm'>Your basket looks like empty. add some items in it...</p>
        </div>
        </div>

        <div className="checkout h-1/2 flex flex-col items-center justify-end">
            <div className="content p-2">
            <div className="para w-full py-2">
                <p className='text-center font-bold text-base'>Minimum cart value for checkout is 200</p>
            </div>
            <div className="checkoutButton">
                <button className='p-2 bg-green-600 text-center w-full text-white text-xl rounded'>Checkout</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Basket