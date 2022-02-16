import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../../styled';
import MultipleOptionItem from './MultipleOptionItem';

const MultipleOption = ({setScore, score,optionsListArray, subOptionTitles}) => {
  const FroumRow = styled.div`
  display:flex;
  margin-left:auto;
  // justify-content: space-between;
  // align-items:center;
  // max-width:1057px;
  ` 

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
            <MultipleOptionItem option={option}/>
          ))
        }
  </>;
};

export default MultipleOption;
