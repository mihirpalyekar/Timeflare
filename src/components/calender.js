import React from 'react';
import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';
import '@event-calendar/core/index.css';


function MyCalendar() {
  const plugins = [TimeGrid];
  const options = {
      view: 'timeGridWeek',
      events: [
          // your list of events
      ]
  };

  return (
      <div>
          <Calendar plugins={plugins} options={options} />
      </div>
  );
}

export default MyCalendar;

