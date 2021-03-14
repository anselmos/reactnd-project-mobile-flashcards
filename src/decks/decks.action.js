import {RECEIVE_DECKS, ADD_CARD, ADD_DECK} from './decks.reducer'

export function receiveDataAction (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}
export function addCard(deckId, card){
  return {
    type: ADD_CARD,
    deckId, card
  }
}

export function addDeck(deck){
  return {
    type: ADD_DECK,
    deck
  }
}