import { createStoreon } from 'storeon';
import { persistState } from 'storeon/localstorage';

// Initial state, reducers and business logic are packed in independent modules
const session = (store) => {
    store.on('@init', () => ({ session: null }));

    store.on('setSession', (_state, session) => {
        return({
            session
        });
    });
};

export const sessionStore = () => createStoreon([
    session,
    persistState(['session'])
]);
