import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CEPage from "./CE"

const CEPageWithRouter = () => (
  <BrowserRouter>
    <CEPage />
  </BrowserRouter>
)

describe("CE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<CEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<CEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<CEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<CEPageWithRouter />)
      const titleRegex = /Civil|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
