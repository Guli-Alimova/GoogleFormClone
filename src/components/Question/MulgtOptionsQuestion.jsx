import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleOption from './SubComponents/SingleOption';
import MultipleOption from "./SubComponents/MultipleOption"
const Question = ({setMainScore, data}) => {
  const FormContent = styled.div`
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 24px;
    // max-width:600px;

    `
    const [score, setScore] = useState(0)

    // useEffect(() => {
    //   setMainScore(score)
    // }, [score])
  return (
    <>
    <FormContent>
    <FormControl >
    <FormLabel id="demo-radio-buttons-group-label">{data.title}</FormLabel>
    {
      data.options.type === 'single' 
      ? <SingleOption optionsListData={data.options.optionsList} setScore={setScore} score={score} setMainScore={setMainScore}/>
      : <MultipleOption
      setScore={setScore}
      score={score}
      optionsListArray={data.options.optionsList} 
      subOptionTitles={data.options.subOptionTitles}
      />
    }
    </FormControl>
  </FormContent>
    <p>{score}</p>
    </>
  )
};

export default Question;
