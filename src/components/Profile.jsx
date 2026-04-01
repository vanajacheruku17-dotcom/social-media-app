import {useContext} from "react"
import {AppContext} from "../context/AppContext"

export default function Profile() {
  const {user, posts} = useContext(AppContext)

  const myPosts = posts.filter(p => p.author === user.email)

  return (
    <div>
      <h2>{user.email}</h2>

      {myPosts.map(post => (
        <p key={post.id}>{post.text}</p>
      ))}
    </div>
  )
}