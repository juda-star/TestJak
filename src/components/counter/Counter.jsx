import { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { number: props.number }
        this.numberUp = this.numberUp.bind(this);
        this.numberDown = this.numberDown.bind(this);
        this.changeCunter = this.ChangeNum.bind(this);

    }
    numberUp() {
        this.setState({ number: this.state.number + 1 })
    }
    numberDown() {
        this.setState({ number: this.state.number - 1 })
    }
    printEvent(event) {
        console.log(event.target.innerHTML);
    }

    ChangeNum(event) {
        if (event.target.innerHTML == "up") {
            this.setState({ numberUser: this.state.numberUser + 1 })
        }
        else {
            this.setState({ numberUser: this.state.numberUser - 1 })
        }
    }
    printVal(event) {
        console.log(event)
    }

    render() {
        const { number } = this.state
        return (
            <div>
                <input type="number" placeholder={this.state.numberUser} />
                <h1>{this.state.numberUser}</h1>
                <button onClick={this.printEvent}>PRINT EVENT</button>
                <button onClick={this.ChangeNum}>up</button>
                <button onClick={this.ChangeNum}>down</button>
            </div>
        );
    }
}
export default Counter;





// import { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: props.number };
//     this.numberUp = this.numberUp.bind(this);
//     this.numberDown = this.numberDown.bind(this);
//   }
//   numberUp() {
//     this.setState({ number: this.state.number + 1 })
//   }
//   numberDown() {
//     this.setState({ number: this.state.number - 1 })
//   }
//   changeNumber(event) {
//     const btnInnerText = event.target.innerText;
//     btnInnerText =="+" ? this.numberUp() : this.numberDown()
//   }
//   inputHandler(e){
//     this.setState({number:e.target.value})
//   }
//   render() {
//     const { number } = this.state
//     return (
//       <div>
//         <button onClick={this.printEvent}>PRINT EVENT</button>
//         <button onClick={this.changeNumber}>+</button>
//         <input onChange={this.inputHandler} type="number" name="numberInput" id="inputId" placeholder={number}/>
//         <button onClick={this.changeNumber}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;
