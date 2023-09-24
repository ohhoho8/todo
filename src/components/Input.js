import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import { useWindowDimensions } from "react-native";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  const width = useWindowDimensions().width;

  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  placeholder: PropsTypes.string,
  value: PropsTypes.string.isRequired,
  onChangeText: PropsTypes.func.isRequired,
  onSubmitEditing: PropsTypes.func.isRequired,
  onBlur: PropsTypes.func.isRequired,
};

export default Input;
