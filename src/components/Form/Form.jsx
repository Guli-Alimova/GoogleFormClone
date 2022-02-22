import React from 'react'
import QuestionCollection from '../QuestionCollection/QuestionCollection';
import { Container, ForumWrapper } from '../styled'
import QuestionContainer from '../Question/QuestionContainer';

const Form = ({questions, totalScore}) => {

  return (
    <div>
      <p>{totalScore}</p>
      <ForumWrapper>
        <Container>
          <form>
            {
              questions.length &&
              questions.map(question => {
                return question.type === 'single' ? <QuestionContainer key={question.id} questionData={question}/> : <QuestionCollection key={question.id} questionData={question}/>
              })
            }
          </form> 
        </Container>  
      </ForumWrapper>
    </div>
  )
}

export default Form