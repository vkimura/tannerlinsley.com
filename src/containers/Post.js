import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ post }) => (
  <div>
    <Link href="/blog/">
      <a>{'<'} Back</a>
    </Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))
