import React, { useState } from 'react';

import Navbar from './Navbar';

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
        </div>
    );

}


export default Home;