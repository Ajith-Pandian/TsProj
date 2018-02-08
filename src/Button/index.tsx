import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export interface Props {
  onClick: () => void;
  isActive: boolean;
}
export interface State {
  active: boolean;
}

export default class Button extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { active: props.isActive };
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: this.state.active ? "blue" : "powderblue"
          }
        ]}
        onPress={() =>
          this.setState(prevState => ({ active: !prevState.active }))
        }
      >
        <Text style={styles.text}>Click me...!</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
