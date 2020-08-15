import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Modal } from 'react-bootstrap';


function JobCard({ job, index, setTrashIndex }) {

    const [detailsModal, setDetailsModal] = useState(false);
    const [applyModal, setApplyModal] = useState(false);
    

    // remove the job
    const trashIt = () => {
        setTrashIndex(index);
    }


    return (
        <div>    
            <div className="card my-3">
                <div className="card-body">
                    {/*<div className="d-flex justify-content-between">*/}
                    <div className="row">
                        {/* className="col" omit to make the align correct */}
                        <div className="">
                            <div className="card-title">
                                <button className="btn btn-link" onClick={() => setDetailsModal(!detailsModal)}><h5>{job.title}</h5></button>
                            </div>
                        </div>
                        <div className="col text-right">
                            <img className="img-fluid" src={job.company_logo} alt="company-logo" width="100" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="badge badge-secondary">{job.type}</span>
                        </div>
                        <div className="col">
                            <span><i className="fa fa-clock-o" aria-hidden="true"></i> {moment(job.created_at).fromNow()}</span>
                        </div>
                    </div>
                    
                    <div className="row mt-2">
                        <div className="col">
                            <span><i className="fa fa-briefcase" aria-hidden="true"></i> {job.company}</span>
                        </div>
                        <div className="col">
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}</span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col">
                            <button className="btn btn-secondary btn-block" onClick={() => setApplyModal(!applyModal)}>
                                <i className="fa fa-question-circle" aria-hidden="true"></i> How to Apply
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary btn-block" onClick={trashIt}>
                                <i className="fa fa-trash" aria-hidden="true"></i> Trash it!
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <Modal show={detailsModal} onHide={() => setDetailsModal(!detailsModal)} size="lg" animation={false} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Job Description
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ReactMarkdown source={job.description} escapeHtml={false}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setDetailsModal(!detailsModal)} >Close</button>
                  </Modal.Footer>
                </Modal>
            </div>

            <div>
                <Modal show={applyModal} onHide={() => setApplyModal(!applyModal)} animation={false} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      How to Apply
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center" style={{ wordBreak: 'break-all' }}>
                    <ReactMarkdown source={job.how_to_apply} escapeHtml={false} linkTarget="_blank" />
                  </Modal.Body>
                </Modal>
            </div>

        </div>
        
    );
}

export default JobCard;