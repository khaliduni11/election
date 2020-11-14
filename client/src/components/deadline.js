import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deadline } from "../store/actions/users";
import moment from "moment"

const Deadline = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.users.message);
    const [addDeadline, setDeadline] = useState("");
    const [err, setErr] = useState("");
    console.log(moment().isBefore(moment(addDeadline), "day"))

    const handleDeadline = (e) => {
        e.preventDefault();
        if(moment(addDeadline).isSameOrBefore(moment(), "day")){
            setErr("Fadlan taariikh saxan gali")
        }else{
            setErr("")
            dispatch(deadline(addDeadline));
        }
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-4" style={{width: 400}}>
                <div className="card-body">
                    {(message && !err) && (
                        <div className="alert alert-success">{message.message}</div>
                    )}

                    {err && (
                        <div className="alert alert-danger text-center lead">{err}</div>
                    )}
                    <form className="form-group" onSubmit={handleDeadline}>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter date"
                            value={addDeadline}
                            name="addDeadline"
                            onChange={e => setDeadline(e.target.value)}
                        />
                        <button className="btn btn-block btn-primary mt-1">Add/edit deadline</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Deadline;