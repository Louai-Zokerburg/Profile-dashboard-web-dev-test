import React from 'react';

import { motion } from 'framer-motion';

import { FiMapPin } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';

import SectionTitle from '../components/SectionTitle';

import ahmed_img from '../assets/ahmed_img.png';

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
        className='w-full grid grid-cols-1 md:grid-cols-[2fr,3fr] md:grid-rows-[2fr,3fr] gap-4 min-h-[calc(100vh-120px)]'
      >
        <motion.div
          variants={child}
          className={`${cardStyle} row-span-2 justify-start items-center flex-col`}
        >
          <img src={ahmed_img} alt='' className='mb-4 w-full' />

          <h1 className='text-light-text dark:text-dark-text text-2xl'>
            Ahmed Boumediene
          </h1>

          <p className='text-light-text dark:text-dark-text text-base mt-2 text-center tracking-wide leading-7' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla nemo autem laborum debitis blanditiis reiciendis soluta eos
            dignissimos ipsam, consequuntur itaque eligendi ullam, perferendis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla nemo autem laborum debitis blanditiis reiciendis soluta eos
            dignissimos ipsam, consequuntur <a href="#" className='text-primary-color underline'>Privacy Policy</a> and <a href="#" className='text-primary-color underline'>Terms & Conditions</a> itaque eligendi ullam, perferendis
            Lorem ipsum dolor sit ametelit. Repellendus
            nulla nemo autem.
          </p>
        </motion.div>

        <motion.div
          variants={parent}
          animate='visible'
          initial='hidden'
          className={`grid grid-cols-2 gap-4`}
        >
          <motion.div
            variants={child}
            className='bg-light-bg rounded-xl shadow-my-shadow flex flex-col justify-start items-start overflow-hidden text-xl text-white dark:bg-dark-bg p-4'
          >
            <div className='flex justify-center items-center mb-2'>
              <div className='p-2 rounded-md bg-light-secondary-bg dark:bg-dark-secondary-bg flex justify-center items-center mr-2'>
                <MdAlternateEmail className='text-light-text dark:text-dark-text' />
              </div>
              <p className='text-light-text dark:text-dark-text text-md'>
                Email
              </p>
            </div>

            <p className='text-base text-light-text dark:text-dark-text'>
              boumedienelouai2@gmail.com
            </p>
          </motion.div>
          <motion.div
            variants={child}
            className='bg-light-bg rounded-xl shadow-my-shadow flex flex-col justify-start items-start text-xl text-white dark:bg-dark-bg p-4'
          >
            <div className='flex justify-center items-center mb-2'>
              <div className='p-2 rounded-md bg-light-secondary-bg dark:bg-dark-secondary-bg flex justify-center items-center mr-2'>
                <FaInstagram className='text-light-text dark:text-dark-text' />
              </div>
              <p className='text-light-text dark:text-dark-text text-md'>
                Instagram
              </p>
            </div>

            <p className='text-base text-light-text dark:text-dark-text'>
              @louai_dourov
            </p>
          </motion.div>
          <motion.div
            variants={child}
            className='bg-light-bg rounded-xl shadow-my-shadow flex flex-col justify-start items-start text-xl text-white dark:bg-dark-bg p-4'
          >
            <div className='flex justify-center items-center mb-2'>
              <div className='p-2 rounded-md bg-light-secondary-bg dark:bg-dark-secondary-bg flex justify-center items-center mr-2'>
                <FiMapPin className='text-light-text dark:text-dark-text' />
              </div>
              <p className='text-light-text dark:text-dark-text text-md'>
                Address
              </p>
            </div>

            <p className='text-base text-light-text dark:text-dark-text'>
              Skikda, Ramdane Djamel, 19 Mars 1962
            </p>
          </motion.div>
          <motion.div
            variants={child}
            className='bg-light-bg rounded-xl shadow-my-shadow flex flex-col justify-start items-start text-xl text-white dark:bg-dark-bg p-4'
          >
            <div className='flex justify-center items-center mb-2'>
              <div className='p-2 rounded-md bg-light-secondary-bg dark:bg-dark-secondary-bg flex justify-center items-center mr-2'>
                <BsTelephone className='text-light-text dark:text-dark-text' />
              </div>
              <p className='text-light-text dark:text-dark-text text-md'>
                Phone
              </p>
            </div>

            <p className='text-base text-light-text dark:text-dark-text'>
              +213782635561
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={child}
          className={`${cardStyle} flex-col justify-start items-start`}
        >
          <h2 className='text-light-text dark:text-dark-text mb-4'>
            Get in touch with Ahmed
          </h2>
          <form className='w-full flex flex-col justify-start items-start gap-y-4'>
            <div className='flex justify-between items-center w-full gap-x-4'>
              <input
                type='text'
                className='w-full py-2 px-4 rounded-md outline-none bg-light-seclected dark:bg-dark-selected text-light-text dark:text-dark-text'
                placeholder='First name'
              />
              <input
                type='text'
                className='w-full py-2 px-4 rounded-md outline-none bg-light-seclected dark:bg-dark-selected text-light-text dark:text-dark-text'
                placeholder='Last name'
              />
            </div>
            <input
              type='text'
              className='w-full py-2 px-4 rounded-md outline-none bg-light-seclected dark:bg-dark-selected text-light-text dark:text-dark-text'
              placeholder='Email Address'
            />

            <textarea
              type='text'
              className='w-full py-2 px-4 rounded-md outline-none bg-light-seclected dark:bg-dark-selected text-light-text dark:text-dark-text'
              placeholder='Subject'
              rows='4'
            />

            <button className='flex justify-center items-center py-1 px-5 bg-primary-color text-white rounded-md gap-x-2'>
              Submit
              <AiOutlineSend className='text-white' />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Overview;
