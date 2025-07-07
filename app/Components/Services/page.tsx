import React from 'react'
import Card from '../Card/Card'
import VCards from '../5Cards/5Cards'
import Pic from '@/public/hero.jpg'
import Plan from '@/public/Planning.jpg'
import contract from '@/public/Contract.jpg'
import kitchen from '@/public/kitchen.jpg'
import house from '@/public/house.jpg'

const MainCard = () => {
  return (
    <div>
    <div className='flex justify-center md:flex  flex-wrap'>
      <Card/>
      <VCards 
      image={contract}
      name='General Contract'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'/>

      <VCards 
      image={Plan}
      name='Project Planning'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'/>

      <VCards 
      image={Pic}
      name='House Refurbishment'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'/>

      <VCards 
      image={kitchen}
      name='Kitchen Remodeling'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'/>

      <VCards 
      image={house}
      name='House Extensions'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'/>
    </div>
    </div>
  )
}

export default MainCard
