import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MEPage from "./ME"

const MEPageWithRouter = () => (
  <BrowserRouter>
    <MEPage />
  </BrowserRouter>
)

describe("ME Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<MEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<MEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<MEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<MEPageWithRouter />)
      const titleRegex = /Mechanical|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
