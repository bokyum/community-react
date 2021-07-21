import { createAction } from "redux-actions";

const SET_LOGIN = 'auth/SET_LOGIN';
const SET_LOGOUT = 'auth/SET_LOGOUT';

export const setLogin = id => ({type: SET_LOGIN, id});
export const setLogout = () => ({type: SET_LOGOUT});

const initialState = {
    id: -1,
    logged: false,
};

export default function authManage(state=initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                id: action.id,
                logged: true,
            }
        case SET_LOGOUT:
            return {
                ...state,
                id: -1,
                logged: false,
            }    
        default:
            return state;    
    }
}