import { createStoreon } from 'storeon';

// Initial state, reducers and business logic are packed in independent modules
const browser = (store) => {
    store.on('@init', () => ({
        stateId: null,
        districtId: null,
        status: null,
        filter: null,
    }));

    store.on('browser/setStateId', (_state, stateId) => {
        return({ stateId });
    });

    store.on('browser/setDistrictId', (_state, districtId) => {
        return({ districtId });
    });

    store.on('browser/setStatus', (_state, status) => {
        return({ status });
    });

    store.on('browser/setFilter', (_state, filter) => {
        return({ filter });
    });

    store.on('browser/setOptions', (_state, options) => {
        return(options);
    });
};

export const browserStore = () => createStoreon([
    browser
]);
