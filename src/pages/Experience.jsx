import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Experience = () => {
  return (
    <section className='section'>
        <SectionTitle title='Experience' />
        <div className='w-full grid grid-cols-[1fr,2fr] gap-4 min-h-[calc(100vh-120px)]'>
          <div className='bg-light-bg rounded-lg shadow-my-shadow flex justify-center items-center text-xl text-white dark:bg-dark-bg row-span-2'>1</div>
          <div className='bg-light-bg rounded-lg shadow-my-shadow flex justify-center items-center text-xl text-white dark:bg-dark-bg'>1</div>
          <div className='bg-light-bg rounded-lg shadow-my-shadow flex justify-center items-center text-xl text-white dark:bg-dark-bg'>1</div>
        </div>
    </section>
  )
}

export default Experience