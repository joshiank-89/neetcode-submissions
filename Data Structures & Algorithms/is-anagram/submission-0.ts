class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * Strings lack a .sort() method: In TypeScript, 
     * strings are immutable. To sort them, you must 
     * first convert them into an array using .split(''), 
     * sort the array, and then turn it back into a string 
     * using .join('').
     */
    isAnagram(s: string, t: string): boolean {
        
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');

        if (sortedS != sortedT) {
            return false;
        }
        return true;
    }
}
