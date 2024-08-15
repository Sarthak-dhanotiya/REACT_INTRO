
import './App.css';

import { useState } from 'react';
import Classcomponent from './components/classcomponent';

import Functioncomponent from './components/functioncomponent';

function App() {
   const mobilenumber="7617283833";

   
   const [name,setname]=useState("dhanotiya");
  return (
   
    <div className="App">

      <p>class components:</p>
      <Classcomponent/>


      <p>functioncomponent: </p>
      <Functioncomponent name={name} age={20} gmail={"sarthakdhanotiya44@gmail.com"} mobilenumber={mobilenumber} setname={setname}/>
    </div>

    
  );


}



export default App;



;