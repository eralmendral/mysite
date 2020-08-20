import { takeLatest, call, put, all } from 'redux-saga/effects';
import ProjectActionTypes from './project.actiontypes';
import { fetchProjectsFailure, fetchProjectsSuccess } from './project.actions';
import { rsf } from '../../config/fbConfig';

export function* fetchProjectsAsync() {
    try {
        const snapshot = yield call(rsf.firestore.getCollection, 'projects');
        let projects;
        snapshot.forEach(project => {
            projects = {
                ...projects,
                [project.id]: { id: project.id, ...project.data() }
            }
        })

        yield put(fetchProjectsSuccess(projects))
    }
    catch (error) {
        yield put(fetchProjectsFailure(error))
    }
}

export function* fetchProjectsStart() {
    yield takeLatest(
        ProjectActionTypes.FETCH_PROJECTS_START,
        fetchProjectsAsync
    )
}

export function* deleteProjectAsync(action) {
    try {
        console.log('debug delete:', action)
        // firebase remove document
        yield call(rsf.firestore.deleteDocument, `projects/${action.payload.id}`);
        yield call(fetchProjectsAsync)
    }
    catch (error) {
        console.log('Error deleting project.')
    }

}

export function* deleteProject() {
    yield takeLatest(
        ProjectActionTypes.DELETE_PROJECT,
        deleteProjectAsync
    )
}

export function* addProjectAsync(action) {
    try {
        // firebase remove document
        yield call(rsf.firestore.addDocument, 'projects', action.payload);
        console.log('add project')
        yield call(fetchProjectsAsync)
    } catch (error) {
        console.log('Error adding project.', error)
    }
}

export function* addProject() {
    yield takeLatest(
        ProjectActionTypes.ADD_PROJECT,
        addProjectAsync
    )
}

export function* projectSaga() {
    yield all([call(fetchProjectsStart), call(deleteProject), call(addProject)])
}