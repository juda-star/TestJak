import React, { Component } from "react";
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { numMassge: 0, Massge: false };

    }
    componentWillMount() {
        this.state{ numMassge: this.props.numOf, Massge: this.props.messg }
    }
    render() {
        const { numMassge, Massge } = this.state;
        return (
            <div>
                <h1>{numMassge}</h1>
                <h1>{`${Massge}`}</h1>

            </div>
        )
    }

    componentDidUpdate() {
        this.setState({ Massge: 10 })
        console.log("componentDidUpdate");
    }
    componentDidMount() {
        setTimeout(() => {

            alert(`you have ${this.state.numMassge} new massages`)
        }, 3000);
    }


}


export default Chat;