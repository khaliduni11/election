import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, searchedUsers } from "../store/actions/users";
import User from "../components/user"
import { useHistory } from "react-router-dom";


const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users.users);
    const foundUsers = useSelector(state => state.users.searchedUsers);
    const history = useHistory();
    const authentication = useSelector(state => state.authentication)
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        console.log("inside handleSearch")
        dispatch(searchedUsers(search))
    }

    useEffect(() => {
        if (authentication.isAuthenticated && authentication.user && !authentication.user.prove) {
            history.push("/notProved");
        } else if (authentication.isAuthenticated && authentication.user && authentication.user.prove && !authentication.user.admin) {
            history.push("/candidate")
        }
        dispatch(getAllUsers());
    }, [dispatch, authentication, history]);

    useEffect(() => {

        if(search.length > 0 && foundUsers.length > 0){
            setUser(foundUsers.map(t => (
                <User
                    key={t._id}
                    name={t.name}
                    idCard={t.idCard}
                    image={t.image}
                    voted1={t.voted1}
                    voted2={t.voted2}
                    candidate1={t.candidate1}
                    candidate2={t.candidate2}
                    semester={t.semester}
                    classes={t.classes}
                    votes={t.votes}
                    proved={t.prove}
                    id={t._id}
                />
            )))
        }else if (users) {
            setUser(users.map(t => (
                <User
                    key={t._id}
                    name={t.name}
                    idCard={t.idCard}
                    image={t.image}
                    voted1={t.voted1}
                    voted2={t.voted2}
                    candidate1={t.candidate1}
                    candidate2={t.candidate2}
                    semester={t.semester}
                    classes={t.classes}
                    votes={t.votes}
                    proved={t.prove}
                    id={t._id}
                />
            )))
        }
    }, [users, search, setSearch, foundUsers])
    return (
        <div className="container">
            <div className="input-group my-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="search thtrough Id card"
                    name="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleSearch()}>Search</button>
                </div>
            </div>
            <div className="row">
                {user}
            </div>
        </div>
    )
}

export default Users;