import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { GoSettings } from 'react-icons/go'
import { MdOutlineArrowUpward } from 'react-icons/md'
import moment from 'moment';
import {useRouter } from 'next/router';

const ClickedCourse = () => {

    const data = [
        {
          item: 1,
          name: "Chibuike Umoh",
          price: "N12,000",
              subscription: 'Full',
          date: Date.now(),
          status: false,
          code: '0001KJH'
      },
      {
          item: 2,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 3,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 4,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 5,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: false,
          code: '0001KJH'
      },
      {
          item: 6,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      ]

    const router = useRouter()
    const isActive = true

  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 py-10 text-darkGray'>
        
        <div className = 'flex items-center gap-x-1 text-[#999999] text-[14px] cursor-pointer' onClick={() => router.back()}> 
            <AiOutlineLeft />
            <p>Back</p>
        </div>
        
        <div className='mt-10 text-[#999999] text-[13px]'>
            Course title
        </div>

        <div className='flex justify-between w-full mt-4'>
            <div>
                <p className='text-[18px] text-darkBlue font-bold'>Introduction to Fashion designing</p>
                <p className='italic text-[14px] font-light '>234 students</p>
            </div>
            <div className={`w-[120px] h-[30px] centerFlex rounded-md ${ "bg-[#FC4A4A]"  "bg-opacity-[0.15]" "text-[#B40303]" } text-[12px]`}>
                Deactivate course
            </div>
        </div>



        <div className="flex flex-col w-full">
        <div className="my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-hidden">

        <div className="min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-center">
          <input className="w-[400px] text-[13px] rounded-sm italic h-[35px] pl-4 outline-none focus:ring-0" placeholder="Search income by entering keywords, name, or course"/>
          <div className="h-[35px] centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-20">
            <GoSettings  className=""/>
            <p className="font-bold">Filter</p>
          </div>

          <div className="h-[35px] centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-7">
            <div className="w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]">
              <MdOutlineArrowUpward color="#191919"/>
            </div>
            <p className="font-bold">Export</p>
          </div>
        </div>


        <div className="py-2 align-middle inline-block min-w-[1050px] xl:w-full">
            {/* Table */}
            {<table className=" min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    #
                  </th>
                  
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Subscription
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Referral code
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((el) => (
                  <tr key={el.item}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.item}</div>
                    </td>
                    
                    <td className="px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center">{el.name}</td>
                    
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.subscription}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.price}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{moment(el.date).format('MMM Do YYYY')}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap centerFlex">
                      <div className={`text-sm text-gray-900 text-[12px] text-center w-[125px] py-1 centerFlex rounded-md ${el.status ? "bg-[#FFC700] bg-opacity-[0.25] text-[#55450D]" : "bg-[#1200E2] bg-opacity-[0.15] text-[#141526]"} `}>{el.status ? "Course completed" : "On-going course"}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.code}</div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}

          {/* </div> */}
        </div>
      </div>
    </div>

    </div>
  )
}

export default ClickedCourse