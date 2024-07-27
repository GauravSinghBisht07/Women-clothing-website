import React from 'react'

function Contact() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='form w-96 h-96 border border-gray-300  mt-10 p-2 rounded-xl  '>
            <h1 className='text-3xl text-center font-medium'>Contact<span className='text-pink-500'>US</span></h1>
         <div className="info w-86 gap-5 flex flex-col  py-4 items-center justify-start  ">
            <input type="text" placeholder='Enter name' className='border w-full  text-x py-2 px-4 rounded-full outline-none text-gray-700 ' />
            <input type="email" placeholder='Enter email' className='border w-full  text-x py-2 px-4 rounded-full outline-none text-gray-700 ' />
            <textarea type="text" rows={4} placeholder='Feedback' className='border w-full  text-x py-2 px-4 rounded-2xl outline-none text-gray-700 ' />
           <div className="btn">
            <button className='border bg-pink-600 w-60 text-white text-2xl p-2 rounded-full' type="submit ">Submit</button>
           {/* <button type="submit">Submit</button> */}
           </div>
         </div>
        </div>

    </div>
  )
}

export default Contact