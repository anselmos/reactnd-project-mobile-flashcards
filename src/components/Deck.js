import React from 'react';
import {Text, Button, View} from 'react-native';
// Individual deck card.
/**
 The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck
 */

export default function Deck({deck_id, title, number_of_cards, quiz_callback, new_question_callback}){
  return (
    <View>
      <Text>Deck Title: {title} </Text>
      <Text>Number of cards {number_of_cards} </Text>
      <Button onPress={quiz_callback.bind(this, deck_id)}>Start Quiz</Button>
      <Button onPress={new_question_callback.bind(this, deck_id)}>Add new Question to Deck</Button>
    </View>
  );
}