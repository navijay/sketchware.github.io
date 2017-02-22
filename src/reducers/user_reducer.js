/**
 * Created by ggoma on 2017. 2. 17..
 */
//state arguement is not application state

import {LOGIN, LOAD_PROJECTS} from '../actions/user_actions';

const INITIAL_USER_STATE = {
    info: {},
    projects: []
}

export default function(state = INITIAL_USER_STATE, action) {
    switch(action.type) {
        case LOGIN:
            if(!action.payload.data.login_id) {
                return {...state, info: {}};
            }
            return {...state, info: action.payload.data};
        case LOAD_PROJECTS:
            console.log('loading projects');
            return {...state, projects: action.payload.data};
    }
    return state
}
