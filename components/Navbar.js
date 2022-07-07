import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi"
const Navbar = () => {

    const Menuref = useRef(null);
    const Hiddenref = useRef(null);
    const NavbarRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);

    const handleOnClick = () => {
        Hiddenref.current.classList.toggle('hidden')
    }


    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }


    return (
        <div ref={NavbarRef} className={scrolled ? "navbar text-gray-800 z-50 fixed w-full bg-gray-100 py-4 shadow-lg shadow-black" : "navbar text-black sticky w-full bg-gray-100 py-4"}>
            <div className="contents-wrapper px-2  w-full h-full md:flex-row flex items-center justify-around">
                <div className="brand">
                    {/* <Image src="/skyking.png" height={60} width={100} alt=""></Image> */}
                    <Image src={'/images/slice.png'} height={30} width={30}></Image>
                </div>
                <div className="MenuWrapper hidden md:flex-row md:flex items-center justify-between">
                    <div className="menu hidden  md:block">
                        <div className="items  flex flex-col md:flex-row">
                            <Link href="" className='px-4  ease-in duration-100 hover:text-red-300' activeClass="home" to='home' spy={true} smooth={true} duration={500} offset={-70}><span>Home</span></Link>
                            <Link href="" className='px-4    ease-in duration-100 hover:text-red-300' activeClass="services" to='services' spy={true} smooth={true} duration={500} offset={-70}><span>Our Story</span></Link>
                            <Link href="" className='px-4    ease-in duration-100 hover:text-red-300' activeClass="pickup" to='testimonals' spy={true} smooth={true} duration={500} offset={-70}><span>Our Stores</span></Link>
                            <Link href="" className='px-4    ease-in duration-100 hover:text-red-300' activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70}><span>Franchise Enquiry</span></Link>
                            <Link href="" className='px-4    ease-in duration-100 hover:text-red-300' activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70}><span>Order Online</span></Link>
                            <Link href="" className='px-4    ease-in duration-100 hover:text-red-300' activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70}><span>Contact Us</span></Link>
                        </div>
                    </div>
                </div>

                <HiOutlineMenuAlt3 style={{ height: '30px', width: "40px", cursor: 'pointer' }} className={scrolled ? 'white md:hidden' : 'black md:hidden'} ref={Menuref} onClick={handleOnClick} />

            </div>

            <div className="mobileMenu py-2 fixed w-full hidden md:hidden" ref={Hiddenref}>
                <div className="mobile-MenuWrapper bg-gray-800">
                    <div className="items flex flex-col items-center justify-center">
                        <Link href="" className='p-2 text-lg font-bold ease-in duration-100 hover:text-red-300' activeClass="home" to='home' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Home</span></Link>
                        <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' activeClass="services" to='services' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Services</span></Link>
                        <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' activeClass="pickup" to='testimonals' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Testimonals</span></Link>
                        <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Contact Us</span></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar