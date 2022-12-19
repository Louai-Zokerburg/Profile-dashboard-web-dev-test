import React from 'react';

const PositionExp = ({position, time, company}) => {
  return (
    <div className='px-2 py-4 rounded-md bg-light-bg dark:bg-dark-secondary-bg shadow-my-shadow w-full text-start'>
      <p className='text-light-text dark:text-dark-text'>
        {position}
      </p>
      <p className='text-light-text dark:text-dark-text text-sm my-1'>{company}</p>
      <p className='text-light-text dark:text-dark-text text-[10px]'>
        {time}
      </p>
    </div>
  );
};

export default PositionExp;
