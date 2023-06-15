import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '@/app/util';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import GlobalContext from '@/app/context/GlobalContext';

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex])
  
  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1)
  };
  
  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1)
  };

  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex)
  }, [monthIndex])

  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format)

    if (nowDay === currentDay) return 'bg-blue-500 rounded-full text-white';
    else if (currentDay === slcDay) return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    else return '';
  }

  return (
    <div className='mt-9'>
      <header className='flex justify-between'>
        <p className="text-gray-500 font-bold w-8/12">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
        </p>
        <button className='mx-1' onClick={handlePrevMonth}>
            <FaAngleLeft />
        </button>
        <button className='mx-1' onClick={handleNextMonth}>
            <FaAngleRight />
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, index) => (
          <span
          key={index}
          className='text-sm py-1 text-center'
          >
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, indexB) => (
              <button
              key={indexB}
              onClick={() => {
                setSmallCalendarMonth(currentMonthIndex);
                setSelectedDay(day)
              }}
              className={`py-1 w-11/12 ${getDayClass(day)}`}
              >
                <span className='text-sm'>{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
