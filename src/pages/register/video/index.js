import React from 'react';
import DefaultPage from '../../../components/DefautlPage';
import {Link}  from 'react-router-dom';

function RegisterVideo(){
    return (
        <DefaultPage>
            <h1>Register Video</h1>

            <Link to="/register/category">
                Register Category
            </Link>
        </DefaultPage>    
    )
}

export default RegisterVideo;