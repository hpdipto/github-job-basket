import React, { useState } from 'react';

import Navbar from './Navbar';

function Basket() {

    const [globalUser, setGlobalUser] = useState(null);

    return (
        <div>
            <Navbar setGlobalUser={setGlobalUser} />
            {globalUser ?
                <h4>{globalUser.firstName}'s Basket</h4>
                        :
                null
            }
        </div>
    );
}

export default Basket;