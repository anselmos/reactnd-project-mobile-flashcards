// List of Decks!
import React from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import DeckListElement from "./DeckListElement";
import {DECK_LIST} from "../DATA"

function DeckListElementClicked(deck_element, navigation){
    // TODO move to Deck -> with a Animation!
    navigation.navigate('Details', {
        deck: deck_element,
    });
}

export default function DeckList({navigation}){
  return (
    <View>
      <Text>This is the list of decks</Text>
        <FlatList
        data={DECK_LIST}

        renderItem={
            ({item}) =>
                (
                    <TouchableHighlight key={item.id} onPress={DeckListElementClicked.bind(this, item, navigation)}>
                        <DeckListElement
                        key={item.id}
                        title={item.title}
                        number_of_cards={Object.keys(item.cards).length}
                        />
                    </TouchableHighlight>
                )
        }

        />
    </View>
  );
}