import { MEE } from "./MEE"

describe("MEE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(MEE.code).toBe("MEE")
    })

    it("should have valid title", () => {
      expect(MEE.title).toBeTruthy()
      expect(MEE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(MEE.subtitle).toBeTruthy()
      expect(MEE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(MEE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(MEE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(MEE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(MEE.images).toHaveProperty("heroLeft")
      expect(MEE.images).toHaveProperty("heroBig")
    })
  })
})
