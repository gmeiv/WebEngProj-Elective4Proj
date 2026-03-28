import { CPE } from "./CPE"

describe("CPE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(CPE.code).toBe("CPE")
    })

    it("should have valid title", () => {
      expect(CPE.title).toBeTruthy()
      expect(CPE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(CPE.subtitle).toBeTruthy()
      expect(CPE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(CPE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(CPE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(CPE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(CPE.images).toHaveProperty("heroLeft")
      expect(CPE.images).toHaveProperty("heroBig")
    })
  })
})
