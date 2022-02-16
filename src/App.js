
import Form from "./components/Form";


function App(props) {
  return (
    <div className="App">
     <Form questionsArray={props.questionsArray}/>
 
    </div>
  );
}

export default App;
