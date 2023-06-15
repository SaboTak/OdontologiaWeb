import { useState, useContext, useEffect } from "react";
import { getMonth } from "../../util";
import CalendarHeader from "./CalendarHeader";
import SideBarCal from "./SideBarCal";
import MonthCal from "./MonthCal";
import GlobalContext from "@/app/context/GlobalContext";
import EventModal from "./EventModal";

export default function FullCalendar() {


	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex))
	}, [monthIndex]);

	return (
		<>
			{showEventModal && <EventModal />}
			<div className="h-screen flex flex-col">
				<CalendarHeader />
				<div className="flex flex-1">
					<SideBarCal />
					<MonthCal month={currentMonth} />
				</div>
			</div>

		</>
	)
} 