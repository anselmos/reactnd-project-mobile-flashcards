import React, {useState} from 'react';
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
    let deck_questions_count = deck.cards.length;
    let[questions_remaining, updateQuestionsRemaining] = useState(deck_questions_count);
    let [currentCard, toggleCurrentCard] = useState(0);
    let [showAnswer, toggleShowAnswer] = useState(false)
    let [correctlyAnswered, toggleCorrectlyAnswered] = useState(0);
    if(questions_remaining === 0){
        return (
            <View><Text>No more questions in the card!, You've answered correctly : {correctlyAnswered} out of {deck_questions_count}</Text></View>
        )
    }
    const question_from_deck = ` ${deck.cards[currentCard].question}`;
    const answer_from_deck = ` ${deck.cards[currentCard].answer}`;
    const correctPressed = ({}) => {
        toggleCurrentCard(currentCard + 1);
        toggleCorrectlyAnswered(correctlyAnswered + 1);
        updateQuestionsRemaining(questions_remaining-1);
  }
    const incorrectPressed = ({}) => {
        toggleCurrentCard(currentCard + 1);
        updateQuestionsRemaining(questions_remaining-1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
         {showAnswer? answer_from_deck: question_from_deck}
      </Text>
      <Button onPress={ () => toggleShowAnswer(!showAnswer)} style={styles.button} title={showAnswer? "Hide Answer": "Show Answer"} />
      <Text>Did you answered correctly ? </Text>
      <Separator />
      <Button onPress={correctPressed.bind(this)} color="green" title="Correct!" />
      <Button onPress={incorrectPressed.bind(this)} color="red" title="Incorrect  :( " />
      <Text>
        Questions remaining:
        {questions_remaining}
      </Text>
      <Button style={styles.button} title="Add new Question to Deck" />
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 40,
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
