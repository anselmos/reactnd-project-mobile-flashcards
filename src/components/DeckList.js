// List of Decks!
import React from 'react';
import {FlatList, Text, TouchableHighlight, View,} from 'react-native';
import DeckListElement from './DeckListElement';
import PropTypes from "prop-types";
import {connect} from "react-redux";

function DeckListElementClicked(deck_element, navigation) {
  // TODO move to Deck -> with a Animation!
  navigation.navigate('Details', {
    deck: deck_element,
  });
}

function DeckList({ navigation, decks }) {
    console.log("DeckList", decks)
  return (
    <View>
      <Text>This is the list of decks</Text>
      <FlatList
        data={decks}

        renderItem={
            ({ item }) => (
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

DeckList.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object,
    decks: PropTypes.object,
}
function mapStateToProps ({ decks }) {
  return {
    decks: decks
  }
}
export default connect(mapStateToProps)( DeckList );
