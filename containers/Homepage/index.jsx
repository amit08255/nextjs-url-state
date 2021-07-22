import React from 'react';
import { useStoreon } from 'storeon/react';
import DistrictBrowser from './district-browser';
import SchoolBrowser from './school-browser';
import StateBrowser from './state-browser';

const HomepageContainer = ({ session }) => {
    const { filter } = useStoreon('filter');

    return (
        <>
            {
                filter === 'state' ? (
                    <StateBrowser session={session} />
                ) : null
            }
            {
                filter === 'district' ? (
                    <DistrictBrowser session={session} />
                ) : null
            }
            {
                filter === 'school' ? (
                    <SchoolBrowser session={session} />
                ) : null
            }
        </>
    );
};

export default HomepageContainer;
