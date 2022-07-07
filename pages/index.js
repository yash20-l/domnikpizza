import Head from 'next/head'
import Slider from '../components/Slider'
import Deals from '../components/Deals'
import React, { useEffect } from "react";

export default function Home() {

  return (
    <>
   <Head>
    <title>Domnik Pizza | Fresh Pizza Basses</title>
   </Head>

   <Slider></Slider>
   <Deals></Deals>

   </>

  )

}
