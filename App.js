import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux'
import store from './store';

import ReduxedApp from "./ReduxedApp";
import {setLocalNotification} from "./src/utils/helpers";

class App extends React.Component {
    componentDidMount() {
        // setLocalNotification()
    }


    render() {
        return (
            <Provider store={store}>
                <ReduxedApp/>
            </Provider>
        );
    }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;