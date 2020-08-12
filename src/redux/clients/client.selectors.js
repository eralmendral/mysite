import { createSelector } from 'reselect';

const selectClients = (state) => state.clients;

export const selectClientList = createSelector([selectClients], client=> client.clients);