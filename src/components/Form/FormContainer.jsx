import React from 'react'
import { connect } from 'react-redux'
import Form from './Form';

const FormProvider = (props) => {
  return <Form {...props}/>
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    totalScore: state.questions.totalScore,
  }
}

const FormContainer = connect(mapStateToProps, {})(FormProvider)

export default FormContainer