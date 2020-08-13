
import { all, call, takeLatest, put } from 'redux-saga/effects';
import ClientActionTypes from './client.actiontypes';
import { fetchClientsFailure, fetchClientsSuccess } from './client.actions';
import { rsf } from '../../config/fbConfig';





export function* deleteClientAsync(action) {
    yield call(rsf.firestore.deleteDocument, 'clients/' + action.payload);
    yield call(fetchClientsAsync)
}

export function* deleteClient() {
    yield takeLatest(
        ClientActionTypes.DELETE_CLIENT,
        deleteClientAsync
    )
}

export function* updateClientAsync(action) {
    console.log('action paayload:', action.payload)
    yield call(
        rsf.firestore.setDocument,
        'clients/' + action.payload.id,
        action.payload
    );
    yield call(fetchClientsAsync)
}

export function* updateClient() {
    yield takeLatest(
        ClientActionTypes.UPDATE_CLIENT,
        updateClientAsync
    )
}

export function* addClientAsync(action) {
    try {
        yield call(
            rsf.firestore.addDocument,
            'clients',
            action.payload
        );
        yield call(fetchClientsAsync)
    }
    catch (error) {
        yield call(function () { console.log('error adding client', error) })
    }
}

export function* addClient() {
    yield takeLatest(
        ClientActionTypes.ADD_CLIENT,
        addClientAsync
    )
}
export function* fetchClientsAsync() {
    try {
        const snapshot = yield call(rsf.firestore.getCollection, 'clients');
        let clients;
        snapshot.forEach(client => {
            clients = {
                ...clients,
                [client.id]: { id: client.id, ...client.data() }
            }
        })

        yield put(fetchClientsSuccess(clients));
    }
    catch (error) {
        yield put(fetchClientsFailure(error))
    }
}

export function* fetchClientStart() {
    yield takeLatest(
        ClientActionTypes.FETCH_CLIENTS_START,
        fetchClientsAsync
    )
}

export function* clientSaga() {
    yield all([call(fetchClientStart), call(addClient), call(deleteClient), call(updateClient)])
}