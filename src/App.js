import './App.css';
import react, { useState } from 'react';

import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import ThirdComponent from './Components/ThirdComponent';
import FourthComponent from './Components/FourthComponent';
import FifthComponent from './Components/FifthComponent';


function App() {

  let stateless = ""
  let [newstatefull, setstate] = useState(stateless)

  const changeState = (props) => {
    setstate(newstatefull=props)
  }

  let fourthvar = newstatefull

  let myplace=""
  let [mystatefullplace,setstateplace]=useState(myplace)
  
  const changeplace=(props)=>{
    setstateplace(mystatefullplace=props)
  }

  let singleObj = [{
    name: 'siri',
    place: mystatefullplace,
    age: 24
  },
  {
    name: 'pasha',
    place: 'erragadda',
    age: 25
  }];
  return (

    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent varname={fourthvar} varobj={singleObj} />
      <FifthComponent changeState={changeState} changeplace={changeplace}/>
    </div>
  );
}

export default App;
