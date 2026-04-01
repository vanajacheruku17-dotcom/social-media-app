import {useParams} from "react-router-dom"
import {useContext, useState} from "react"
import {AppContext} from "../context/AppContext"

export default function PostDetail() {
  const {id} = useParams()
  const {posts, addComment} = useContext(AppContext)
  const [comment, setComment] = useState("")

  const post = posts.find(p => p.id === Number(id))

  const handleComment = () => {
    addComment(post.id, comment)
    setComment("")
  }

  return (
    <div>
      <h3>{post.author}</h3>
      <p>{post.text}</p>
      <small>{post.date}</small>

      <h4>Comments</h4>
      {post.comments.map((c, i) => <p key={i}>{c}</p>)}

      <input value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={handleComment}>Add Comment</button>
    </div>
  )
}