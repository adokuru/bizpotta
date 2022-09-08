import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import {RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

import { useSwiper } from 'swiper/react';

const LandingTestimonialCarousel = () => {
    const data = [
        {
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
             name: "Maxwell John", 
            note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
            location : "Cape Town, S.A"
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
              name: "Maxwell John", 
              note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
              location : "Cape Town, S.A"
          },
          {
            imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              name: "Maxwell John", 
              note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
              location : "Cape Town, S.A"
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
              name: "Maxwell John", 
              note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
              location : "Cape Town, S.A"
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
              name: "Maxwell John", 
              note: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
              location : "Cape Town, S.A"
          },
    ]
     

  return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className='mySwiper'
        > 
            {data.map((el, index) => (
                <SwiperSlide key={index}> 
                     <TestimonialCard el = {el}/>
                </SwiperSlide>
                )
              )
            }

        <div className='h-10'></div>
        </Swiper>
  )
}

export default LandingTestimonialCarousel


export const TestimonialCard = ({el:{imageUrl, note, name, location}}) => {
    return (
        <div className='w-full flex flex-col items-center  bg-gray-50 px-2' >
            <div className='w-[250px] h-[200px] bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage:`url(${imageUrl})`}} />

            <p className='mt-4 text-[14px] w-[250px] italic'>{name}</p>

            <p className='text-[13px] font-extralight w-[250px] italic mt-4'>{note}</p>

            <p className='text-[13px] font-extralight w-[250px] italic mt-4'>{location}</p>
            
        </div>
    )
}





{/* <div className='text-[12px] flex flex-col'>
                <div className=' flex flex-row justify-start'>
                    <RiDoubleQuotesL />
                </div>
                    <p>{bio}</p>
                <div className=' flex flex-row justify-end pr-4'>
                    <RiDoubleQuotesR />
                </div>
                
            </div> */}