import React from 'react'

import { AiFillHome } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { GiRailRoad } from 'react-icons/gi'

import { AiOutlineLineChart } from 'react-icons/ai'
import { AiFillPieChart } from 'react-icons/ai'
import { AiOutlineBarChart } from 'react-icons/ai'

import { FiSettings } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineFeedback } from 'react-icons/md'

const Icon = ({icon, selected}) => {

    const selectedStyle = selected ? 'text-primary-color' : 'text-light-text dark:text-dark-text'
    const iconStyle = `h-[22px] w-[22px] ${selectedStyle}`

    if (icon === 'home') return <AiFillHome className={iconStyle} />
    if (icon === 'portfolio') return <BsBagCheck className={iconStyle} />
    if (icon === 'clients') return <HiOutlineUsers className={iconStyle} />
    if (icon === 'experience') return <GiRailRoad className={iconStyle} />

    if (icon === 'earnings') return <AiOutlineLineChart className={iconStyle} />
    if (icon === 'ratings') return <AiFillPieChart className={iconStyle} />
    if (icon === 'skills') return <AiOutlineBarChart className={iconStyle} />

    if (icon === 'settings') return <FiSettings className={iconStyle} />
    if (icon === 'faq') return <AiOutlineQuestionCircle className={iconStyle} />
    if (icon === 'feedback') return <MdOutlineFeedback className={iconStyle} />
  
}
export default Icon