import React from "react";

const FormErrorMessage = (props) => {
  return (
    <div className="errorMessage-wrapper d-flex justify-content-left">
      {props.errorMessage ? (
        <p className="" style={{ color: "red" }}>
          {props.errorMessage}
        </p>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default FormErrorMessage;
