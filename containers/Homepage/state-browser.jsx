import React from 'react';
import Router from 'next/router';

const StateBrowser = ({ session }) => {
    const onChange = () => {
        Router.push(`/?state=${Math.floor(Math.random() * 100)}&filter=district`);
    }

    return (
        <>
            <div>State Listing</div>
            <div>Session: {session}</div>
            <button type="button" onClick={onChange}>Set state</button>
        </>
    );
};

export default StateBrowser;
