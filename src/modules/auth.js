import { createAction } from "redux-actions";

const SET_LOGIN = 'auth/SET_LOGIN';
const SET_JOIN = 'auth/SET_JOIN';
const SET_LOGOUT = 'auth/SET_LOGOUT';


const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { user }
  : { isLoggedIn: false, user: null };

export default function authManage(state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
              };
        case SET_JOIN:
            return {
                ...state,
                isLoggedIn: false,
              };
        case SET_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
              };
        default:
            return state;    
    }
}