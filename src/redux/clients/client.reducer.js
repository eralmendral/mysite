import ClientActionTypes from './client.actiontypes';

const initialState = {
    clients: [],
    clientsFetching: false,
    clientsFetcherror: null
}

export const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case ClientActionTypes.FETCH_CLIENTS_START:
            return {
                ...state,
                clientsFetching:true
            }
        case ClientActionTypes.FETCH_CLIENTS_FAILURE:
            return {
                ...state,
                clientsFetching:false,
                clientsFetcherror: action.payload
            }
        case ClientActionTypes.FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                clientsFetching:false,
                clients: action.payload
            }
        default:
            return state;
    }
}