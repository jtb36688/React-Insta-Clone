import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types"

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

CommentInput.propTypes = {
newcomment: PropTypes.string,
onChange: PropTypes.func,
commentSubmit: PropTypes.func
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

const EllipsisButton = styled.button`
background-color: white;
border: none;
i {
  font-size: 15px;
}
`;

export default CommentInput;
