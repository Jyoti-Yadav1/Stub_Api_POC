import React from "react";
import { reduxForm } from "redux-form";

export const onSubmitFail = () => {
  return setTimeout(() => {
    const elements = document && document.getElementsByClassName("errorLabel");
    if (elements && elements.length) {
      elements[0].scrollIntoView();
    }
  }, 100);
};

const Form = (props: any) => {
  const { children, handleSubmit } = props;
  const childrenWithProps = React.Children.map(children, (child) =>
    child
      ? React.cloneElement(child as React.ReactElement<any>, {
          change: props.change,
          reset: props.reset,
          valid: props.valid,
        })
      : ""
  );
  return (
    <form
      onSubmit={handleSubmit}
      onKeyPress={props.onKeyPress}
      autoComplete="off"
    >
      {childrenWithProps}
    </form>
  );
};

export default reduxForm({ enableReinitialize: true, onSubmitFail })(Form);
