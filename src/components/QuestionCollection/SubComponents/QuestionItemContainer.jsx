import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'
import { addSelectedAnswer, sumTotalScore} from './../../../redux/ActionCreators/ActionCreators';

const QuestionItemProvider = (props) => {
  const [score, setScore] = useState()
  const onOptionSelected = (e) => {
    setScore(e.target.value)
  }
  return <QuestionItem {...props} score={score} onOptionSelected={onOptionSelected}/>
}


const mapStateToProps = (state) => ({})
const QuestionItemContainer = connect(mapStateToProps, {addSelectedAnswer, sumTotalScore})(QuestionItemProvider)
export default QuestionItemContainer