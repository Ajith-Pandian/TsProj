import React, { Component, ReactElement } from "react";
import { Text } from "react-native";
interface Props {
  style?: object;
}
const TextComponent = (props: Props): JSX.Element => {
  let { style, ...otherProps } = props;
  return <Text style={[{ color: "blue" }, style]} {...props} />;
};

export default TextComponent;
