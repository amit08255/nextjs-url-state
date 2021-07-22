/**
 * This app is executed every time a page is going to load
 * We are using this page to set global session state for app
 * The session state value will be set and updated only when page is reloaded
 * this is done to ensure that session data is updated only when its coming from server and is valid
 */
import React, { useEffect } from 'react';
import App from 'next/app';
import { sessionStore } from 'stores';
import { StoreContext } from 'storeon/react';

const store = sessionStore();

const genRanHex = size => [...Array(size)].map(
    () => Math.floor(Math.random() * 16).toString(16)
).join('');

function MyApp({ Component, pageProps, session }) {
    useEffect(() => {
        if(session){
            store.dispatch('setSession', session);
        }
    }, [session]);

    return (
        <StoreContext.Provider value={store}>
            <Component {...pageProps} />
        </StoreContext.Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    let isFromServer = !!appContext.ctx.req;
    const appProps = await App.getInitialProps(appContext);

    /*
        setting dummy session data (random string)
        Example - Setting session data from PassportJS ExpressJS
        if(isFromServer === true){
            const serverRequest = appContext.ctx.req;
            const user = serverRequest.user;
            appProps.session = user;
        }
    */

    if(isFromServer === true){
        appProps.session = genRanHex(32);
    }
    return appProps;
}

export default MyApp;
