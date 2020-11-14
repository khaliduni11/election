import React from "react";
import {getUser} from "../store/actions/users";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"


const User = ({ name, idCard, image, voted1, voted2, candidate1, candidate2, semester, classes, votes, proved, id}) => {
    const defaultImage = "https://startupheretoronto.com/wp-content/uploads/2018/04/default-user-image-2.png";
    const dispatch = useDispatch();
    const history = useHistory();

    const get_user = () => {
        dispatch(getUser(id));
        history.push("/update_user")
    }
    return (
        <div className="col-md-4 col-sm-12 col-xl-3">
            <div className="card-deck">
                <div className="card mt-2">
                    <img src={image || defaultImage} alt="" className="card-img-top" />
                    <div className="card-title">
                        <div className="row">
                            <strong className="col-6">{name}</strong>
                            <strong className="col-6">{idCard}</strong>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                sem: <strong>{semester}</strong>
                            </div>
                            <div className="col-6">
                                className: <strong>{classes}</strong>
                            </div>
                            <div className="col-6">
                                chrm: {candidate1 === true ? <span>&#10004;</span> : <span>&#10006;</span>}
                            </div>
                            <div className="col-6">
                                vice chrm: {candidate2 === true ? <span>&#10004;</span> : <span>&#10006;</span>}
                            </div>
                            <div className="col-6">
                                voted chrm: {voted1 === true ? <span>&#10004;</span> : <span>&#10006;</span>}
                            </div>
                            <div className="col-6">
                                voted v chrm: {voted2 === true ? <span>&#10004;</span> : <span>&#10006;</span>}
                            </div>
                            <div className="col-6">
                                proved: {proved === true ? <span>&#10004;</span> : <span>&#10006;</span>}
                            </div>
                            <div className="col-6">
                                votes: <strong>{votes}</strong>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={() => get_user()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default User;