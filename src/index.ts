/**
 * 
 * @param arr Array of strings to join
 * @param joinWith Separator for all elements except for the last element - defaults to `, `
 * @param joinLastWith Separator for last element - defaults to `and`
 * @returns joined string
 * 
 * @example 
 *  join(['1', '2', '3', '4']) // 1, 2, 3 and 4
 *  join(['1', '2']) // 1 and 2
 *  join(['1']) // 1
 *  join([]) //
 *  join(['1', '2', '3', '4'], ', ', '&') // 1, 2, 3 & 4
 */

export function join(arr: string[], joinWith: string = ', ', joinLastWith: string = 'and'):string {
  if (arr.length <= 2) return arr.join(` ${joinLastWith.trim()} `);
  return `${arr.slice(0,-1).join(joinWith)} ${joinLastWith.trim()} ${arr.at(-1)}`;
}