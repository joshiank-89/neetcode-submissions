class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        /** Brute Force 
         * Time & Space Complexity
            Time complexity: O(n^2)
            Space complexity: O(1)
        */
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[j] === nums[i]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;

        /** Using Sorting 
         * Time & Space Complexity
            Time complexity: O(n log n)
            Space complexity: O(1) or O(n) depending on sorting algorithm
        */
        // nums.sort((a, b) => a - b);
        // for (let i = 1; i < nums.length; i++) {
        //     if (nums[i] === nums[i - 1]) {
        //         return true;
        //     }
        // }
        // return false;

        /** Using Hash Set - Using a hash set allows constant-time lookups, 
         * making this approach much more efficient than comparing every pair.
         * * Time & Space Complexity
            Time complexity: O(n)
            Space complexity: O(n)
         */
        // const seen = new Set();
        // for (const num of nums) {
        //     if (seen.has(num)) {
        //         return true;
        //     }
        //     seen.add(num);
        // }
        // return false;

        /** Using Hash Set Length
         * simply compare the length of the set to the length of the original array.
            If duplicates exist, the set will contain fewer elements
         * Time & Space Complexity
            Time complexity: O(n)
            Space complexity: O(n)
         */
        //  return new Set(nums).size < nums.length;

         /** Using Using Object / Hash Map
         * simply compare the length of the set to the length of the original array.
            If duplicates exist, the set will contain fewer elements
         * Time & Space Complexity
            Time complexity: O(n)
            Space complexity: O(n)
         */
        const seen: Record<number, boolean> = {};

        for (let i = 0; i < nums.length; i++) {
            if (seen[nums[i]]) {
                return true;
            }
            seen[nums[i]] = true;
        }
        return false;
    }
}