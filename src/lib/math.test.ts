import { describe, test, expect } from 'vitest'
import { calc, invert } from './math'

describe("Test Calculations", () => {
  test("Test sum", () => {
    const result = calc(1, 1, "+")
    expect(result).toBe((2).toFixed(2))
  })
  test("Test subtraction", () => {
    const result = calc(1, 1, "-")
    expect(result).toBe((0).toFixed(2))
  })
  test("Test multiply", () => {
    const result = calc(1, 1, "*")
    expect(result).toBe((1).toFixed(2))
  })
  test("Test division", () => {
    const result = calc(10, 3, "/")
    expect(result).toBe((3.33333333).toFixed(2))
  })
})

describe("Test invert signal", () => {
  test("Invert signal for positive", () => {
    const result = invert(-30)
    expect(result).toBe(30)
  })
  test("Invert signal for negative", () => {
    const result = invert(30)
    expect(result).toBe(-30)
  })
})