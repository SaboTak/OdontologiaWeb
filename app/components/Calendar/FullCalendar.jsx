import { useState } from "react";
import { getMonth } from "../../util";
import CalendarHeader from "./calendarHeader";
import SideBarCal from "./SideBarCal";
import MonthCal from "./MonthCal";

export default function FullCalendar() {


	const [currentMonth, setCurrentMonth] = useState(getMonth());

	return (
		<>
			<div className="h-screen flex flex-columns">
				<CalendarHeader />
				<div className="flex flex-1">
					<SideBarCal />
					<MonthCal month={currentMonth} />
				</div>
			</div>

		</>
	)
} 