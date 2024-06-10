import React from 'react'

function Contact() {
  return (
    <>
    <div className='flex item-center justify-center '>
   <div className="w-[600px] mt-20 p-5" >
  <div className="modal-box ">
   
    <h3 className="font-bold text-lg"><b>Contact Us</b></h3>
    <br></br>
    <div className='mt-4 space-y-2'>
        <span>
            Name
        </span><br/>
        <input text="name"
        placeholder='enter your name'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        />
    </div>
    
    <div className='mt-4 space-y-2'>
        <span>
            Email
        </span><br/>
        <input text="email"
        placeholder='enter your email'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        />
    </div>
    <div className='mt-4 space-y-2'>
        <span>
           Message
        </span><br/>
        <textarea className='textarea w-80 px-3 py-1 textarea-bordered h-20 rounded-md outline-none' placeholder='Type Message'></textarea>
    </div>
    <br></br>
    <div className='flex justify-left'>
    <button className="flex item-left justify-left btn bg-blue-500 text-white">Submit</button>
    
    </div>
  </div>
</div>
   </div>
        </>
  )
}

export default Contact
