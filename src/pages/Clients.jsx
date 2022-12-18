import React from 'react'
import ClientItem from '../components/client-item/ClientItem'
import SectionTitle from '../components/SectionTitle'

import { clientsData } from '../data'

const Clients = () => {
  return (
    <section className='section'>
        <SectionTitle title='Clients' />
        <div className='w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
          {
            clientsData.map((client, index) => {
              return <ClientItem name={client.name} img={client.img} quote={client.quote} duration={index} key={index}/>
            })
          }
        </div>
    </section>
  )
}

export default Clients