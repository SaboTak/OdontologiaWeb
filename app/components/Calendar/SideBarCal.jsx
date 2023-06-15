import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';

export default function SideBarCal() {
  return (
    <aside className='border p-5 hidden w-64 md:block'>
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  )
}