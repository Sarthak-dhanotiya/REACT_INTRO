import { useState } from "react";
import React  from 'react';

function Functioncomponent({name,age,gmail,mobilenumber,setname}){
    const [ count,setcount]=useState(0);

    const [changename,setchangename]=useState("");


    const reducecount=()=>{
        setcount(count-1);
    }
    return(
        <div >

            <p>this is functioncomponents</p> 

            <button onClick= {()=>setcount(count+1)}>click here to increment the count value</button>
              <button onClick= {reducecount} >click here to decrement the count value</button>

            <h2>{count}</h2>

            <h3> myname is:{name} age is: {age} gmail address is: {gmail} mobile number is : {mobilenumber}</h3>

<input onChange={(e)=>setchangename(e.target.value)}/> 

<button onClick={()=>setname(changename)}> click it and name is change to </button>

        </div>
    );
};


export default Functioncomponent;