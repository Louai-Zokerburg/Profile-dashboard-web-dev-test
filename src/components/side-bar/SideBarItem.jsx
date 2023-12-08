import React from 'react';
import Icon from '../Icon';

import { Link } from 'react-router-dom';

const SideBarItem = ({
  text,
  icon,
  to,
  selectedPage,
  handleSelectedPageChange,
  toggleMenu,
  id,
}) => {
  const selsectedStyle =
    selectedPage === id ? 'bg-light-seclected dark:bg-dark-selected' : '';
  const selectedTextStyle =
    selectedPage === id
      ? 'text-primary-color'
      : 'text-light-text text-base dark:text-dark-text';

  return (
    <Link to={to} className='w-full'>
      <div
        onClick={() => {
          handleSelectedPageChange(id);
          toggleMenu();
        }}
        className={`flex justify-start items-start gap-x-3 w-full mb-1 py-2 px-3 rounded-md cursor-pointer ${selsectedStyle} hover:bg-light-seclected dark:hover:bg-dark-selected`}
      >
        <Icon icon={icon} selected={selectedPage === id ? true : false} />
        <p className={`font-bold ${selectedTextStyle}`}>{text}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
