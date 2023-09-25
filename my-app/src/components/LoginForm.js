import react from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text>Login Form</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Button
        title="Login"
        onPress={() => console.log("Login button was pressed")}
      />
    </View>
  );
}
