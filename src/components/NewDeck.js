import React, {useRef} from 'react';
import {Button, StyleSheet, Text, TextInput, View,} from 'react-native';
import {addDeck} from '../decks/decks.action'
import {connect} from "react-redux";
import {generateUID} from "./../DATA"

/*
# Does the New Question view function correctly?
- The New Question view includes a form with fields for a question and answer, and a submit button.
- Submitting the form correctly adds the question to the deck.
 */

function NewDeck({ navigation, dispatch }) {
  const deckTitle = useRef(null);
  const newDeckHandle = ({}) => {
    dispatch(
        addDeck({id: generateUID(), title: deckTitle.current.value, cards: []})
    );
    navigation.goBack()
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Deck Title: </Text>
      <TextInput label="Title" ref={deckTitle} />
      <Button onPress={newDeckHandle.bind(this)} title="Create new deck" />
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
export default connect()( NewDeck );
