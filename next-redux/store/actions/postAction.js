import * as types from '../types'
import axios from 'axios'

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')

    dispatch({
        type: types.GET_STH,
        payload: res
    })
}