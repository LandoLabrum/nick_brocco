import { useState } from "react";
import { DatePicker, TimePicker } from 'react-materialize';
import "materialize-css"

export default function ({ data, update }) {
  const [newData, setState] =
    useState({
      fName: "",
      lName: "",
      email: "",
      tel: "",
      date: null,
      time: null
    });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h5>Schedule a consultation</h5>
      First Name
      <input
        value={newData.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      Last Name
      <input
        value={newData.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />
      Email
      <input
        value={newData.email}
        type="email"
        onChange={handleChange}
        name="email"
      />
      Telephone
      <input
        value={newData.tel}
        type="tel"
        onChange={handleChange}
        name="tel"
      />
      <DatePicker
        label="date"
        value={newData.date}
        name="date"
        onChange={(newDate) => {
          handleChange({
            target: {
              name: "date",
              value: newDate
            }
          })
        }}
        options={{
          autoClose: false,
          container: null,
          defaultDate: null,
          disableDayFn: null,
          disableWeekends: false,
          events: [],
          firstDay: 0,
          format: 'mmm dd, yyyy',
          i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok',
            months: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
            monthsShort: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            weekdaysAbbrev: [
              'S',
              'M',
              'T',
              'W',
              'T',
              'F',
              'S'
            ],
            weekdaysShort: [
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat'
            ]
          },
          isRTL: false,
          maxDate: null,
          minDate: null,
          onClose: null,
          onDraw: null,
          onOpen: null,
          onSelect: null,
          parse: null,
          setDefaultDate: false,
          showClearBtn: false,
          showDaysInNextAndPreviousMonths: false,
          showMonthAfterYear: false,
          yearRange: 2
        }}
      />
      <input id="timepicker_ampm_dark" className="timepicker" type="time"/>
      <TimePicker
        type="time"
        label="time"
        value={newData.time}
        name="time"
        onChange={ (newTime) => {
          handleChange({
            target: {
              name: "time",
              value: newTime
            }
          })
        }}
        
        options={{
          vibrate: true,
          onSelect: null,
          defaultTime: 'now',
          duration: 350,
          fromNow: 0,
          i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok'
          },
        }}
      />

      {JSON.stringify(newData)}<br />


      <button className="btn" onClick={() => update("q8", newData)}>Next</button>
    </div>
  );
}