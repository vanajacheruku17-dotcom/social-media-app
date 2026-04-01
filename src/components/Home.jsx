import {useContext} from "react"
import {AppContext} from "../context/AppContext"
import {Link} from "react-router-dom"

export default function Home() {
  const {posts} = useContext(AppContext)

  return (
    <div>
      <h2>Feed</h2>
      <Link to="/create">Create Post</Link>

      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.author}</h4>
          <p>{post.text}</p>

          {post.image && <img src={post.image} width="200" />}
          {post.video && <video src={post.video} controls width="200" />}

          <Link to={`/post/${post.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}