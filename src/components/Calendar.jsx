import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { Box } from "@chakra-ui/react";

const locales = {
  "en-In": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 9, 26),
    end: new Date(2022, 9, 26),
  },
  {
    title: "Vacation",
    start: new Date(2022, 12, 25),
    end: new Date(2023, 1, 2),
  },
  {
    title: "Conference",
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
];

const CalendarComponent = () => {
  return (
    <Box w="85%">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
      />
    </Box>
  );
};

export default CalendarComponent;
