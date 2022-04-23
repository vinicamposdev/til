/**
 * Name: Time Conversion
 * source: https://www.hackerrank.com/challenges/sock-merchant/problem
 * Description:
 * 
 * Given an array of numbers, count the duplicates

 * @param {number} n
 * @param {number[]} ar
 * @returns {number} totalSockPairs
 */

 function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    const pairs: Record<number, number> = {};
    for (let i: number = 0; i < n; i++) {
        if (pairs[ar[i]] === undefined) pairs[ar[i]] = 1
        else pairs[ar[i]] += 1;
    }
    let totalSockPairs: number = 0;
    
    for (const [key, value] of (<any>Object).entries(pairs)) {
        totalSockPairs += Math.floor(value / 2);
    }
    return totalSockPairs;
}
