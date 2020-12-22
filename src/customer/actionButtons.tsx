import React from "react";
import { Button } from "./button";
import styled from 'styled-components'
import FormWrapper from "./customerForm/formWrapper";
const StyledWrapper=styled.div`
padding-top:1em;
`;

interface IActionButtonStates{
  showForm:boolean;
  actionType:string;
}
class ActionButtons extends React.Component<any,IActionButtonStates> {
  constructor(props: any){
    super(props);
    this.state={
      showForm:false,
      actionType:"Add",
    }
  }
     buttonClickHandler=(event: any)=>{
      if(event.target.value==="UPDATE_CUSTOMER"){
        this.setState({actionType:"Update"});
        this.setState({showForm:!this.state.showForm});
      }
      if(event.target.value==="ADD_CUSTOMER"){
        this.setState({actionType:"Add"});
        this.setState({showForm:!this.state.showForm});
      }
      if(event.target.value==="DELETE_CUSTOMER"){
        this.setState({actionType:"Delete"});
        this.setState({showForm:!this.state.showForm});
      }
  }
  handleClose=()=>{
    this.setState({showForm:false});
    this.props.clearSelectedCustomerDetail();
  }
  handleSubmit=(data:any)=>{
    console.log(data);
    this.setState({showForm:!this.state.showForm});
   if(this.state.actionType==="Add"){
     alert("Added Successfully!");
   }
   else if(this.state.actionType==="Update"){
    alert("Updated Successfully!");
  } else
  {
    alert("Deleted Successfully!");
  }
  this.props.clearSelectedCustomerDetail();
}
     render(){
       const disableButton=!(this.props.selectedCustomerDetail);
     return (
          <StyledWrapper>  
         <Button click={this.buttonClickHandler} label={"Add customer"} value="ADD_CUSTOMER"/>
         <Button click={this.buttonClickHandler} label={"Update customer"} value="UPDATE_CUSTOMER" disable={disableButton}/>
         <Button click={this.buttonClickHandler} label={"Delete customer"} value="DELETE_CUSTOMER" disable={disableButton}/>
          {this.state.showForm&&(<FormWrapper actionType={this.state.actionType} showForm={this.state.showForm} handleClose={this.handleClose} handleSubmit={this.handleSubmit} selectedCustomerDetail={this.props.selectedCustomerDetail} />)}
          </StyledWrapper>
      )
     }
}
export default ActionButtons;
