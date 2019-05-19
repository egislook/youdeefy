import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link, Router } from '@reach/router'

export default function Post() {
  const { post } = useRouteData()
  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
