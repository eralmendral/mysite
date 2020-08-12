import ProjectActionTypes from './project.actiontypes';

const intialState = {
    projects: [],
    projectsFetching: false,
    projectsFetchError: null
}

export const projectReducer = (state = intialState, action) => {
    switch(action.type){
        case ProjectActionTypes.FETCH_PROJECTS_START:
            return {
                ...state,
                projectsFetching: true
            }
        case ProjectActionTypes.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                projectsFetching: false,
                projectsFetchError: action.payload
            }
        case ProjectActionTypes.FETCH_PROJECTS_SUCCESSS:
            return {
                ...state,
                projectsFetching: false,
                projects: action.payload
            }
        default:
            return state
    }
}