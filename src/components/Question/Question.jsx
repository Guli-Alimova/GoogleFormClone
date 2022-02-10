import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
// import Options from './Components/Options/Options';

const Question = (props) => {
  const FormContent = styled.div`
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 24px;
    // max-width:600px;

    `
  return (
    <FormContent>
    <FormControl >
<FormLabel id="demo-radio-buttons-group-label">Умумий соғлигингиз ҳолатини қандай бахолайсиз? </FormLabel>
<FormControlLabel value={1} control={<Radio />} label="Аъло даражада" />
</FormControl>
  </FormContent>
  )
};

export default Question;
