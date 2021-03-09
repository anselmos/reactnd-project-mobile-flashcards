// List of Decks!
import React from 'react';
import {Text, View, TouchableHighlight, FlatList} from 'react-native';
import DeckListElement from "./DeckListElement";
import {DECK_LIST} from "../DATA"

function DeckListElementClicked(deck_element){
    // TODO move to Deck -> with a Animation!
    console.log(deck_element.title, deck_element.id);
}
function renderDeckListElement({item}){
    return (
        <TouchableHighlight key={item.id} onPress={DeckListElementClicked.bind(this, item)}>
            <DeckListElement
            key={item.id}
            title={item.title}
            number_of_cards={Object.keys(item.cards).length}
            />
        </TouchableHighlight>
        )
}
export default function DeckList(){
  return (
    <View>
      <Text>This is the list of decks</Text>
        <FlatList
        data={DECK_LIST}
        renderItem={renderDeckListElement}/>
    </View>
  );
}