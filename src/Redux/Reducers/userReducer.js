import axios from 'axios'
import {LOGIN, LOGOUT, SIGNUP, GET_USER} from '../actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false,
    username: '',
    profilePic: '',
    country: ''
}

export default function (state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        default: 
            return state
    }
}