import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <br></br>
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
    <div className='flex justify-around' >
    <button className="btn btn-secondary">Login</button>
    <p>Not registered? 
    <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
    
  </div>
  </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
