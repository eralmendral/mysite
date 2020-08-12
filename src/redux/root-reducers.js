import { combineReducers } from 'redux';
import { projectReducer } from './projects/project.reducer'
import { clientReducer } from './clients/client.reducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    clients: clientReducer
})

export default rootReducer;