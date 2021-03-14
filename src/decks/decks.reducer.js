export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_CARD = "ADD_CARD";
export const ADD_DECK = "ADD_DECK";
export function decks(state= {}, action){
    switch(action.type){
        case RECEIVE_DECKS:
            return action.decks;
        case ADD_CARD:
            let decks = {... state}
            decks[action.deckId].cards = [... decks[action.deckId].cards, action.card]
            return decks
        case ADD_DECK:
            let newDeckState = {... state}
            newDeckState[action.deck.id] = {... action.deck}
            return newDeckState
        default:
            return state;
    }
}