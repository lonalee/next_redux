import * as types from '../types'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    console.log('@@action', action)
    switch (action.type) {
        
        case 'GET_STH':
            return {
                ...state,
                isGetSth: 'SUCCESS',
                posts: action.payload
            }
        case LOCATION_CHANGE:
        return {
            ...state,
            changed: true
        }
    
        default:
            console.log('state', state)
            return state
    }
}