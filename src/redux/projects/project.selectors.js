import { createSelector } from 'reselect';

const selectProjects = (state) => state.projects;

export const selectProjectList = createSelector([selectProjects], project => project.projects);