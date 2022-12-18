import React from 'react';
import link_icon from '../../assets/link.svg';
import start_icon from '../../assets/start.svg';
import { motion } from 'framer-motion';

const PortfolioItem = ({ image, title, desc, techUsed, rating, delay }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 50, duration: 0.5 }}
      className='bg-light-bg p-3 flex flex-col justify-start items-start dark:bg-dark-bg rounded-lg shadow-my-shadow'
    >
      <img src={image} alt='project thumpnail' className='rounded-md' />
      <h3 className='text-light-text mt-2 text-lg font-semibold dark:text-dark-text'>
        {title}
      </h3>
      <p className='text-light-text text-sm font-thin dark:text-dark-text'>
        {desc}
      </p>
      <div className='w-full flex flex-wrap mt-2'>
        {techUsed.map((tech) => (
          <TechTag techName={tech} />
        ))}
      </div>

      <div className='w-full flex justify-between items-center mt-2'>
        <a
          href='#'
          className='py-[1px] px-4 rounded-md bg-primary-color text-white font-thin flex justify-center items-center'
        >
          Visit
          <img src={link_icon} alt='' className='ml-2' />
        </a>

        <div className='flex justify-center items-start'>
          <p className='text-light-text font-semibold dark:text-dark-text mr-1'>
            {rating}
          </p>
          <img src={start_icon} alt='start icon' />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;

const TechTag = ({ techName }) => {
  return (
    <div className='py-1 px-3 rounded-lg bg-light-secondary-bg mr-1 mb-1 dark:bg-dark-secondary-bg'>
      <p className='text-dark-secondary-text text-xs dark:text-light-secondary-text'>
        {techName}
      </p>
    </div>
  );
};
