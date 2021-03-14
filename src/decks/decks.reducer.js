export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_CARD = "ADD_CARD";
export function decks(state= {}, action){
    switch(action.type){
        case RECEIVE_DECKS:
            return action.decks;
        case ADD_CARD:
            let decks = {... state}
            decks[action.deckId].cards = [... decks[action.deckId].cards, action.card]
            return decks
        default:
            return state;
    }
}