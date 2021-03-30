import Head from 'next/head'
import styles from '../styles/Home.module.css'
 
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/actions/postAction'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.post)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts && posts.data && posts.data.map((item,i) => <h3>
          {item.title}
        </h3>)}
      </div>
    </div>
  )
}
