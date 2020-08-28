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
        yield call(
            rsf.firestore.setDocument,
            'projects/' + action.payload.id,
            action.payload,
          );

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

export function* updateProjectAsync(action) {
    console.log('action saga update:', action)
    try {
        yield call(
            rsf.firestore.setDocument,
            'projects/' + action.payload.id ,
            action.payload,
            {merge: true}
          );
        yield call(fetchProjectsAsync)
    } catch (error) {
        console.log('Error updating project.', error)
    }
}

export function* updateProject() {
    yield takeLatest(
        ProjectActionTypes.UPDATE_PROJECT,
        updateProjectAsync
    )
}

export function* projectSaga() {
    yield all([call(fetchProjectsStart), call(deleteProject), call(addProject), call(updateProject)])
}