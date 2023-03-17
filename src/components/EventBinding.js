import React from "react";

class EventBinding extends React.Component {

   greeting = "Ford"

    constructor(props) {
        // super calls the parent component --> React.Component
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye",
        });
        console.log(this.state.introduction)
    }


    render() {
        // return <h1>Hello from the stateful class component!</h1>
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/* <button onClick={this.handleClick}> */}
                {/* <button onClick={this.handleClick.bind(this)}> */}
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;