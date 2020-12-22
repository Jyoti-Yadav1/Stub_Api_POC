import React from 'react';
import { Field} from 'redux-form';
import Form from "./form";
import styled from 'styled-components';
const StyleField=styled.div`
width:100%;
padding:5px 0;
`;

const StyleButtonWrapper=styled.div`
display: flex;
justify-content: flex-end;
`;
const StyleButton=styled.div`
margin:10px;
`;
const CustomerForm = (props: any) => {
  console.log(props.selectedCustomerDetail);
  return (
    <Form onSubmit={props.handleSubmit} initialValues={props.selectedCustomerDetail} form="customerForm">
    <StyleField>
    <Field name="firstName" component="input" type="text" placeholder="Enter first name" size="60"/>
    </StyleField>
    <StyleField>
    <Field name="lastName" component="input" type="text" placeholder="Enter last name" size="60"/>
    </StyleField>
    <StyleField>
    <Field name="emailAddress" component="input" type="email" placeholder="Enter email address" size="60"/>
    </StyleField>
    <StyleField>
    <Field name="phoneNumber" component="input" type="text" placeholder="Enter phone number" size="60"/>
    </StyleField>
    <StyleButtonWrapper>
    <StyleButton>
    <button type="submit">{props.actionType}</button>
    </StyleButton>
    <StyleButton>
    <button type="reset" onClick={props.handleClose}>Cancel</button>
    </StyleButton>
    </StyleButtonWrapper>
   </Form>
  );
}

export default CustomerForm;
