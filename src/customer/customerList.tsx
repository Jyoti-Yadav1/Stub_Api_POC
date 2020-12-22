import React from "react";
import styled from "styled-components";
const StyledWrapper= styled.div`
  font-size: 2em;
  margin:20px auto;
  padding: 0px;
  border: 2px solid #616161;
  border-radius: 3px;
  background-color:#f9fbe7;
`;
const StyleRows= styled.div`
display:flex;
flex-direction:row;
border-bottom:2px solid #616161;
&:hover {
  background-color:#d4e157; 
}
`;
const LabelText= styled.div`
font-size:1.2em;
font-weight:700;
margin:0.29em;
align-content:center;
width:20%;
`;

const StyledNormalText= styled.div`
font-weight:400px;
margin:0 0.28em;
align-content:center;
width:20%;
`;

interface IProps{
  readonly customerDetails:any;
  readonly fetchCustomerDetails:()=>void;
  readonly getSelectedCustomerDetails:(phoneNumber:any)=>void
}
class CustomerList extends React.Component<IProps> {

  componentDidUpdate(prevProps:any){
if(this.props.fetchCustomerDetails!==prevProps.fetchCustomerDetails){
  this.props.fetchCustomerDetails();
}
  }
 
  componentDidMount(){
    this.props.fetchCustomerDetails();
  }
  clickHandler=(phoneNumber:any)=>{
    this.props.getSelectedCustomerDetails(phoneNumber);
  }
    render(){
      const {customerDetails}= this.props;
      return (  
        <div>
         {!customerDetails&&(<h1>Loading data...</h1>)}
        {customerDetails&&(
          <StyledWrapper>
        <StyleRows>
          <LabelText>First name</LabelText><LabelText>Last name</LabelText><LabelText>Ph. number</LabelText><LabelText>Email address</LabelText>
        </StyleRows>
       {customerDetails.map((customer:any,index:number)=>{
       return(
        <StyleRows onClick={()=>this.clickHandler(customer.phoneNumber)} >
          <StyledNormalText>{customer.firstName}</StyledNormalText>
          <StyledNormalText>{customer.lastName}</StyledNormalText>
          <StyledNormalText>{customer.phoneNumber}</StyledNormalText>  
          <StyledNormalText>{customer.emailAddress}</StyledNormalText>
          </StyleRows>
       );
       })
      }
         </StyledWrapper>)}

          </div>
      )
    }
}
export default CustomerList;
