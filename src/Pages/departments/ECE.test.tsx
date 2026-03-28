import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ECEPage from "./ECE"

const ECEPageWithRouter = () => (
  <BrowserRouter>
    <ECEPage />
  </BrowserRouter>
)

describe("ECE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<ECEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<ECEPageWithRouter />)]
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<ECEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<ECEPageWithRouter />)
      const titleRegex = /Electronics|Communications/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
