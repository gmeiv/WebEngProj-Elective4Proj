import { 
  isValidEmail, 
  isStrongPassword, 
  isNotEmpty, 
  calculateDiscount 
} from "./validator"

describe("Email Validation", () => {
  describe("Valid emails (CORRECT behavior)", () => {
    it("should accept valid email", () => {
      expect(isValidEmail("user@example.com")).toBe(true)
    })

    it("should accept email with multiple dots", () => {
      expect(isValidEmail("user.name@example.co.uk")).toBe(true)
    })

    it("should accept email with numbers", () => {
      expect(isValidEmail("user123@domain.com")).toBe(true)
    })
  })

  describe("Invalid emails (WRONG behavior should fail)", () => {
    it("should reject email without @", () => {
      expect(isValidEmail("invalidemail.com")).toBe(false)
    })

    it("should reject email without domain extension", () => {
      expect(isValidEmail("user@example")).toBe(false)
    })

    it("should reject email with spaces", () => {
      expect(isValidEmail("user @example.com")).toBe(false)
    })

    it("should reject empty string", () => {
      expect(isValidEmail("")).toBe(false)
    })

    it("should reject email with @ in wrong position", () => {
      expect(isValidEmail("@example.com")).toBe(false)
    })
  })
})

describe("Password Strength Validation", () => {
  describe("Strong passwords (CORRECT behavior)", () => {
    it("should accept password with 8+ chars, uppercase, and number", () => {
      expect(isStrongPassword("MyPassword123")).toBe(true)
    })

    it("should accept very strong password", () => {
      expect(isStrongPassword("SuperSecure2024!")).toBe(true)
    })
  })

  describe("Weak passwords (WRONG behavior should fail)", () => {
    it("should reject password less than 8 characters", () => {
      expect(isStrongPassword("Short1A")).toBe(false)
    })

    it("should reject password without uppercase", () => {
      expect(isStrongPassword("lowercase123")).toBe(false)
    })

    it("should reject password without numbers", () => {
      expect(isStrongPassword("NoNumbers")).toBe(false)
    })

    it("should reject empty password", () => {
      expect(isStrongPassword("")).toBe(false)
    })

    it("should reject password with only lowercase and numbers", () => {
      expect(isStrongPassword("onlylowercase123")).toBe(false)
    })
  })
})

describe("Array Not Empty Check", () => {
  describe("Non-empty arrays (CORRECT behavior)", () => {
    it("should return true for array with one element", () => {
      expect(isNotEmpty([1])).toBe(true)
    })

    it("should return true for array with multiple elements", () => {
      expect(isNotEmpty([1, 2, 3, 4, 5])).toBe(true)
    })

    it("should return true for array with mixed types", () => {
      expect(isNotEmpty([1, "string", { obj: true }])).toBe(true)
    })
  })

  describe("Empty arrays (WRONG behavior should fail)", () => {
    it("should return false for empty array", () => {
      expect(isNotEmpty([])).toBe(false)
    })

    it("should handle null/undefined gracefully", () => {
      // This demonstrates handling edge cases
      expect(isNotEmpty(null as unknown as unknown[])).toBe(false)
      expect(isNotEmpty(undefined as unknown as unknown[])).toBe(false)
    })
  })

  describe("Demonstrating common mistakes", () => {
    // WRONG WAY 1: return arr (without checking length)
    // Would both pass: just `return arr` would be truthy for [] 
    // because empty arrays are truthy objects
    it("shows that empty array is truthy (why checking length matters)", () => {
      const arr: unknown[] = []
      // This is WHY we need arr.length > 0, not just arr
      expect(arr).toBeTruthy() // Array is truthy even when empty!
    })

    // WRONG WAY 2: return arr.length (without boolean conversion)
    // Would return 0 (falsy) for empty, any number (truthy) for non-empty
    // But this is type-wrong for a boolean return
    it("shows why we must check arr.length > 0, not just arr.length", () => {
      expect(isNotEmpty([1, 2, 3])).toBe(true) // Don't return 3, return true
      expect(isNotEmpty([])).toBe(false) // Don't return 0, return false
    })
  })
})

describe("Calculate Discount", () => {
  describe("Valid discounts (CORRECT behavior)", () => {
    it("should calculate 10% discount correctly", () => {
      expect(calculateDiscount(100, 10)).toBe(90)
    })

    it("should calculate 50% discount correctly", () => {
      expect(calculateDiscount(200, 50)).toBe(100)
    })

    it("should handle decimal prices", () => {
      expect(calculateDiscount(99.99, 10)).toBeCloseTo(89.991)
    })

    it("should handle 0% discount (no discount)", () => {
      expect(calculateDiscount(100, 0)).toBe(100)
    })

    it("should handle 100% discount (free)", () => {
      expect(calculateDiscount(100, 100)).toBe(0)
    })
  })

  describe("Invalid inputs (WRONG input should throw)", () => {
    it("should throw for negative price", () => {
      expect(() => calculateDiscount(-50, 10)).toThrow("Invalid price or discount")
    })

    it("should throw for negative discount", () => {
      expect(() => calculateDiscount(100, -10)).toThrow("Invalid price or discount")
    })

    it("should throw for discount over 100%", () => {
      expect(() => calculateDiscount(100, 150)).toThrow("Invalid price or discount")
    })

    it("should throw for zero price with invalid discount", () => {
      expect(() => calculateDiscount(0, 150)).toThrow("Invalid price or discount")
    })
  })
})

describe("Testing Mindset: Happy Path vs Error Cases", () => {
  it("demonstrates testing both working and broken scenarios", () => {
    // WORKING scenarios (happy path)
    expect(isValidEmail("test@example.com")).toBe(true)
    expect(isStrongPassword("ValidPass123")).toBe(true)
    expect(isNotEmpty([1, 2, 3])).toBe(true)

    // BROKEN scenarios (should fail)
    expect(isValidEmail("notanemail")).toBe(false)
    expect(isStrongPassword("weak1")).toBe(false)
    expect(isNotEmpty([])).toBe(false)

    // The test PASSES when both working AND broken scenarios behave correctly
    // If either one is wrong, the test fails
  })
})
