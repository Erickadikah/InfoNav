import React from 'react';
import Content from './Content';
import Search from './Search';
import HomeSidebar from './HomeSidebar';
import './Home.css';
import SignIn from './mysignin';
import { useNavigate } from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';


function Home() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    };
    return (
        <div>
            <div className='home'>
            <div>
            <button onClick={logout} style={{
                height: '50px',
                width: '190px',
                borderRadius: '20px',
                top: '0',               
                diplay: 'flex',
                border: '3px solid #ED553B'
                 }}>logout</button>
            <HomeSidebar /> 
            </div>               
                <Content />
              
            </div>
        </div>
    )
}

export default Home;
