import React, { useState } from 'react';

import Navbar from './Navbar';
import GitHubJobs from './github/GitHubJobs';

function Home() {

    const [globalUser, setGlobalUser] = useState(null);

    return (
        <div style={{background: "#dae4f5"}}>
            <Navbar setGlobalUser={setGlobalUser} />
            {globalUser ? 
                <h4>Hello, {globalUser.firstName}</h4>
                        :
                null
            }
            <div className="container">
                <GitHubJobs />
            </div>
        </div>

    );

}


export default Home;