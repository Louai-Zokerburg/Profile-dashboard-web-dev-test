import React from 'react';
import PortfolioItem from '../components/protfolio-item/PortfolioItem';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

import { portfolioData } from '../data';

const Portfolio = () => {
  const parent = {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    },
  };
  return (
    <section className='section'>
      <SectionTitle title='Portfolio' />
      <motion.div variants={parent} initial='from' animate='to' className='w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {portfolioData.map((project, index) => {
          return (
            <PortfolioItem
              image={project.img}
              title={project.projectName}
              desc={project.description}
              techUsed={project.technologiesUsed}
              rating={project.rating}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;
