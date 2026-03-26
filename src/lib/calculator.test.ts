import { add, subtract, multiply } from "./calculator"

describe("Calculator Functions - Demonstrating Wrong vs Right", () => {
  describe("add function (INTENTIONALLY BUGGY)", () => {
    it("should add 2 + 3 = 5", () => {
      expect(add(2, 3)).toBe(5)
    })

    it("should add negative numbers: -2 + 3 = 1", () => {
      expect(add(-2, 3)).toBe(1)
    })

    it("should add decimals: 2.5 + 1.5 = 4", () => {
      expect(add(2.5, 1.5)).toBe(4)
    })

    it("should add zero: 5 + 0 = 5", () => {
      expect(add(5, 0)).toBe(5)
    })
  })

  describe("subtract function (INTENTIONALLY BUGGY)", () => {
    it("should subtract 5 - 3 = 2", () => {
      expect(subtract(5, 3)).toBe(2)
    })

    it("should subtract with negatives: -5 - 3 = -8", () => {
      expect(subtract(-5, 3)).toBe(-8)
    })

    it("should subtract decimals: 5.5 - 2.5 = 3", () => {
      expect(subtract(5.5, 2.5)).toBe(3)
    })
  })

  describe("multiply function (CORRECT)", () => {
    it("should multiply 2 * 3 = 6", () => {
      expect(multiply(2, 3)).toBe(6)
    })

    it("should multiply with negatives: -2 * 3 = -6", () => {
      expect(multiply(-2, 3)).toBe(-6)
    })

    it("should multiply decimals: 2.5 * 2 = 5", () => {
      expect(multiply(2.5, 2)).toBe(5)
    })

    it("should multiply by zero: 5 * 0 = 0", () => {
      expect(multiply(5, 0)).toBe(0)
    })
  })
})
