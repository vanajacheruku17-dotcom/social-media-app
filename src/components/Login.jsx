import {useState, useContext} from "react"
import {AppContext} from "../context/AppContext"
import {useNavigate, Link} from "react-router-dom"

export default function Login() {
  const {login} = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (login(email, password)) {
      navigate("/home")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>New user? <Link to="/register">Register</Link></p>
    </div>
  )
}