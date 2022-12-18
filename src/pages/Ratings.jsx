import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';
import SectionTitle from '../components/SectionTitle';

const data = [
  { name: 'Group A', value: 78 },
  { name: 'Group B', value: 15 },
  { name: 'Group C', value: 5 },
  { name: 'Group D', value: 1 },
];
const COLORS = ['#76FF8C', '#767CFF', '#E4FF76', '#FF7676'];

const Ratings = () => {
  return (
    <section className='section'>
      <SectionTitle title='Ratings' />
      <div className='relative w-full rounded-lg shadow-my-shadow bg-light-bg dark:bg-dark-bg p-4 flex flex-col justify-start items-center'>
      <ResponsiveContainer height={500} width='100%' >
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={150}
            paddingAngle={5}
            dataKey={'value'}
            label
          >
  
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
             />
                
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className='flex justify-center p-2 items-center flex-wrap gap-2'>

            <div className="flex justify-center items-center text-light-text dark:text-dark-text mb-2 ml-4">
              <div className='w-[40px] h-[20px] bg-[#76FF8C] rounded-md m-2'></div>
              <p>5 Starts</p>
            </div>

            <div className="flex justify-center items-center text-light-text dark:text-dark-text mb-2 ml-4">
              <div className='w-[40px] h-[20px] bg-[#767CFF] rounded-md m-2'></div>
              <p>4 Starts</p>
            </div>

            <div className="flex justify-center items-center text-light-text dark:text-dark-text mb-2 ml-4">
              <div className='w-[40px] h-[20px] bg-[#E4FF76] rounded-md m-2'></div>
              <p>3 Starts</p>
            </div>
            <div className="flex justify-center items-center text-light-text dark:text-dark-text mb-2 ml-4">
              <div className='w-[40px] h-[20px] bg-[#FF7676] rounded-md m-2'></div>
              <p>1 & 2 Starts</p>
            </div>

       </div>

      </div>
      
    </section>



  );
};

export default Ratings;
