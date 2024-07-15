import React from 'react';
import Logo from '../../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import DarkMode from './DarkMode';

const NavLinks = [
  { id: 1, name: 'Home', link: '#' },
  { id: 2, name: 'Products', link: '#' },
  { id: 3, name: 'Pricing', link: '#' },
  { id: 4, name: 'Contact', link: '#' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='relative z-[9999] text-gray-800 dark:text-gray-200 duration-300 font-sans'>
      <div className='container py-2 md:py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo section */}
          <div className='flex items-center gap-3'>
            <img src={Logo} alt='' className='h-12 md:h-16' />
            <p className='text-2xl font-extrabold tracking-wide font-cursive md:text-3xl'>
              Vision{' '}
              <span className='font-extrabold text-transparent font-parisienne bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                Pro
              </span>
            </p>
          </div>

          {/* Desktop Menu section */}
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className='py-2'>
                  <a
                    href={link}
                    className='relative text-lg font-medium transition-colors duration-300 hover:text-primary group'
                  >
                    {name}
                    <span className='absolute left-0 bottom-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                  </a>
                </li>
              ))}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className='block md:hidden'>
            <div className='flex items-center gap-4'>
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className='transition-colors duration-300 cursor-pointer text-primary hover:text-secondary'
                  size={32}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className='transition-colors duration-300 cursor-pointer text-primary hover:text-secondary'
                  size={32}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
