import React from "react";
import {
  StyledSelect,
  StyledInputLabel,
  StyledMenuItem,
  StyledFormControl,
} from "./style";

function Select(props) {
  let { counter, onChange } = props;
  let list = [];

  for (let i = 0; i < counter / 10; i++) {
    list.push(
      <StyledMenuItem key={i} value={i + 1}>
        Page {i + 1}
      </StyledMenuItem>
    );
  }

  return (
    <StyledFormControl>
      <StyledInputLabel>Page</StyledInputLabel>
      <StyledSelect disableUnderline onChange={onChange}>
        {list}
      </StyledSelect>
    </StyledFormControl>
  );
}
export default Select;
