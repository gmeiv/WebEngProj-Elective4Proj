import { ECE } from "./ECE"

describe("ECE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(ECE.code).toBe("ECE")
    })

    it("should have valid title", () => {
      expect(ECE.title).toBeTruthy()
      expect(ECE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(ECE.subtitle).toBeTruthy()
      expect(ECE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(ECE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(ECE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(ECE.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(ECE.images).toHaveProperty("heroLeft")
      expect(ECE.images).toHaveProperty("heroBig")
    })
  })
})
