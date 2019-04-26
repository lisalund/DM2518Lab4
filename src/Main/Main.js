import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import {Button, Form} from "react-bootstrap";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
    }

    this.tmpMsg = "";

    this.deviceOrientationListener = this.deviceOrientationListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deviceOrientationListener(event) {
    var alpha   = event.alpha; //z axis rotation [0,360)
    var beta     = event.beta; //x axis rotation [-180, 180]
    var gamma   = event.gamma; //y axis rotation [-90, 90]


    //Check if absolute values have been sent
    if (typeof event.webkitCompassHeading !== "undefined") {
      alpha = event.webkitCompassHeading; //for iOS devices
      var heading = alpha
      //document.getElementById("heading").innerHTML = heading.toFixed([0]);
    }
    else {
      alert("Your device is reporting relative alpha values, so this compass won't point north :( Alpha:", typeof event);
      var heading = 360 - alpha; //heading [0, 360)
      //document.getElementById("heading").innerHTML = heading.toFixed([0]);
    }
  }

    handleChange(e){
        this.tmpMsg = e.target.value;
        console.log(this.tmpMsg);
        //this.setState({query: e.target.value});
    }

    handleClick(e){
        this.deviceOrientationListener(e);
    }


    render(){
        return(
            <div className="container">
                <Form inline={true}>
                    <Form.Row>
                        <Form.Control type="text" placeholder="Your message" onChange={this.handleChange}/>
                    </Form.Row>
                    <Button variant="info" onClick={this.handleClick}>Send</Button>
                </Form>
            </div>
        );
    }
}

export default Main;