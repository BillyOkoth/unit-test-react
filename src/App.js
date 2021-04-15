import React,{useState} from 'react'
import './App.css';


function App (props){
    const [inputIsPristine, setInputPrisitine] = useState(true);
    const [number,setNumber] = useState(0);

    const {min} = props;
    const inputIsValid = number >=min;
    const inputHasError = !inputIsPristine && ! inputIsValid;

    const handleChange = event=>{
       setInputPrisitine(false);
       setNumber(event.target.value);
    }
    const attributes = [
       {key:'1',label:'1'},
       {key:'2',label:'2'},
       {key:'3',label:'3'},
    ]

    return(
       <form>
          <label htmlFor = "input-number">Number:</label>
          <input
          id = "input-number"
          type="number"
          value={number}
          onChange = {handleChange}
          />
          {inputHasError && 
          (<div data-testid="error-msg">
           The number you have entered is invalid!
          </div>)}
          <button data-testid="submit-btn" type="submit" disabled={!inputIsValid} >
            Submit
         </button>


         <br/>
         <select
          onChange = {handleChange}
          data-testid = "select"
         >
            <option>Make your Choice</option>
          {attributes.map(item =>{
             return(
                <option data-testid='select-option' key={item.key} value={item.key}>
                   {item.label}
                </option>
             );
          })}
         </select>


       </form>
      //carry out test for the select.
      
    );
}

App.defaultProps = {
   min:1
}

export default App;
