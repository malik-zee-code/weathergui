import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "@fontsource/roboto";
import "./Box.scss";
import Getdata from "../axios";
import Weatherinfo from "../Weatherinfo/Weatherinfo";

class Box extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      city: "",
      country: "",
    };
  }
  onHandlecityChange = (value) => {
    this.setState({ city: value });
  };
  onSubmit = (event) => {
    if (event.target.value) {
      this.state.city &&
        Getdata(this.state.city)
          .then((res) => res.data)
          
          .then((data) => this.setState({ data: data }))
    } else {
      this.setState({ data: "" });
    }
  };
  render() {
    return (
      <div className="transparent-glass">
        <TextField
          className="input"
          id="standard-basic"
          label="City Name"
          onKeyPress={this.onSubmit}
          onChange={(e) => this.onHandlecityChange(e.target.value)}
        />
        <Weatherinfo data={this.state.data} />
      </div>
    );
  }
}

export default Box;
