import React from "react";
import CustomerForm from "./customerForm";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import { Button, DialogActions, DialogContent, DialogContentText, 
    // TextField 
} from "@material-ui/core";
interface IFormWrapperProps{
    actionType?:string;
    showForm:boolean;
    handleClose:()=>void;
    handleSubmit:(data:any)=>void;
    selectedCustomerDetail:any;
  }

const FormWrapper =(props:IFormWrapperProps)=> {
    return(
    <Dialog open={props.showForm} onClose={props.handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">{props.actionType} customer </DialogTitle>
    {props.actionType!=="Delete"&&(<DialogContent>
      <DialogContentText>
        Please fill the form to add/Update the customer details
      </DialogContentText>
    <CustomerForm handleClose={props.handleClose} handleSubmit={props.handleSubmit} actionType={props.actionType} selectedCustomerDetail={props.selectedCustomerDetail}/>
    </DialogContent>
    )}
    {props.actionType==="Delete"&&(<DialogContent>
      <DialogContentText>
        Deleting this customer will remove the customer details!!
      </DialogContentText>
      <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={props.handleSubmit} color="primary">
        {props.actionType}
      </Button>
    </DialogActions>
    </DialogContent> 
    )}
    
  </Dialog>
    )}
   export default FormWrapper;
