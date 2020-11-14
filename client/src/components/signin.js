import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../store/actions/authentication";
import { useHistory } from "react-router-dom";


const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(state => state.error);
    const authentication = useSelector(state => state.authentication);
    const [idCard, setIdCard] = useState("");

    const useHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth("signin", { idCard }))
    }

    useEffect(() => {
        if (authentication.isAuthenticated && authentication.user && !authentication.user.prove) {
            history.push("/notProved");
        }else if (authentication.isAuthenticated && authentication.user && authentication.user.prove) {
            history.push("/candidate_chairman")
        }
    }, [authentication, history])
    return (
        <div className="container">

            <div className="card card-body mx-auto mt-4" style={{ width: 450 }}>
                <h1 className="card-title text-dark text-center">Welcome back!</h1>

                <form className="form-group" onSubmit={useHandleSubmit}>
                    <input
                        type="number"
                        className="form-control mb-1"
                        placeholder="Enter Id card number"
                        name="idCard"
                        value={idCard}
                        onChange={e => setIdCard(e.target.value)}
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


export default SignIn;