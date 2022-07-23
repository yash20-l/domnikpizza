import { React, useState, useEffect } from 'react'
import { MdShoppingBasket } from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'

const DealsNavbar = (props) => {
    const router = useRouter();
    const [active, setActive] = useState(null)
    useEffect(() => {
        setActive(props.active)
    }, [props.active])
    return (
        <div className="px-4 py-4 w-full">
            <div className="basketNavbar py-3  px-4 w-full bg-white mb-2 lg:hidden">
                <div className="flex flex-row items-center justify-between">

                    <div className="asap flex flex-row">
                        <div className="img px-2 flex flex-col items-center justify-center">
                            <AiOutlineClockCircle size={20}></AiOutlineClockCircle>
                        </div>
                        <div className="text">
                            <span>ASAP</span>
                        </div>
                    </div>

                    <div className="logo">
                        <Image src="/images/logo.png" width={30} height={30}></Image>
                    </div>
                    <div className="basket">
                        <MdShoppingBasket size={30} color={'red'}></MdShoppingBasket>
                    </div>

                </div>
            </div>
            <div className="flex py-4 px-4 flex-row align-center justify-between bg-white">
                <div className="options items-center justify-center flex flex-row cursor-pointer w-full md:justify-start">
                    <div onClick= {() => {router.push('/order/deals', null, {shallow: true})}}><div className={active == 'deals' ? "box text-white w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1>Deals</h1>
                        </div>
                    </div></div>
                    <div onClick={() => {router.push('/order/pizzas', null, {shallow: true})}}><div className={active == 'pizzas' ? "box text-white  w-24 bg-red-500 flex flex-col align-center justify-center py-2 border-r-2 border-gray-200" : "box  w-24 bg-white flex flex-col align-center justify-center py-2 border-r-2 border-gray-200"}>
                        <div className="heading text-center">
                            <h1>Pizzas</h1>
                        </div>
                    </div></div>
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