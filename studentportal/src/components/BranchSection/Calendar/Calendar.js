import "./Calendar.css";
import React from "react";

function Calendar() {
	return (
		<div className="Calendar">
			<h1>Stay up to Date</h1>
			<iframe title="Calendar for Important institute dates"
				src="https://calendar.google.com/calendar/embed?src=cv27rshqec6vuvceh4itfusnec%40group.calendar.google.com&ctz=Asia%2FKolkata"
				width="800" height="600" frameBorder="0" scrolling="no"/>
		</div>
	);
}
export default Calendar;
