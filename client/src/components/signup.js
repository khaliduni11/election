import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../store/actions/authentication";
import {useHistory} from "react-router-dom";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(state => state.error);
    const authentication = useSelector(state => state.authentication);
    const [name, setName] = useState("");
    const [idCard, setIdCard] = useState("");
    const [semester, setSemester] = useState("");
    const [classes, setClass] = useState("");

    const useHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth("signup", { name, idCard, semester, classes }))
    }

    useEffect(() => {
        if(authentication.isAuthenticated && !authentication.user.prove){
            history.push("/notProved");
        }
    }, [authentication, history])
    return (
        <div className="container">

            <div className="card card-body mx-auto mt-4" style={{ width: 450 }}>
                <h1 className="card-title text-dark text-center">Join to vote</h1>
                
                <form className="form-group" onSubmit={useHandleSubmit}>
                    <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Enter name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        type="number"
                        className="form-control mb-1"
                        placeholder="Enter Id card number"
                        name="idCard"
                        value={idCard}
                        onChange={e => setIdCard(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Enter Semester"
                        name="semester"
                        value={semester}
                        onChange={e => setSemester(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Enter class"
                        name="classes"
                        value={classes}
                        onChange={e => setClass(e.target.value)}
                        required
                    />
                    <button className="btn btn-block btn-primary">Submit</button>
                </form>

                {(error && error.error) && (
                    <div className="alert alert-danger lead text-center">{error.error.message}</div>
                )}
            </div>
        </div>
    )
}


export default SignUp;