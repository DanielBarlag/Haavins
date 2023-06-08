import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
      color: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color: 'white',
    },
  },
  input: { color: 'white' },
  label: { color: 'white' },
});

export default function CustomizedInputs() {
  return (
    <>
    <CssTextField label="Email" id="custom-css-outlined-input"/>
      <CssTextField label="Address" id="custom-css-outlined-input" />
      <CssTextField label="Postal Code" id="custom-css-outlined-input" />
    
    </>
      
  );
}