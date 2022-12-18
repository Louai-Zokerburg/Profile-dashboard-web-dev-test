import { AiOutlineBell } from 'react-icons/ai';
import { AiFillWechat } from 'react-icons/ai';
import { CiSun } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';

import { sideBarData } from '../../data';
import SideBarGroup from './SideBarGroup';

const SideBar = ({
  isMenuOpen,
  toggleTheme,
  theme,
  selectedPage,
  handleSelectedPageChange,
  toggleMenu
}) => {
  const position = isMenuOpen ? 'left-0' : 'left-[-220px]';
  return (
    <aside
      className={`shadow-[5px_10px_10px_rgba(0,0,0,0.1)] lg:shadow-none flex flex-col z-10 bg-white dark:bg-dark-bg fixed justify-start items-center top-[50px] ${position} transition-all h-[calc(100vh-50px)] w-[200px] py-4 px-3 lg:left-0`}
    >
      {sideBarData.map((group) => (
        <SideBarGroup
          key={group.title}
          title={group.title}
          items={group.items}
          selectedPage={selectedPage}
          toggleMenu={toggleMenu}
        handleSelectedPageChange={handleSelectedPageChange}
        />
      ))}

      <div className='flex lg:hidden w-full absolute bottom-4 left-0 items-center justify-around'>
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
    </aside>
  );
};

export default SideBar;
