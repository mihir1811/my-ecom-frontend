import React from 'react'
import cartIcon from "../assets/cart.svg" 

const Header2 = () => {
  return (
    <header className='bg-[#dddddd]'>
        <div className='mx-auto py-5 max-w-[1420px] px-[20px] flex justify-between items-center'>
            {/* <div className='w-[300px]'>
                <ul className='flex items-center'>
                    <li><a href='Facebook'>Facebook</a></li>
                    <li><a href='Twitter'>Twitter</a></li>
                </ul>
            </div> */}
            <h1 className='font-bold text-3xl'>LOGO</h1>
            <div className='flex items-center w-[300px]'>
                <a className='cursor-pointer'>login</a>
                <button className='bg-[#5877C7] rounded-[33px] font-semibold px-10 py-2 text-white mx-8'>sign up</button>
                <div>
                    <img src={cartIcon} />
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header2