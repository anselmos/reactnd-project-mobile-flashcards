
let decks = [
    {
        id: "firstIdOfDeck", title: "First deck", cards: [
            {id: "CardId1", question: "q1", answer: "a1"},
            {id: "CardId2", question: "q2", answer: "a2"},
        ]
    },
]
// TODO use for save how many deck-cards answered correctly in this attempt.
let answers = [
    {id: "deckId", correct: ["idOfCardDeckAnsweredCorrectly"]}
]
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
export function getDecks(){
    /**
     * getDecks: return all of the decks along with their titles, questions, and answers.
     */
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}
export function getDeck(deckId){
    /**
     * getDeck: take in a single id argument and return the deck associated with that id.
     */
  return new Promise((res, rej) => {
    setTimeout(() => res({...
        decks.filter(obj => {
            return obj.id === deckId
        })
    }), 1000)
  })
}

export function saveDeckTitle(deckTitle) {
    /**
     saveDeckTitle: take in a single title argument and add it to the decks.
     */
      return new Promise((res, rej) => {
    setTimeout(() => {
        decks = [
            ... decks,
            { id: generateUID(), title: deckTitle, cards: [], }
        ];
    }, 1000)
  })
}
function formatCard(card){
    return {id: generateUID(), ...card}
}
export function addCardToDeck(deckId, card){
    /**
     * addCardToDeck: take in two arguments, deckId and card object, and will add the card to the list of questions
     * for the deck with the associated deckId.
     */
      return new Promise((res, rej) => {

    setTimeout(() => {
        // using mutation to reuse the object instead of re-mapping the whole list. finger-crossed it works.
      let deck_to_update = decks.find(obj =>{return obj.id === deckId});
      console.log(deck_to_update);
      deck_to_update.cards = [... deck_to_update.cards, formatCard(card)];

    }, 1000)
  })
}