import { IE } from "./IE"

describe("IE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(IE.code).toBe("IE")
    })

    it("should have valid title", () => {
      expect(IE.title).toBeTruthy()
      expect(IE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(IE.subtitle).toBeTruthy()
      expect(IE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(IE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(IE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(IE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(IE.images).toHaveProperty("heroLeft")
      expect(IE.images).toHaveProperty("heroBig")
    })
  })
})
