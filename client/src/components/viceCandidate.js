import React, { useState } from "react";
import { voteCandidateViceChairman } from "../store/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";


const Candidate = ({ name, image, semester, classes, votes, id, deadline }) => {
    const defaultImage = "https://startupheretoronto.com/wp-content/uploads/2018/04/default-user-image-2.png";
    const dispatch = useDispatch();
    const voted2 = useSelector(state => state.authentication.user.voted2);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disable = moment(deadline).isBefore(moment(Date.now())) || voted2 ? true : false;
    const handleVote = () => {
        handleClose();
        dispatch(voteCandidateViceChairman(id))
    }


    return (
        <div className="col-md-4 col-sm-12 col-xl-3">
            <div className="card-group">
                <div className="card mt-2">
                    <div className="card-header">
                        <strong className="col-6">{name}</strong><br />
                    </div>
                    <img src={image || defaultImage} alt="" className="card-img-top" />
                    <div className="card-title ml-1">

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <span className="text-muted">sem:</span> {semester} {classes.toUpperCase()}
                            </div>

                            <div className="col-6">
                                votes: <strong>{votes}</strong>
                            </div>
                        </div>
                    </div>
                    {}
                    <Button disabled={disable ? true: false} variant="warning" onClick={handleShow}>
                        Codkaaga sii
                    </Button>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Codkaaga hubi! {id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Ma hubtaa inaad codkaaga siisay <strong>{name}</strong>?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleVote}>
                                Haa
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Maya
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </div>


        </div>
    )
}

export default Candidate;