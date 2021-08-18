import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerMy = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const Input = ({ onClick, value }) => <input className="check-in" onClick={onClick} readOnly value={value} />;

  return (
    <DatePicker
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      selectsRange
      customInput={<Input />}
      dateFormat="ccc, MMM dd"
      monthsShown={2}
      minDate={new Date()}
      showDisabledMonthNavigation
    />
  );
};

export default DatePickerMy;
