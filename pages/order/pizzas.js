import { React, useEffect, useState } from 'react'
import DealsNavbar from '../../components/DealsNavbar'
import Basket from '../../components/Basket'
import Image from "next/image"

const pizzas = () => {

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPizza = () => {
    fetch('http://192.168.1.6:3000/api/fetchpizza').then((res) => {
      res.json().then((actualdata) => {
        setPizza(actualdata)
        setLoading(false)
      })
    }).catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchPizza()
  }, [])

  return (
    <div className={loading ? 'bg-white' : 'bg-gray-200'}>
      <div className="navbarWrapper flex flex-row">
        <div className="part1 w-full md:w-3/4">
          <DealsNavbar active="pizzas"></DealsNavbar>
          <div className={loading ? "" : "grid-cols-1 w-full pizzaSection px-4 py-4 md:grid-cols-3 gap-4 grid "}>
            {
              loading ? <>
                <div className="imageholder flex flex-col items-center justify-center" style={{ height: '70vh' }}>
                  <Image src={'/images/loading.gif'} height={200} width={200}></Image>
                </div>
              </> :
                pizza.map((data) => {
                  return (
                    <div className="box bg-white mb-4" key={data._id}>
                      <div className="image h-60 md:h-40" style={{ backgroundImage: "url('/pizzas/1.jpg')", backgroundSize: "cover" }}></div>
                      <div className="heading py-4 px-2 flex flex-row justify-start">
                        <div className="title">
                          <h1 className='text-xl select-none font-bold typography-4'>{data.title}</h1>
                        </div>
                        <div className="veg flex flex-col items-center justify-center px-2">
                          <Image src={'/pizzas/veg.png'} height={20} width={20}></Image>
                        </div>
                      </div>
                      <div className="desc px-2">
                        <p className='select-none text-base font-light text-gray-500'>{data.desc}</p>
                      </div>
                      <div className="size flex flex-col py-4 px-2">
                        <div className="para">
                          <p className=' font-light text-gray-800'>Select Your Size And Crust</p>
                        </div>

                        {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label> */}
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected="">Small</option>
                          <option value="US">Medium</option>
                          <option value="CA">Large</option>
                          <option value="FR">Family Pan</option>
                          <option value="DE">Party Pan</option>
                        </select>

                      </div>
                      <div className="buttonc px-2 py-2 w-full">
                        <button className='w-full p-2 flex flex-row items-center justify-center bg-green-600 font-semibold typography-4 rounded text-white'><span className='w-2/3'>Add</span><span className=''>₹ {data.price}</span></button>
                      </div>
                    </div>
                  )
                })}


          </div>
        </div>
        <div className="part2 w-0 hidden md:w-1/4 md: md:relative md:block">
          <Basket></Basket>
        </div>
      </div>
    </div>
  )
}

export default pizzas