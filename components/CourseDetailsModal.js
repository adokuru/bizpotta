import React, { Fragment, useEffect } from 'react'

//////////
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from 'react-icons/md';


const CourseDetailsModal = () => {

  const closeModal = () => {
        
  } 

  const success = true

  return (
    <Transition.Root show={success} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={success} onClose={() => {}}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center block sm:p-0  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className=" relative redBorder inline-block align-top mt-16 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">

              <div className='absolute w-10 h-10 top-0 right-0 z-20 centerFlex' onClick = {() => closeModal()}>
                <MdOutlineCancel color='#E5E5E5' size={28} />
              </div>

              <div className='w-[500px]  h-[500px] bg-white flex flex-col items-center justify-center'>
           
                jhgfcvbnm,
                    
              </div>


              
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CourseDetailsModal




