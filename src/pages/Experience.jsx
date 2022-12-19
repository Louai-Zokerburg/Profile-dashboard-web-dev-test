import React from 'react';
import SectionTitle from '../components/SectionTitle';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

import { motion } from 'framer-motion';
import SkillItem from '../components/SkillItem';
import PositionExp from '../components/PositionExp';

const data = [
  { name: 'Front-end', value: 88 },
  { name: 'Databases', value: 70 },
  { name: 'Systems', value: 92 },
  { name: 'Back-end', value: 65 },
];

const Experience = () => {
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
      <SectionTitle title='Experience' />
      <motion.div
        variants={parent}
        animate='visible'
        initial='hidden'
        className='w-full grid grid-cols-1 md:grid-cols-[2fr,3fr] md:grid-rows-[2fr,3fr] gap-4 max-h-[calc(100vh-120px)]'
      >
        <motion.div variants={child} className={`${cardStyle} row-span-2 justify-center items-center`}>
          <Timeline position='alternate' style={{ width: '100%' }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PositionExp position='Front-end Freelancer' company='Upwork' time=' 2020-06-02 => till Today'/>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              <PositionExp position='Front-end Developeer' company='Oracle' time=' 2018-03-25 => 2020-06-0'/>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='secondary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PositionExp position='Database Manager' company='Mocrosoft' time=' 2017-12-02 = 2018-03-25'/>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined'color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PositionExp position='System Adminstrator' company='Microvirt' time=' 2015-06-02 = 2017-12-02' />
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='secondary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              <PositionExp position='Cloud Engeneer' company='Google' time=' 2012-06-02 = 2015-06-02'/>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='secondary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              <PositionExp position='Cs Student' company='Harvard' time=' 2008-01-02 = 2012-06-02'/>
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </motion.div>

        <motion.div
          variants={child}
          className={`${cardStyle} flex-col justify-start items-center h-fit`}
        >
          <h2 className='text-light-text dark:text-dark-text mb-4'>
            Hard Skills
          </h2>

          <SkillItem skillName='Front-End Development' experienceLevel='88'>
            <div className='w-[88%] h-[4px] bg-blue-600 rounded-full'></div>
          </SkillItem>
          <SkillItem skillName='Database Managemenet' experienceLevel='70'>
            <div className='w-[70%] h-[4px] bg-blue-600 rounded-full'></div>
          </SkillItem>
          <SkillItem skillName='System Administrationt' experienceLevel='92'>
            <div className='w-[92%] h-[4px] bg-blue-600 rounded-full'></div>
          </SkillItem>
          <SkillItem skillName='Back-End Security' experienceLevel='65'>
            <div className='w-[65%] h-[4px] bg-blue-600 rounded-full'></div>
          </SkillItem>
        </motion.div>

        <motion.div variants={child} className={`${cardStyle}`}>
          <ResponsiveContainer width='90%' height={500}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#5E95FF' stopOpacity={0.5} />
                  <stop offset='95%' stopColor='#5E95FF' stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid stroke='#888' />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='value'
                stroke='#5E95FF'
                fillOpacity={1}
                fill='url(#colorPv)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
