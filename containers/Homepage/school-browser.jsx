import React from 'react';
import { useStoreon } from 'storeon/react';

const SchoolBrowser = ({ session }) => {
    const { stateId, districtId } = useStoreon('stateId', 'districtId');

    return (
        <>
            <div>School Listing</div>
            <div>Session: {session}</div>
            <div>State: {stateId}</div>
            <div>District: {districtId}</div>
        </>
    );
};

export default SchoolBrowser;
