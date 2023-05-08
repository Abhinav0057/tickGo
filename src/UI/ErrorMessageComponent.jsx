import React from "react";

const ErrorMessageComponent = (props) => {
  return (
    <div className=" text-left  ">
      {props.errorMessage ? (
        <p className="text-danger p-0 m-0 " style={{ fontSize: "12px" }}>
          {props.errorMessage}
        </p>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default ErrorMessageComponent;
