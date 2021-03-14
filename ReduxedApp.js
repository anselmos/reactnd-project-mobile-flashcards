import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DeckList from "./src/components/DeckList";
import Quiz from "./src/components/Quiz";
import NewQuestion from "./src/components/NewQuestion";
import {createStackNavigator} from '@react-navigation/stack';
import Deck from "./src/components/Deck";
import {getDecks} from "./src/DATA";
import {receiveDataAction} from "./src/decks/decks.action";
import {connect} from "react-redux";
import NewDeck from "./src/components/NewDeck";
const Stack = createStackNavigator();

// TODO move to redux-thunk!
async function getOrUpdateDecksData(){
    const decks = await getDecks();
    this.props.dispatch(receiveDataAction(decks));
}
class ReduxedApp extends React.Component {
    componentDidMount() {
        getOrUpdateDecksData.call(this);
    }
    render(){
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={DeckList}/>
                <Stack.Screen name="Details" component={Deck}/>
                <Stack.Screen name="Quiz" component={Quiz}/>
                <Stack.Screen name="NewQuestion" component={NewQuestion}/>
                <Stack.Screen name="NewDeck" component={NewDeck}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}
function mapStateToProps ({ decks }) {
  return {
    decks: decks,
  }
}

export default connect(mapStateToProps)( ReduxedApp );
