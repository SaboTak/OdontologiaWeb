import GlobalContext from '@/app/context/GlobalContext';
import React, { useContext, useState } from 'react';
import { FaMinus, FaRegWindowClose, FaRegClock, FaGripLines, FaRegBookmark, FaCheck } from 'react-icons/fa';

const labelClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const [tittle, setTitle] = useState('');
  const [hour, setHour] = useState('');
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);

  const { setShowEventModal, selectedDay, dispatchCallEvent } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      tittle,
      hour,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: Date.now()
    };
    dispatchCallEvent({ type: 'push', payload: calendarEvent });
    setShowEventModal(false);
  }

  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
      <form action="#" className='bg-white rounded-lg px-7 py-10 shadow-2xl w-1/4'>
        <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
          <FaMinus />
          <button onClick={() => setShowEventModal(false)}>
            <FaRegWindowClose />
          </button>
        </header>
        <div className='px-4 py-6'>
          <div className='grid grid-cols-1/5 items-end gap-y-7'>
            <div></div>
            <input
              type="text"
              name='Title'
              placeholder='Add your name'
              value={tittle} onChange={(e) => setTitle(e.target.value)}
              required
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-b-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200'
            />
            <div className='flex items-center h-full'>
              <FaRegClock />
            </div>
            <p>{selectedDay.format("dddd, MMMM DD")}</p>
            <div className='flex items-center h-full'>
              <FaGripLines />
            </div>
            <input
              type="text"
              name='Title'
              placeholder='Add the hour'
              value={hour} onChange={(e) => setHour(e.target.value)}
              required
              className='pt-3 border-0 text-gray-600 text-md pb-2 w-full border-b-2 border-b-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200'
            />
            <div className='flex items-center h-full'>
              <FaRegBookmark />
            </div>
            <div className="flex justify-evenly">
              {labelClasses.map((lblClass, index) => (
                <span
                key={index}
                onClick={() => setSelectedLabel(lblClass)}
                className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <FaCheck />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className='flex justify-end border-t p-3 mt-5'>
          <button 
          type="submit" 
          className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
          onClick={handleSubmit}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  )
}
