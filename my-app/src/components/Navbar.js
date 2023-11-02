import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='h-[60px] bg-bgNav py-1 border-b-2 '>
        <ul className='max-w-full h-full flex justify-end'>
            {props.children}
        </ul>
    </nav>
  )
}
const NavItem = (props) => {
    return (
        <li className=''>
            <a href="#" className=''>
                {props.icon}
            </a>
        </li>
    )
}

export default Navbar