import React, { useState } from 'react';

import Navbar from './Navbar';


function Home() {

    const [globalUser, setGlobalUser] = useState(null);

    return (
        <div>
            <Navbar setGlobalUser={setGlobalUser} />
            {globalUser ? 
                <h3>Hello, {globalUser.firstName}</h3>
                        :
                null
            }
        </div>
    );

}


export default Home;