import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/actions/users";


const UpdateUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.users.user.user);

    const [name, setName] = useState("");
    const [idCard, setIdCard] = useState("");
    const [semester, setSemester] = useState("");
    const [classes, setClasses] = useState("");
    const [admin, setAdmin] = useState(false);
    const [prove, setProve] = useState(false);
    const [image, setImage] = useState("");
    const [candidate1, setCandidate1] = useState(false);
    const [candidate2, setCandidate2] = useState(false);
    const [voted1, setVoted1] = useState(false);
    const [voted2, setVoted2] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputData = {
            name, idCard, semester, classes, admin, prove, image, candidate1, candidate2, voted1, voted2
        }

        dispatch(updateUser(user._id, inputData));
        history.push("/users");
    }

    useEffect(() => {
        if(user){
            setName(user.name);
            setIdCard(user.idCard);
            setSemester(user.semester);
            setClasses(user.classes);
            setImage(user.image);
            setAdmin(user.admin);
            setProve(user.prove);
            setCandidate1(user.candidate1);
            setCandidate2(user.candidate2);
            setVoted1(user.voted1);
            setVoted2(user.voted2);
        }
    }, [user])
    
    return (
        <div className="container">
            <div className="card mx-auto mt-4" style={{width: 400}}>
                <div className="card-body">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control mb-1"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-1"
                            name="idCard"
                            value={idCard}
                            placeholder="Enter your id card"
                            onChange={e => setIdCard(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            className="form-control mb-1"
                            name="semester"
                            value={semester}
                            placeholder="Enter your semester"
                            onChange={e => setSemester(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-1"
                            name="classes"
                            value={classes}
                            placeholder="Enter your name"
                            onChange={e => setClasses(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-1"
                            name="image"
                            value={image}
                            placeholder="Enter your image"
                            onChange={e => setImage(e.target.value)}
                        />
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="admin"
                                value={admin}
                                onChange={e => setAdmin(e.target.checked)}
                                id="admin"
                                checked={admin}
                            />
                            <label className="form-check-label" htmlFor="admin">Admin</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="prove"
                                value={prove}
                                onChange={e => setProve(e.target.checked)}
                                id="prove"
                                checked={prove}
                            />
                            <label htmlFor="prove" className="form-check-label">Proved</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="candidate1"
                                value={candidate1}
                                onChange={e => setCandidate1(e.target.checked)}
                                id="candidate1"
                                checked={candidate1}
                            />
                            <label htmlFor="candidate1" className="form-check-label">Chairman Candidate</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="candidate2"
                                value={candidate2}
                                onChange={e => setCandidate2(e.target.checked)}
                                id="candidate2"
                                checked={candidate2}
                            />
                            <label htmlFor="candidate2" className="form-check-label">Vice Chairman Candidate</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="voted1"
                                value={voted1}
                                onChange={e => setVoted1(e.target.checked)}
                                id="voted1"
                                checked={voted1}
                            />
                            <label htmlFor="voted1" className="form-check-label">Voted for Chairman</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="voted2"
                                value={voted2}
                                onChange={e => setVoted2(e.target.checked)}
                                id="voted2"
                                checked={voted2}
                            />
                            <label htmlFor="voted2" className="form-check-label">Voted vice Chairman</label>
                        </div>
                        <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default UpdateUser;
