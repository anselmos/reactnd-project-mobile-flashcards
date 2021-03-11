import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DeckList from "./src/components/DeckList";
import Deck from "./src/components/Deck";

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
            <Stack.Screen name="Quiz" component={Dashboard} />
            <Stack.Screen name="NewQuestion" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
