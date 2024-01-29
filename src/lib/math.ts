export function calc (param1: number, param2: number, operation: string) {
  let result = 0

  if (operation === "+") {
    result = param1 + param2
  }
  if (operation === "-") {
    result = param1 - param2
  }
  if (operation === "/") {
    result = param1 / param2
  }
  if (operation === "*") {
    result = param1 * param2
  }
  return result.toFixed(2)

}

export function invert (number: number) {
  return number * -1
}