import { Component } from "react";
class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = { number: props, counter: 0 };
        this.changeText = this.changeText.bind(this);
        this.cunterUp = this.cunterUp.bind(this);
    }


    changeText() {
        this.setState({ text: "ok" })
        if (this.state.text == "ok") {
            this.setState({ text: "click" })
        }
    }

    cunterUp() {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        const { counter, text } = this.state;
        return (
            <div>
                <button onClick={this.cunterUp}>{counter}</button>
                <button onClick={this.changeText}>{text}</button>
            </div>
        )
    }
}
export default CustomButton;