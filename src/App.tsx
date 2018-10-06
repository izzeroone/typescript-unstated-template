import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'unstated';
import HelloComponent from './components/HelloComponent';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <HelloComponent enthusiasmLevel={12} name="rabbit tank"></HelloComponent>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
