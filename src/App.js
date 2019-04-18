import React, { Component } from "react";
import OutputScreen from "./components/outputScreen";
import Buttons from "./components/buttons";
import "./App.css";
import HeadingComponent from "./components/heading";

class App extends Component {
  state = {
    expr: "",
    question: "",
    answer: "",
    minWidth: 0
  };

  handleInputClick = input => {
    console.log("Handle click function", input);
    switch (input) {
      case "=":
        try {
          var ans = eval(this.state.question).toString();
        } catch (err) {
          this.setState({ answer: "Math error!" });
        }
        if (ans === undefined) this.setState({ answer: "Math Error" });
        // 6*= will give "Undefined" amd throw error if we try to set "Undefined" for answer
        else this.setState({ answer: ans, question: "", expr: ans });
        break;

      case "Clear":
        console.log("case Clear");
        this.setState({ question: "", answer: "", expr: "" });
        break;

      case "Delete":
        console.log("case Delete");
        let str = this.state.expr;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str, answer: "", expr: str });
        console.log(this.state.question);
        break;

      default:
        var ques = this.state.expr + input;
        this.setState({ question: ques, answer: "", expr: ques });
        console.log(this.state.question);
        break;
    }
  };

  render() {
    return (
      <div className="text-center">
        <HeadingComponent />
        <br />
        <div className="offset-sm-5 calculator border border-secondary rounded">
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
          />
          <div class="row">
            <div class="btn-group">
              <Buttons
                label={"Clear"}
                onInputClick={this.handleInputClick}
                minWidth={75}
              />
              <Buttons
                label={"Delete"}
                minWidth={74}
                onInputClick={this.handleInputClick}
              />
              <Buttons label={"/"} onInputClick={this.handleInputClick} />
            </div>
          </div>
          <div class="row">
            <div class="btn-group">
              <Buttons label={"7"} onInputClick={this.handleInputClick} />
              <Buttons label={"8"} onInputClick={this.handleInputClick} />
              <Buttons label={"9"} onInputClick={this.handleInputClick} />
              <Buttons label={"*"} onInputClick={this.handleInputClick} />
            </div>
          </div>
          <div class="row">
            <div class="btn-group">
              <Buttons label={"4"} onInputClick={this.handleInputClick} />
              <Buttons label={"5"} onInputClick={this.handleInputClick} />
              <Buttons label={"6"} onInputClick={this.handleInputClick} />
              <Buttons label={"-"} onInputClick={this.handleInputClick} />
            </div>
          </div>
          <div class="row">
            <div class="btn-group">
              <Buttons label={"1"} onInputClick={this.handleInputClick} />
              <Buttons label={"2"} onInputClick={this.handleInputClick} />
              <Buttons label={"3"} onInputClick={this.handleInputClick} />
              <Buttons label={"+"} onInputClick={this.handleInputClick} />
            </div>
          </div>
          <div class="row">
            <div class="btn-group">
              <Buttons label={"0"} onInputClick={this.handleInputClick} />
              <Buttons label={"."} onInputClick={this.handleInputClick} />
              <Buttons label={"="} onInputClick={this.handleInputClick} />
              <Buttons label={"00"} onInputClick={this.handleInputClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
