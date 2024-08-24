import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-1440 m-auto px-6 flex justify-between py-2'>
      <img src="/logo.png" alt="" height={155} width={155}/>
      <img src="/user-1.png" alt="" height={46} width={46} className='rounded-full' />
    </div>
  )
}

export default Navbar
