import React from 'react';
import ClientItem from '../components/client-item/ClientItem';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

import { clientsData } from '../data';

const Clients = () => {
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
      <SectionTitle title='Clients' />
      <motion.div variants={parent} animate='to' initial='from' className='w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {clientsData.map((client, index) => {
          return (
            <ClientItem
              name={client.name}
              img={client.img}
              quote={client.quote}
              key={index}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Clients;
