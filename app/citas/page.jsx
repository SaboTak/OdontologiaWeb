"use client"
import React from 'react';
import FullCalendar from "../components/Calendar/FullCalendar";
import ContextWrapper from '../context/ContextWrapper';
import Navbar from '../components/Navbar/navbar';

export default function CitasPage() {    
    return (
        <div>
            <Navbar />
            <ContextWrapper >
				<FullCalendar />
            </ContextWrapper>
        </div>
    )
}
