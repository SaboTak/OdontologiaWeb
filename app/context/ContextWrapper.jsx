import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

const savedEventsReducer = (state, {type, payload}) => {
  switch (type) {
    case 'push':
     return [...state, payload];

    case 'update':
     return state.map(evt => evt.id === payload.id ? payload : evt);

     case 'delete':
     return state.filter(evt => evt.id !== payload.id);

    default:
      throw new Error()
  };
};

const initEvents = () => {
  const storageEvents = localStorage.getItem('saved');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], initEvents);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
  }, [savedEvents])

  useEffect(() => {
    if (setSmallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth])

  return (
    <GlobalContext.Provider 
    value={{ 
      monthIndex,
      setMonthIndex,
      smallCalendarMonth,
      setSmallCalendarMonth,
      selectedDay,
      setSelectedDay,
      showEventModal,
      setShowEventModal,
      dispatchCallEvent,
      }} 
      >
      {props.children}
    </GlobalContext.Provider>
  )
}
