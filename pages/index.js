import Head from 'next/head'
import Slider from '../components/Slider'
import Deals from '../components/Deals'
import IndexNavbar from '../components/IndexNavbar'
import React, { useEffect } from "react";

export default function Home() {

  return (
    <>
   <Head>
    <title>Domnik Pizza | Fresh Pizza Basses</title>
   </Head>
   <IndexNavbar></IndexNavbar>
   <Slider></Slider>
   <Deals></Deals>
   {/* <Menu></Menu> */}
   </>

  )

}
