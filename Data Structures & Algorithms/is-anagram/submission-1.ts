class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
    */
    isAnagram(s: string, t: string): boolean {
        /** Using Sorting
        * Strings lack a .sort() method: In TypeScript, 
        * strings are immutable. To sort them, you must 
        * first convert them into an array using .split(''), 
        * sort the array, and then turn it back into a string 
        * using .join('').
        * Time & Space Complexity
        * Time complexity: O(n log n + m log m)
        * Space Complexity: O(1) or O(n+m) depending on the sorting algorithm
        * where n is the length of string s and m is the length of string t.
        */
        // if (s.length !== t.length) {
        //     return false;
        // }
        
        // const sortedS = s.split('').sort().join('');
        // const sortedT = t.split('').sort().join('');

        // if (sortedS != sortedT) {
        //     return false;
        // }
        // return true;

        /** Using Hash Map 
        * Time & Space Complexity
        * Time complexity: O(n + m)
        * Space Complexity: O(1) since we have at most 26 different characters
        * where n is the length of string s and m is the length of string t.
        */
        // if (s.length !== t.length) {
        //     return false;
        // }

        // const countS = {};
        // const countT = {};
        // for (let i = 0; i < s.length; i++) {
        //     countS[s[i]] = (countS[s[i]] || 0) + 1;
        //     countT[t[i]] = (countT[t[i]] || 0) + 1;
        // }

        // for (const key in countS) {
        //     if (countS[key] !== countT[key]) {
        //         return false;
        //     }
        // }
        // return true;

        /** Using Hash Table (Array) 
        * Time & Space Complexity
        * Time complexity: O(n + m)
        * Space Complexity: O(1) since we have at most 26 different characters
        * where n is the length of string s and m is the length of string t.
        */
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return count.every((val) => val === 0);
    }
}
