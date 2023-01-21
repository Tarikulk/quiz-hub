import React, { useState } from 'react';
import SideNav from './SideNav';
import img from "../../../assets/obayedullah.jpg"

const LeftSideNav = () => {

    const [sideNav, setSideNav] = useState([]);
    useState(() =>{
        fetch(`https://exam-hub-server-tarikulk.vercel.app/categories`)
        .then(res => res.json())
        .then(data => {
            setSideNav(data)
        })
    }, [])

    return (
       <div className='bg-base-100 shadow-2xl py-10 w-96 h-full flex justify-center items-center flex-col'>
        <div className="avatar py-10">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="img" />
        </div>
        </div>
         <div className="grid grid-cols-3 gap-5 py-3">
            {
                sideNav?.map(nav => <SideNav
                key={nav.id}
                nav={nav}
                ></SideNav>)
            } 
        </div>
       </div>
    );
};

export default LeftSideNav;