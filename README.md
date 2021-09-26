<<<<<<< HEAD
----------------React Basics Start-------------------
import React from "react"
import reactDdom from "react-dom";

reactDom.render(<Main_component />, document.getElementById("root"));

JSX rules: (function Class{return JSX})
->always return single element
->follow HTML scemantics ie.. section/ article/ div etc
->use CamelCase for html atrribures
->class - ClassName
->close every element eg: <input/>,<img/> or it will give an error
->return should have (JSX)

Adding css:
-> import css file using import "./index.css" in double quotations since react needs to know it and css is not a library or a node module

Adding inline css: (pass an object within {} to add styles or any arguments)
-> <tag style={{color:"#617d98",fonstSize:"0.75rem",marginTop:"0.25rem"}}></tag>

JSX comments:
-> {/_ comment _/}

JSX statements:
-> a value in jsx should always be a expression or a value it cannot be a statements
eg: {let x=5;} //will give an error
while {5+5} //will work

passing props to components:
-> props can be passed through function arguments and can be used by either props.property or destructuring the props using {property1,property2,property3} = props

passing children through props:
-> children are the elements within the component tags eg: <Book><p>The para tag including tags is the children of the book component</p></Book>
->we can use them in function using either {props.children} or destructure it using the {children} = props

DRY for passing elements through components:
-> The easiest way to access the elements stored in a array would be to directly call the array in the component function
eg: const CompFunc = ()=>{ return {array}; } but not that if the array contains an object there will be an error
-> therefore we use the array.map((arr)=>{return <component obj={arr}/>}) and in the function destructure using props eg: {arr1,arr2,arr3} = props.obj and use them in our function
->but even if we pass the obj through map there will be a warning for unique key for each component which has to be resolved using spread operator

-> instead of passing obj in props we can directly pass the object using spread operator and the object will be laid out / spreaded out as arguments instead of a single object

Synthetic events in React:
-> Using reacts synthetic events we can use funxtions for on click - onClick etc to get what happens on function click and other events
-> usage is similar using {} to call function but we can use arrow function if we want to call function using arguments. eg: onClick = {()=>clickHandler(author)}

Import Export statements:
use Export default functionName once in the file and no other export statement to do a default export where you can change the name in the file where it is imported.
use export function name to use it in the file as name export ie... import {funcName} from "./func";
------------------------React Basics End----------------------
=======
# react_basics_fbv
React basics only function based views
>>>>>>> 438f9698d5843fd01a937ab7b7ade461aea228cf
