import React from "react";
import "./CommentSection.css";
import styled, { css } from "styled-components";

function CommentInput(props) {
  return (
    <InputContainer>
      <form onSubmit={props.commentSubmit}>
        <CommentInputBox
          value={props.newcomment}
          type="text"
          name="newcomment"
          placeholder="Add a comment..."
          onChange={props.onChange}
        />
      </form>
      <EllipsisButton>
        <i className="fas fa-ellipsis-h" />
      </EllipsisButton>
    </InputContainer>
  );
}


const InputContainer = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
justify-content: space-between;
`;

const CommentInputBox = styled.input`
  width: 85%;
  height: 50px;
  border: none;
  font-weight: bold;
`;

const EllipsisButton = styled.p`
  font-size: 15px;
`;

export default CommentInput;
