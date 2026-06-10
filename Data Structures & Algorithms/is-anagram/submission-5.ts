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

        // const count: Record<string, number> = {};

        // for (let i = 0; i < s.length; i++) {
        //     count[s[i]] = (count[s[i]] || 0) + 1;
        //     count[t[i]] = (count[t[i]] || 0) - 1;
        // }

        // for (const char in count) {
        //     if (count[char] !== 0) {
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
        // if (s.length !== t.length) {
        //     return false;
        // }

        // const count = new Array(26).fill(0);
        // const base = 'a'.charCodeAt(0);

        // for (let i = 0; i < s.length; i++) {
        //     count[s.charCodeAt(i) - base]++;
        //     count[t.charCodeAt(i) - base]--;
        // }

        // for (const value of count) {
        //     if (value !== 0) {
        //         return false;
        //     }
        // }
        // return true;

        /** UNICODE friendly Solution
        * Time & Space Complexity
        * Time complexity: O(n + m)
        * Space Complexity: O(1) since we have at most 26 different characters
        * where n is the length of string s and m is the length of string t.
        */
        const sChars = Array.from(s);
        const tChars = Array.from(t);

        if (sChars.length !== tChars.length) {
            return false;
        }

        const count = new Map<string, number>();

        for (let i = 0; i < sChars.length; i++) {
            count.set(sChars[i], (count.get(sChars[i]) || 0) + 1);
            count.set(tChars[i], (count.get(tChars[i]) || 0) - 1);
        }

        for (const value of count.values()) {
            if (value !== 0) {
                return false;
            }
        }

        return true;

    }
}
