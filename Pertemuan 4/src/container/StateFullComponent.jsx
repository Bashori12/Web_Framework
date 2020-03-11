import React, {Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./StateFullComponent.css";

class Header extends React.Component{
    render(){
        return<h1 className="text">Form Login</h1>
    }
}

class StateFullComponent extends React.Component{
    render(){
        return <Header/>
    }
}

export default StateFullComponent;