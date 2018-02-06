import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";

export interface Props {}
export interface State {
  name: string;
}
export default class App extends Component<Props, State> {
  state = { name: "Buddy" };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome {this.state.name}!</Text>
        <Button onClick={() => {}} isActive={true} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
