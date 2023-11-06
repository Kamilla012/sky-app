import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMoon, faHeart, faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faSatellite, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import '../style'; // Import your CSS file here
import '../index.css'


const Navigation = () => {
  const Navbar = (props) => {
    return (
      <nav className='h-[70px] py-1 my-2 border-b-2 '>
        <ul className='max-w-full h-full flex justify-end'>
          {props.children}
        </ul>
      </nav>
    );
  };

  const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
      <li className='flex align-center justify-center w-[80px * 0.8]'>
       
       <Link
        to={props.path} // Ustawienie ścieżki na podstawie przekazanej właściwości
        className='w-[50px] h-[50px] transition ease-in-out delay-150 rounded-full mx-3 my-2 p-3 flex align-center justify-center bg-bgNavAccent hover:brightness-200'
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon className="text-white text-[25px]" icon={props.icon} />
      </Link>
       

        <CSSTransition
          in={open}
          timeout={500}
          classNames="dropdown"
          unmountOnExit
        >
          <div className='dropdown-content'>{props.children}</div>
        </CSSTransition>
      </li>
    );
  };

  const DropDownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    const DropDownItem = (props) => {
      return (
        <a
          href="#"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
          className='h-[50px] transition ease-in-out delay-150 rounded-lg mx-3 my-2 p-2 flex align-center justify-center bg-bgNavAccent hover:brightness-200'
        >
          <span>{props.leftIcon}</span>
          {props.children}
          <span>{props.rightIcon}</span>
        </a>
      );
    };

    return (
      <div
      
      className={`absolute top-[120px] right-[32px] w-[300px] border-1 border-white bg-bgNav rounded-lg p-5 overflow-hidden transition-max-h`}
      style={{
        maxHeight: activeMenu === 'main' ? '500px' : '500px', // Set a reasonable max height
      }}
      >
        {/* <CSSTransition
          in={activeMenu === 'main'}
          unmountOnExit
          timeout={500}
          classNames="menu_primary"
          onEnter={calcHeight}
        >
          <div>
            <DropDownItem>My profile</DropDownItem>
            <DropDownItem leftIcon=":>" rightIcon=":<" goToMenu="settings">
              Settings
            </DropDownItem>
          </div>
        </CSSTransition> */}
         <div>
            <DropDownItem>My profile</DropDownItem>
            <DropDownItem leftIcon=":>" rightIcon=":<" goToMenu="settings">
              Settings
            </DropDownItem>
          </div>

        {/* <CSSTransition
          in={activeMenu === 'settings'}
          unmountOnExit
          timeout={500}
          classNames="menu_secondary"
        >
          <div>
            <DropDownItem goToMenu="main">Up</DropDownItem>
            <DropDownItem>Settings</DropDownItem>
            <DropDownItem>Settings</DropDownItem>
            <DropDownItem>Settings</DropDownItem>
            <DropDownItem>Settings</DropDownItem>
          </div>
        </CSSTransition> */}
      </div>
    );
  };

  return (
    <Navbar>
      <NavItem icon={faHouse} path="/"/> 
      <NavItem icon={faStar} path="/starsCharts" /> {/* Przekazanie ikony gwiazdy */}
      <NavItem icon={faSatellite} path="/satellites">
      </NavItem>
      
     
      <NavItem icon={faMoon} /> {/* Przekazanie kolejnej ikony */}
      {/* Przekazanie jeszcze innej ikony */}
      <NavItem icon={faCircleDown}>
        <DropDownMenu />
      </NavItem>
    </Navbar>
  );
};

export default Navigation;
