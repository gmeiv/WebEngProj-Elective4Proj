import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MFEPage from "./MFE"

const MFEPageWithRouter = () => (
  <BrowserRouter>
    <MFEPage />
  </BrowserRouter>
)

describe("MFE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<MFEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<MFEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<MFEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<MFEPageWithRouter />)
      const titleRegex = /Manufacturing|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
