import styled from "styled-components";
import React, { useState } from 'react';
import { Container, Row } from "../styled";
import "./form.css";
import Question from "./Question/Question";


const ForumWrapper = styled.section`
padding:30px 0;

`
const FormContent = styled.div`
background-color: #fff;
border: 1px solid #dadce0;
border-radius: 8px;
margin-bottom: 12px;
padding: 24px;
// max-width:600px;

`

const FroumRow = styled.div`
display:flex;
justify-content:end;
align-items:center;

`

const Form = (props) => {
  const [mainScore, setMainScore] = useState(0)
  return <div>
    <p>
      Main score is {mainScore}
    </p>
    <ForumWrapper>
      <Container>
      <form>
      {
        props.questionsArray.map(q => (
          <Question key={q.id} data={q}  setMainScore={setMainScore}/>
        ))
      }

        </form> 
        
       
      </Container>  
    </ForumWrapper>
  </div>;
};

export default Form;
