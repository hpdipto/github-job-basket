import React, { useState, useEffect } from 'react';
import axios from 'axios';

import JobCard from './JobCard';

import basket from './basket.png';


function JobBasket() {

    const [jobs, setJobs] = useState(null);
    const [trashIndex, setTrashIndex] = useState(null);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        axios.get(`/user/basket`, { cancelToken: cancelToken.token })
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
                console.log(err);
            });


        return () => {
            cancelToken.cancel();
        }

    }, []);


    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        if(trashIndex !== null) {
            var currentJobs = [...jobs];
            currentJobs.splice(trashIndex, 1);
            setJobs(currentJobs);
            setTrashIndex(null);
            
            // update job on server side
            axios.post(`user/basket/update`, currentJobs, { cancelToken: cancelToken.token })
                .then(res => {
                    
                })
                .catch(err => {
                    console.log(err);
                })
        }


        return () => {
            cancelToken.cancel();
        }

    }, [trashIndex]);



    return (
        <div className="container">
           {jobs &&
                jobs.map((job, index) => 
                    <JobCard key={index} job={job} index={index} setTrashIndex={setTrashIndex} />
                )
           }

           {jobs &&
                jobs.length === 0 ?
                    <div className="text-center mt-5">
                        <img src={basket} alt='basket' width="100" />
                        <h4 className="mt-2">Empty Basket</h4>
                    </div>
                                :
                    null
           }
        </div>
    );
}

export default JobBasket;