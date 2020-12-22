// @ts-ignore
import styled from 'styled-components'
import React from "react";

const StyledButton= styled.button`
  background:${(props:any)=>props.disabled?"#f5f5f5":" #9e9e9e"};   
  color:${(props:any)=>props.disabled?"#8e8e8e":"#212121"};
  font-size: 2em;
  margin:0.25em;
  padding: 0.25em 2em;
  border: 2px solid #616161;
  border-radius: 3px;
  &:hover {
    background-color: ${(props:any)=>props.disabled?"#f5f5f5":"#707070"}; 
  }
  width:auto;
 
`;
interface IButton{
    label?:String;
    click?:(event: any)=>void;
    value?:string;
    disable?:boolean;
}
export const Button=(props:IButton)=>{
    return(
        <StyledButton onClick={props.click} value={props.value} disabled={props.disable}>{props.label}</StyledButton> 
    );   
}
