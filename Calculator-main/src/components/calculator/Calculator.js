import React from "react";
import "./calculator.css";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.displayEquation = this.displayEquation.bind(this);
    this.state = {
      keys: [
        {
          display: "AC",
          id: "clear",
          class: "clear",
        },
        {
          display: "/",
          id: "division",
          class: "operator",
        },
        {
          display: "*",
          id: "multiplication",
          class: "operator",
        },
        {
          display: 7,
          id: "seven",
          class: "number",
        },
        {
          display: 8,
          id: "eight",
          class: "number",
        },
        {
          display: 9,
          id: "nine",
          class: "number",
        },
        {
          display: "-",
          id: "minus",
          class: "operator",
        },
        {
          display: 4,
          id: "four",
          class: "number",
        },
        {
          display: 5,
          id: "five",
          class: "number",
        },
        {
          display: 6,
          id: "six",
          class: "number",
        },
        {
          display: "+",
          id: "plus",
          class: "operator",
        },
        {
          display: 1,
          id: "one",
          class: "number",
        },
        {
          display: 2,
          id: "two",
          class: "number",
        },
        {
          display: 3,
          id: "three",
          class: "number",
        },

        {
          display: 0,
          id: "zero",
          class: "number",
        },
        {
          display: "=",
          id: "equals",
          class: "equals",
        },
        {
          display: ".",
          id: "decimal",
          class: "operator",
        },
      ],
      upper_display: "",
      bottom_display: "",
    };
  }

  displayEquation(obj) {
    //CLEAR BOTH DISPLAYS
    if (obj.target.className === "clear") {
      this.setState({ upper_display: "" });
      this.setState({ bottom_display: "" });
      //EVALUATE THE EQUATION AND DISPLAY THE RESULT
    } else if (obj.target.className === "equals") {
      const evaluated = eval(this.state.upper_display);

      this.setState({
        upper_display: `${this.state.upper_display}=${evaluated}`,
      });
      this.setState({ bottom_display: evaluated });
    }

    let upper_display = this.state.upper_display;
    let bottom_display = this.state.bottom_display;

    if (
      obj.target.className === "number" ||
      obj.target.className === "operator"
    ) {
      if (obj.target.className === "operator") {
        //IF DISPLAY IS CLEAR CAN NOT START WITH THE OPERATOR
        if (bottom_display === "") {
          this.setState({ bottom_display: "" });
        } else {
          //DISPLAY NUMBERS AND OPERATORS ON THE SCREEN
          if (
            //IF THE LAST CHAR IS AN OPERATOR CAN NOT ADD ANOTHER OPERATOR
            upper_display.charAt(upper_display.length - 1) === "/" ||
            upper_display.charAt(upper_display.length - 1) === "*" ||
            upper_display.charAt(upper_display.length - 1) === "-" ||
            upper_display.charAt(upper_display.length - 1) === "+" ||
            upper_display.charAt(upper_display.length - 1) === "."
          ) {
            this.setState({ upper_display: this.state.upper_display });
          } else {
            upper_display += obj.target.innerText;
            this.setState({
              bottom_display: obj.target.innerText,
              upper_display: upper_display,
            });
          }
        }
      } else if (
        obj.target.className === "number" ||
        obj.target.className === "operator"
      ) {
        if (
          //IF THE LAST CHAR ON THE BOTTOM DISPLAY IS AN OPERATOR THE CAN NOT WRITE ANOTHER OPERATOR
          bottom_display.charAt(bottom_display.length - 1) === "/" ||
          bottom_display.charAt(bottom_display.length - 1) === "*" ||
          bottom_display.charAt(bottom_display.length - 1) === "-" ||
          bottom_display.charAt(bottom_display.length - 1) === "+" ||
          bottom_display.charAt(bottom_display.length - 1) === "."
        ) {
          bottom_display = obj.target.innerText;
        } else {
          bottom_display += obj.target.innerText;
        }

        upper_display += obj.target.innerText;
        this.setState({
          bottom_display: bottom_display,
          upper_display: upper_display,
        });
      }
    }
  }

  render() {
    return (
      <main>
        <div>
          <div className="display_one">{this.state.upper_display}</div>
          <div className="display_two">{this.state.bottom_display}</div>
        </div>
        <div className="buttons_container">
          {this.state.keys.map((obj, index) => {
            return (
              <button
                onClick={this.displayEquation}
                key={index}
                id={obj.id}
                className={obj.class}
              >
                {obj.display}
              </button>
            );
          })}
        </div>
      </main>
    );
  }
}
