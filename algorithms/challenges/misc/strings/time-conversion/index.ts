/**
 * Name: Time Conversion
 * source: https://www.hackerrank.com/challenges/time-conversion/problem
 * Description:
 * 
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

 * Note: 
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * 
 * @param s string
 * @returns string
 */

function timeConversion(s: string): string {
  // Write your code here
  return s.split(':').reduce(
      (acc,cur,idx,arr) => {
          if(!idx)
              cur = arr[2].charAt(2) === 'P' ?
                  cur === '12' ?
                      '12'
                      : parseInt(cur) + 12 + ''
                  : cur === '12' ?
                      '00'
                      : cur
          return cur.charAt(3) === 'M'  ? 
              acc + cur.substring(0,2) 
              : acc + cur + ':'
      }
      ,''
  )
}
