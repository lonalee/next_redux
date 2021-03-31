import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/actions/postAction'

const TestPage = () => {

    const dispatch = useDispatch()
    const { posts : {data} } = useSelector(state => state.post)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(data) setIsLoading(false)
        // else dispatch(fetchPosts())
    }, [data])

    return (
        <>
            {isLoading ? null : !data ?
                <h1>This is a test page</h1> : data.map((item,i) => <h3>
                {item.title}
              </h3>)}
        </>
    )
}

export default TestPage