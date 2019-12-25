import axios from 'axios'
import { LOGIN, LOGOUT, SIGNUP, GET_USER } from '../actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false,
    username: '',
    profilePic: '',
    country: ''
}

export const login = (username, password) => {
    let data = axios
        .post('/api/login', { username, password })
        .then(res => res.data)
    return {
        type: LOGIN,
        payload: data
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: axios.delete('/api/logout')
    }
}

export const signup = (username, password, country, profilePic) => {
    let data = axios
        .post('/api/signup', { username, password, country, profilePic })
        .then(res => res.data)
        .catch(err => console.log(`Couldn't sign up user`, err))
    return {
        type: SIGNUP,
        payload: data
    }
}

export const getUser = () => {
    let data = axios.get('/api/user')
        .then(res => res.data)
    return {
        type: GET_USER,
        payload: data
    }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        default:
            return state
    }
}