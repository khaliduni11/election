import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCandidate} from "../store/actions/users";
import Candidate from "../components/candidate";
import {useHistory} from "react-router-dom";


const Candidates = () => {
    const dispatch = useDispatch();
    const candidates = useSelector(state => state.users.candidates.candidates);
    const history = useHistory();
    const authentication = useSelector(state => state.authentication)
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        if (authentication.isAuthenticated && authentication.user && !authentication.user.prove) {
            history.push("/notProved");
        }
        dispatch(getCandidate());
    }, [dispatch, authentication, history]);

    useEffect(() => {

        if(candidates){
            setCandidate(candidates.map(t => (
                <Candidate 
                    key={t._id}
                    name={t.name}
                    image={t.image}
                    semester={t.semester}
                    classes={t.classes}
                    votes={t.votes}
                    id={t._id}
                    voted1={t.voted1}
                    deadline = {t.deadline}
                />
            )))
        }
    }, [candidates])
    return (
        <div className="container">
            <div className="alert alert-info text-center mt-2 lead font-weight-bold">Dooro gudoomiye.</div>
            <div className="row">
                {candidate}
            </div>
        </div>
    )
}

export default Candidates;