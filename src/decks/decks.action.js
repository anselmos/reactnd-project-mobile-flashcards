import {RECEIVE_DECKS, ADD_CARD} from './decks.reducer'

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