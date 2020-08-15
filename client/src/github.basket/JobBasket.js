import React, { useState, useEffect } from 'react';
import axios from 'axios';

import JobCard from './JobCard';


function JobBasket() {

    const [jobs, setJobs] = useState(null);
    const [trashIndex, setTrashIndex] = useState(null);

    useEffect(() => {
        axios.get(`/user/basket`)
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
                console.log(err);
            });


    }, []);


    useEffect(() => {
        if(trashIndex !== null) {
            var currentJobs = [...jobs];
            currentJobs.splice(trashIndex, 1);
            setJobs(currentJobs);
            setTrashIndex(null);
            console.log(currentJobs);
        }

    }, [trashIndex])

    return (
        <div className="container">
           {jobs &&
                jobs.map((job, index) => 
                    <JobCard job={job} index={index} setTrashIndex={setTrashIndex} />
                )
           }
        </div>
    );
}

export default JobBasket;