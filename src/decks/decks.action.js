import {RECEIVE_DECKS} from './decks.reducer'

export function receiveDataAction (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}