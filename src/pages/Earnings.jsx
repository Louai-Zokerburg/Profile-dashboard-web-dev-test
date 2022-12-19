import React from 'react';

import SectionTitle from '../components/SectionTitle';

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

const data = [
  { name: '2012', revnue: 40, value: 55 },
  { name: '2013', revnue: 45, value: 25 },
  { name: '2014', revnue: 45, value: 66 },
  { name: '2015', revnue: 55, value: 88 },
  { name: '2016', revnue: 65, value: 60 },
  { name: '2017', revnue: 70, value: 45 },
  { name: '2018', revnue: 90, value: 35 },
  { name: '2019', revnue: 100, value:  50 },
  { name: '2020', revnue: 75, value: 88 },
  { name: '2021', revnue: 95, value: 70 },
  { name: '2022', revnue: 115, value:  99 },
];

const Earnings = () => {
  return (
    <section className='section'>
      <SectionTitle title='Earnings' />

      <div className='w-full h-[calc(100vh-150px)] flex justify-center items-center rounded-lg shadow-my-shadow bg-light-bg dark:bg-dark-bg pt-4 pb-4 pr-4 md:pl-4'>
        <ResponsiveContainer width='90%' height={500}>
          <LineChart data={data}>
            <Line
              type='monotone'
              dataKey='revnue'
              stroke='#5E95FF'
              strokeWidth={2}
            />
            <Line
              type='monotone'
              dataKey='value'
              stroke='#FFFF00'
              strokeWidth={2}
            />
            <Line
              type='monotone'
              dataKey='revnue'
              stroke='#5E95FF'
              strokeWidth={2}
            />
            <CartesianGrid stroke='#888' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>

          {/* <AreaChart data={data}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#5E95FF' stopOpacity={0.5} />
                <stop offset='95%' stopColor='#5E95FF' stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis dataKey='revnue' />
            <CartesianGrid stroke='#888' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='revnue'
              stroke='#5E95FF'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart> */}
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Earnings;
