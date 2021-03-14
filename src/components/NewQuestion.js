import React, {useRef} from 'react';
import {
  Button, StyleSheet, Text, TextInput, View,
} from 'react-native';
import {addCard} from '../decks/decks.action'
import {connect} from "react-redux";

/*
# Does the New Question view function correctly?

- The New Question view includes a form with fields for a question and answer, and a submit button.

- Submitting the form correctly adds the question to the deck.
 */
const Separator = () => (
  <View style={styles.separator} />
);

function NewQuestion({ route, dispatch }) {
  const { deck } = route.params;
  const question = useRef(null);
  const answer = useRef(null);
  const newQuestionHandle = ({}) => {
    console.log(dispatch)
    dispatch(
        addCard(deck.id, {question: question.current.value, answer: answer.current.value})
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new question for deck : </Text>
      <TextInput label="Question" ref={question} />
      <Separator />
      <TextInput label="Answer" ref={answer} />
      <Button onPress={newQuestionHandle.bind(this)} title="Create new question card." />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
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
export default connect()( NewQuestion );
