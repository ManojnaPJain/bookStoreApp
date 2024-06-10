import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col  space-40 my-3">
<div className="mt-28 items-center justify-center text-center">
  <h1 className="text-2xl font-semibold md:text-4xl">We are happy to have you <span className="text-pink-500">here! :)</span></h1>
  <p><br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem accusamus atque maxime omnis error assumenda placeat consequatur magni laudantium culpa, vel ad. Officiis libero inventore sunt eligendi amet qui nulla?</p>
  <br/>
  <Link to="/">
  <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-30">Back</button></Link>
  </div>
  <br></br>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
  </div>
    </div>
    </>
  )
}

export default Course
