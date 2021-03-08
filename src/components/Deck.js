import React from 'react';
import {Text, View} from 'react-native';
// Individual deck card.
/**
 The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck
 */
export default function Deck({title, number_of_cards, quiz_callback, new_question_callback}){
    // TODO  quiz_callback, new_question_callback
    number_of_cards = 1;
  return (
    <View>
      <Text>Deck Title: {title} </Text>
      <Text>Number of cards {number_of_cards} </Text>
      <Text>Option to start a quiz for that deck</Text>
      <Text>Option to add a new question to the deck</Text>
    </View>
  );
}