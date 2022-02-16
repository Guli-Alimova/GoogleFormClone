import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../../styled';

const MultipleOptionItem = ({option, multOptionScore, onSubValueChange}) => {


  const subOptionRef = useRef()
  const [optionItemScore, setOptionItemScore] = useState(0)
  const onOptionItemValueChange = (e) => {
    setOptionItemScore(Number(e.target.value))
  }



  return <>
        <Row key={option.id}>
        <p style={{width:"313px"}}>{option.title}</p>
        <RadioGroup
        style={{flexWrap:"nowrap", flexDirection:"row",}}
        // aria-labelledby="demo-controlled-radio-buttons-group"
          name={option.title}
          defaultValue={optionItemScore}
          value={optionItemScore}
          onChange={onOptionItemValueChange}
          onClick={() => {
            onSubValueChange(optionItemScore)
          }}
      >
      {
          option.subOptions.map(subOption => 
            (
            
            <FormControlLabel
              key={option.id}
              control={<Radio />}
              label=""
              ref={subOptionRef}
              value={subOption.score}
            />

          )
          )
        } 
      </RadioGroup>
        </Row>
        <p>{optionItemScore}</p>
  </>;
};

export default MultipleOptionItem;
