import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
    INITIALIZE: 'initialize',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}


function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INITIALIZE:
            return { loading: true, hasNextPage: false, jobs: [] }
        case ACTIONS.GET_DATA:
            return { loading: false, hasNextPage: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { loading: false, error: action.payload.error, hasNextPage: false, jobs: [] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return { ...state, hasNextPage: action.payload.hasNextPage }
        default:
            return state;
    }
}


function FetchJobs(params, page) {

    const [state, dispatch] = useReducer(reducer, { loading: true, hasNextPage: false, jobs: [] });

    const URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

    const cancelToken1 = axios.CancelToken.source()
    const cancelToken2 = axios.CancelToken.source()

    useEffect(() => {
        dispatch({ type: ACTIONS.INITIALIZE });

        axios.get(URL, {
                cancelToken: cancelToken1.token,
                params: { markdown: true, page: page, ...params }
            }).then(res => {
                dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
            }).catch(e => {
                if(axios.isCancel(e)) return;
                dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
            });

        axios.get(URL, {
                cancelToken: cancelToken2.token,
                params: { markdown: true, page: page+1, ...params }
            }).then(res => {
                dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } });
            }).catch(e => {
                if(axios.isCancel(e)) return;
                dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
            });


        return () => {
            cancelToken1.cancel();
            cancelToken2.cancel();
        }
    }, [params, page]);

    return state;
}


export default FetchJobs;