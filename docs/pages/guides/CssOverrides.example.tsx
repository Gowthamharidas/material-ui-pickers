import React, { useState } from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@material-ui/core/TextField';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { DatePicker, DatePickerProps } from '@material-ui/pickers';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickerToolbar: {
      root: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickerCalendarHeader: {
      root: {
        // backgroundColor: lightBlue.A200,
        // color: 'white',
      },
    },
    MuiPickerDay: {
      root: {
        color: lightBlue.A700,
        '&:disabled': {
          color: lightBlue['100'],
        },
      },
      daySelected: {
        backgroundColor: lightBlue['400'],
      },
      today: {
        color: lightBlue['900'],
      },
    },
    MuiPickerModalDialog: {
      dialogAction: {
        color: lightBlue['400'],
      },
    },
  },
});

function CssOverrides() {
  const [selectedDate, handleDateChange] = useState<DatePickerProps['value']>(new Date());

  return (
    <ThemeProvider theme={materialTheme}>
      <DatePicker
        label="Light blue picker"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        renderInput={props => <TextField {...props} />}
        // @ts-ignore
        shouldDisableDate={isWeekend}
      />
    </ThemeProvider>
  );
}

export default CssOverrides;
