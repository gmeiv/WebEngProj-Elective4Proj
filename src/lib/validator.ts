/**
 * Email validation utility
 * Correct implementation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Password strength validator
 * Correct implementation - at least 8 chars, 1 uppercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
  if (password.length < 8) return false
  if (!/[A-Z]/.test(password)) return false
  if (!/[0-9]/.test(password)) return false
  return true
}

/**
 * Array is not empty
 * Common wrong implementations vs correct one
 */
export function isNotEmpty(arr: unknown[]): boolean {
  // CORRECT way:
  if (!arr || !Array.isArray(arr)) return false
  return arr.length > 0
  
  // WRONG way (would just be: return arr)
  // This would return truthy even for empty arrays
  
  // WRONG way (would be: return arr.length)
  // This would return 0 for empty arrays (falsy) but any number for non-empty
}

/**
 * Calculate discount price
 * Correct implementation
 */
export function calculateDiscount(price: number, discountPercent: number): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error("Invalid price or discount")
  }
  return price * (1 - discountPercent / 100)
}
