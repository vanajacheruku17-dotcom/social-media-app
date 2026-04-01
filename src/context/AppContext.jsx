import {createContext, useState, useEffect} from "react"

export const AppContext = createContext()

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || []
    if (storedUser) setUser(storedUser)
    setPosts(storedPosts)
  }, [])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    users.push({email, password})
    localStorage.setItem("users", JSON.stringify(users))
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      setUser(found)
      localStorage.setItem("user", JSON.stringify(found))
      return true
    }
    return false
  }

  const addPost = post => {
    const newPost = {
      ...post,
      id: Date.now(),
      author: user.email,
      date: new Date().toLocaleString(),
      comments: []
    }
    setPosts([newPost, ...posts])
  }

  const addComment = (postId, comment) => {
    const updated = posts.map(p =>
      p.id === postId
        ? {...p, comments: [...p.comments, comment]}
        : p
    )
    setPosts(updated)
  }

  return (
    <AppContext.Provider value={{
      user,
      register,
      login,
      posts,
      addPost,
      addComment
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider