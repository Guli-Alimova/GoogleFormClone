import { FormControl, FormLabel } from '@mui/material'
import React from 'react'
import { FormContent } from '../styled'
import OptionTitles from './SubComponents/OptionTitles'
import QuestionItemContainer from './SubComponents/QuestionItemContainer'

const QuestionCollection = ({questionData}) => {
  return (
    <>
    <FormContent>
    <FormControl >
    <FormLabel id="demo-radio-buttons-group-label">{questionData.title}</FormLabel>
    <OptionTitles optionTitles={questionData.optionTitles}/>
      {
        questionData.questions.length && questionData.questions.map(question => <QuestionItemContainer key={question.id} question={question}/>)
      }
    </FormControl>
  </FormContent>
  </>
  )
}

export default QuestionCollection