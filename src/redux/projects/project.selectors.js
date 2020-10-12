import { createSelector } from 'reselect';

const selectProjects = (state) => state.hasOwnProperty('projects') && state.projects ? state.projects : {};

export const selectProjectList = createSelector([selectProjects], project => project.projects);
export const selectProjectLoading = createSelector([selectProjects], project => project.projectsFetching);
export const selectProject =  (projectId) => createSelector([selectProjects], project => project.projects[projectId])

export const selectAllProjectCount = createSelector([selectProjects], project => project ? Object.keys(project.projects).length : 0);

export const selectPendingProjectCount = createSelector([selectProjects], project => { 
    const count = getCount(project.projects, 'pending')
    return count;
});

export const selectCurrentProjectCount = createSelector([selectProjects], project => { 
    const count = getCount(project.projects, 'current')
    return count;
});
export const selectFinishedProjectCount =createSelector([selectProjects], project => { 
    const count = getCount(project.projects, 'finished')
    return count;
});

const getCount = (projects, status) => {
    let count = 0;
    for (const [key, value] of Object.entries(projects)) {
        if(value.status === status) {
            count++;
        }
    }
    return count;
}
