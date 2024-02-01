import { useEffect, useRef } from 'react';
import './header.css';
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { Link, NavLink } from 'react-router-dom';

const navlinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header'); // Corrected class name here
      }
    });
  };
  
  

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <div className="header" style={{ backgroundImage: `url('./src/assets/images/mask.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '70px', lineHeight: '100px' }}>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="mx-12"> 
              <img src={logo} alt="" />
            </div>
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu flex items-center gap-[2.7rem]'>
                {navlinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500]  hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-4 mx-12'>  
              <div>
                <Link to='/'>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer logo_img'>
                    <img
                      src={userImg}
                      className='w-full rounded-full'
                      alt=""
                      style={{ marginTop: '10px' }}
                    />
                  </figure>
                </Link>
              </div>
              <Link to='/login'>
                <button className='bg-blue-400 rounded-full py-2 px-6 text-white font-semibold font-[600] h-[44px] flex items-center justify-center'>
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
 