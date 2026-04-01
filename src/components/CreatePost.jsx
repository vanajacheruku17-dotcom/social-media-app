import {useState, useContext} from "react"
import {AppContext} from "../context/AppContext"
import {useNavigate} from "react-router-dom"

export default function CreatePost() {
  const {addPost} = useContext(AppContext)
  const [text, setText] = useState("")
  const [image, setImage] = useState("")
  const [video, setVideo] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    addPost({text, image, video})
    navigate("/home")
  }

  return (
    <div>
      <h2>Create Post</h2>
      <textarea placeholder="Text" onChange={e => setText(e.target.value)} />
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} />
      <input placeholder="Video URL" onChange={e => setVideo(e.target.value)} />
      <button onClick={handleSubmit}>Post</button>
    </div>
  )
}