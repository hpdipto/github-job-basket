import React, { useState } from 'react';

import Navbar from './Navbar';
import GitHubJobs from './github/GitHubJobs';

function Home() {

    const [globalUser, setGlobalUser] = useState(null);

    return (
        <div>
            <Navbar setGlobalUser={setGlobalUser} />
            {globalUser ? 
                <h4>Hello, {globalUser.firstName}</h4>
                        :
                null
            }
            <GitHubJobs />
        </div>
    );

}


export default Home;