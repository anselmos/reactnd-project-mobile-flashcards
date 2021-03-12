import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DeckList from "./src/components/DeckList";
import Deck from "./src/components/Deck";
import Quiz from "./src/components/Quiz";
import NewQuestion from "./src/components/NewQuestion";


function Dashboard({route, navigation}){
    const {deck} = route.params;
  return (
    <View style={styles.container}>
          <Deck deck={deck} navigation={navigation}/>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={DeckList} />
            <Stack.Screen name="Details" component={Dashboard} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="NewQuestion" component={NewQuestion} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
