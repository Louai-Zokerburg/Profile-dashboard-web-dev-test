import React from 'react';
import SideBarItem from './SideBarItem';

const SideBarGroup = ({
  title,
  items,
  handleSelectedPageChange,
  selectedPage,
  toggleMenu
}) => {
  return (
    <div className='flex flex-col justify-start items-start w-full mb-4'>
      <h6 className='font-thin uppercase text-xs text-light-secondary-text mb-2 dark:text-dark-secondary-text'>
        {title}
      </h6>
      {items.map((item) => (
        <SideBarItem
          key={item.id}
          text={item.text}
          id={item.id}
          icon={item.icon}
          to={item.to}
          toggleMenu={toggleMenu}
          selectedPage={selectedPage}
          handleSelectedPageChange={handleSelectedPageChange}
        />
      ))}
    </div>
  );
};

export default SideBarGroup;
