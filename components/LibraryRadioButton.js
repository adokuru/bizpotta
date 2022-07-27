import React from "react";

export default function LibraryRadioButton({ option }) {
  return (
    <div className='flex items-center justify-between overflow-hidden transition-all rounded-md bg-transparent group h-14 w-80 border-l-2 px-8 shadow-md border-l-bizpotta-green border '>
      <p className='text-bizpotta-purple text-sm font-semibold'>
        <span>{option.name}</span>
      </p>
      <input type='radio' id='library' name='library' className='text-bizpotta-green ring-0' />
    </div>
  );
}
