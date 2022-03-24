import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { FormContent } from '../styled'

const Question = ({questionData, score, onOptionSelected, addSelectedAnswer, sumTotalScore}) => {
  return (
    <>
    <FormContent>
    <FormControl >
    <FormLabel id="demo-radio-buttons-group-label">{questionData.title}</FormLabel>
      <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="now-helth"
      >
        {
          questionData.options.length &&
          questionData.options.map(option => (
            <FormControlLabel key={option.id}
            value={option.score} control={<Radio onClick={() => {
              addSelectedAnswer({questionId: questionData.id, score: option.score, optionId: option.id})
              sumTotalScore()
            }
          }/>} label={option.title}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  </FormContent></>
  )
}

export default Question