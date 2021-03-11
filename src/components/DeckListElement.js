import React, {useState} from 'react';
import {Text, View, Animated} from 'react-native';
import {styles} from '../../App'

// Deck element in List
/**
 The deck title
Number of cards in the deck
 */
export default function DeckListElement({title, number_of_cards}){
    // TODO  quiz_callback, new_question_callback
    const [rotateY, changerR] = useState(new Animated.Value(1))
    const [scale, changerY] = useState(new Animated.Value(1))
  return (
    <Animated.View
          style={[styles.direction, {transform: [
      { scale: scale },
      { rotateY: rotateY },
      { duration: -15788 },
      { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS
    ]}]}>
      <Text>
          Deck Title: {title} </Text>
      <Text>Number of cards {number_of_cards} </Text>
    </Animated.View>
  );
}