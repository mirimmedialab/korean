declare module 'react-horizontal-strip-datepicker' {
  import React from 'react';

  interface DatepickerProps {
    // Datepicker 컴포넌트의 props 타입 정의
    // 예시:
    selectedDate: Date;
    onDateChange: (date: Date) => void;
    startDate: Date;
    endDate: Date;
  }

  const Datepicker: React.FC<DatepickerProps>;

  export default Datepicker;
}

declare module 'react-horizontal-datepicker' {
  import React from 'react';

  interface DatePickerProps {
    selectDate: Date;
    // onDateChange: (date: Date) => void;
    // startDate: Date;
    endDate: Number;
    getSelectedDay: string;
    labelFormat: string;
    color: string;
  }

  const DatePicker: React.FC<DatePickerProps>;

  export default DatePicker;
}
