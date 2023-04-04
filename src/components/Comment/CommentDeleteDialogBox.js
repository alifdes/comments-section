import React, { useState } from "react";
import styled from "styled-components";
import { ReplayButton } from "../../styles/CommentStyles";


const Wrapper = styled.div`


.delete-message-dialog {
  width: 80%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media only screen and (min-width: 1000px){
    width: 300px;
  }
}

.delete-message-dialog h2 {
  font-size: 1.2em;
  margin: 0 0 10px;
}

.delete-message-dialog p {
  margin: 0 0 20px;
}

.delete-message-dialog-buttons {
    display: flex;
}

.delete-message-dialog-buttons button {
  border-radius: 3px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  padding: 5px 10px;
}
`;

function CommentDeleteDialogBox({setShowDialog, message,heading}) {
  const handleDelete = () => {
    // Perform delete action here
    console.log("Comment deleted!");
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <Wrapper>
      <div className="delete-message-dialog">
        <h2>{heading}</h2>
        <p>{message}</p>
        <div className="delete-message-dialog-buttons">
          <ReplayButton onClick={handleCancel} style={{background:"#919299"}}>NO,CANCEL</ReplayButton>
          <ReplayButton onClick={handleDelete}style={{background:"red"}}>YES, DELETE</ReplayButton>
        </div>
      </div>
    </Wrapper>
  );
}

export default CommentDeleteDialogBox;
