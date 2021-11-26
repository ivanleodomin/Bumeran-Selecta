import React from "react";

const AddRecruiterForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "800px",
        height: "600px",
        position: "absolute",
        left: "320px",
        top: "141px",
        padding:'48px',
        boxShadow: '0px 4px 12px',
        borderRadius:'16px',
        border: '2px solid black'

      }}
    >
      <form className="Form">
        <h1>Form Example</h1>
      </form>
    </div>
  );
};

export default AddRecruiterForm;
