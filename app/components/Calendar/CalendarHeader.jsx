import GlobalContext from '@/app/context/GlobalContext';
import React, { useContext } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleResetDay = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <header className='px-4 py-2 flex items-center'>
        <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
        <button className="border rounded py-2 px-4 mr-5" onClick={handleResetDay}>
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="cursor-pointer text-gray-600 mx-10">
            <FaAngleLeft />
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="cursor-pointer text-gray-600 mx-10" >
            <FaAngleRight />
          </span>
        </button>
        <h2 className='text-xl font-bold text-gray-600 mx-6'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
    </header>
  )
}