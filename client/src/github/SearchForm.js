import React from 'react';

function SearchForm({ params, onParamChange }) {

    return (
        <form>
            <div className="form-row">

                <div className="form-group col-md-5">
                    <label htmlFor="description">Description</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i class="fa fa-file" aria-hidden="true"></i></div>
                        </div>
                        <input className="form-control" value={params.description} onChange={onParamChange} type="text" name="description" />
                    </div>
                </div>

                <div className="form-group col-md-5">
                    <label htmlFor="location">Location</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        </div>
                        <input className="form-control" value={params.location} onChange={onParamChange} type="text" name="location" />
                    </div>
                </div>

                <div class="form-group col-md-2">
                    <label htmlFor="full_time">Job Type</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text form-control">
                                <input type="checkbox" value={params.full_time} onChange={onParamChange} name="full_time" id="full_time" />
                            </div>
                        </div>
                        <span className="border col"><label htmlFor="full_time" className="mx-3 mt-1">Full Time</label></span>
                    </div>
                </div>

            </div>
        </form>
    );
}


export default SearchForm;