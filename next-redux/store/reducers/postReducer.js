import * as types from '../types'

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_STH':
            return {
                ...state,
                isGetSth: 'SUCCESS',
                posts: action.payload
            }
            
    
        default:
            return state
    }
}