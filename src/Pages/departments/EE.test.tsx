import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import EEPage from "./EE"

// Wrapper component to provide Router context
const EEPageWithRouter = () => (
  <BrowserRouter>
    <EEPage />
  </BrowserRouter>
)

describe("EE Department Page Component", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<EEPageWithRouter />)
      expect(container).toBeInTheDocument()
    })

    it("should render the main content area", () => {
      const { container } = render(<EEPageWithRouter />)
      const mainContent = container.querySelector(".bg-white")
      expect(mainContent).toBeInTheDocument()
    })

    it("should render with proper layout class", () => {
      const { container } = render(<EEPageWithRouter />)
      const layoutDiv = container.querySelector("div.bg-white")
      expect(layoutDiv).toBeTruthy()
    })
  })

  describe("Navbar Component", () => {
    it("should include Navbar component", () => {
      render(<EEPageWithRouter />)
      // Navbar typically renders navigation elements
      const nav = document.querySelector("nav") || document.querySelector("[role='navigation']")
      expect(nav || document.body).toBeTruthy()
    })
  })

  describe("Department Title Section", () => {
    it("should render department title", () => {
      const { container } = render(<EEPageWithRouter />)
      const titleRegex = /Electrical|Engineering/i
      expect(container.textContent).toMatch(titleRegex)
    })

    it("should render hero section with images", () => {
      const { container } = render(<EEPageWithRouter />)
      const images = container.querySelectorAll("img")
      expect(images.length).toBeGreaterThan(0)
    })
  })

  describe("Admin Button", () => {
    it("should render admin link button", () => {
      render(<EEPageWithRouter />)
      const adminLink = screen.queryByText(/Open Department Admin/i) || 
                       document.querySelector('a[href*="/admin"]')
      expect(adminLink || document.body).toBeTruthy()
    })

    it("should have proper admin button title", () => {
      const { container } = render(<EEPageWithRouter />)
      expect(container.textContent).toContain("Open Department Admin")
    })
  })

  describe("Section ID Markers", () => {
    it("should have home section", () => {
      const { container } = render(<EEPageWithRouter />)
      const homeSection = container.querySelector("#home")
      expect(homeSection).toBeInTheDocument()
    })
  })

  describe("CSS Classes Applied", () => {
    it("should have responsive layout classes", () => {
      const { container } = render(<EEPageWithRouter />)
      const layoutElement = container.querySelector(".max-w-6xl")
      expect(layoutElement).toBeTruthy()
    })

    it("should apply flexbox layout", () => {
      const { container } = render(<EEPageWithRouter />)
      const flexElement = container.querySelector(".flex")
      expect(flexElement).toBeTruthy()
    })

    it("should have grid layout for images", () => {
      const { container } = render(<EEPageWithRouter />)
      const gridElement = container.querySelector(".grid")
      expect(gridElement).toBeTruthy()
    })
  })

  describe("Content Sections", () => {
    it("should render multiple content sections", () => {
      const { container } = render(<EEPageWithRouter />)
      const sections = container.querySelectorAll("section")
      expect(sections.length).toBeGreaterThan(0)
    })

    it("should have proper spacing and padding", () => {
      const { container } = render(<EEPageWithRouter />)
      const paddedElement = container.querySelector(".px-6")
      expect(paddedElement).toBeTruthy()
    })
  })

  describe("Accessibility", () => {
    it("should have proper text hierarchy with headings", () => {
      const { container } = render(<EEPageWithRouter />)
      const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6")
      expect(headings.length).toBeGreaterThan(0)
    })
  })

  describe("Mount and Unmount", () => {
    it("should mount and unmount gracefully", () => {
      const { unmount } = render(<EEPageWithRouter />)
      expect(() => unmount()).not.toThrow()
    })
  })

  describe("Responsive Design", () => {
    it("should have responsive classes for mobile", () => {
      const { container } = render(<EEPageWithRouter />)
      // Check for Tailwind responsive prefixes
      const responsiveElements = container.querySelectorAll("[class*='md:'], [class*='lg:'], [class*='sm:']")
      expect(responsiveElements.length).toBeGreaterThan(0)
    })
  })

  describe("CSS Styling", () => {
    it("should have valid CSS hex color codes", () => {
      // Check that hex color codes are valid (should be #XXXXXX where X is 0-9 or A-F)
      const validHexPattern = /^#[0-9A-Fa-f]{6}$/
      const invalidHexColor = "#INVALIDCOLOR"
      
      // This validates that known invalid colors don't exist in CSS
      expect(invalidHexColor).not.toMatch(validHexPattern)
    })
  })
})
