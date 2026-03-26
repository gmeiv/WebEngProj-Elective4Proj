import { render, screen } from "@testing-library/react"
import SectionTitle from "./SectionTitle"

describe("SectionTitle Component", () => {
  it("renders with basic props", () => {
    render(<SectionTitle title="Test Title" />)
    expect(screen.getByText("Test Title")).toBeInTheDocument()
  })

  it("renders title and subtitle", () => {
    render(
      <SectionTitle 
        title="Main Title" 
        subtitle="This is a subtitle"
      />
    )
    expect(screen.getByText("Main Title")).toBeInTheDocument()
    expect(screen.getByText("This is a subtitle")).toBeInTheDocument()
  })

  it("renders eyebrow text when provided", () => {
    render(
      <SectionTitle 
        eyebrow="Category"
        title="Test" 
      />
    )
    expect(screen.getByText("Category")).toBeInTheDocument()
    expect(screen.getByText("Test")).toBeInTheDocument()
  })

  it("applies center styling when center prop is true", () => {
    const { container } = render(
      <SectionTitle 
        title="Centered Title" 
        center={true}
      />
    )
    const wrapper = container.querySelector(".text-center")
    expect(wrapper).toBeInTheDocument()
  })

  it("renders without centered styling when center is false", () => {
    const { container } = render(
      <SectionTitle 
        title="Left Title" 
        center={false}
      />
    )
    const wrapper = container.querySelector(".text-center")
    expect(wrapper).not.toBeInTheDocument()
  })

  it("renders without subtitle gracefully", () => {
    const { container } = render(<SectionTitle title="Only Title" />)
    expect(screen.getByText("Only Title")).toBeInTheDocument()
    expect(container).toBeInTheDocument()
  })
})
