import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {decks} from "./src/decks/decks.reducer";

export const logger = (store) => (next) => (action) => {
  console.info('%cINFO:', 'color: yellow', `Dispatching a ${action.type} action with payload:`, action.payload);
  const result = next(action);
  console.info('%cNext State:','color: cyan', store.getState());
  return result;
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        decks
    }),
  composeEnhancer(applyMiddleware(logger)),
);

export default store;
