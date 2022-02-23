import React from 'react';

const Button = (props) => {
 return (
  <button className={props.className} type={props.type} onClick={props.onClick}> {props.buttonText} </button> 
)}
export default React.memo(Button); 