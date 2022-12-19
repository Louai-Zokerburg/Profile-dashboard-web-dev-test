import React from 'react'

const SkillItem = ({skillName, experienceLevel, children}) => {
 
  return (
    <div className='flex flex-col justify-start  bg-light-secondary-bg  items-start w-full mb-3 dark:bg-dark-secondary-bg py-3 px-4 rounded-md'>
            <div className='w-full flex justify-between items-center mb-2'>
              <h5 className='text-sm text-light-text dark:text-dark-text'>{skillName}</h5>
              <p className='text-sm text-light-text dark:text-dark-text'>{experienceLevel}%</p>
            </div>

            {children}
          </div>
  )
}

export default SkillItem
