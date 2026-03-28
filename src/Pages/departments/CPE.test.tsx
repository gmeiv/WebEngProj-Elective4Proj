import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CPEPage from "./CPE"

const CPEPageWithRouter = () => (
  <BrowserRouter>
    <CPEPage />
  </BrowserRouter>
)

describe("CPE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<CPEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<CPEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<CPEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<CPEPageWithRouter />)
      const titleRegex = /Computer|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
