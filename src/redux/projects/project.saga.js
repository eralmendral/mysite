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

export function* deleteProjectAsync(action){
    yield call(function(){ console.log(' delete project saga:', action.payload )})
    try{
        // firebase remove document
        yield call(rsf.firestore.deleteDocument, `projects/${action.payload.id}`);
        yield call(fetchProjectsAsync)


        // firebase delete photos  
        // remove thumbnail
        yield call(rsf.storage.deleteFile, 'c06b0e60-2ac5-41c2-9a25-32e19f0ece59');
    }
    catch(error) {
        console.log('Project Saga: error deleting project.')
    }

}

export function* deleteProject() {
    yield takeLatest(
        ProjectActionTypes.DELETE_PROJECT,
        deleteProjectAsync
    )
}



export function* projectSaga() {
    yield all([call(fetchProjectsStart), call(deleteProject)])
}