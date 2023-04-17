import Link from 'next/link'
import React from 'react'
import NavSearchBox from '../clientSide/NavSearchBox'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link href={'/'}>Home</Link>{' '}
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <NavSearchBox/>
    </div>
  )
}

export default Navbar