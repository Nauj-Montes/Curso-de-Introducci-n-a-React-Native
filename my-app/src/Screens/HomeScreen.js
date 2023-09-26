import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const navigation = props.navigation;
  const goToPage = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView>
      <Button title="Go to Settings" onPress={() => goToPage("Settings")} />
      <Text>HomeScreen Page</Text>
    </SafeAreaView>
  );
}
