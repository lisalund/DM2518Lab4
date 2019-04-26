import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./Home.css";

class Home extends Component {

    render(){
        return(
            <div className="container">
                <Form inline={true}>
                    <Form.Row>
                        <Form.Control placeholder="Your message"/>
                    </Form.Row>
                    <Button variant="info">Send</Button>
                </Form>
            </div>
        );
    }

}

export default Home;