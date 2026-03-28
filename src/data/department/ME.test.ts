import { ME } from "./ME"

describe("ME Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(ME.code).toBe("ME")
    })

    it("should have valid title", () => {
      expect(ME.title).toBeTruthy()
      expect(ME.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(ME.subtitle).toBeTruthy()
      expect(ME.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(ME.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(ME.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(ME.images).toBeDefined()
    })

    it("should have image paths", () => {
      expect(ME.images).toHaveProperty("heroLeft")
      expect(ME.images).toHaveProperty("heroBig")
    })
  })
})
