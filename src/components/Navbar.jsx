import { NavLink } from "react-router-dom";

import mainLogo from "../assets/images/mainLogo.webp";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={mainLogo} alt='logo' className='w-32 h-32 md:w-24 md:h-24 sm:w-16 sm:h-16 object-contain' />
      </NavLink>
      <h1 className='text-xl font-bold text-center mt-2'>Royal Phoenix Botanicals</h1>
      <nav className='flex text-lg gap-7 font-medium'>
    <a href='https://royal-phoenix-botanicals.com/' className='text-black hover:text-blue-600'>
      About
    </a>
    <a href='https://royal-phoenix-botanicals.com/' className='text-black hover:text-blue-600'>
      Products
    </a>
  </nav>
    </header>
  );
};

export default Navbar;
