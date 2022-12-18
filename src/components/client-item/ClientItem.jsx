import React from 'react';

import facebook_icon from '../../assets/facebook_icon.svg';
import tiktok_icon from '../../assets/tiktok_icon.svg';
import instagram_icon from '../../assets/instagram_icon.svg';
import twitter_icon from '../../assets/twitter_icon.svg';
import { motion } from 'framer-motion';

const ClientItem = ({ img, name, quote, duration }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: duration / 50, duration: 0.5 }}
      className='bg-light-bg p-3 flex flex-col justify-start items-center dark:bg-dark-bg rounded-lg shadow-my-shadow'
    >
      <img src={img} alt='client image' className='rounded-full' />
      <h3 className='text-light-text mt-2 text-lg font-semibold dark:text-dark-text'>
        {name}
      </h3>
      <p className='text-light-text text-sm font-thin dark:text-dark-text text-center'>
        {quote}
      </p>
      <div className='max-w-fit flex justify-center items-center gap-2 mt-4'>
        <img src={facebook_icon} alt='' className='w-[20px] cursor-pointer' />
        <img src={tiktok_icon} alt='' className='w-[20px] cursor-pointer' />
        <img src={instagram_icon} alt='' className='w-[20px] cursor-pointer' />
        <img src={twitter_icon} alt='' className='w-[20px] cursor-pointer' />
      </div>
    </motion.div>
  );
};

export default ClientItem;
