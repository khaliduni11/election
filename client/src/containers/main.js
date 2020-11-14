import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../components/signup";
import SignIn from "../components/signin";
import NotProved from "../components/notProved";
import Users from "./users";
import UpdateUser from "../components/editUser";
import Candidates from "./candidates";
import ViceCandidates from "./viceCandidates";
import Deadline from "../components/deadline";


const Main = () => {
    return (
        <Switch>
            <Route
                path="/users"
                exact
                render={props => { return (<Users {...props} />) }}
            />
            <Route
                path="/signup"
                exact
                render={props => { return (<SignUp {...props} />) }}
            />
            <Route
                path="/signin"
                exact
                render={props => { return (<SignIn {...props} />) }}
            />
            <Route
                path="/notProved"
                exact
                render={props => { return (<NotProved {...props} />) }}
            />
            <Route 
                path="/update_user"
                exact
                render = {props => {return (<UpdateUser {...props}/>)}}
            />
            <Route 
                path="/candidate_chairman"
                exact
                render = {props => {return (<Candidates {...props}/>)}}
            />
            <Route 
                path="/candidate_vice_chairman"
                exact
                render = {props => {return (<ViceCandidates {...props}/>)}}
            />
            <Route 
                path="/deadline"
                exact
                render = {props => {return (<Deadline {...props}/>)}}
            />
        </Switch>
    )
}


export default Main;