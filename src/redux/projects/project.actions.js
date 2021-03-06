import ProjectActionTypes from './project.actiontypes'

export const fetchProjectsStart = () => ({
    type: ProjectActionTypes.FETCH_PROJECTS_START
});

export const fetchProjectsSuccess = (projects) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESSS,
    payload: projects
});

export const fetchProjectsFailure = (error) => ({
    type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
    payload: error
});

export const addProject = (project) => ({
    type: ProjectActionTypes.ADD_PROJECT,
    payload: project
})

export const updateProject = (project) => ({
    type: ProjectActionTypes.UPDATE_PROJECT,
    payload: project
})

export const deleteProject = (project) => ({
    type: ProjectActionTypes.DELETE_PROJECT,
    payload: project
});