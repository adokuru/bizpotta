import React from 'react'
import BottomSection from './BottomSection'
import MiddleSection from './MiddleSection'
import TopSection from './TopSection'

const Content = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-4 pb-10'>
      
    <TopSection />

    <MiddleSection />

    {/* <BottomSection /> */}
    
    </div>
  )
}

export default Content