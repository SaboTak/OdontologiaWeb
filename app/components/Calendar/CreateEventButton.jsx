import GlobalContext from '@/app/context/GlobalContext';
import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext)

  return (
    <button 
    onClick={() => setShowEventModal(true)}
    className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'
    >
      <span className=' w-7 h-7 flex justify-center items-center'>
        <FaPlus />
      </span>
      <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}
