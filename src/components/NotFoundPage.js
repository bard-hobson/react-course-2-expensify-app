import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>AHHHH! You are lost! You shall not pass! You have been 404'd!</p>
        <Link to="/">Go Home!</Link>
    </div>
);

export default NotFoundPage;