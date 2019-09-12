// Higher Order Component (HOC) - A component (HOC) that renders another component (regular component)
// Reuse code 
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( // This is the (HOC)
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Not Authenticated : Please Login to view</p>
            )}
            
        </div>
    );
};
const AuthInfo = RequireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));