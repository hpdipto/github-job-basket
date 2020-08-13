import React from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';

import basket from './basket.png';


function JobCard({ job }) {

    return (
                
        <div className="card my-3">
            <div className="card-body">
                {/*<div className="d-flex justify-content-between">*/}
                <div className="row">
                    <div className="col">
                        <div className="card-title">
                            <h5>{job.title}</h5>
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
                        <button className="btn btn-primary btn-block"><i className="fa fa-file-text-o" aria-hidden="true"></i> Detail</button>
                    </div>
                    <div className="col">
                        <a href={job.how_to_apply} target="_blank" className="btn btn-secondary btn-block"><i className="fa fa-external-link" aria-hidden="true"></i> Apply</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default JobCard;