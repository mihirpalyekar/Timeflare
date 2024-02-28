// pages/CalendarPage.js

import React, { useEffect, useRef } from 'react';
import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import '@event-calendar/core/index.css'; // Import CSS styles

function CalendarPage() {
    const calendarRef = useRef(null); // Reference to the calendar DOM element

    useEffect(() => {
        const plugins = [TimeGrid];
        const options = {
            view: 'timeGridWeek',
            events: [
                // your list of events
            ]
        };

        if (calendarRef.current) {
            new Calendar({
                target: calendarRef.current,
                props: {
                    plugins,
                    options
                }
            });
        }
    }, []);

    return (
      <DashboardLayout>
        <h1>Calendar</h1>
      <div ref={calendarRef}></div>
    </DashboardLayout>
            
    );
}

export default CalendarPage;

