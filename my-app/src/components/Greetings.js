import React from "react";
import { Text, View } from "react-native";

import PropTypes from "prop-types";

export default function Greetings(props) {
  const { name } = props;
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
}

Greetings.defaultProps = {
  name: "World",
};

Greetings.propTypes = {
  name: PropTypes.string,
};
