import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({nav}) => {

    const {name, id} = nav;  
    return (
        <div>
            <Link to={`/categories/${id}`} className="btn btn-circle bg-gradient-to-r from-primary to-secondary text-white">
             {name}
            </Link> 
        </div>
    );
};

export default SideNav;