import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const SingleOption = ({ setScore, score, optionsListData}) => {
  const onValueChange = (e) => {
    setScore(Number(e.target.value))
  }



  return <>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="now-helth"
        onChange={onValueChange}
        defaultValue={score}
        value={score}
          >
        {
            optionsListData.map(option => (
                <FormControlLabel key={option.id} value={option.score} control={<Radio />} label={option.title} />
            ))
        }

    </RadioGroup>
  </>;
};

export default SingleOption;