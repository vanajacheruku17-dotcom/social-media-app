import {useState, useContext} from "react"
import {AppContext} from "../context/AppContext"
import {useNavigate} from "react-router-dom"

export default function Register() {
  const {register} = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = () => {
    register(email, password)
    alert("Registered successfully")
    navigate("/")
  }

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}