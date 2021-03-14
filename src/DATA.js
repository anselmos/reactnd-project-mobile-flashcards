export const DATA = {
    decks: DECK_LIST,
    users: USER_LIST,
}

export const DECK_LIST = [
    {
        id: "firstIdOfDeck", title: "First deck", cards: [
            {id: "CardId1", question: "q1", answer: "a1"},
            {id: "CardId2", question: "q2", answer: "a2"},
        ]
    },
]

export const USER_LIST = [
    {
        id: "currentUser", correct: [
            {deckId: "firstIdOfDeck", cardIds: ["CardId1"]}
        ]
    }
]