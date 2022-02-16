import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../../styled';

const MultipleOption = ({setScore, score,optionsListArray, subOptionTitles}) => {
  const FroumRow = styled.div`
  display:flex;
  margin-left:auto;
  // justify-content: space-between;
  // align-items:center;
  // max-width:1057px;
  ` 
  const [subOptionScore, setSubOptionScore] = useState(0)
  const onSubValueChange = (e) => {
    setSubOptionScore(Number(e.target.value))
  }

  return <>
  
       <FroumRow>
   
         {
           subOptionTitles.map(st => (
       <p key={st.order} >{st.text}</p>

           ))
           
         }
   
       </FroumRow>
       
        {
          optionsListArray.map(option => (
        <Row key={option.id}>
        <p style={{width:"313px"}}>{option.title}</p>
        <RadioGroup
        style={{flexWrap:"nowrap", flexDirection:"row",}}
        // aria-labelledby="demo-controlled-radio-buttons-group"
          name={option.title}
          value={subOptionScore}
          defaultValue={subOptionScore}
          onChange={onSubValueChange}
      >
      {
          option.subOptions.map(subOption => 
            (
            
            <FormControlLabel
              key={option.id}
              control={<Radio />}
              label=""
              value={subOption.score}
            />

          )
          )
        } 

      </RadioGroup>
        </Row>
          ))
        }

  </>;
};

export default MultipleOption;
