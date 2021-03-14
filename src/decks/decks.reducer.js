export const RECEIVE_DECKS = "RECEIVE_DECKS";
export function decks(state= [], action){
    switch(action.type){
        case RECEIVE_DECKS:
            return action.decks;
        default:
            return state;
    }
}