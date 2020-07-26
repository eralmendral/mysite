import ProjectActionTypes from '../actiontypes/project.actiontypes'

export const fetchProjectsStart = () => ({
    type: ProjectActionTypes.FETCH_PROJECTS_START
});

export const fetchProjectsSuccess = () => ({
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESSS,
    payload: projects
});

export const fetchProjectsFailure = () => ({
    type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
    payload: error
});

