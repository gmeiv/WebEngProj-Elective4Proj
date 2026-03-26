import { cn } from "./utils"

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    const result = cn("px-2", "py-1")
    expect(result).toBe("px-2 py-1")
  })

  it("should handle conditional classes", () => {
    const result = cn("px-2", false && "py-1", "text-lg")
    expect(result).toBe("px-2 text-lg")
  })

  it("should resolve Tailwind conflicts properly", () => {
    // tailwind-merge should resolve conflicting utilities
    const result = cn("p-2", "p-4") // p-4 should win
    expect(result).toContain("p-4")
  })

  it("should handle empty inputs", () => {
    const result = cn()
    expect(result).toBe("")
  })

  it("should handle array inputs", () => {
    const result = cn(["px-2", "py-1"], "text-lg")
    expect(result).toBe("px-2 py-1 text-lg")
  })
})
