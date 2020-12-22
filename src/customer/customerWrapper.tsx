import React from "react";
import ActionButtons from "./actionButtons";
import { connect } from 'react-redux';
import { clearSelectedCustomerDetail,clickOnButton, fetchCustomerDetails, getSelectedCustomerDetails } from '../actions/customerActions'
import CustomerList from "./customerList";
import styled from "styled-components";

const StyledWrapper= styled.div`
`;

interface ICustomerProps {
  readonly customerDetails:any;
  readonly fetchCustomerDetails:()=>void;
  readonly getSelectedCustomerDetails:(phoneNumber:number)=>void;
  readonly selectedCustomerDetail:any;
  readonly clearSelectedCustomerDetail:()=>void;
}

class CustomerWrapper extends React.Component<ICustomerProps> {
  
    render(){
      console.log(this.props.selectedCustomerDetail);
      return (
          <StyledWrapper>
          <ActionButtons selectedCustomerDetail={this.props.selectedCustomerDetail} clearSelectedCustomerDetail={this.props.clearSelectedCustomerDetail}/>
          <CustomerList 
          customerDetails={this.props.customerDetails} 
          fetchCustomerDetails={this.props.fetchCustomerDetails}
          getSelectedCustomerDetails={this.props.getSelectedCustomerDetails}
          /> 
          </StyledWrapper>
      )
    }
}
const mapStateToProps = (state:any) => ({
  customerDetails : state.CustomerReducer?.customerDetails,
  selectedCustomerDetail:state.CustomerReducer?.selectedCustomerDetail?.[0],
});

const mapDispatchToProps =(dispatch:any)=>({ 
  clickOnButton:(type:string,data?:any)=>dispatch(clickOnButton(type,data)),
  fetchCustomerDetails:()=>dispatch(fetchCustomerDetails()),
  getSelectedCustomerDetails:(phoneNumber:number)=>dispatch(getSelectedCustomerDetails(phoneNumber)),
  clearSelectedCustomerDetail:()=>dispatch(clearSelectedCustomerDetail()),
   });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerWrapper);

