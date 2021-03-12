import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, TextInput} from "react-native-web";

/*
# Does the New Question view function correctly?

- The New Question view includes a form with fields for a question and answer, and a submit button.

- Submitting the form correctly adds the question to the deck.
 */
const Separator = () => (
  <View style={styles.separator} />
);


export default function NewQuestion({navigation, route}){
    const {deck} = route.params;
    // FIXME change into loaded information about how much of deck cards answered by user.
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Create new question for deck : </Text>
            <TextInput label="Question"/>
            <Separator/>
            <TextInput label="Answer" />
            <Button style={styles.button} title="Create new question card."/>
        </View>
      );
}
const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
