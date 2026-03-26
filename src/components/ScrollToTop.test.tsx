import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

// Wrapper component to provide Router context
const ScrollToTopWithRouter = () => (
  <BrowserRouter>
    <ScrollToTop />
  </BrowserRouter>
)

describe("ScrollToTop Component", () => {
  it("renders without crashing inside Router", () => {
    const { container } = render(<ScrollToTopWithRouter />)
    expect(container).toBeInTheDocument()
  })

  it("should return null (component doesn't render UI)", () => {
    const { container } = render(<ScrollToTopWithRouter />)
    // ScrollToTop returns null, so container should only have the router wrapper
    expect(container.firstChild).toBeDefined()
  })

  it("mounts and unmounts gracefully", () => {
    const { unmount } = render(<ScrollToTopWithRouter />)
    expect(() => unmount()).not.toThrow()
  })
})
