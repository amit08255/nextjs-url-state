/**
 * Since we dont want nested state context, we are passing session store data as props
 * and browser store data can be accessed separately by container component
 */

import React, { useEffect } from 'react';
import { StoreContext, useStoreon } from 'storeon/react';
import HomepageContainer from 'containers/Homepage';
import { browserStore } from 'stores/browser';

const store = browserStore();

const Homepage = ({ stateId, districtId, status, filter }) => {
    const { session } = useStoreon('session');

    useEffect(() => {
        store.dispatch('browser/setOptions', {
            stateId, districtId, status, filter: filter || 'state',
        });
    }, [stateId, districtId, status, filter]);

    return (
        <StoreContext.Provider value={store}>
            <HomepageContainer session={session} />
        </StoreContext.Provider>
    );
}

Homepage.getInitialProps = async (ctx) => {
    const query = ctx.query;
    const stateId = query.state;
    const districtId = query.district;
    const status = query.status;
    const filter = query.filter;
    const pageProps = { stateId, districtId, filter, status };

    return pageProps;
}

export default Homepage;
