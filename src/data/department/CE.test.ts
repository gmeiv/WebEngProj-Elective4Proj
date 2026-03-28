import { CE } from "./CE"

describe("CE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(CE.code).toBe("CE")
    })

    it("should have valid title", () => {
      expect(CE.title).toBeTruthy()
      expect(CE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(CE.subtitle).toBeTruthy()
      expect(CE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(CE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(CE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(CE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(CE.images).toHaveProperty("heroLeft")
      expect(CE.images).toHaveProperty("heroBig")
    })
  })
})
