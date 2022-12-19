import React from 'react';

import { motion } from 'framer-motion'

import SectionTitle from '../components/SectionTitle';

const Overview = () => {
  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardStyle =
    'bg-light-bg rounded-xl shadow-my-shadow flex  text-xl text-white dark:bg-dark-bg p-4';

  return (
    <section className='section'>
      <SectionTitle title='Overview' />

      <motion.div
        variants={parent}
        animate='visible'
        initial='hidden'
        className='w-full grid grid-cols-1 md:grid-cols-[1fr,2fr] md:grid-rows-[2fr,3fr] gap-4 max-h-[calc(100vh-120px)]'
      >
        <motion.div
          variants={child}
          className={`${cardStyle} row-span-2 justify-center items-center`}
        ></motion.div>

        <motion.div
          variants={child}
          className={`${cardStyle} flex-col justify-start items-center h-fit`}
        ></motion.div>

        <motion.div variants={child} className={`${cardStyle}`}></motion.div>
      </motion.div>
    </section>
  );
};

export default Overview;
