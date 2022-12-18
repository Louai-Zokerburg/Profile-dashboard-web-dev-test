import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logo_dark.svg';
import profile_img from '../../assets/profile_img.png';

import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillWechat } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { CiSun } from 'react-icons/ci';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const TopBar = ({ theme, toggleTheme, isMenuOpen, toggleMenu }) => {
  return (
    <header className='flex fixed justify-between items-center top-0 left-0 w-full h-[50px] py-2 px-6 z-10 bg-white dark:bg-dark-bg'>
      <div
        onClick={toggleMenu}
        className='p-2 rounded-full cursor-pointer transition-all mr-3 hover:bg-light-seclected dark:hover:bg-dark-selected  lg:hidden'
      >
        {isMenuOpen ? (
          <IoMdClose className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
        ) : (
          <HiMenuAlt1 className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
        )}
      </div>

      <img
        src={theme === 'dark' ? logoDark : logo}
        alt='app logo'
        className='h-[32px] border-solid'
      />

      <div className='flex justify-center items-center'>
        <div className='hidden lg:flex'>
          <div
            onClick={toggleTheme}
            className='p-2 rounded-full cursor-pointer transition-all mr-3 hover:bg-light-seclected dark:hover:bg-dark-selected'
          >
            {theme === 'dark' ? (
              <MdOutlineDarkMode className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
            ) : (
              <CiSun className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
            )}
          </div>

          <div className='p-2 rounded-full cursor-pointer transition-all mr-3 hover:bg-light-seclected dark:hover:bg-dark-selected'>
            <AiFillWechat className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
          </div>

          <div className='p-2 rounded-full cursor-pointer transition-all mr-3 hover:bg-light-seclected dark:hover:bg-dark-selected'>
            <AiOutlineBell className='w-[24px] h-[24px] text-light-text dark:text-dark-text' />
          </div>
        </div>

        <img
          src={profile_img}
          alt='profile image'
          className='w-[40px] h-[40px] rounded-lg shadow-sm cursor-pointer'
        />
      </div>
    </header>
  );
};

export default TopBar;
