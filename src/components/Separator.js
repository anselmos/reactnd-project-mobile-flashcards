import React from 'react';
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => (
    <View style={styles.separator} />
);

export default Separator;
