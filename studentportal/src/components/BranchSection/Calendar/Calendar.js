import "./Calendar.css";
import React from "react";

function Calendar() {
    return (
        <div className="Calendar">
            <div className="d-block d-sm-none col-12">
				<h4>Stay up to Date</h4>
                <iframe title="Important College Dates"
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=Y3YyN3JzaHFlYzZ2dXZjZWg0aXRmdXNuZWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dGJnY3ZyMmcwbWI3bnYzbDFhYnFsb29mZnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;color=%23B39DDB&amp;showDate=0&amp;showTitle=0&amp;showTabs=0&amp;showPrint=0&amp;showTz=0"
                        width="100%" height="600" frameBorder="0" scrolling="no"/>
            </div>
            <div className="d-none d-sm-block bigScreen">
				<h2>Stay up to Date</h2>
                <iframe title="Important College Dates"
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=Y3YyN3JzaHFlYzZ2dXZjZWg0aXRmdXNuZWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dGJnY3ZyMmcwbWI3bnYzbDFhYnFsb29mZnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;color=%23B39DDB&amp;showDate=0&amp;showTitle=0&amp;showTabs=0&amp;showPrint=0&amp;showTz=0"
                        width="700" height="600" frameBorder="0" scrolling="no"/>
            </div>
        </div>
    );
}

export default Calendar;
