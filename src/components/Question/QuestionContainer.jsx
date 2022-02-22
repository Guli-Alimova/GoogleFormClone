import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { addSelectedAnswer, removeSelectedAnswer, sumTotalScore } from './../../redux/ActionCreators/ActionCreators';

const QuestionProvider = (props) => {
  const [score, setScore] = useState()
  const onOptionSelected = (e) => {
    setScore(e.target.value)
  }
  return <Question {...props} score={score} onOptionSelected={onOptionSelected}/>
}


const mapStateToProps = (state) => ({})
const QuestionContainer = connect(mapStateToProps, {addSelectedAnswer, removeSelectedAnswer, sumTotalScore})(QuestionProvider)
export default QuestionContainer