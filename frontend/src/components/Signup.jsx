import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
   <>
   <div className='flex item-center justify-center '>
   <div className="w-[600px] mt-20 p-5" >
  <div className="modal-box ">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <br></br>
    <div className='mt-4 space-y-2'>
        <span>
            Name
        </span><br/>
        <input text="text"
        placeholder='enter your name'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}
        />
        <br></br>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    
    <div className='mt-4 space-y-2'>
        <span>
            Email
        </span><br/>
        <input text="email"
        placeholder='enter your email'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br></br>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>
            Password
        </span><br/>
        <input 
       
         text="password"
        placeholder='enter your password'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}
        />
        <br></br>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <br></br>
    <div className='flex justify-around'>
    <button className="btn btn-secondary">Signup</button>
    <p>Have account? 
    <button className='underline text-blue-500 cursor-pointer'
    onClick={()=>document.getElementById("my_modal_3").showModal()}>
    Login</button></p>
    <Login/>
    </div>
    </form>
  </div>
</div>
   </div>
   </>
  )
}

export default Signup
