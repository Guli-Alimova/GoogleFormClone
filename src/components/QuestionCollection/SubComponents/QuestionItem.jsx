import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Row } from '../../styled'

const QuestionItem = ({question, score, onOptionSelected, sumTotalScore, addSelectedAnswer}) => {
  return (
    <>
    <Row>
    <p style={{width:"313px"}}>{question.title}</p>
    <RadioGroup
    style={{flexWrap:"nowrap", flexDirection:"row",}}
    aria-labelledby="demo-controlled-radio-buttons-group"
    name={question.title}
    value={score}
    onChange={onOptionSelected}
  >
  {
      question.options.map(option => 
        (
        
        <FormControlLabel
          key={option.id}
          control={<Radio 
          onClick={() => {
            addSelectedAnswer({questionId: question.id, score: option.score, optionId: option.id})
            sumTotalScore()
          }}
          />}
          label=""
          value={option.score}
        />

      )
      )
    } 

  </RadioGroup>
    </Row></>
  )
}

export default QuestionItem