import React from 'react';
import {Text, View} from 'react-native';
// Deck element in List
/**
 The deck title
Number of cards in the deck
 */
export default function DeckListElement({title, number_of_cards, quiz_callback, new_question_callback}){
    // TODO  quiz_callback, new_question_callback
  return (
    <View>
      <Text>Deck Title: {title} </Text>
      <Text>Number of cards {number_of_cards} </Text>
    </View>
  );
}