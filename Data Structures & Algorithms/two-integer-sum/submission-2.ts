class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        /** Brute Force
         * Complexity
            Time: O(n²)
            Space: O(1)
         */
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j];
        //         }
        //     }
        // }
        // return [];

        /** Hash Map
         * Complexity
            Time: O(n)
            Space: O(n)
         */
        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const complement = target - current;
            if (map.has(complement)) {
                return [map.get(complement)!, i];
            }
            map.set(current, i);
        }
        return [];

        /** Two-Pass Hash Map
         * Complexity
            Time: O(n)
            Space: O(n)
         */
        // const map = new Map<number, number>();
        // for (let i = 0; i < nums.length; i++) {
        //     map.set(nums[i], i);
        // }
        // for (let i = 0; i < nums.length; i++) {
        //     const complement = target - nums[i];

        //     if (map.has(complement) && map.get(complement) !== i) {
        //     return [i, map.get(complement)!];
        //     }
        // }
        // return [];

        /** Sorting + Two Pointers
         * Complexity
            Time: O(n log n)
            Space: O(n)
         */
        // const arr = nums.map((value, index) => ({ value, index }));

        // arr.sort((a, b) => a.value - b.value);

        // let left = 0;
        // let right = arr.length - 1;

        // while (left < right) {
        //     const sum = arr[left].value + arr[right].value;
        //     if (sum === target) {
        //         return [arr[left].index, arr[right].index];
        //     }
        //     if (sum < target) {
        //         left++;
        //     } else {
        //         right--;
        //     }
        // }
        // return [];
    }
}
