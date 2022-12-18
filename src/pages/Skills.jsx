import React from 'react';
import SectionTitle from '../components/SectionTitle';

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
  Label,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';

const data = [
  {
    name: 'Dart, Flutter',
    year: 2022,
    period: 40,
  },
  {
    name: 'NodeJs, MongoDb, Postgress, Express',
    year: 2020,
    period: 50,
  },
  {
    name: 'HTML, CSS, JS',
    year: 2018,
    period: 43,
  },
  {
    name: 'ReactJs, Nextjs',
    year: 2016,
    period: 30,
  },
  {
    name: 'PHP, Laravel',
    year: 1014,
    period: 45,
  },
  {
    name: 'C#, ASP.NET',
    year: 2013,
    period: 34,
  },
  {
    name: 'C/C++',
    year: 2012,
    period: 54,
  },
];

const COLORS = ['#EB5858', '#57DE6D', '#767CFF'];

const Skills = () => {
  return (
    <section className='section h-screen]'>
      <SectionTitle title='Skills' />
      <div className='w-full h-[calc(100vh-150px)] flex justify-center items-center rounded-lg shadow-my-shadow bg-light-bg dark:bg-dark-bg pt-4 pb-4 pr-4 md:pl-4'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} layout='vertical'>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis type='number' />
            <YAxis type='category' dataKey='year' />
            {/* <Tooltip /> */}
            <Bar
              dataKey='period'
              fill='#5E95FF'
              radius={[0, 10, 10, 0]}
              barSize={50}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

              <LabelList
                dataKey='name'
                position='inside'
                angle={0}
                offset={25}
                fill='white'
              />
            </Bar>
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Skills;
