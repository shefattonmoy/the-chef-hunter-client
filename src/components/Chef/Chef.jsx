import React, { useState } from 'react';
import './Chef.css';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chef, setChef] = useState([]);
    const { chefID } = useParams();
    const singleChef = useLoaderData();

    fetch('https://localhost:5000/chefs')
        .then((response) => response.json())
        .then(data => setChef(data));

    console.log(chef);

    return (
        <div className='chef-container-parent'>
            <div className="chef-container">
                {
                    chef.map(sc => <ChefCard
                        key={sc.chefID}
                        sc={sc}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;