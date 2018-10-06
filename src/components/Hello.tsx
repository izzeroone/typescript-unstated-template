import { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import HelloContainer from "./HelloContainer";
import HelloProps from "./HelloProps";

interface HelloPropS2 extends HelloProps{
    helloContainer: HelloContainer
}

export default class Hello extends Component<HelloPropS2>{
    constructor(props: HelloPropS2){
        super(props);

        if((props.enthusiasmLevel || 0) <= 0){
            throw new Error('You could little more enthusiastic. :D');
        }
    }

    render() {
        const {helloContainer} = this.props;
        console.log(helloContainer.state);
        return (
                <View style={styles.root}>
                    <Text style={styles.greeting}>
                        Hello{' '}
                        {this.props.name + 
                         helloContainer.getExclamationMarks(helloContainer.state.enthusiasmLevel)
                        }
                    </Text>

                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button
                                title = "-"
                                onPress = {helloContainer.onDecrement}
                                accessibilityLabel="decrement"
                                color="red"
                            />
                        </View>

                        <View style={styles.button}>
                            <Button
                                title="+"
                                onPress={helloContainer.onIncrement}
                                accessibilityLabel="increment"
                                color="blue"
                            />
                        </View>
                    </View>
                </View>

        )
    }
}

// styles
const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttons: {
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'stretch',
      alignSelf: 'center',
      borderWidth: 5,
    },
    button: {
      flex: 1,
      paddingVertical: 0,
    },
    greeting: {
      color: '#999',
      fontWeight: 'bold',
    },
});