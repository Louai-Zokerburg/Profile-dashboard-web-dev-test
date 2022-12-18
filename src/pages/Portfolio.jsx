import React from 'react';
import PortfolioItem from '../components/protfolio-item/PortfolioItem';
import SectionTitle from '../components/SectionTitle';

import { portfolioData } from '../data';

const Portfolio = () => {
  return (
    <section className='section'>
      <SectionTitle title='Portfolio' />
      <div className='w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {portfolioData.map((project, index) => {
          return (
            <PortfolioItem
              image={project.img}
              title={project.projectName}
              desc={project.description}
              techUsed={project.technologiesUsed}
              rating={project.rating}
              delay={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
