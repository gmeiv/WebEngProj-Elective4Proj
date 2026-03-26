/**
 * Simple calculator functions
 * INTENTIONALLY BUGGY - for testing demonstration
 */

// WRONG IMPLEMENTATION (will fail tests)
export function add(a: number, b: number): number {
  return a  // ❌ BUG: Returns only first number, ignores b
}

export function subtract(a: number, b: number): number {
  return a  // ❌ BUG: Should return a - b
}

export function multiply(a: number, b: number): number {
  return a * b  // ✅ This one is correct
}
