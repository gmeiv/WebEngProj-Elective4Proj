import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import IEPage from "./IE"

const IEPageWithRouter = () => (
  <BrowserRouter>
    <IEPage />
  </BrowserRouter>
)

describe("IE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<IEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<IEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<IEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<IEPageWithRouter />)
      const titleRegex = /Industrial|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })
  })
})
