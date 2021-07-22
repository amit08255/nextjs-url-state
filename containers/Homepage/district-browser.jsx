import React from 'react';
import Router from 'next/router';
import { useStoreon } from 'storeon/react';

const DistrictBrowser = ({ session }) => {
    const { stateId } = useStoreon('stateId');

    const onChange = () => {
        Router.push(`/?state=${stateId}&district=${Math.floor(Math.random() * 100)}&filter=school`);
    }

    return (
        <>
            <div>District Listing</div>
            <div>Session: {session}</div>
            <div>State: {stateId}</div>
            <button type="button" onClick={onChange}>Set district</button>
        </>
    );
};

export default DistrictBrowser;
