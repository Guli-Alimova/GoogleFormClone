import { RadioGroup } from '@mui/material';
import React from 'react';
import SingleOptionItem from './SingleOptionItem';

const Options = (props) => {
  return (
    <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="helth"
  
    onChange={props.handleClick}
  >
    <SingleOptionItem handleClick={props.handleClick}/>
  </RadioGroup>
  )
};

export default Options;
