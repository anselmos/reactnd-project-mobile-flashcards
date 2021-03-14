import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from "../../App";
/**
 The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck
 */

export default function Deck({route, navigation}) {
    const { deck } = route.params;
  const quiz_callback = ({}) => {
    navigation.navigate('Quiz', {
      deck,
    });
  };
  const new_question_callback = ({}) => {
    navigation.navigate('NewQuestion', {
      deck,
    });
  };
  const number_of_cards = deck.cards.length;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {deck.title}
      </Text>
      <Text>
        Number of cards
        {number_of_cards}
      </Text>
      <Button onPress={quiz_callback.bind(this)} title="Start Quiz" />
      <Button onPress={new_question_callback.bind(this)} title="Add new Question to Deck" />
    </View>
  );
}
