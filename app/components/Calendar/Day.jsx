import React, { useContext } from 'react'
import dayjs from 'dayjs'
import GlobalContext from '@/app/context/GlobalContext';

export default function Day({day, rowIndex}) {
  const getCurrentDayClass = () => {
    return day.format('DD--MM--YY') === dayjs().format('DD--MM--YY') ?
    'bg-blue-600 text-white rounded-full w-10' : '';
  }

  const { setSelectedDay, setShowEventModal } = useContext(GlobalContext)
  
  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'> 
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        
        <p className={`text-lg p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
      </header>
      <div className='flex-1 cursor-pointer' onClick={() => {
        setSelectedDay(day);
        setShowEventModal(true);
      }}>
          {""}
      </div>
    </div>
  )
}