import React from 'react'
import { NavLink } from 'react-router-dom'

function OffBanner() {
  return (
    <div className=' OffBanner bg-black mt-8 relative'>
        <img className='h-full w-full opacity-80  ' src="https://www.lashkaraa.com/cdn/shop/collections/1_82425fda-e0ad-46ff-ae9e-2eff8c542051.jpg?v=1681577159&width=1500" alt="" />
        <p className='ofbanner-text   ' >SHOP TRENDY INDIAN  <br />FASHTION WEAR <br /> <NavLink to="/ProducMain">
      <button className='button font-sans rounded-full text-black bg-white py-2 px-3 text-xl'>Shop Now</button>
      </NavLink></p>
    </div>
  )
}

export default OffBanner