import React, { useState } from 'react'
import Navbar from './Navbar'





const Navigation = () => {
  const Navbar = (props) => {
    return (
      <nav className='h-[70px] bg-bgNav py-1 my-2 border-b-2 '>
          <ul className='max-w-full h-full flex justify-end'>
              {props.children}
          </ul>
      </nav>
    )
  }
  const NavItem = (props) => {
    const [open, setOpen] = useState(false);
      return (
          <li className='flex align-center justify-center w-cal(80px * 0.8)'>
              <a href="#"
                className='w-[45px] h-[45px] rounded-full mx-3 my-2 p-2 flex align-center justify-center  bg-bgNavAccent hover:brightness-200'
                onClick={() => setOpen(!open)}>
                  {props.icon}
              </a>

              {open && props.children}

           
          </li>
      )
  }
  const DropDownMenu =() =>{
    const DropDownItem = (props)=> {
      return(
        <a href="#"
                className='h-[50px] rounded-lg mx-3 my-2 p-2 flex align-center justify-center  bg-bgNavAccent hover:brightness-200'>
                  <span>{props.leftIcon}</span>
                  {props.children}
                  <span>{props.rightIcon}</span>

              </a>

      )
    }
    return(
      <div className='absolute top-[120px] right-[32px]  w-[300px] rotate-x-45 border-1 border-white bg-bgNav rounded-lg p-5 overflow-hidden '>
        <DropDownItem>My profile</DropDownItem>
        <DropDownItem
        leftIcon={":>"}
        rightIcon={":<"}
        >
          
          </DropDownItem> 
      </div>
      
    )
  }
  return (
    <Navbar>
      <NavItem icon=":)" />
      <NavItem icon=":/" />
      <NavItem icon=":(" />
      <NavItem icon="^">
       <DropDownMenu />
      </NavItem> 
    </Navbar>
  )
}

export default Navigation