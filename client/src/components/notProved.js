import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";

function NotProved() {
    const history = useHistory();
    const proved = useSelector(state => state.authentication);

    useEffect(() => {
        if(proved.user && proved.user.prove){
            history.push("/candidate_chairman")
        }
    })
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <strong className="alert alert-danger text-center">Waxaad u baahan tahay in lagu xajiiyo si aad u codeeyso</strong>
            </div>
        </div>
    )
}

export default NotProved;