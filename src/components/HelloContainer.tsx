import {Container} from 'unstated'

export interface State {
    enthusiasmLevel: number;
}
export default class HelloContainer extends Container<State>{
    state = {
        enthusiasmLevel: 1
    }
    onIncrement = () => {
        this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1});
    }

    onDecrement = () => {
        this.setState({enthusiasmLevel: this.state.enthusiasmLevel - 1});
    }

    getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');
}