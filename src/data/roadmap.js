export const generateProblemUrl = (title, platform) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (platform.toLowerCase().includes('leetcode')) {
    return `https://leetcode.com/problems/${slug}/`;
  } else if (platform.toLowerCase().includes('gfg')) {
    return `https://www.geeksforgeeks.org/problems/${slug}/1`;
  }
  return `https://www.google.com/search?q=${encodeURIComponent(title + ' problem ' + platform)}`;
};

export const dsaRoadmap = [
  {
    id: "phase-1",
    title: "Phase 1: Arrays Basics",
    problems: [
      { 
        id: 1, 
        title: "Largest Element", 
        pattern: "Basic traversal", 
        platform: "GFG",
        description: "Given an array arr[] of size N. The task is to find the largest element in the given array.",
        starterCode: "class Solution {\n    public int largest(int[] arr) {\n        // code here\n        return 0;\n    }\n}",
        testCases: [
          { input: "[1, 8, 7, 56, 90]", expected: "90" },
          { input: "[1, 2, 0, 3, 2, 4, 5]", expected: "5" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        System.out.print(new Solution().largest(arr));\n    }\n}`
      },
      { 
        id: 2, 
        title: "Second Largest Element", 
        pattern: "Tracking first and second max", 
        platform: "GFG",
        description: "Given an array arr[], return the second largest element from an array. If the second largest element doesn't exist then return -1.",
        starterCode: "class Solution {\n    public int print2largest(int[] arr) {\n        // code here\n        return -1;\n    }\n}",
        testCases: [
          { input: "[12, 35, 1, 10, 34, 1]", expected: "34" },
          { input: "[10, 5, 10]", expected: "-1" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        System.out.print(new Solution().print2largest(arr));\n    }\n}`
      },
      { 
        id: 3, 
        title: "Check if Array is Sorted", 
        pattern: "Linear check", 
        platform: "GFG Search",
        description: "Given an array arr[] of size N, check if it is sorted in non-decreasing order or not.",
        starterCode: "class Solution {\n    public boolean arraySortedOrNot(int[] arr) {\n        // code here\n        return true;\n    }\n}",
        testCases: [
          { input: "[10, 20, 30, 40, 50]", expected: "true" },
          { input: "[90, 80, 100, 70, 40, 30]", expected: "false" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        System.out.print(new Solution().arraySortedOrNot(arr));\n    }\n}`
      },
      { 
        id: 4, 
        title: "Reverse Array", 
        pattern: "Two pointers basic", 
        platform: "GFG Search",
        description: "You are given an array of integers arr[]. Your task is to reverse the given array.",
        starterCode: "class Solution {\n    public void reverseArray(int arr[]) {\n        // code here\n    }\n}",
        testCases: [
          { input: "[1, 4, 3, 2, 6, 5]", expected: "[5, 6, 2, 3, 4, 1]" },
          { input: "[4, 5, 2]", expected: "[2, 5, 4]" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        new Solution().reverseArray(arr);\n        System.out.print(Arrays.toString(arr).replace(" ", ""));\n    }\n}`
      },
      { 
        id: 5, 
        title: "Left Rotate Array", 
        pattern: "Array shifting / reversal", 
        platform: "GFG Search",
        description: "Given an array of integers arr[] and an integer d, the task is to rotate the array elements to the left by d positions.",
        starterCode: "class Solution {\n    public void rotateArr(int arr[], int d) {\n        // code here\n    }\n}",
        testCases: [
          { input: "[1, 2, 3, 4, 5]\n2", expected: "[3, 4, 5, 1, 2]" },
          { input: "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n3", expected: "[8, 10, 12, 14, 16, 18, 20, 2, 4, 6]" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        int d = scanner.nextInt();\n        new Solution().rotateArr(arr, d);\n        System.out.print(Arrays.toString(arr).replace(" ", ""));\n    }\n}`
      },
      { 
        id: 6, 
        title: "Remove Duplicates from Sorted Array", 
        pattern: "Slow-fast pointer", 
        platform: "LeetCode 26",
        description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements.",
        starterCode: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // code here\n        return 0;\n    }\n}",
        testCases: [
          { input: "[1, 1, 2]", expected: "[1, 2]" },
          { input: "[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", expected: "[0, 1, 2, 3, 4]" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        if (line.length() > 0) {\n            for(int i=0; i<parts.length; i++) {\n                arr[i] = Integer.parseInt(parts[i].trim());\n            }\n        } else {\n            arr = new int[0];\n        }\n        int k = new Solution().removeDuplicates(arr);\n        int[] res = new int[k];\n        for(int i=0; i<k; i++) res[i] = arr[i];\n        System.out.print(Arrays.toString(res).replace(" ", ""));\n    }\n}`
      },
      { 
        id: 7, 
        title: "Rotate Array", 
        pattern: "Reversal / cyclic rotation", 
        platform: "LeetCode 189",
        description: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
        starterCode: "class Solution {\n    public void rotate(int[] nums, int k) {\n        // code here\n    }\n}",
        testCases: [
          { input: "[1, 2, 3, 4, 5, 6, 7]\n3", expected: "[5, 6, 7, 1, 2, 3, 4]" },
          { input: "[-1, -100, 3, 99]\n2", expected: "[3, 99, -1, -100]" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        int k = scanner.nextInt();\n        new Solution().rotate(arr, k);\n        System.out.print(Arrays.toString(arr).replace(" ", ""));\n    }\n}`
      },
      { 
        id: 8, 
        title: "Max Consecutive Ones", 
        pattern: "Linear count", 
        platform: "LeetCode 485",
        description: "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
        starterCode: "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        // code here\n        return 0;\n    }\n}",
        testCases: [
          { input: "[1, 1, 0, 1, 1, 1]", expected: "3" },
          { input: "[1, 0, 1, 1, 0, 1]", expected: "2" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        System.out.print(new Solution().findMaxConsecutiveOnes(arr));\n    }\n}`
      },
      { 
        id: 9, 
        title: "Merge Sorted Array", 
        pattern: "Two pointers from end", 
        platform: "LeetCode 88",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
        starterCode: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // code here\n    }\n}",
        testCases: [
          { input: "[1, 2, 3, 0, 0, 0]\n3\n[2, 5, 6]\n3", expected: "[1, 2, 2, 3, 5, 6]" },
          { input: "[1]\n1\n[]\n0", expected: "[1]" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line1 = scanner.nextLine().trim();\n        int m = scanner.nextInt(); scanner.nextLine();\n        String line2 = scanner.nextLine().trim();\n        int n = scanner.nextInt();\n        \n        int[] nums1 = parseArr(line1);\n        int[] nums2 = parseArr(line2);\n        \n        new Solution().merge(nums1, m, nums2, n);\n        System.out.print(Arrays.toString(nums1).replace(" ", ""));\n    }\n    \n    static int[] parseArr(String line) {\n        line = line.substring(1, line.length() - 1);\n        if (line.isEmpty()) return new int[0];\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        return arr;\n    }\n}`
      },
      { 
        id: 10, 
        title: "Majority Element", 
        pattern: "Boyer Moore voting", 
        platform: "LeetCode 169",
        description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
        starterCode: "class Solution {\n    public int majorityElement(int[] nums) {\n        // code here\n        return 0;\n    }\n}",
        testCases: [
          { input: "[3, 2, 3]", expected: "3" },
          { input: "[2, 2, 1, 1, 1, 2, 2]", expected: "2" }
        ],
        javaMain: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (!scanner.hasNextLine()) return;\n        String line = scanner.nextLine().trim();\n        line = line.substring(1, line.length() - 1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0; i<parts.length; i++) {\n            arr[i] = Integer.parseInt(parts[i].trim());\n        }\n        System.out.print(new Solution().majorityElement(arr));\n    }\n}`
      }
    ]
  },
  {
    id: "phase-2",
    title: "Phase 2: Hashing",
    problems: [
      { id: 11, title: "Frequency Count", pattern: "HashMap / array count", platform: "GFG Search" },
      { id: 12, title: "Highest Frequency Element", pattern: "HashMap max frequency", platform: "GFG Search" },
      { id: 13, title: "Contains Duplicate", pattern: "HashSet", platform: "LeetCode 217" },
      { 
        id: 14, 
        title: "Two Sum", 
        pattern: "HashMap complement", 
        platform: "LeetCode 1",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
        starterCode: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n        return new int[]{0, 0};\n    }\n}",
        testCases: [
          { input: "[2,7,11,15]\n9", expected: "[0, 1]" },
          { input: "[3,2,4]\n6", expected: "[1, 2]" },
          { input: "[3,3]\n6", expected: "[0, 1]" }
        ],
        javaMain: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLine()) return;
        String numsStr = scanner.nextLine().trim();
        if (!scanner.hasNextInt()) return;
        int target = scanner.nextInt();
        
        numsStr = numsStr.substring(1, numsStr.length() - 1);
        String[] parts = numsStr.split(",");
        int[] nums = new int[parts.length];
        if (numsStr.length() > 0) {
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i].trim());
            }
        }
        
        Solution solution = new Solution();
        int[] result = solution.twoSum(nums, target);
        if (result != null && result.length == 2) {
            System.out.print("[" + result[0] + ", " + result[1] + "]");
        } else {
            System.out.print("Invalid output");
        }
    }
}
`
      },
      { id: 15, title: "Missing Number", pattern: "Sum / XOR / HashSet", platform: "LeetCode 268 / GFG" },
      { id: 16, title: "Single Number", pattern: "XOR", platform: "LeetCode 136" },
      { id: 17, title: "Intersection of Two Arrays", pattern: "HashSet", platform: "LeetCode 349" },
      { id: 18, title: "Longest Consecutive Sequence", pattern: "HashSet", platform: "LeetCode 128" },
      { id: 19, title: "Group Anagrams", pattern: "HashMap + sorting/counting", platform: "LeetCode 49" },
      { id: 20, title: "Top K Frequent Elements", pattern: "HashMap + Heap / Bucket", platform: "LeetCode 347" }
    ]
  },
  {
    id: "phase-3",
    title: "Phase 3: Two Pointers",
    problems: [
      { id: 21, title: "Move Zeroes", pattern: "Slow-fast pointer", platform: "LeetCode 283" },
      { id: 22, title: "Remove Element", pattern: "Slow-fast pointer", platform: "LeetCode 27" },
      { id: 23, title: "Sorted Squares", pattern: "Two pointers from both ends", platform: "LeetCode 977" },
      { id: 24, title: "Two Sum II", pattern: "Left-right pointer", platform: "LeetCode 167" },
      { id: 25, title: "Container With Most Water", pattern: "Left-right greedy pointer", platform: "LeetCode 11" },
      { id: 26, title: "3Sum", pattern: "Sorting + two pointers", platform: "LeetCode 15" },
      { id: 27, title: "4Sum", pattern: "Sorting + two pointers", platform: "LeetCode 18" },
      { id: 28, title: "Sort Colors", pattern: "Dutch national flag", platform: "LeetCode 75" },
      { id: 29, title: "Trapping Rain Water", pattern: "Two pointers / prefix max", platform: "LeetCode 42" },
      { id: 30, title: "Valid Palindrome", pattern: "Two pointers on string", platform: "LeetCode 125" }
    ,
      { id: "30A", title: "Merge Strings Alternately", pattern: "Two pointers", platform: "LeetCode 1768", isBooster: true },
      { id: "30B", title: "Is Subsequence", pattern: "Two pointers", platform: "LeetCode 392", isBooster: true },
      { id: "30C", title: "Reverse Vowels of a String", pattern: "Two pointers", platform: "LeetCode 345", isBooster: true },
      { id: "30D", title: "Remove Duplicates from Sorted Array II", pattern: "Slow-fast pointer", platform: "LeetCode 80", isBooster: true },
      { id: "30E", title: "Boats to Save People", pattern: "Sorting + two pointers", platform: "LeetCode 881", isBooster: true },
      { id: "30F", title: "Bag of Tokens", pattern: "Greedy + two pointers", platform: "LeetCode 948", isBooster: true }
    ]
  },
  {
    id: "phase-4",
    title: "Phase 4: Sliding Window",
    problems: [
      { id: 31, title: "Maximum Sum Subarray of Size K", pattern: "Fixed window", platform: "GFG Search" },
      { id: 32, title: "First Negative in Every Window", pattern: "Fixed window + queue", platform: "GFG Search" },
      { id: 33, title: "Longest Substring Without Repeating Characters", pattern: "Variable window + HashMap", platform: "LeetCode 3" },
      { id: 34, title: "Minimum Size Subarray Sum", pattern: "Variable window", platform: "LeetCode 209" },
      { id: 35, title: "Longest Repeating Character Replacement", pattern: "Sliding window + frequency", platform: "LeetCode 424" },
      { id: 36, title: "Max Consecutive Ones III", pattern: "Variable window", platform: "LeetCode 1004" },
      { id: 37, title: "Permutation in String", pattern: "Sliding window + frequency", platform: "LeetCode 567" },
      { id: 38, title: "Find All Anagrams in a String", pattern: "Sliding window + frequency", platform: "LeetCode 438" },
      { id: 39, title: "Fruit Into Baskets", pattern: "Variable window", platform: "LeetCode 904" },
      { id: 40, title: "Sliding Window Maximum", pattern: "Deque", platform: "LeetCode 239" }
    ,
      { id: "40A", title: "Maximum Average Subarray I", pattern: "Fixed sliding window", platform: "LeetCode 643", isBooster: true },
      { id: "40B", title: "Contains Duplicate II", pattern: "Sliding window + HashSet", platform: "LeetCode 219", isBooster: true },
      { id: "40C", title: "Subarrays with K Different Integers", pattern: "Variable window", platform: "LeetCode 992", isBooster: true },
      { id: "40D", title: "Binary Subarrays With Sum", pattern: "Sliding window / prefix sum", platform: "LeetCode 930", isBooster: true },
      { id: "40E", title: "Count Number of Nice Subarrays", pattern: "Sliding window / prefix sum", platform: "LeetCode 1248", isBooster: true },
      { id: "40F", title: "Minimum Window Substring", pattern: "Hard sliding window", platform: "LeetCode 76", isBooster: true },
      { id: "40G", title: "Longest Subarray of 1s After Deleting One Element", pattern: "Variable window", platform: "LeetCode 1493", isBooster: true }
    ]
  },
  {
    id: "phase-5",
    title: "Phase 5: Prefix Sum",
    problems: [
      { id: 41, title: "Range Sum Query", pattern: "Prefix sum", platform: "LeetCode 303" },
      { id: 42, title: "Equilibrium Index", pattern: "Prefix sum", platform: "GFG Search" },
      { id: 43, title: "Subarray Sum Equals K", pattern: "Prefix sum + HashMap", platform: "LeetCode 560" },
      { id: 44, title: "Count Subarrays With Given Sum", pattern: "Prefix sum + HashMap", platform: "GFG Search" },
      { id: 45, title: "Product of Array Except Self", pattern: "Prefix + suffix", platform: "LeetCode 238" },
      { id: 46, title: "Find Pivot Index", pattern: "Prefix sum", platform: "LeetCode 724" },
      { id: 47, title: "Subarray Sums Divisible by K", pattern: "Prefix remainder HashMap", platform: "LeetCode 974" },
      { id: 48, title: "Maximum Product Subarray", pattern: "Prefix idea / DP", platform: "LeetCode 152" }
    ,
      { id: "48A", title: "Running Sum of 1D Array", pattern: "Basic prefix sum", platform: "LeetCode 1480", isBooster: true },
      { id: "48B", title: "Find the Highest Altitude", pattern: "Prefix sum", platform: "LeetCode 1732", isBooster: true },
      { id: "48C", title: "Corporate Flight Bookings", pattern: "Difference array", platform: "LeetCode 1109", isBooster: true },
      { id: "48D", title: "Car Pooling", pattern: "Difference array / prefix sum", platform: "LeetCode 1094", isBooster: true },
      { id: "48E", title: "Continuous Subarray Sum", pattern: "Prefix remainder", platform: "LeetCode 523", isBooster: true },
      { id: "48F", title: "Contiguous Array", pattern: "Prefix sum + HashMap", platform: "LeetCode 525", isBooster: true },
      { id: "48G", title: "Maximum Size Subarray Sum Equals K", pattern: "Prefix sum + HashMap", platform: "LeetCode 325", isBooster: true }
    ]
  },
  {
    id: "phase-6",
    title: "Phase 6: Binary Search",
    problems: [
      { id: 49, title: "Binary Search", pattern: "Normal binary search", platform: "LeetCode 704" },
      { id: 50, title: "Search Insert Position", pattern: "Lower bound", platform: "LeetCode 35" },
      { id: 51, title: "First and Last Position", pattern: "Modified binary search", platform: "LeetCode 34" },
      { id: 52, title: "Search in Rotated Sorted Array", pattern: "Binary search with condition", platform: "LeetCode 33" },
      { id: 53, title: "Find Minimum in Rotated Sorted Array", pattern: "Binary search", platform: "LeetCode 153" },
      { id: 54, title: "Peak Index / Peak Element", pattern: "Binary search on slope", platform: "LeetCode 162" },
      { id: 55, title: "Koko Eating Bananas", pattern: "Binary search on answer", platform: "LeetCode 875" },
      { id: 56, title: "Capacity to Ship Packages", pattern: "Binary search on answer", platform: "LeetCode 1011" },
      { id: 57, title: "Split Array Largest Sum", pattern: "Binary search on answer", platform: "LeetCode 410" },
      { id: 58, title: "Median of Two Sorted Arrays", pattern: "Advanced binary search", platform: "LeetCode 4" }
    ,
      { id: "58A", title: "Sqrt(x)", pattern: "Binary search on answer", platform: "LeetCode 69", isBooster: true },
      { id: "58B", title: "Find Smallest Letter Greater Than Target", pattern: "Binary search", platform: "LeetCode 744", isBooster: true },
      { id: "58C", title: "Search a 2D Matrix", pattern: "Binary search", platform: "LeetCode 74", isBooster: true },
      { id: "58D", title: "Search a 2D Matrix II", pattern: "Binary search / matrix search", platform: "LeetCode 240", isBooster: true },
      { id: "58E", title: "Find K Closest Elements", pattern: "Binary search + two pointers", platform: "LeetCode 658", isBooster: true },
      { id: "58F", title: "Find Peak Element II", pattern: "Binary search on matrix", platform: "LeetCode 1901", isBooster: true },
      { id: "58G", title: "Minimum Number of Days to Make Bouquets", pattern: "Binary search on answer", platform: "LeetCode 1482", isBooster: true },
      { id: "58H", title: "Aggressive Cows", pattern: "Binary search on answer", platform: "GFG", isBooster: true }
    ]
  },
  {
    id: "phase-7",
    title: "Phase 7: Sorting + Greedy",
    problems: [
      { id: 59, title: "Merge Intervals", pattern: "Sorting intervals", platform: "LeetCode 56" },
      { id: 60, title: "Insert Interval", pattern: "Interval merging", platform: "LeetCode 57" },
      { id: 61, title: "Non-overlapping Intervals", pattern: "Greedy by end time", platform: "LeetCode 435" },
      { id: 62, title: "Meeting Rooms II", pattern: "Sorting + heap", platform: "LeetCode 253" },
      { id: 63, title: "Assign Cookies", pattern: "Greedy two pointers", platform: "LeetCode 455" },
      { id: 64, title: "Lemonade Change", pattern: "Greedy simulation", platform: "LeetCode 860" },
      { id: 65, title: "Jump Game", pattern: "Greedy reach", platform: "LeetCode 55" },
      { id: 66, title: "Jump Game II", pattern: "Greedy level range", platform: "LeetCode 45" },
      { id: 67, title: "Gas Station", pattern: "Greedy reset", platform: "LeetCode 134" },
      { id: 68, title: "Candy", pattern: "Greedy two pass", platform: "LeetCode 135" }
    ]
  },
  {
    id: "phase-8",
    title: "Phase 8: Stack + Queue",
    problems: [
      { id: 69, title: "Valid Parentheses", pattern: "Stack", platform: "LeetCode 20" },
      { id: 70, title: "Min Stack", pattern: "Stack design", platform: "LeetCode 155" },
      { id: 71, title: "Next Greater Element I", pattern: "Monotonic stack", platform: "LeetCode 496" },
      { id: 72, title: "Daily Temperatures", pattern: "Monotonic stack", platform: "LeetCode 739" },
      { id: 73, title: "Online Stock Span", pattern: "Monotonic stack", platform: "LeetCode 901" },
      { id: 74, title: "Evaluate Reverse Polish Notation", pattern: "Stack", platform: "LeetCode 150" },
      { id: 75, title: "Implement Queue Using Stacks", pattern: "Queue design", platform: "LeetCode 232" },
      { id: 76, title: "Implement Stack Using Queues", pattern: "Stack design", platform: "LeetCode 225" },
      { id: 77, title: "Asteroid Collision", pattern: "Stack simulation", platform: "LeetCode 735" },
      { id: 78, title: "Largest Rectangle in Histogram", pattern: "Monotonic stack", platform: "LeetCode 84" }
    ,
      { id: "78A", title: "Remove All Adjacent Duplicates in String", pattern: "Stack", platform: "LeetCode 1047", isBooster: true },
      { id: "78B", title: "Simplify Path", pattern: "Stack", platform: "LeetCode 71", isBooster: true },
      { id: "78C", title: "Decode String", pattern: "Stack", platform: "LeetCode 394", isBooster: true },
      { id: "78D", title: "Remove K Digits", pattern: "Monotonic stack", platform: "LeetCode 402", isBooster: true },
      { id: "78E", title: "Next Greater Element II", pattern: "Circular monotonic stack", platform: "LeetCode 503", isBooster: true },
      { id: "78F", title: "Sum of Subarray Minimums", pattern: "Monotonic stack", platform: "LeetCode 907", isBooster: true }
    ]
  },
  {
    id: "phase-9",
    title: "Phase 9: Linked List",
    problems: [
      { id: 79, title: "Reverse Linked List", pattern: "Pointer reversal", platform: "LeetCode 206" },
      { id: 80, title: "Middle of the Linked List", pattern: "Slow-fast pointer", platform: "LeetCode 876" },
      { id: 81, title: "Linked List Cycle", pattern: "Floyd cycle detection", platform: "LeetCode 141" },
      { id: 82, title: "Linked List Cycle II", pattern: "Floyd cycle start", platform: "LeetCode 142" },
      { id: 83, title: "Merge Two Sorted Lists", pattern: "Two pointers", platform: "LeetCode 21" },
      { id: 84, title: "Remove Nth Node From End", pattern: "Two pointers", platform: "LeetCode 19" },
      { id: 85, title: "Palindrome Linked List", pattern: "Reverse second half", platform: "LeetCode 234" },
      { id: 86, title: "Add Two Numbers", pattern: "Linked list simulation", platform: "LeetCode 2" },
      { id: 87, title: "Reorder List", pattern: "Middle + reverse + merge", platform: "LeetCode 143" },
      { id: 88, title: "Copy List With Random Pointer", pattern: "HashMap / node copy", platform: "LeetCode 138" }
    ]
  },
  {
    id: "phase-10",
    title: "Phase 10: Recursion + Backtracking",
    problems: [
      { id: 89, title: "Factorial", pattern: "Basic recursion", platform: "GFG Search" },
      { id: 90, title: "Fibonacci", pattern: "Recursion / DP intro", platform: "LeetCode 509" },
      { id: 91, title: "Subsets", pattern: "Pick / not pick", platform: "LeetCode 78" },
      { id: 92, title: "Subsets II", pattern: "Backtracking with duplicates", platform: "LeetCode 90" },
      { id: 93, title: "Permutations", pattern: "Backtracking", platform: "LeetCode 46" },
      { id: 94, title: "Permutations II", pattern: "Backtracking with duplicates", platform: "LeetCode 47" },
      { id: 95, title: "Combination Sum", pattern: "Backtracking choice", platform: "LeetCode 39" },
      { id: 96, title: "Combination Sum II", pattern: "Backtracking + sorting", platform: "LeetCode 40" },
      { id: 97, title: "Letter Combinations of Phone Number", pattern: "Backtracking", platform: "LeetCode 17" },
      { id: 98, title: "N-Queens", pattern: "Backtracking board", platform: "LeetCode 51" },
      { id: 99, title: "Sudoku Solver", pattern: "Backtracking grid", platform: "LeetCode 37" }
    ]
  },
  {
    id: "phase-11",
    title: "Phase 11: Trees + BST",
    problems: [
      { id: 100, title: "Binary Tree Inorder Traversal", pattern: "DFS", platform: "LeetCode 94" },
      { id: 101, title: "Preorder Traversal", pattern: "DFS", platform: "LeetCode 144" },
      { id: 102, title: "Postorder Traversal", pattern: "DFS", platform: "LeetCode 145" },
      { id: 103, title: "Level Order Traversal", pattern: "BFS queue", platform: "LeetCode 102" },
      { id: 104, title: "Maximum Depth of Binary Tree", pattern: "DFS height", platform: "LeetCode 104" },
      { id: 105, title: "Diameter of Binary Tree", pattern: "DFS height", platform: "LeetCode 543" },
      { id: 106, title: "Balanced Binary Tree", pattern: "DFS height check", platform: "LeetCode 110" },
      { id: 107, title: "Path Sum", pattern: "DFS path", platform: "LeetCode 112" },
      { id: 108, title: "Lowest Common Ancestor", pattern: "DFS", platform: "LeetCode 236" },
      { id: 109, title: "Validate BST", pattern: "Range DFS", platform: "LeetCode 98" },
      { id: 110, title: "Kth Smallest in BST", pattern: "Inorder", platform: "LeetCode 230" }
    ]
  },
  {
    id: "phase-12",
    title: "Phase 12: Heap / Priority Queue",
    problems: [
      { id: 111, title: "Kth Largest Element in Array", pattern: "Heap / quickselect", platform: "LeetCode 215" },
      { id: 112, title: "Top K Frequent Elements", pattern: "HashMap + heap", platform: "LeetCode 347" },
      { id: 113, title: "K Closest Points to Origin", pattern: "Heap", platform: "LeetCode 973" },
      { id: 114, title: "Merge K Sorted Lists", pattern: "Min heap", platform: "LeetCode 23" },
      { id: 115, title: "Find Median From Data Stream", pattern: "Two heaps", platform: "LeetCode 295" },
      { id: 116, title: "Task Scheduler", pattern: "Heap / greedy", platform: "LeetCode 621" },
      { id: 117, title: "Last Stone Weight", pattern: "Max heap", platform: "LeetCode 1046" },
      { id: 118, title: "Reorganize String", pattern: "Heap + greedy", platform: "LeetCode 767" }
    ]
  },
  {
    id: "phase-13",
    title: "Phase 13: Graphs",
    problems: [
      { id: 119, title: "Number of Islands", pattern: "DFS / BFS grid", platform: "LeetCode 200" },
      { id: 120, title: "Flood Fill", pattern: "DFS / BFS", platform: "LeetCode 733" },
      { id: 121, title: "Clone Graph", pattern: "DFS / BFS + HashMap", platform: "LeetCode 133" },
      { id: 122, title: "Rotting Oranges", pattern: "Multi-source BFS", platform: "LeetCode 994" },
      { id: 123, title: "Course Schedule", pattern: "Topological sort", platform: "LeetCode 207" },
      { id: 124, title: "Course Schedule II", pattern: "Topological sort order", platform: "LeetCode 210" },
      { id: 125, title: "Detect Cycle in Undirected Graph", pattern: "DFS / Union Find", platform: "GFG Search" },
      { id: 126, title: "Pacific Atlantic Water Flow", pattern: "DFS from borders", platform: "LeetCode 417" },
      { id: 127, title: "Word Ladder", pattern: "BFS shortest path", platform: "LeetCode 127" },
      { id: 128, title: "Network Delay Time", pattern: "Dijkstra", platform: "LeetCode 743" },
      { id: 129, title: "Cheapest Flights Within K Stops", pattern: "BFS / Bellman-Ford", platform: "LeetCode 787" }
    ]
  },
  {
    id: "phase-14",
    title: "Phase 14: Dynamic Programming",
    problems: [
      { id: 130, title: "Climbing Stairs", pattern: "1D DP", platform: "LeetCode 70" },
      { id: 131, title: "Min Cost Climbing Stairs", pattern: "1D DP", platform: "LeetCode 746" },
      { id: 132, title: "House Robber", pattern: "1D DP", platform: "LeetCode 198" },
      { id: 133, title: "House Robber II", pattern: "Circular DP", platform: "LeetCode 213" },
      { id: 134, title: "Coin Change", pattern: "1D DP minimum", platform: "LeetCode 322" },
      { id: 135, title: "Coin Change II", pattern: "Count ways DP", platform: "LeetCode 518" },
      { id: 136, title: "Unique Paths", pattern: "2D DP", platform: "LeetCode 62" },
      { id: 137, title: "Minimum Path Sum", pattern: "2D DP", platform: "LeetCode 64" },
      { id: 138, title: "Longest Increasing Subsequence", pattern: "DP / binary search", platform: "LeetCode 300" },
      { id: 139, title: "Longest Common Subsequence", pattern: "String DP", platform: "LeetCode 1143" },
      { id: 140, title: "Edit Distance", pattern: "String DP", platform: "LeetCode 72" },
      { id: 141, title: "Partition Equal Subset Sum", pattern: "Knapsack DP", platform: "LeetCode 416" },
      { id: 142, title: "Word Break", pattern: "DP + HashSet", platform: "LeetCode 139" },
      { id: 143, title: "Decode Ways", pattern: "1D DP", platform: "LeetCode 91" }
    ]
  },
  {
    id: "phase-15",
    title: "Phase 15: Bit Manipulation + Trie + Union Find",
    problems: [
      { id: 144, title: "Number of 1 Bits", pattern: "Bit counting", platform: "LeetCode 191" },
      { id: 145, title: "Counting Bits", pattern: "Bit DP", platform: "LeetCode 338" },
      { id: 146, title: "Reverse Bits", pattern: "Bit manipulation", platform: "LeetCode 190" },
      { id: 147, title: "Sum of Two Integers", pattern: "Bit operations", platform: "LeetCode 371" },
      { id: 148, title: "Implement Trie", pattern: "Trie design", platform: "LeetCode 208" },
      { id: 149, title: "Word Search II", pattern: "Trie + backtracking", platform: "LeetCode 212" },
      { id: 150, title: "Design Add and Search Words", pattern: "Trie + DFS", platform: "LeetCode 211" },
      { id: 151, title: "Number of Provinces", pattern: "Union Find / DFS", platform: "LeetCode 547" },
      { id: 152, title: "Redundant Connection", pattern: "Union Find", platform: "LeetCode 684" },
      { id: 153, title: "Accounts Merge", pattern: "Union Find", platform: "LeetCode 721" },
      { id: 154, title: "Graph Valid Tree", pattern: "Union Find", platform: "LeetCode 261" }
    ]
  }
,
  {
    id: "phase-16",
    title: "Phase 16: Matrix / Grid Problems",
    problems: [
      { id: 155, title: "Set Matrix Zeroes", pattern: "Matrix marking", platform: "LeetCode 73" },
      { id: 156, title: "Spiral Matrix", pattern: "Boundary traversal", platform: "LeetCode 54" },
      { id: 157, title: "Rotate Image", pattern: "Matrix transpose + reverse", platform: "LeetCode 48" },
      { id: 158, title: "Search a 2D Matrix", pattern: "Binary search", platform: "LeetCode 74" },
      { id: 159, title: "Word Search", pattern: "Backtracking on grid", platform: "LeetCode 79" },
      { id: 160, title: "Maximal Square", pattern: "Matrix DP", platform: "LeetCode 221" },
      { id: 161, title: "Game of Life", pattern: "Matrix simulation", platform: "LeetCode 289" }
    ]
  },
  {
    id: "phase-17",
    title: "Phase 17: String Problems",
    problems: [
      { id: 162, title: "Valid Anagram", pattern: "Hashing / sorting", platform: "LeetCode 242" },
      { id: 163, title: "Longest Common Prefix", pattern: "String comparison", platform: "LeetCode 14" },
      { id: 164, title: "Isomorphic Strings", pattern: "HashMap mapping", platform: "LeetCode 205" },
      { id: 165, title: "Valid Palindrome II", pattern: "Two pointers", platform: "LeetCode 680" },
      { id: 166, title: "String to Integer", pattern: "Simulation", platform: "LeetCode 8" },
      { id: 167, title: "Minimum Window Substring", pattern: "Sliding window", platform: "LeetCode 76" },
      { id: 168, title: "Longest Palindromic Substring", pattern: "Expand around center", platform: "LeetCode 5" },
      { id: 169, title: "Palindromic Substrings", pattern: "Expand around center", platform: "LeetCode 647" },
      { id: 170, title: "Find First Occurrence in String", pattern: "KMP / string matching", platform: "LeetCode 28" }
    ]
  },
  {
    id: "phase-18",
    title: "Phase 18: Advanced Trees",
    problems: [
      { id: 171, title: "Same Tree", pattern: "DFS comparison", platform: "LeetCode 100" },
      { id: 172, title: "Symmetric Tree", pattern: "DFS mirror check", platform: "LeetCode 101" },
      { id: 173, title: "Construct Tree from Preorder and Inorder", pattern: "Recursion + HashMap", platform: "LeetCode 105" },
      { id: 174, title: "Serialize and Deserialize Binary Tree", pattern: "Tree design", platform: "LeetCode 297" },
      { id: 175, title: "Binary Tree Right Side View", pattern: "BFS / DFS", platform: "LeetCode 199" },
      { id: 176, title: "Flatten Binary Tree to Linked List", pattern: "DFS / pointer change", platform: "LeetCode 114" },
      { id: 177, title: "Populating Next Right Pointers", pattern: "BFS / level connection", platform: "LeetCode 116" }
    ]
  },
  {
    id: "phase-19",
    title: "Phase 19: Advanced Graphs",
    problems: [
      { id: 178, title: "Surrounded Regions", pattern: "DFS from boundary", platform: "LeetCode 130" },
      { id: 179, title: "01 Matrix", pattern: "Multi-source BFS", platform: "LeetCode 542" },
      { id: 180, title: "Shortest Path in Binary Matrix", pattern: "BFS shortest path", platform: "LeetCode 1091" },
      { id: 181, title: "Min Cost to Connect All Points", pattern: "MST / Prim’s algorithm", platform: "LeetCode 1584" },
      { id: 182, title: "Swim in Rising Water", pattern: "Dijkstra / binary search", platform: "LeetCode 778" },
      { id: 183, title: "Bellman Ford Algorithm", pattern: "Shortest path with negative edges", platform: "GFG Search" },
      { id: 184, title: "Floyd Warshall Algorithm", pattern: "All-pairs shortest path", platform: "GFG Search" },
      { id: 185, title: "Alien Dictionary", pattern: "Topological sort", platform: "GFG Search" }
    ]
  },
  {
    id: "phase-20",
    title: "Phase 20: Segment Tree / Fenwick Tree",
    problems: [
      { id: 186, title: "Range Sum Query Mutable", pattern: "Segment Tree / Fenwick Tree", platform: "LeetCode 307" },
      { id: 187, title: "Count of Smaller Numbers After Self", pattern: "Merge sort / Fenwick Tree", platform: "LeetCode 315" },
      { id: 188, title: "Reverse Pairs", pattern: "Merge sort / BIT", platform: "LeetCode 493" },
      { id: 189, title: "Count Inversions", pattern: "Merge sort / Fenwick Tree", platform: "GFG Search" },
      { id: 190, title: "Range Minimum Query", pattern: "Segment Tree", platform: "GFG Search" }
    ]
  },
  {
    id: "phase-21",
    title: "Phase 21: Design Data Structures",
    problems: [
      { id: 191, title: "LRU Cache", pattern: "HashMap + Doubly Linked List", platform: "LeetCode 146" },
      { id: 192, title: "LFU Cache", pattern: "HashMap + frequency list", platform: "LeetCode 460" },
      { id: 193, title: "Design HashMap", pattern: "Array / bucket design", platform: "LeetCode 706" },
      { id: 194, title: "Design HashSet", pattern: "Array / bucket design", platform: "LeetCode 705" },
      { id: 195, title: "Time Based Key-Value Store", pattern: "HashMap + binary search", platform: "LeetCode 981" },
      { id: 196, title: "Design Twitter", pattern: "HashMap + heap", platform: "LeetCode 355" }
    ]
  },
  {
    id: "phase-22",
    title: "Phase 22: Advanced DP",
    problems: [
      { id: 197, title: "0/1 Knapsack", pattern: "Classic DP", platform: "GFG Search" },
      { id: 198, title: "Target Sum", pattern: "DP / subset sum", platform: "LeetCode 494" },
      { id: 199, title: "Burst Balloons", pattern: "Partition DP", platform: "LeetCode 312" },
      { id: 200, title: "Palindrome Partitioning II", pattern: "String DP", platform: "LeetCode 132" },
      { id: 201, title: "Regular Expression Matching", pattern: "String DP", platform: "LeetCode 10" },
      { id: 202, title: "Distinct Subsequences", pattern: "String DP", platform: "LeetCode 115" },
      { id: 203, title: "Maximum Profit in Job Scheduling", pattern: "DP + binary search", platform: "LeetCode 1235" }
    ]
  },
  {
    id: "phase-23",
    title: "Phase 23: Bitmask + Math",
    problems: [
      { id: 204, title: "Maximum Product of Word Lengths", pattern: "Bitmasking", platform: "LeetCode 318" },
      { id: 205, title: "Single Number II", pattern: "Bit manipulation", platform: "LeetCode 137" },
      { id: 206, title: "XOR Queries of a Subarray", pattern: "Prefix XOR", platform: "LeetCode 1310" },
      { id: 207, title: "Partition to K Equal Sum Subsets", pattern: "Backtracking / bitmask", platform: "LeetCode 698" },
      { id: 208, title: "Pow(x, n)", pattern: "Fast exponentiation", platform: "LeetCode 50" },
      { id: 209, title: "Count Primes", pattern: "Sieve of Eratosthenes", platform: "LeetCode 204" },
      { id: 210, title: "Happy Number", pattern: "HashSet / cycle detection", platform: "LeetCode 202" }
    ]
  }
];
