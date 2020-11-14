import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getViceCandidate } from "../store/actions/users";
import ViceCandidate from "../components/viceCandidate";
import { useHistory } from "react-router-dom";


const ViceCandidates = () => {
    const dispatch = useDispatch();
    const viceCandidates = useSelector(state => state.users.viceCandidates.viceCandidates);
    const history = useHistory();
    const authentication = useSelector(state => state.authentication)
    const [viceCandidate, setViceCandidate] = useState(null);

    useEffect(() => {
        if (authentication.isAuthenticated && authentication.user && !authentication.user.prove) {
            history.push("/notProved");
        }
        dispatch(getViceCandidate());
    }, [dispatch, authentication, history]);

    useEffect(() => {

        if (viceCandidates) {
            setViceCandidate(viceCandidates.map(t => (
                <ViceCandidate
                    key={t._id}
                    name={t.name}
                    image={t.image}
                    semester={t.semester}
                    classes={t.classes}
                    votes={t.votes}
                    id={t._id}
                    deadline={t.deadline}
                />
            )))
        }
    }, [viceCandidates])
    return (
        <div className="container">
            <div className="alert alert-info text-center mt-2 lead font-weight-bold">Dooro Gudoomiye ku xigeen.</div>
            <div className="row">
                {viceCandidate}
            </div>
        </div>
    )
}

export default ViceCandidates;