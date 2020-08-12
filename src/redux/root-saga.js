import { all, call } from 'redux-saga/effects';

import { projectSaga } from './projects/project.saga'
import { clientSaga } from './clients/client.saga';

export default function* rootSaga() {
    yield all([call(projectSaga), call(clientSaga)])
}