import { createSelector } from 'reselect';

const selectClients = (state) => state.clients;

export const selectClientList = createSelector([selectClients], client=> client.clients);
export const selectClient = (clientId) => createSelector([selectClients], client => client.clients[clientId])

export const selectAllClientCount =createSelector([selectClients], client=> Object.keys(client.clients).length);