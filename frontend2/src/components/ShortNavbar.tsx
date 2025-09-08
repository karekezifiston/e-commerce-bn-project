import React from 'react'

const ShortNavbar = () => {
  return (
    <div className='flex items-center bg-amber-300 justify-between px-27 text-xs py-3'>
        <div className='flex items-center gap-3'>
           <p>ENGLISH</p>
           <p>$DOLLAR(US)</p>
        </div>
        <div className='flex items-center gap-4'>
            <p><i></i> WELCOME TO OUR STORE!</p>
            <p><i></i> BLOG</p>
            <p><i></i> FAQ</p>
            <p><i></i> CONTACT US</p>
        </div>
    </div>
  )
}

export default ShortNavbar