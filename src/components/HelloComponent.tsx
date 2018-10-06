import { Component } from "react";
import { Provider, Subscribe } from "unstated";
import HelloContainer from "./HelloContainer";
import React from "react";
import Hello from "./Hello";
import HelloProps from "./HelloProps";

export default class HelloComponent extends Component<HelloProps>{
    render() {
        return(
            <Provider>
            <Subscribe to={[HelloContainer]}>
            {(helloContainer: HelloContainer) => (
                <Hello helloContainer={helloContainer} name={this.props.name} enthusiasmLevel={this.props.enthusiasmLevel}></Hello>
            )}
            </Subscribe>
            </Provider>
        )
    }
}