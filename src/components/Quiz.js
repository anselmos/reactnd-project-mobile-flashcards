import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';

/*
# Does the Quiz View function correctly?
- The Quiz view starts with a question from the selected deck.
- The question is displayed, along with a button to show the answer.
- Pressing the 'Show Answer' button displays the answer.
- Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
- The view displays the number of questions remaining.
- When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
- When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
- Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
 */

const Separator = () => (
  <View style={styles.separator} />
);

export default function Quiz({ navigation, route }) {
  const { deck } = route.params;
  // FIXME change into loaded information about how much of deck cards answered by user.
  const questions_remaining = deck.cards.length;
  const question_from_deck = ` ${deck.cards[0].question}`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Question from deck card:
        {question_from_deck}
      </Text>
      <Button style={styles.button} title="Show Answer" />
      <Separator />
      <Text>Did you answered correctly ? </Text>
      <Button style={styles.button} title="Correct!" />
      <Button style={styles.button} title="Incorrect  :( " />
      <Text>
        Number of questions remaining:
        {questions_remaining}
      </Text>
      <Button style={styles.button} title="Add new Question to Deck" />
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
