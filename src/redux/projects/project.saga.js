import { takeLatest, call, put , all } from 'redux-saga/effects';
import ProjectActionTypes from './project.actiontypes';
import { fetchProjectsFailure, fetchProjectsSuccess } from './project.actions';
import { rsf } from '../../config/fbConfig';

export function* fetchProjectsAsync() {
    try{
       const snapshot = yield call(rsf.firestore.getCollection, 'projects');
       let projects;
       snapshot.forEach(project => {
           projects = {
               ...projects,
               [project.id]: { id: project.id , ...project.data()}
           }
       })

       yield put(fetchProjectsSuccess(projects))
    }
    catch(error) {
        yield put(fetchProjectsFailure(error))
    }
}

export function* fetchProjectsStart() {
    yield takeLatest(
        ProjectActionTypes.FETCH_PROJECTS_START,
        fetchProjectsAsync
    )
}


export function* projectSaga() {
    yield all([call(fetchProjectsStart)])
}