import {render, screen} from "@testing-library/react"
import Login from "./Login"

test("renders Login heading", () => {
  render(<Login />)
  const heading = screen.getByText(/Login/i)
  expect(heading).toBeInTheDocument()
})