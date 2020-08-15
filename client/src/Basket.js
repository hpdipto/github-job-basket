import React, { useState } from 'react';

import Navbar from './Navbar';
import JobBasket from './github.basket/JobBasket';

function Basket() {

    const [globalUser, setGlobalUser] = useState(null);

    return (
        <div style={{background: "#dae4f5"}}>
            <Navbar setGlobalUser={setGlobalUser} />
            {globalUser ?
                <h4 className="container mt-2">{globalUser.firstName}'s Basket</h4>
                        :
                null
            }
            <JobBasket />
        </div>
    );
}

export default Basket;