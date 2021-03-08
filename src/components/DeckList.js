// List of Decks!
import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import DeckListElement from "./DeckListElement";

const deck_list = {
    ["firstIdOfDeck"]: {title: "First deck", cards: {["first"]: {}, ["second"]: {}}},
    ["firstIdOfDeck2"]: {title: "Second deck", cards: {["first"]: {}}}
}

function DeckListElementClicked(deck_element){
    // TODO move to Deck -> with a Animation!
    console.log(deck_element.title);
}
export default function DeckList(){
  return (
    <View>
      <Text>This is the list of decks</Text>
        <View>
        {Object.keys(deck_list).map((key) => {
            return (
                <TouchableHighlight key={key} onPress={DeckListElementClicked.bind(this, deck_list[key])}>
                    <DeckListElement
                        key={key}
                        title={deck_list[key].title}
                        number_of_cards={Object.keys(deck_list[key].cards).length}
                    />
                </TouchableHighlight>
            )
        })}
        </View>
    </View>
  );
}