import { React, useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from "next/link"
const DealsNavbar = (props) => {
    const [active, setActive] = useState(null)
    useEffect(() => {
        setActive(props.active)
    }, [props.active])
    return (
        <div className="px-4 py-4 w-full">
            <div className="flex py-4 px-4 flex-row align-center justify-between bg-white">
                <div className="options items-center justify-center flex flex-row cursor-pointer w-full md:justify-start">
                    <Link href={'/order/deals'}><div className={active == 'deals' ? "box text-white w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1>Deals</h1>
                        </div>
                    </div></Link>
                    <Link href={'/order/pizzas'}><div className={active == 'pizzas' ? "box text-white  w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1>Pizzas</h1>
                        </div>
                    </div></Link>
                    <div className={active == 'drinks' ? "box  w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1 className='text-black'>Drinks</h1>
                        </div>
                    </div>
                    <div className={active == 'desserts' ? "box  w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1 className='text-black'>Desserts</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="cart px-4 flex flex-col align-center justify-center cursor-pointer">
                    <AiOutlineShoppingCart size={30}></AiOutlineShoppingCart>
                </div> */}
            </div>
        </div>
    )
}

export default DealsNavbar