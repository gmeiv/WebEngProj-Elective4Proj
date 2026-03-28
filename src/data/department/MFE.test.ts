import { MFE } from "./MFE"

describe("MFE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(MFE.code).toBe("MFE")
    })

    it("should have valid title", () => {
      expect(MFE.title).toBeTruthy()
      expect(MFE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(MFE.subtitle).toBeTruthy()
      expect(MFE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(MFE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(MFE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(MFE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(MFE.images).toHaveProperty("heroLeft")
      expect(MFE.images).toHaveProperty("heroBig")
    })
  })
})
