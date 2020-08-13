import ClientActionTypes from './client.actiontypes';

export const fetchClientsStart = () => ({
    type: ClientActionTypes.FETCH_CLIENTS_START
});

export const fetchClientsFailure = (error) => ({
    type: ClientActionTypes.FETCH_CLIENTS_FAILURE,
    payload: error
});

export const fetchClientsSuccess = (clients) => ({
    type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
    payload: clients
});

export const addClient = (client) => ({
    type: ClientActionTypes.ADD_CLIENT,
    payload: client
});

export const updateClient = (client) => ({
    type: ClientActionTypes.UPDATE_CLIENT,
    payload: client
})

export const deleteClient = (clientId) => ({
    type: ClientActionTypes.DELETE_CLIENT,
    payload: clientId
})
