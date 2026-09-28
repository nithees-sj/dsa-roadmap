# DSA Concepts Guide (Java)

This guide goes with **DSA Practice List**. Phase numbers match, so read Phase *k* here before you solve the Phase *k* problems.

**How each concept is laid out**

- **What it is:** the idea in plain words
- **When to use it:** clues in the problem statement
- **How it works:** the steps
- **Complexity:** time and space
- **Java template:** code you should be able to write from memory
- **Common mistakes:** what usually goes wrong
- **Used in:** problem numbers from the practice list

Concepts are labelled with letters (1A, 1B, …) so they don't get mixed up with problem numbers (1.1, 1.2, …).

---

## Table of Contents

| Phase | Topic |
|---|---|
| 0 | Foundations: Java toolkit, complexity, math |
| 1 | Arrays & sorting algorithms |
| 2 | Hashing |
| 3 | Two pointers |
| 4 | Sliding window |
| 5 | Prefix sum & difference array |
| 6 | Binary search |
| 7 | Strings & pattern matching |
| 8 | Matrix / 2D arrays |
| 9 | Recursion & backtracking |
| 10 | Linked list |
| 11 | Stack & queue |
| 12 | Greedy & intervals |
| 13 | Binary trees |
| 14 | Binary search trees |
| 15 | Heap / priority queue |
| 16 | Graphs I: traversal, cycles, topological sort |
| 17 | Graphs II: shortest paths, DSU, MST, advanced |
| 18 | DP I: method, 1D & grid |
| 19 | DP II: subsets & knapsack |
| 20 | DP III: strings & LIS |
| 21 | DP IV: stocks, interval & partition DP |
| 22 | Bit manipulation & trie |
| 23 | Segment tree, Fenwick tree & design |
| — | Pattern recognition cheat-sheet |

---

## Phase 0 — Foundations: Java Toolkit, Complexity, Math

### 0A. Java Collections You Will Use Every Day

**What it is:** The built-in data structures that every solution depends on. Knowing them well means you never lose interview time on syntax.

| Need | Use | Key operations (cost) |
|---|---|---|
| Resizable array | `ArrayList<Integer>` | `add`, `get(i)`, `set` O(1), `remove(i)` O(n) |
| Key → value | `HashMap<K,V>` | `put`, `get`, `containsKey`, `getOrDefault`, `merge` O(1) average |
| Unique items | `HashSet<T>` | `add`, `contains`, `remove` O(1) average |
| Stack **and** queue | `ArrayDeque<T>` | `push/pop/peek` (stack), `offer/poll/peek` (queue) O(1) |
| Min / max quickly | `PriorityQueue<T>` | `offer`, `poll` O(log n), `peek` O(1) |
| Sorted keys, floor/ceiling | `TreeMap<K,V>` / `TreeSet<T>` | `put`, `floorKey`, `ceilingKey`, `firstKey` O(log n) |
| Build a string | `StringBuilder` | `append` O(1) amortised, `reverse`, `toString` |

```java
import java.util.*;

class ToolkitDemo {
    void demo() {
        // Arrays
        int[] a = {5, 2, 9};
        Arrays.sort(a);                                        // ascending, O(n log n)
        int[] dp = new int[10];
        Arrays.fill(dp, -1);

        // Sort 2D array / objects with a comparator
        int[][] intervals = {{3, 4}, {1, 2}};
        Arrays.sort(intervals, (x, y) -> Integer.compare(x[0], y[0]));
        Integer[] boxed = {5, 2, 9};
        Arrays.sort(boxed, Collections.reverseOrder());        // descending needs Integer[], not int[]

        // HashMap counting
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : a) freq.merge(x, 1, Integer::sum);        // same as put(x, getOrDefault(x,0)+1)

        // Stack and queue
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1); stack.peek(); stack.pop();
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(1); queue.peek(); queue.poll();

        // Heaps
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<int[]> byFirst = new PriorityQueue<>((p, q) -> Integer.compare(p[0], q[0]));

        // TreeMap floor / ceiling
        TreeMap<Integer, String> tm = new TreeMap<>();
        tm.put(10, "a"); tm.put(20, "b");
        Integer floor = tm.floorKey(15);                       // 10 (largest key <= 15)
        Integer ceil = tm.ceilingKey(15);                      // 20 (smallest key >= 15)

        // Strings
        StringBuilder sb = new StringBuilder("abc");
        sb.append('d').reverse();
        String s = sb.toString();
        int letterIndex = s.charAt(0) - 'a';                   // 'a'..'z' -> 0..25
    }
}
```

**Common mistakes**
- Comparing strings with `==` instead of `.equals()`.
- Comparator `(x, y) -> x - y` can overflow for large values. Use `Integer.compare(x, y)`.
- `Integer` objects from collections compared with `==` fail above 127. Use `.equals()` or unbox to `int` first.
- Using `Stack` / `LinkedList` as a queue: they work, but `ArrayDeque` is faster.
- `String s += ...` inside a loop is O(n²) overall. Use `StringBuilder`.

---

### 0B. Time & Space Complexity (Big-O)

**What it is:** A way to say how running time or memory grows as the input size `n` grows, ignoring constants. Interviewers expect you to state it for every solution.

**How to calculate it**
1. **Loops:** a loop running `n` times with O(1) work inside is O(n). Nested loops multiply: O(n·m).
2. **Halving:** if the problem size halves each step (binary search), it's O(log n).
3. **Recursion:** (number of calls) × (work per call). Draw the recursion tree. Two branches per call and depth `n` gives O(2ⁿ).
4. **Sorting** is O(n log n).
5. **Space:** extra arrays/maps you create + recursion stack depth.
6. **Amortised:** a pointer that only moves forward across the whole algorithm (sliding window, monotonic stack) adds O(n) in total, even if there's a `while` inside a `for`.

**Reading the constraints to find the target complexity** (about 10⁸ simple operations run in 1 second)

| n up to | Target | Typical technique |
|---|---|---|
| 10–12 | O(n!) | permutations |
| 20–25 | O(2ⁿ) | subsets, bitmask |
| 100–500 | O(n³) | interval DP, Floyd-Warshall |
| 10³–5·10³ | O(n²) | 2D DP, nested loops |
| 10⁵–10⁶ | O(n log n) / O(n) | sort, heap, binary search, two pointers, hashing |
| 10⁹ and above | O(log n) / O(√n) | binary search on answer, math |

**Common mistakes**
- Forgetting that `substring`, `contains` on a list, or `list.remove(0)` are O(n).
- Forgetting recursion stack space (a DFS on a 10⁵-node chain uses O(n) stack).
- Integer overflow: `int` holds about ±2.1·10⁹. Use `long` for sums/products that may be bigger.

---

### 0C. Number Theory Basics: GCD/LCM, Prime Check, Sieve, Fast Power

**What it is**
- **GCD (Euclid):** `gcd(a, b) = gcd(b, a % b)`, and `gcd(a, 0) = a`. LCM = `a / gcd(a,b) * b` (divide first to avoid overflow).
- **Prime check:** a composite `n` has a divisor ≤ √n, so you only test up to √n. O(√n).
- **Sieve of Eratosthenes:** marks every multiple of each prime as composite. Finds all primes ≤ n in O(n log log n). Start crossing out at `i*i`, because smaller multiples were already crossed out by smaller primes.
- **Fast power (binary exponentiation):** `xⁿ = (x²)^(n/2)` when n is even. Take the bits of `n` one at a time, so it's O(log n) instead of O(n).

**When to use it:** "count primes up to n", "power mod 10⁹+7", fractions/ratios, digit problems.

```java
class NumberTheory {
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    static long lcm(long a, long b) { return a / gcd((int) a, (int) b) * b; }

    static boolean isPrime(int n) {                           // O(sqrt n)
        if (n < 2) return false;
        for (int i = 2; (long) i * i <= n; i++) if (n % i == 0) return false;
        return true;
    }

    // composite[i] == false means i is prime (for i >= 2)
    static boolean[] sieve(int n) {                           // O(n log log n)
        boolean[] composite = new boolean[n + 1];
        for (int i = 2; (long) i * i <= n; i++)
            if (!composite[i])
                for (int j = i * i; j <= n; j += i) composite[j] = true;
        return composite;
    }

    static long power(long base, long exp, long mod) {        // O(log exp)
        long result = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1) result = result * base % mod; // this bit is set: multiply it in
            base = base * base % mod;                         // square for the next bit
            exp >>= 1;
        }
        return result;
    }

    // Digit extraction: used in reverse integer / palindrome number
    static int reverseDigits(int x) {
        long rev = 0;
        while (x != 0) { rev = rev * 10 + x % 10; x /= 10; }
        return (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) ? 0 : (int) rev;
    }
}
```

**Common mistakes**
- `i * i <= n` overflows when `n` is close to `Integer.MAX_VALUE`. Cast to `long`.
- In Pow(x, n), `-n` overflows when `n = Integer.MIN_VALUE`. Convert to `long` first.
- Trailing zeroes of n! = count of factor 5 (n/5 + n/25 + …), not a factorial computation.

**Used in:** 0.1–0.8

---

## Phase 1 — Arrays & Sorting Algorithms

### 1A. Array Traversal & In-place Tricks

**What it is:** An array stores elements in contiguous memory with O(1) access by index. Most array problems are solved with **one pass that carries a small state** (max so far, second max, count, previous element) or by **rearranging in place** instead of using extra space.

**Common one-pass states**
- Largest and second largest: keep `first` and `second`. When `x > first`, shift first into second.
- Sorted check: count "drops" where `a[i] > a[i+1]`. For "sorted and rotated", compare with wrap-around and allow at most one drop.
- Leaders (greater than everything to the right): scan **from the right** keeping the max.
- Rearrange by sign: two write indices (even positions for positives, odd for negatives).

```java
class ArrayBasics {
    int secondLargest(int[] a) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int x : a) {
            if (x > first) { second = first; first = x; }
            else if (x > second && x != first) second = x;
        }
        return second == Integer.MIN_VALUE ? -1 : second;
    }

    boolean isSortedAndRotated(int[] a) {
        int drops = 0, n = a.length;
        for (int i = 0; i < n; i++) if (a[i] > a[(i + 1) % n]) drops++;
        return drops <= 1;
    }
}
```

**Used in:** 1.1, 1.2, 1.3, 1.6, 1.13, 1.14, 1.16

---

### 1B. Kadane's Algorithm (Maximum Subarray)

**What it is:** Finds the maximum sum of a contiguous subarray in O(n).

**Key idea:** At each index, the best subarray **ending here** either extends the best subarray ending at the previous index or starts fresh at this element: `cur = max(x, cur + x)`. The answer is the max `cur` seen.

**Dry run** on `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`: cur = −2, 1, −2, **4**, 3, 5, **6**, 1, 5 → answer 6 (subarray `[4, -1, 2, 1]`).

**Variant, maximum product:** a negative number turns the smallest product into the largest, so track **both** `maxHere` and `minHere` and swap them when `x < 0`.

**Variant, stock buy/sell once:** keep the minimum price so far. Profit today = price − minSoFar.

```java
class Kadane {
    int maxSubArray(int[] nums) {
        int best = nums[0], cur = 0;
        for (int x : nums) {
            cur = Math.max(x, cur + x);
            best = Math.max(best, cur);
        }
        return best;
    }

    int maxProduct(int[] nums) {
        int maxHere = nums[0], minHere = nums[0], best = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int x = nums[i];
            if (x < 0) { int t = maxHere; maxHere = minHere; minHere = t; }
            maxHere = Math.max(x, maxHere * x);
            minHere = Math.min(x, minHere * x);
            best = Math.max(best, maxHere);
        }
        return best;
    }

    int maxProfitOneTransaction(int[] prices) {
        int minSoFar = Integer.MAX_VALUE, best = 0;
        for (int p : prices) {
            minSoFar = Math.min(minSoFar, p);
            best = Math.max(best, p - minSoFar);
        }
        return best;
    }
}
```

**Complexity:** O(n) time, O(1) space.
**Common mistakes:** initialising `best = 0` fails when every number is negative (answer should be the largest negative).
**Used in:** 1.10, 1.11, 1.12

---

### 1C. Boyer-Moore Voting (Majority Element)

**What it is:** Finds the element appearing more than n/2 times in O(n) time and O(1) space.

**Key idea:** Pair each majority element with a different element and cancel both. The majority element survives because it has more copies than everything else combined. Keep a `candidate` and a `count`: same value → `count++`, different → `count--`, count hits 0 → take the next element as the new candidate.

**Extension (> n/3):** at most **2** elements can appear more than n/3 times, so keep 2 candidates and 2 counts, then verify both with a second pass.

```java
import java.util.*;

class BoyerMoore {
    int majority(int[] nums) {
        int cand = 0, count = 0;
        for (int x : nums) {
            if (count == 0) cand = x;
            count += (x == cand) ? 1 : -1;
        }
        return cand;                               // verify with a second pass if not guaranteed
    }

    List<Integer> majorityNBy3(int[] nums) {
        int c1 = 0, c2 = 1, n1 = 0, n2 = 0;        // different initial candidates
        for (int x : nums) {
            if (x == c1) n1++;
            else if (x == c2) n2++;
            else if (n1 == 0) { c1 = x; n1 = 1; }
            else if (n2 == 0) { c2 = x; n2 = 1; }
            else { n1--; n2--; }
        }
        n1 = 0; n2 = 0;
        for (int x : nums) { if (x == c1) n1++; else if (x == c2) n2++; }
        List<Integer> res = new ArrayList<>();
        if (n1 > nums.length / 3) res.add(c1);
        if (n2 > nums.length / 3) res.add(c2);
        return res;
    }
}
```

**Used in:** 1.8, 1.9

---

### 1D. Rotation by Reversal

**What it is:** Rotate an array right by `k` in O(n) time and O(1) space using three reversals.

**Why it works:** for `[1 2 3 4 5 6 7]`, k = 3: reverse all → `[7 6 5 4 3 2 1]`; reverse the first k → `[5 6 7 | 4 3 2 1]`; reverse the rest → `[5 6 7 1 2 3 4]`.
For a **left** rotation by k: reverse the first k, reverse the rest, then reverse all.

```java
class Rotation {
    void rotateRight(int[] a, int k) {
        int n = a.length;
        k %= n;                                    // k can be larger than n
        reverse(a, 0, n - 1);
        reverse(a, 0, k - 1);
        reverse(a, k, n - 1);
    }
    void reverse(int[] a, int l, int r) {
        while (l < r) { int t = a[l]; a[l++] = a[r]; a[r--] = t; }
    }
}
```

**Common mistakes:** forgetting `k %= n`.
**Used in:** 1.5 (also the idea behind 7.5 Rotate String and 10.14 Rotate List)

---

### 1E. Next Permutation

**What it is:** Rearrange numbers into the next lexicographically larger order (like the next number on an odometer made of these digits).

**How it works**
1. From the right, find the first index `i` where `a[i] < a[i+1]` (the "dip"). If there's none, the array is the last permutation, so reverse it all.
2. From the right, find the first `j` with `a[j] > a[i]` and swap `a[i]` and `a[j]`.
3. Reverse the suffix after `i` (it was descending; make it ascending = smallest).

**Example:** `[1, 3, 5, 4, 2]` → dip at index 1 (3) → swap with 4 → `[1, 4, 5, 3, 2]` → reverse after index 1 → `[1, 4, 2, 3, 5]`.

```java
class NextPermutation {
    void nextPermutation(int[] a) {
        int i = a.length - 2;
        while (i >= 0 && a[i] >= a[i + 1]) i--;
        if (i >= 0) {
            int j = a.length - 1;
            while (a[j] <= a[i]) j--;
            swap(a, i, j);
        }
        for (int l = i + 1, r = a.length - 1; l < r; l++, r--) swap(a, l, r);
    }
    void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }
}
```

**Complexity:** O(n) time, O(1) space.
**Used in:** 1.15

---

### 1F. Merge Sort & Quick Sort (implement them yourself)

**Merge sort, what it is:** divide the array in half, sort each half recursively, then **merge** the two sorted halves with two pointers.
- Always O(n log n) (log n levels, O(n) merging per level). O(n) extra space. **Stable** (equal elements keep their order).
- The merge step is also used to **count inversions** (Phase 23) and to sort linked lists (Phase 10).

**Quick sort, what it is:** pick a **pivot**, **partition** so smaller elements go left and larger go right, then recurse on both sides.
- O(n log n) on average, O(n²) worst case (bad pivots, e.g. already-sorted input with the first element as pivot). Use a random pivot. In place, not stable.
- The partition step is reused in **quickselect** (Kth largest in average O(n), Phase 15).

```java
import java.util.*;

class Sorting {
    void mergeSort(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        mergeSort(a, lo, mid);
        mergeSort(a, mid + 1, hi);
        merge(a, lo, mid, hi);
    }
    void merge(int[] a, int lo, int mid, int hi) {
        int[] tmp = new int[hi - lo + 1];
        int i = lo, j = mid + 1, k = 0;
        while (i <= mid && j <= hi) tmp[k++] = (a[i] <= a[j]) ? a[i++] : a[j++];   // <= keeps it stable
        while (i <= mid) tmp[k++] = a[i++];
        while (j <= hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, 0, a, lo, tmp.length);
    }

    private final Random rnd = new Random();
    void quickSort(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int p = partition(a, lo, hi);
        quickSort(a, lo, p - 1);
        quickSort(a, p + 1, hi);
    }
    // Lomuto partition: returns the pivot's final index
    int partition(int[] a, int lo, int hi) {
        swap(a, lo + rnd.nextInt(hi - lo + 1), hi);          // random pivot moved to the end
        int pivot = a[hi], i = lo;
        for (int j = lo; j < hi; j++)
            if (a[j] < pivot) swap(a, i++, j);
        swap(a, i, hi);
        return i;
    }
    void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }
}
```

| | Merge sort | Quick sort |
|---|---|---|
| Time | O(n log n) always | O(n log n) avg, O(n²) worst |
| Extra space | O(n) | O(log n) stack |
| Stable | Yes | No |
| Java uses | `Arrays.sort(Object[])` (TimSort, merge-based) | `Arrays.sort(int[])` (dual-pivot quick sort) |

**Common mistakes:** `mid = (lo + hi) / 2` can overflow for huge indices, so use `lo + (hi - lo) / 2`. On LC 912, plain Lomuto quick sort can time out when many values are equal, so use merge sort there.
**Merge Sorted Array (in place):** fill `nums1` from the **back**, comparing the largest remaining elements, so nothing gets overwritten before it is read.

**Used in:** 1.7, 1.17 (and 10.16, 15.3, 23.1, 23.4)

---

### 1G. Cyclic Sort / Index Marking

**What it is:** When values are in the range `1..n` (or `0..n`), each value "belongs" at index `value − 1`. You can use the array itself as a hash table and get O(n) time with O(1) extra space.

**Two forms**
- **Cyclic sort:** swap each value into its correct index until every position holds its own value or a value that can't be placed. Then the first index `i` where `a[i] != i + 1` gives the missing number.
- **Index marking:** for value `v`, make `a[v-1]` negative to mark "v was seen".

```java
class CyclicSort {
    // First Missing Positive: O(n) time, O(1) space
    int firstMissingPositive(int[] a) {
        int n = a.length;
        for (int i = 0; i < n; i++) {
            // keep swapping a[i] into its home while it is in range and not already there
            while (a[i] > 0 && a[i] <= n && a[a[i] - 1] != a[i]) {
                int home = a[i] - 1;
                int t = a[i]; a[i] = a[home]; a[home] = t;
            }
        }
        for (int i = 0; i < n; i++) if (a[i] != i + 1) return i + 1;
        return n + 1;
    }
}
```

**Common mistakes:** checking `a[i] != i + 1` instead of `a[a[i]-1] != a[i]` in the loop condition loops forever on duplicates.
**Used in:** 1.18 (the same idea applies to 2.6 Missing Number)

---

## Phase 2 — Hashing

### 2A. HashMap & HashSet

**What it is:** A hash table maps a key to a bucket using `hashCode()`, giving **average O(1)** insert, lookup and delete. `HashSet` stores keys only, and `HashMap` stores key → value.

**How it works inside (asked in Java interviews)**
- `index = hash(key) & (capacity − 1)`.
- Collisions (two keys in the same bucket) are stored in a linked list, which Java 8+ turns into a red-black tree once a bucket has more than 8 entries.
- When size exceeds `capacity × 0.75` (load factor), the table doubles and every entry is re-hashed.
- Keys must implement `equals()` and `hashCode()` consistently.

**When to use it:** "have I seen this before?", duplicates, O(n) required on **unsorted** data.

**Common mistakes**
- Using a mutable object (like an `int[]` or a `List` you later change) as a key. Arrays use identity hashing, so `new int[]{1,2}` never matches another `new int[]{1,2}`. Convert to a `String` or `List` key.
- Worst case can degrade, so say "average O(1)" in interviews.

**Used in:** 2.2, 2.8, 2.11

---

### 2B. Frequency Counting (and `int[26]`)

**What it is:** Count how many times each value appears. For lowercase letters, an `int[26]` indexed by `c - 'a'` is faster and simpler than a map.

**When to use it:** anagrams, ransom note, "unique occurrences", "sort by frequency", "first non-repeating".

```java
import java.util.*;

class Counting {
    boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] cnt = new int[26];
        for (int i = 0; i < s.length(); i++) {
            cnt[s.charAt(i) - 'a']++;
            cnt[t.charAt(i) - 'a']--;
        }
        for (int c : cnt) if (c != 0) return false;
        return true;
    }

    // Two-way mapping (isomorphic strings / word pattern): a->x must be consistent in BOTH directions
    boolean isIsomorphic(String s, String t) {
        int[] sToT = new int[256], tToS = new int[256];       // store (index + 1), 0 = unmapped
        for (int i = 0; i < s.length(); i++) {
            char a = s.charAt(i), b = t.charAt(i);
            if (sToT[a] != tToS[b]) return false;             // must have been paired at the same time
            sToT[a] = tToS[b] = i + 1;
        }
        return true;
    }
}
```

**Used in:** 2.1, 2.4, 2.5, 2.9, 2.10, 2.15 (and every window problem in Phase 4)

---

### 2C. Complement Lookup

**What it is:** Instead of checking every pair (O(n²)), for each `x` ask the map "have I already seen `target − x`?" This makes it O(n).

**Why store after checking:** it stops an element from pairing with itself.

**Variants:** 4Sum II stores all sums of pairs from arrays A and B in a map, then looks up `−(c + d)` for pairs from C and D. That's O(n²) instead of O(n⁴).

```java
import java.util.*;

class Complement {
    int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> indexOf = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            Integer j = indexOf.get(target - nums[i]);
            if (j != null) return new int[]{j, i};
            indexOf.put(nums[i], i);                           // store AFTER checking
        }
        return new int[]{-1, -1};
    }

    // Longest Consecutive Sequence: only start counting at x where x-1 is NOT present -> O(n)
    int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int x : nums) set.add(x);
        int best = 0;
        for (int x : set) {
            if (set.contains(x - 1)) continue;                  // not a sequence start
            int len = 1;
            while (set.contains(x + len)) len++;
            best = Math.max(best, len);
        }
        return best;
    }
}
```

**Used in:** 2.3, 2.11, 2.13 (and later 5.6, 5.7)

---

### 2D. Grouping by a Key

**What it is:** Map each item to a **canonical key** so that items that "belong together" get the same key.
- Anagrams: the key is the sorted string (`"eat"` → `"aet"`) or a 26-count signature (`"1#0#0#…"`).
- Other examples: group by remainder, by shifted pattern, by first letter.

```java
import java.util.*;

class Grouping {
    List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String s : strs) {
            char[] cs = s.toCharArray();
            Arrays.sort(cs);
            groups.computeIfAbsent(new String(cs), k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(groups.values());
    }
}
```

**Complexity:** O(n · k log k) with a sorted key (k = word length), or O(n · k) with a count key.
**Used in:** 2.12

---

### 2E. Bucket Sort (by frequency)

**What it is:** A frequency is at most `n`, so create `n + 1` buckets where `bucket[f]` holds the values that appear `f` times. Walking buckets from high to low gives values by frequency in **O(n)**, with no sorting and no heap.

```java
import java.util.*;

class BucketSort {
    @SuppressWarnings("unchecked")
    int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : nums) freq.merge(x, 1, Integer::sum);
        List<Integer>[] bucket = new List[nums.length + 1];
        for (Map.Entry<Integer, Integer> e : freq.entrySet()) {
            int f = e.getValue();
            if (bucket[f] == null) bucket[f] = new ArrayList<>();
            bucket[f].add(e.getKey());
        }
        int[] res = new int[k];
        int idx = 0;
        for (int f = nums.length; f > 0 && idx < k; f--)
            if (bucket[f] != null)
                for (int x : bucket[f]) if (idx < k) res[idx++] = x;
        return res;
    }
}
```

**Used in:** 2.14, 2.15 (Phase 15 solves the same problem with a heap)

---

### 2F. XOR and Sum Tricks for "Missing / Single" Numbers

**What it is:** `a ^ a = 0` and `a ^ 0 = a`, and XOR is order-independent. XOR-ing everything cancels the pairs and leaves the single one.
- **Single Number:** XOR all elements.
- **Missing Number (0..n):** XOR all indices 0..n with all values. The missing one is left. (Or `n(n+1)/2 − sum`, but watch for overflow.)

**Used in:** 2.6, 2.7 (more in Phase 22)

---

## Phase 3 — Two Pointers

### 3A. Opposite-Ends Pointers

**What it is:** One pointer at the start, one at the end, moving toward each other. Each step discards one element forever, so it's O(n).

**When to use it:** **sorted** array pair problems, palindromes, reversing, "container with most water".

**Why it's correct (pair sum):** if `a[l] + a[r] < target`, then `a[l]` paired with anything left of `r` is even smaller, so `a[l]` can never be in the answer and `l++` is safe.

**Container with most water:** the area is limited by the shorter wall. Moving the taller wall can only shrink the width without raising the height, so always move the **shorter** one.

**Trapping rain water:** water above index i = `min(maxLeft, maxRight) − h[i]`. With two pointers, whichever side has the smaller max is the limiting side, so you can settle that side's water right away.

```java
class OppositeEnds {
    int[] pairSum(int[] a, int target) {                         // a is sorted
        int l = 0, r = a.length - 1;
        while (l < r) {
            int s = a[l] + a[r];
            if (s == target) return new int[]{l, r};
            if (s < target) l++; else r--;
        }
        return new int[]{-1, -1};
    }

    int maxArea(int[] h) {
        int l = 0, r = h.length - 1, best = 0;
        while (l < r) {
            best = Math.max(best, Math.min(h[l], h[r]) * (r - l));
            if (h[l] < h[r]) l++; else r--;
        }
        return best;
    }

    int trap(int[] h) {
        int l = 0, r = h.length - 1, leftMax = 0, rightMax = 0, water = 0;
        while (l < r) {
            if (h[l] < h[r]) {                                   // left side is the limiting side
                leftMax = Math.max(leftMax, h[l]);
                water += leftMax - h[l++];
            } else {
                rightMax = Math.max(rightMax, h[r]);
                water += rightMax - h[r--];
            }
        }
        return water;
    }

    boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            if (!Character.isLetterOrDigit(s.charAt(l))) { l++; continue; }
            if (!Character.isLetterOrDigit(s.charAt(r))) { r--; continue; }
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;
            l++; r--;
        }
        return true;
    }
}
```

**Used in:** 3.1, 3.4, 3.7, 3.8, 3.9, 3.11, 3.16, 3.17, 3.18

---

### 3B. Read/Write (Slow-Fast) Pointers

**What it is:** `read` scans every element and `write` marks where the next "kept" element goes. This compacts an array in place in O(n) and O(1) space.

**Variant:** "allow at most 2 duplicates" → keep `a[read]` if `write < 2 || a[read] != a[write − 2]`.

```java
class ReadWrite {
    int removeDuplicates(int[] a) {                   // sorted input, keep one copy
        if (a.length == 0) return 0;
        int write = 1;
        for (int read = 1; read < a.length; read++)
            if (a[read] != a[write - 1]) a[write++] = a[read];
        return write;
    }

    void moveZeroes(int[] a) {
        int write = 0;
        for (int read = 0; read < a.length; read++)
            if (a[read] != 0) { int t = a[write]; a[write++] = a[read]; a[read] = t; }
    }

    int removeDuplicatesAtMostTwo(int[] a) {
        int write = 0;
        for (int x : a)
            if (write < 2 || x != a[write - 2]) a[write++] = x;
        return write;
    }
}
```

**Used in:** 1.4, 3.2, 3.3, 3.5, 3.6, 3.10

---

### 3C. Sort + Fix One + Two Pointers (3Sum / 4Sum)

**What it is:** For k-sum, sort first, fix the first `k − 2` elements with loops, and solve the last two with opposite-end pointers. 3Sum is O(n²) and 4Sum is O(n³).

**Handling duplicates** (the hard part)
1. Skip an anchor equal to the previous anchor: `if (i > 0 && a[i] == a[i-1]) continue;`
2. After finding a triplet, move `l` and `r` past equal values.

```java
import java.util.*;

class KSum {
    List<List<Integer>> threeSum(int[] a) {
        Arrays.sort(a);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < a.length - 2; i++) {
            if (i > 0 && a[i] == a[i - 1]) continue;
            if (a[i] > 0) break;                                  // sorted: no way to reach 0
            int l = i + 1, r = a.length - 1;
            while (l < r) {
                int s = a[i] + a[l] + a[r];
                if (s < 0) l++;
                else if (s > 0) r--;
                else {
                    res.add(Arrays.asList(a[i], a[l], a[r]));
                    while (l < r && a[l] == a[l + 1]) l++;
                    while (l < r && a[r] == a[r - 1]) r--;
                    l++; r--;
                }
            }
        }
        return res;
    }
}
```

**Common mistakes:** in 4Sum, `a[i] + a[j] + a[l] + a[r]` overflows `int`, so cast to `long`.
**Used in:** 3.12, 3.13, 3.14

---

### 3D. Dutch National Flag (3-way partition)

**What it is:** Sort an array of 0s, 1s and 2s in **one pass**, in place, with three pointers:
- `[0, lo)` = 0s, `[lo, mid)` = 1s, `(hi, end]` = 2s, and `[mid, hi]` = not yet seen.
- `a[mid] == 0` → swap with `lo`, move both. `== 1` → `mid++`. `== 2` → swap with `hi`, `hi--` (**don't** move `mid`, because the swapped-in value hasn't been checked).

```java
class DutchFlag {
    void sortColors(int[] a) {
        int lo = 0, mid = 0, hi = a.length - 1;
        while (mid <= hi) {
            if (a[mid] == 0) swap(a, lo++, mid++);
            else if (a[mid] == 1) mid++;
            else swap(a, mid, hi--);
        }
    }
    void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }
}
```

**Used in:** 3.15 (also the 3-way partition that fixes quick sort on many duplicates)

---

## Phase 4 — Sliding Window

### 4A. Fixed-Size Window

**What it is:** A window of exactly `k` elements slides one step at a time. Add the new right element and remove the element that just left on the left. O(n) instead of O(n·k).

**Template idea:** once `r ≥ k − 1` the window is full, so record the answer, then remove `a[r − k + 1]`.

```java
import java.util.*;

class FixedWindow {
    int maxSumK(int[] a, int k) {
        int sum = 0, best = Integer.MIN_VALUE;
        for (int r = 0; r < a.length; r++) {
            sum += a[r];
            if (r >= k - 1) {
                best = Math.max(best, sum);
                sum -= a[r - k + 1];
            }
        }
        return best;
    }

    // Anagram-style window: compare counts of the window with counts of the pattern
    List<Integer> findAnagrams(String s, String p) {
        List<Integer> res = new ArrayList<>();
        if (p.length() > s.length()) return res;
        int[] need = new int[26], have = new int[26];
        for (char c : p.toCharArray()) need[c - 'a']++;
        int k = p.length();
        for (int r = 0; r < s.length(); r++) {
            have[s.charAt(r) - 'a']++;
            if (r >= k) have[s.charAt(r - k) - 'a']--;          // drop the element that left
            if (r >= k - 1 && Arrays.equals(need, have)) res.add(r - k + 1);
        }
        return res;
    }
}
```

**Used in:** 4.1, 4.2, 4.3 (window + queue of negatives), 4.4, 4.11, 4.12

---

### 4B. Variable-Size Window (Expand / Shrink)

**What it is:** Always expand `r`. While the window is **invalid**, shrink from `l`. After shrinking, the window `[l, r]` is the best valid window ending at `r`.

**Required property:** the condition must be **monotonic**, meaning that if a window is invalid, every bigger window containing it is also invalid. That's true for "at most k zeros" or "sum ≥ target with positive numbers". It's **not** true when negative numbers are allowed (use prefix sums instead).

**Two flavours**
- **Longest valid window:** shrink while invalid, then `best = max(best, r − l + 1)`.
- **Shortest valid window:** while the window is valid, record `r − l + 1`, then shrink.

```java
class VariableWindow {
    // Longest: at most k zeros can be flipped (Max Consecutive Ones III)
    int longestOnes(int[] a, int k) {
        int zeros = 0, best = 0;
        for (int l = 0, r = 0; r < a.length; r++) {
            if (a[r] == 0) zeros++;
            while (zeros > k) if (a[l++] == 0) zeros--;
            best = Math.max(best, r - l + 1);
        }
        return best;
    }

    // Shortest: smallest subarray with sum >= target (positives only)
    int minSubArrayLen(int target, int[] a) {
        int sum = 0, best = Integer.MAX_VALUE;
        for (int l = 0, r = 0; r < a.length; r++) {
            sum += a[r];
            while (sum >= target) {
                best = Math.min(best, r - l + 1);
                sum -= a[l++];
            }
        }
        return best == Integer.MAX_VALUE ? 0 : best;
    }

    // Longest Repeating Character Replacement: window valid if (len - maxFreq) <= k
    int characterReplacement(String s, int k) {
        int[] cnt = new int[26];
        int maxFreq = 0, best = 0;
        for (int l = 0, r = 0; r < s.length(); r++) {
            maxFreq = Math.max(maxFreq, ++cnt[s.charAt(r) - 'A']);
            while (r - l + 1 - maxFreq > k) cnt[s.charAt(l++) - 'A']--;
            best = Math.max(best, r - l + 1);
        }
        return best;
    }
}
```

**Minimum Window Substring:** keep `need[]` counts and a `missing` counter. Expand until `missing == 0`, then shrink while it stays valid, recording the smallest window.
**Used in:** 4.5–4.10, 4.13, 4.14, 4.19

---

### 4C. Counting Subarrays: Exactly K = atMost(K) − atMost(K − 1)

**What it is:** Counting windows with **exactly** K of something is hard because the condition isn't monotonic. Counting windows with **at most** K is easy: for each `r`, every start between `l` and `r` is valid, so add `r − l + 1`. Then subtract.

```java
import java.util.*;

class ExactlyK {
    int subarraysWithKDistinct(int[] a, int k) { return atMost(a, k) - atMost(a, k - 1); }

    int atMost(int[] a, int k) {
        if (k < 0) return 0;
        Map<Integer, Integer> cnt = new HashMap<>();
        int res = 0;
        for (int l = 0, r = 0; r < a.length; r++) {
            if (cnt.merge(a[r], 1, Integer::sum) == 1) k--;       // a new distinct value
            while (k < 0) {
                if (cnt.merge(a[l], -1, Integer::sum) == 0) k++;
                l++;
            }
            res += r - l + 1;                                     // windows ending at r
        }
        return res;
    }
}
```

**Used in:** 4.14, 4.15, 4.16, 4.17

---

### 4D. Monotonic Deque (Sliding Window Maximum / Minimum)

**What it is:** A deque of **indices** whose values are kept in decreasing order. The front is always the max of the current window.

**Why pop from the back:** if a new value is ≥ an older value, that older one can **never** be the max again, because it leaves the window first and is smaller. Each index is pushed and popped once, so the total is O(n).

```java
import java.util.*;

class MonotonicDeque {
    int[] maxSlidingWindow(int[] a, int k) {
        Deque<Integer> dq = new ArrayDeque<>();
        int[] res = new int[a.length - k + 1];
        for (int i = 0; i < a.length; i++) {
            if (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();       // left the window
            while (!dq.isEmpty() && a[dq.peekLast()] <= a[i]) dq.pollLast();    // useless now
            dq.offerLast(i);
            if (i >= k - 1) res[i - k + 1] = a[dq.peekFirst()];
        }
        return res;
    }
}
```

**Used in:** 4.18

---

## Phase 5 — Prefix Sum & Difference Array

### 5A. Prefix Sum Array

**What it is:** `pre[i]` = sum of the first `i` elements (`pre[0] = 0`). Then `sum(l..r) = pre[r+1] − pre[l]` in O(1) after O(n) preprocessing.

**Related ideas**
- **Pivot / equilibrium index:** left sum = `pre[i]`, right sum = `total − pre[i] − a[i]`.
- **Prefix × suffix products (Product Except Self):** `ans[i] = (product of everything left of i) × (product of everything right of i)`. Two passes, no division.

```java
class PrefixSum {
    long[] build(int[] a) {
        long[] pre = new long[a.length + 1];
        for (int i = 0; i < a.length; i++) pre[i + 1] = pre[i] + a[i];
        return pre;
    }
    long rangeSum(long[] pre, int l, int r) { return pre[r + 1] - pre[l]; }

    int[] productExceptSelf(int[] a) {
        int n = a.length;
        int[] ans = new int[n];
        ans[0] = 1;
        for (int i = 1; i < n; i++) ans[i] = ans[i - 1] * a[i - 1];    // left products
        int right = 1;
        for (int i = n - 1; i >= 0; i--) { ans[i] *= right; right *= a[i]; }
        return ans;
    }
}
```

**Used in:** 5.1–5.5

---

### 5B. Prefix Sum + HashMap (works with negative numbers)

**What it is:** A subarray `(j, i]` has sum K exactly when `pre[i] − pre[j] = K`, i.e. `pre[j] = pre[i] − K`. So while scanning, look up how many earlier prefixes equal `current − K`.
- **Count** subarrays: store `prefix → count`, starting with `{0: 1}` (the empty prefix).
- **Longest** subarray: store `prefix → first index` where it appeared, starting with `{0: -1}`.
- **Equal 0s and 1s:** replace 0 with −1, then find the longest subarray with sum 0.

```java
import java.util.*;

class PrefixHash {
    int countSubarraysSumK(int[] a, int k) {
        Map<Integer, Integer> seen = new HashMap<>();
        seen.put(0, 1);
        int sum = 0, count = 0;
        for (int x : a) {
            sum += x;
            count += seen.getOrDefault(sum - k, 0);
            seen.merge(sum, 1, Integer::sum);
        }
        return count;
    }

    int longestSubarraySumK(int[] a, int k) {
        Map<Long, Integer> firstIndex = new HashMap<>();
        firstIndex.put(0L, -1);
        long sum = 0;
        int best = 0;
        for (int i = 0; i < a.length; i++) {
            sum += a[i];
            Integer j = firstIndex.get(sum - k);
            if (j != null) best = Math.max(best, i - j);
            firstIndex.putIfAbsent(sum, i);                       // keep the FIRST index only
        }
        return best;
    }
}
```

**Why sliding window fails here:** with negatives, adding an element can make the sum smaller, so "shrink while too big" is no longer correct.
**Used in:** 5.6, 5.7, 5.8

---

### 5C. Prefix Remainder

**What it is:** A subarray sum is divisible by K when two prefix sums have the **same remainder mod K**. Count remainders (or store the first index of each remainder).

**Java note:** `%` can return a negative number for negative sums. Normalise with `((sum % k) + k) % k`.

```java
class PrefixRemainder {
    int subarraysDivByK(int[] a, int k) {
        int[] seen = new int[k];
        seen[0] = 1;
        int rem = 0, count = 0;
        for (int x : a) {
            rem = ((rem + x) % k + k) % k;
            count += seen[rem]++;
        }
        return count;
    }
}
```

**Continuous Subarray Sum (length ≥ 2):** store the first index of each remainder and check `i − firstIndex ≥ 2`.
**Used in:** 5.9, 5.10

---

### 5D. Difference Array

**What it is:** To add `v` to every element in `[l, r]` many times, do `diff[l] += v` and `diff[r+1] −= v` (O(1) each). One prefix sum over `diff` at the end gives the final array.

**When to use it:** many range updates and **one** read at the end (bookings, car pooling, "how many intervals cover point x").

```java
class DifferenceArray {
    int[] applyRangeAdds(int n, int[][] updates) {          // update = {l, r, v}, 0-indexed
        int[] diff = new int[n + 1];
        for (int[] u : updates) { diff[u[0]] += u[2]; diff[u[1] + 1] -= u[2]; }
        int[] res = new int[n];
        int run = 0;
        for (int i = 0; i < n; i++) { run += diff[i]; res[i] = run; }
        return res;
    }
}
```

**Used in:** 5.11, 5.12

---

### 5E. 2D Prefix Sum

**What it is:** `P[i][j]` = sum of the rectangle from (0,0) to (i−1, j−1).
- Build: `P[i][j] = m[i-1][j-1] + P[i-1][j] + P[i][j-1] − P[i-1][j-1]`.
- Query (r1,c1)–(r2,c2): `P[r2+1][c2+1] − P[r1][c2+1] − P[r2+1][c1] + P[r1][c1]` (inclusion–exclusion).

```java
class Prefix2D {
    int[][] P;
    Prefix2D(int[][] m) {
        int R = m.length, C = m[0].length;
        P = new int[R + 1][C + 1];
        for (int i = 1; i <= R; i++)
            for (int j = 1; j <= C; j++)
                P[i][j] = m[i - 1][j - 1] + P[i - 1][j] + P[i][j - 1] - P[i - 1][j - 1];
    }
    int sumRegion(int r1, int c1, int r2, int c2) {
        return P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1];
    }
}
```

**Used in:** 5.13

---

### 5F. Prefix XOR

**What it is:** Same idea as a prefix sum, but with XOR: `px[i+1] = px[i] ^ a[i]`, so `xor(l..r) = px[r+1] ^ px[l]` (XOR is its own inverse).

**Used in:** 5.14

---
## Phase 6 — Binary Search

### 6A. Binary Search on Index (the classic)

**What it is:** On sorted data, compare the middle element with the target and throw away half of the range each step. O(log n).

**The two rules that prevent most bugs**
1. `mid = lo + (hi − lo) / 2` (avoids overflow).
2. Pick **one** convention and keep it:
   - Closed `[lo, hi]`: `while (lo <= hi)`, move with `lo = mid + 1` / `hi = mid − 1`.
   - Half-open `[lo, hi)`: `while (lo < hi)`, move with `lo = mid + 1` / `hi = mid`.

```java
class ClassicBS {
    int search(int[] a, int target) {                 // closed interval [lo, hi]
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == target) return mid;
            if (a[mid] < target) lo = mid + 1; else hi = mid - 1;
        }
        return -1;
    }
}
```

**Used in:** 6.1, 6.11 (a 2D matrix treated as 1D: `row = mid / cols, col = mid % cols`)

---

### 6B. Lower Bound & Upper Bound

**What it is**
- **Lower bound:** the first index with `a[i] ≥ target` (the insert position; the first occurrence if it exists).
- **Upper bound:** the first index with `a[i] > target`.
- First/last occurrence = `lowerBound(t)` and `upperBound(t) − 1`. Count of `t` = `upper − lower`.

**Mental model:** turn the array into a boolean pattern `F F F T T T` and find the **first T**.

```java
class Bounds {
    int lowerBound(int[] a, int target) {
        int lo = 0, hi = a.length;                 // answer can be a.length ("insert at end")
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] >= target) hi = mid; else lo = mid + 1;
        }
        return lo;
    }
    int upperBound(int[] a, int target) {
        int lo = 0, hi = a.length;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] > target) hi = mid; else lo = mid + 1;
        }
        return lo;
    }
    int[] firstAndLast(int[] a, int t) {
        int first = lowerBound(a, t);
        if (first == a.length || a[first] != t) return new int[]{-1, -1};
        return new int[]{first, upperBound(a, t) - 1};
    }
}
```

**Used in:** 6.2, 6.3, 6.4, 6.13, 6.14

---

### 6C. Rotated Sorted Arrays

**What it is:** A sorted array rotated at an unknown point, e.g. `[4 5 6 7 0 1 2]`. At any `mid`, **at least one half is sorted**. Check whether the target lies inside that sorted half; if not, go to the other half.

**Finding the minimum:** compare `a[mid]` with `a[hi]`. If `a[mid] > a[hi]`, the drop (and the minimum) is to the right; otherwise it's at `mid` or to its left.

**With duplicates (LC 81):** when `a[lo] == a[mid] == a[hi]` you can't tell which half is sorted, so shrink `lo++, hi--`. The worst case becomes O(n).

```java
class RotatedBS {
    int search(int[] a, int target) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == target) return mid;
            if (a[lo] <= a[mid]) {                               // left half sorted
                if (a[lo] <= target && target < a[mid]) hi = mid - 1; else lo = mid + 1;
            } else {                                             // right half sorted
                if (a[mid] < target && target <= a[hi]) lo = mid + 1; else hi = mid - 1;
            }
        }
        return -1;
    }

    int findMin(int[] a) {
        int lo = 0, hi = a.length - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] > a[hi]) lo = mid + 1; else hi = mid;
        }
        return a[lo];
    }
}
```

**Used in:** 6.6, 6.7, 6.8

---

### 6D. Peak Finding & Other "Search on a Property"

**What it is:** Binary search doesn't need a fully sorted array, only a rule that tells you which half **must** contain an answer.
- **Peak element:** if `a[mid] < a[mid+1]`, you're on an upward slope, so a peak exists to the right. Otherwise one exists at `mid` or to its left.
- **Single element in a sorted array of pairs:** before the single element, pairs start at **even** indices; after it, at odd indices. Check `mid`'s pair partner.
- **Search a 2D Matrix II (rows and columns sorted):** not binary search, but a "staircase" from the top-right corner: bigger → go down, smaller → go left. O(m + n).
- **Peak in 2D:** binary search on columns, and take the max row in the middle column.
- **Median of two sorted arrays:** binary search the **cut** position in the smaller array so that everything on the left side ≤ everything on the right side.

```java
class PeakBS {
    int findPeakElement(int[] a) {
        int lo = 0, hi = a.length - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] < a[mid + 1]) lo = mid + 1; else hi = mid;
        }
        return lo;
    }

    int singleNonDuplicate(int[] a) {
        int lo = 0, hi = a.length - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (mid % 2 == 1) mid--;                             // make mid the first of a pair
            if (a[mid] == a[mid + 1]) lo = mid + 2; else hi = mid;
        }
        return a[lo];
    }

    boolean searchMatrixII(int[][] m, int target) {             // staircase search
        int r = 0, c = m[0].length - 1;
        while (r < m.length && c >= 0) {
            if (m[r][c] == target) return true;
            if (m[r][c] > target) c--; else r++;
        }
        return false;
    }
}
```

**Used in:** 6.9, 6.10, 6.12, 6.22, 6.23

---

### 6E. Binary Search on the Answer

**What it is:** When a problem asks for the **minimum X such that something is possible** (or the **maximum X**), and feasibility is **monotonic** (if speed 5 works, speed 6 also works), you binary search over the possible values of X and run an O(n) `check(X)` each time.

**Recipe**
1. Identify the answer range `[lo, hi]` (e.g. speed 1..max pile, capacity max(weight)..sum(weights)).
2. Write `boolean feasible(X)`, usually a greedy simulation.
3. **Minimise:** pattern `F F F T T T` → find the first T (`hi = mid` when feasible).
   **Maximise:** pattern `T T T F F F` → find the last T (`lo = mid` when feasible, and round `mid` **up**).

**Complexity:** O(n · log(range)).

```java
import java.util.*;

class AnswerSpaceBS {
    // MINIMISE: smallest ship capacity to ship everything within `days`
    int shipWithinDays(int[] w, int days) {
        int lo = 0, hi = 0;
        for (int x : w) { lo = Math.max(lo, x); hi += x; }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (daysNeeded(w, mid) <= days) hi = mid; else lo = mid + 1;
        }
        return lo;
    }
    int daysNeeded(int[] w, int cap) {
        int d = 1, load = 0;
        for (int x : w) {
            if (load + x > cap) { d++; load = 0; }
            load += x;
        }
        return d;
    }

    // MAXIMISE: largest minimum distance between cows (Aggressive Cows)
    int aggressiveCows(int[] stalls, int cows) {
        Arrays.sort(stalls);
        int lo = 1, hi = stalls[stalls.length - 1] - stalls[0];
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;                   // round UP, or it loops forever
            if (canPlace(stalls, cows, mid)) lo = mid; else hi = mid - 1;
        }
        return lo;
    }
    boolean canPlace(int[] s, int cows, int dist) {
        int placed = 1, last = s[0];
        for (int i = 1; i < s.length; i++)
            if (s[i] - last >= dist) { placed++; last = s[i]; }
        return placed >= cows;
    }
}
```

**Recognise it:** "minimum largest sum", "minimise the maximum", "maximise the minimum", "at least / at most D days".
**Common mistakes:** the wrong `lo` (Ship Packages needs `lo = max weight`, not 1); sums that overflow `int` inside `feasible`; `mid` rounding in the maximise version.
**Used in:** 6.5, 6.15–6.21 (Split Array Largest Sum = Book Allocation = Painter's Partition)

---

## Phase 7 — Strings & Pattern Matching

### 7A. String Basics & StringBuilder

**What it is:** Java `String` is **immutable**: every "change" creates a new object. Use `StringBuilder` to build strings in loops, and `char[]` when you need to swap characters.

**Handy tools**

| Task | Code |
|---|---|
| char → digit | `c - '0'` |
| char → 0..25 | `c - 'a'` |
| is letter / digit | `Character.isLetter(c)`, `Character.isDigit(c)`, `Character.isLetterOrDigit(c)` |
| split on spaces | `s.trim().split("\\s+")` |
| join | `String.join(" ", list)` |
| rotation check | `(s + s).contains(goal)` with equal lengths |

**Simulation problems (atoi, Roman numerals):** go character by character and handle each case explicitly: spaces, sign, digits, overflow (check `result > (Integer.MAX_VALUE − digit) / 10` before multiplying).

**Roman to integer:** add each value, but if a smaller value comes before a larger one (IV, IX), subtract it instead.

```java
import java.util.*;

class StringBasics {
    String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]);
            if (i > 0) sb.append(' ');
        }
        return sb.toString();
    }

    int romanToInt(String s) {
        Map<Character, Integer> v = Map.of('I', 1, 'V', 5, 'X', 10, 'L', 50, 'C', 100, 'D', 500, 'M', 1000);
        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            int cur = v.get(s.charAt(i));
            if (i + 1 < s.length() && cur < v.get(s.charAt(i + 1))) total -= cur; else total += cur;
        }
        return total;
    }

    int myAtoi(String s) {
        int i = 0, n = s.length(), sign = 1, result = 0;
        while (i < n && s.charAt(i) == ' ') i++;
        if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) sign = s.charAt(i++) == '-' ? -1 : 1;
        while (i < n && Character.isDigit(s.charAt(i))) {
            int d = s.charAt(i++) - '0';
            if (result > (Integer.MAX_VALUE - d) / 10) return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            result = result * 10 + d;
        }
        return sign * result;
    }
}
```

**Used in:** 7.1–7.8, 7.11

---

### 7B. Expand Around Center (Palindromes)

**What it is:** Every palindrome has a center: a character (odd length) or a gap between two characters (even length). There are `2n − 1` centers. From each, expand outward while both ends match. O(n²) time, O(1) space.
- Longest palindrome: track the longest expansion.
- Count palindromic substrings: every successful expansion step is one more palindrome.

```java
class ExpandCenter {
    String longestPalindrome(String s) {
        int start = 0, len = 0;
        for (int c = 0; c < s.length(); c++) {
            for (int gap = 0; gap <= 1; gap++) {                 // 0 = odd center, 1 = even center
                int l = c, r = c + gap;
                while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }
                if (r - l - 1 > len) { len = r - l - 1; start = l + 1; }
            }
        }
        return s.substring(start, start + len);
    }

    int countSubstrings(String s) {
        int count = 0;
        for (int c = 0; c < s.length(); c++)
            for (int gap = 0; gap <= 1; gap++)
                for (int l = c, r = c + gap; l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r); l--, r++)
                    count++;
        return count;
    }
}
```

**Valid Palindrome II (delete at most one char):** two pointers; at the first mismatch, check whether `s[l+1..r]` or `s[l..r-1]` is a palindrome.
**Used in:** 7.7, 7.9, 7.10 (Manacher's algorithm does this in O(n), but it's rarely asked)

---

### 7C. KMP & the lps Array

**What it is:** Searching a pattern of length m in a text of length n naively costs O(n·m). **KMP** does it in **O(n + m)** by never moving the text pointer backwards.

**The lps array:** `lps[i]` = length of the longest **proper prefix** of `p[0..i]` that is also a **suffix** of it.
Example `p = "aabaaab"`: lps = `[0, 1, 0, 1, 2, 2, 3]`.

**Why it helps:** on a mismatch after matching `j` characters, the last `lps[j−1]` matched characters are already a prefix of the pattern, so you continue from `j = lps[j−1]` instead of starting over.

**Other uses of lps**
- **Longest happy prefix** = `lps[n−1]` of the string itself.
- **Shortest palindrome:** build `s + "#" + reverse(s)`. Its last lps value is the longest palindromic prefix of s. Add the reverse of the rest in front.
- **Repeated substring pattern:** with `L = lps[n−1]`, the answer is true if `L > 0 && n % (n − L) == 0`.

```java
class KMP {
    int[] buildLps(String p) {
        int[] lps = new int[p.length()];
        for (int i = 1, len = 0; i < p.length(); ) {
            if (p.charAt(i) == p.charAt(len)) lps[i++] = ++len;
            else if (len > 0) len = lps[len - 1];              // fall back, don't advance i
            else lps[i++] = 0;
        }
        return lps;
    }

    int indexOf(String text, String p) {
        if (p.isEmpty()) return 0;
        int[] lps = buildLps(p);
        for (int i = 0, j = 0; i < text.length(); ) {
            if (text.charAt(i) == p.charAt(j)) {
                i++; j++;
                if (j == p.length()) return i - j;              // found; for all matches set j = lps[j-1]
            } else if (j > 0) j = lps[j - 1];
            else i++;
        }
        return -1;
    }
}
```

**Used in:** 7.8, 7.12, 7.13, 7.14, 7.15

---

### 7D. Rabin-Karp (Rolling Hash) & Z-Algorithm

**Rabin-Karp, what it is:** Treat each window of length m as a number in base B (mod a large prime) and compare **hashes** instead of strings. Sliding the window by one updates the hash in O(1): remove the leftmost char's contribution, multiply by B, add the new char. Verify with a real comparison when hashes match (collisions are possible). Average O(n + m).
**Good for:** comparing many substrings quickly, "longest duplicate substring" (with binary search), 2D pattern search.

**Z-algorithm, what it is:** `z[i]` = length of the longest substring starting at `i` that matches a **prefix** of the string. To search, build `z` on `p + "$" + text`; every position with `z[i] == m` is a match. O(n + m).

```java
class RollingHash {
    int rabinKarp(String text, String p) {
        int n = text.length(), m = p.length();
        if (m == 0) return 0;
        if (m > n) return -1;
        final long B = 131, MOD = 1_000_000_007L;
        long hp = 0, ht = 0, pow = 1;                            // pow = B^(m-1)
        for (int i = 0; i < m; i++) {
            hp = (hp * B + p.charAt(i)) % MOD;
            ht = (ht * B + text.charAt(i)) % MOD;
            if (i > 0) pow = pow * B % MOD;
        }
        for (int i = 0; ; i++) {
            if (hp == ht && text.regionMatches(i, p, 0, m)) return i;   // confirm on hash match
            if (i + m >= n) return -1;
            ht = (ht - text.charAt(i) * pow % MOD + MOD) % MOD;          // remove the left char
            ht = (ht * B + text.charAt(i + m)) % MOD;                    // add the right char
        }
    }

    int[] zFunction(String s) {
        int n = s.length();
        int[] z = new int[n];
        for (int i = 1, l = 0, r = 0; i < n; i++) {
            if (i < r) z[i] = Math.min(r - i, z[i - l]);           // reuse the known [l, r) box
            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i])) z[i]++;
            if (i + z[i] > r) { l = i; r = i + z[i]; }
        }
        return z;
    }
}
```

**Used in:** alternative ways to solve 7.12, 7.13, 7.14. Knowing the concept is usually enough for interviews.

---

## Phase 8 — Matrix / 2D Arrays

### 8A. Boundary Traversal (Spiral)

**What it is:** Keep four boundaries `top, bottom, left, right`. Walk right along `top`, down along `right`, left along `bottom`, up along `left`, shrinking each boundary after you use it. Check `top <= bottom` and `left <= right` again before the 3rd and 4th walks, or single rows/columns get printed twice.

```java
import java.util.*;

class Spiral {
    List<Integer> spiralOrder(int[][] m) {
        List<Integer> res = new ArrayList<>();
        int top = 0, bottom = m.length - 1, left = 0, right = m[0].length - 1;
        while (top <= bottom && left <= right) {
            for (int c = left; c <= right; c++) res.add(m[top][c]);
            top++;
            for (int r = top; r <= bottom; r++) res.add(m[r][right]);
            right--;
            if (top <= bottom) { for (int c = right; c >= left; c--) res.add(m[bottom][c]); bottom--; }
            if (left <= right) { for (int r = bottom; r >= top; r--) res.add(m[r][left]); left++; }
        }
        return res;
    }
}
```

**Used in:** 8.2, 8.4

---

### 8B. Transpose + Reverse (Rotate 90°)

**What it is:** Rotating 90° clockwise = **transpose** (swap `m[i][j]` with `m[j][i]`) then **reverse each row**. For anticlockwise: transpose, then reverse each column (or reverse rows first, then transpose).

```java
class RotateMatrix {
    void rotateClockwise(int[][] m) {
        int n = m.length;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++) { int t = m[i][j]; m[i][j] = m[j][i]; m[j][i] = t; }
        for (int[] row : m)
            for (int l = 0, r = n - 1; l < r; l++, r--) { int t = row[l]; row[l] = row[r]; row[r] = t; }
    }
}
```

**Common mistakes:** transposing with `j` starting at 0 swaps every pair twice, which leaves the matrix unchanged.
**Used in:** 8.3

---

### 8C. In-place Markers (O(1) extra space)

**What it is:** Store extra information **inside the matrix itself** instead of allocating new arrays.
- **Set Matrix Zeroes:** use row 0 and column 0 as the "this row/column must be zeroed" flags. Keep one separate boolean for whether column 0 itself had a zero.
- **Game of Life:** each cell needs its old and new state at once. Keep the current state in bit 0 and write the next state into bit 1. At the end, shift every cell right by 1.

```java
class InPlaceMarkers {
    void setZeroes(int[][] m) {
        int R = m.length, C = m[0].length;
        boolean firstColZero = false;
        for (int r = 0; r < R; r++) {
            if (m[r][0] == 0) firstColZero = true;
            for (int c = 1; c < C; c++)
                if (m[r][c] == 0) { m[r][0] = 0; m[0][c] = 0; }
        }
        for (int r = R - 1; r >= 0; r--) {                       // bottom-up so row 0 flags survive
            for (int c = C - 1; c >= 1; c--)
                if (m[r][0] == 0 || m[0][c] == 0) m[r][c] = 0;
            if (firstColZero) m[r][0] = 0;
        }
    }

    void gameOfLife(int[][] b) {
        int R = b.length, C = b[0].length;
        for (int r = 0; r < R; r++)
            for (int c = 0; c < C; c++) {
                int live = 0;
                for (int dr = -1; dr <= 1; dr++)
                    for (int dc = -1; dc <= 1; dc++) {
                        if (dr == 0 && dc == 0) continue;
                        int nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nc >= 0 && nr < R && nc < C) live += b[nr][nc] & 1;  // old state
                    }
                if ((b[r][c] & 1) == 1 && (live == 2 || live == 3)) b[r][c] |= 2;
                if ((b[r][c] & 1) == 0 && live == 3) b[r][c] |= 2;
            }
        for (int r = 0; r < R; r++) for (int c = 0; c < C; c++) b[r][c] >>= 1;
    }
}
```

**Used in:** 8.1, 8.5

---

## Phase 9 — Recursion & Backtracking

### 9A. Recursion & the Recursion Tree

**What it is:** A function that solves a problem by calling itself on a **smaller** input.

**Three parts, every time**
1. **Base case:** the smallest input you can answer directly (stops the recursion).
2. **Recursive call(s):** on a smaller input.
3. **Combine:** build this answer from the results of the calls.

**Leap of faith:** assume the call on the smaller input returns the correct answer. Only check that the base case is right and that the combining step is right.

**Recursion tree:** draw each call as a node.
- **Time** = number of nodes × work per node. `fib(n)` makes about 2ⁿ calls; with memoization it makes n.
- **Space** = maximum depth of the tree (the call stack).

```java
class RecursionBasics {
    int fib(int n) {                                   // O(2^n) - see why DP (Phase 18) is needed
        if (n <= 1) return n;                          // base case
        return fib(n - 1) + fib(n - 2);                // two smaller calls, combined by +
    }

    // Parameterised vs functional: print 1..n
    void printUpTo(int n) {
        if (n == 0) return;
        printUpTo(n - 1);                              // work AFTER the call -> prints in increasing order
        System.out.print(n + " ");
    }
}
```

**Common mistakes:** a missing or wrong base case (StackOverflowError); modifying a shared list without undoing the change (see 9B).
**Used in:** 9.1, and everything in Phases 9, 13 and 18

---

### 9B. Pick / Not-Pick (Subsets & Subsequences)

**What it is:** For each element make two choices, **include it** or **exclude it**, and recurse on the next index. This gives 2ⁿ leaves, one per subset.

**Backtracking = choose → explore → un-choose:** add to the current list, recurse, then **remove** it so the next branch starts clean. Always add a **copy** (`new ArrayList<>(cur)`) to the result.

```java
import java.util.*;

class PickNotPick {
    void subsets(int[] a, int i, List<Integer> cur, List<List<Integer>> res) {
        if (i == a.length) { res.add(new ArrayList<>(cur)); return; }
        cur.add(a[i]);                         // choose
        subsets(a, i + 1, cur, res);           // explore with a[i]
        cur.remove(cur.size() - 1);            // un-choose
        subsets(a, i + 1, cur, res);           // explore without a[i]
    }
}
```

**Complexity:** O(2ⁿ · n) (2ⁿ subsets, each copied in O(n)).
**Used in:** 9.2, 9.6 (pick = stay at `i` because reuse is allowed), and it's the base for subset DP in Phase 19

---

### 9C. Loop-from-Start with Duplicate Skipping (Combinations)

**What it is:** At each level, loop `i` from `start` to the end and pick `a[i]` as the next element. Passing `i + 1` means each element is used once; passing `i` allows reuse.

**Skipping duplicates:** sort first. At the same recursion level, if `a[i] == a[i−1]` and `i > start`, choosing `a[i]` would build exactly the same combinations as `a[i−1]`, so skip it.

```java
import java.util.*;

class Combinations {
    // Combination Sum II: each number once, no duplicate combinations
    void combinationSum2(int[] a, int start, int remain, List<Integer> cur, List<List<Integer>> res) {
        if (remain == 0) { res.add(new ArrayList<>(cur)); return; }
        for (int i = start; i < a.length; i++) {
            if (i > start && a[i] == a[i - 1]) continue;       // duplicate at this level
            if (a[i] > remain) break;                          // pruning (array is sorted)
            cur.add(a[i]);
            combinationSum2(a, i + 1, remain - a[i], cur, res);
            cur.remove(cur.size() - 1);
        }
    }

    // Generate Parentheses: choices limited by counts
    void generate(int open, int close, int n, StringBuilder sb, List<String> res) {
        if (sb.length() == 2 * n) { res.add(sb.toString()); return; }
        if (open < n) { sb.append('('); generate(open + 1, close, n, sb, res); sb.deleteCharAt(sb.length() - 1); }
        if (close < open) { sb.append(')'); generate(open, close + 1, n, sb, res); sb.deleteCharAt(sb.length() - 1); }
    }
}
```

**Used in:** 9.3, 9.6, 9.7, 9.8, 9.9, 9.10, 9.11 (partitioning: loop over the end of the next palindrome piece)

---

### 9D. Permutations with `used[]`

**What it is:** A permutation uses every element, and order matters. At each position try every element that isn't used yet: mark it, recurse, unmark it. n! leaves.

**Duplicates (Permutations II):** sort, then skip `a[i]` if `a[i] == a[i−1]` and `!used[i−1]`. That forces equal values to be used left to right, so each distinct arrangement appears once.

```java
import java.util.*;

class Permutations {
    void permuteUnique(int[] a, boolean[] used, List<Integer> cur, List<List<Integer>> res) {
        if (cur.size() == a.length) { res.add(new ArrayList<>(cur)); return; }
        for (int i = 0; i < a.length; i++) {
            if (used[i]) continue;
            if (i > 0 && a[i] == a[i - 1] && !used[i - 1]) continue;   // requires a sorted array
            used[i] = true; cur.add(a[i]);
            permuteUnique(a, used, cur, res);
            used[i] = false; cur.remove(cur.size() - 1);
        }
    }
}
```

**Used in:** 9.4, 9.5

---

### 9E. Pruning

**What it is:** Stop exploring a branch as soon as you know it can't lead to a valid answer. This is what makes exponential backtracking fast enough.

**Common prunes**
- Sorted input and the current element already exceeds the remaining target → `break` (every later element is bigger too).
- Not enough elements left to finish (`k − cur.size() > n − i`).
- In grid search, the current cell doesn't match the next needed character → return right away.
- In N-Queens, check column and diagonal conflicts **before** placing, not after the board is full.

---

### 9F. Board / Grid Backtracking

**What it is:** Place things on a board (queens, sudoku digits, paths) one step at a time, check the constraints, recurse, then undo.
- **N-Queens:** one queen per row. Track used columns, `r + c` diagonals and `r − c + n` anti-diagonals in boolean arrays, so each safety check is O(1).
- **Sudoku:** find an empty cell, try digits 1–9 that aren't in the row, column or 3×3 box (box index `(r/3)*3 + c/3`), recurse, undo.
- **Word Search / Rat in a Maze:** DFS in 4 directions. Mark the cell as visited (e.g. set it to `'#'`), recurse, **restore** it on the way back.
- **M-Coloring:** give each node a colour that none of its already-coloured neighbours has.

```java
class GridBacktracking {
    boolean exist(char[][] b, String word) {
        for (int r = 0; r < b.length; r++)
            for (int c = 0; c < b[0].length; c++)
                if (dfs(b, word, 0, r, c)) return true;
        return false;
    }
    boolean dfs(char[][] b, String w, int k, int r, int c) {
        if (k == w.length()) return true;
        if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] != w.charAt(k)) return false;
        char saved = b[r][c];
        b[r][c] = '#';                                          // mark visited
        boolean found = dfs(b, w, k + 1, r + 1, c) || dfs(b, w, k + 1, r - 1, c)
                     || dfs(b, w, k + 1, r, c + 1) || dfs(b, w, k + 1, r, c - 1);
        b[r][c] = saved;                                        // restore (backtrack)
        return found;
    }

    boolean solveSudoku(char[][] b) {
        for (int r = 0; r < 9; r++)
            for (int c = 0; c < 9; c++) {
                if (b[r][c] != '.') continue;
                for (char d = '1'; d <= '9'; d++) {
                    if (!canPlace(b, r, c, d)) continue;
                    b[r][c] = d;
                    if (solveSudoku(b)) return true;
                    b[r][c] = '.';
                }
                return false;                                   // no digit fits this cell
            }
        return true;                                            // no empty cell left
    }
    boolean canPlace(char[][] b, int r, int c, char d) {
        for (int i = 0; i < 9; i++) {
            if (b[r][i] == d || b[i][c] == d) return false;
            if (b[3 * (r / 3) + i / 3][3 * (c / 3) + i % 3] == d) return false;
        }
        return true;
    }
}
```

**Used in:** 9.12, 9.13, 9.14, 9.15, 9.16 (and 22.16 Word Search II)

---

## Phase 10 — Linked List

### 10A. Dummy Node

**What it is:** A fake node placed before the head. Operations that might change the head (deleting it, inserting before it, merging) become the same as operations in the middle, so you don't need special cases. Return `dummy.next`.

```java
class ListNode { int val; ListNode next; ListNode(int v) { val = v; } }

class DummyNode {
    ListNode mergeTwoLists(ListNode a, ListNode b) {
        ListNode dummy = new ListNode(0), tail = dummy;
        while (a != null && b != null) {
            if (a.val <= b.val) { tail.next = a; a = a.next; } else { tail.next = b; b = b.next; }
            tail = tail.next;
        }
        tail.next = (a != null) ? a : b;
        return dummy.next;
    }

    ListNode addTwoNumbers(ListNode a, ListNode b) {           // digits stored in reverse
        ListNode dummy = new ListNode(0), tail = dummy;
        int carry = 0;
        while (a != null || b != null || carry != 0) {
            int sum = carry + (a != null ? a.val : 0) + (b != null ? b.val : 0);
            carry = sum / 10;
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
            if (a != null) a = a.next;
            if (b != null) b = b.next;
        }
        return dummy.next;
    }
}
```

**Design Linked List:** keep a dummy head and a size counter; `get/add/delete at index i` all walk `i` steps from the dummy.
**Delete a node when only that node is given:** copy the next node's value into it, then skip the next node (`node.val = node.next.val; node.next = node.next.next`).

**Used in:** 10.1, 10.2, 10.3, 10.6, 10.9, 10.12, 10.13

---

### 10B. In-place Reversal

**What it is:** Walk the list with three pointers, `prev`, `cur` and `next`, and point each node back at `prev`. O(n) time, O(1) space.

**Remember the order:** save `next` → reverse the link → move `prev` → move `cur`.

**Reverse in k-groups:** check that k nodes exist, reverse those k, connect the previous group's tail to the new head, move on.

```java
class Reversal {
    ListNode reverse(ListNode head) {
        ListNode prev = null, cur = head;
        while (cur != null) {
            ListNode next = cur.next;      // 1. save
            cur.next = prev;               // 2. reverse link
            prev = cur;                    // 3. move prev
            cur = next;                    // 4. move cur
        }
        return prev;
    }

    ListNode reverseRecursive(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode newHead = reverseRecursive(head.next);
        head.next.next = head;             // the node after head points back to head
        head.next = null;
        return newHead;
    }

    ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode groupPrev = dummy;
        while (true) {
            ListNode kth = groupPrev;
            for (int i = 0; i < k && kth != null; i++) kth = kth.next;
            if (kth == null) break;                             // fewer than k nodes left
            ListNode groupNext = kth.next, prev = groupNext, cur = groupPrev.next;
            while (cur != groupNext) { ListNode nx = cur.next; cur.next = prev; prev = cur; cur = nx; }
            ListNode oldFirst = groupPrev.next;                 // becomes the group's tail
            groupPrev.next = kth;
            groupPrev = oldFirst;
        }
        return dummy.next;
    }
}
```

**Used in:** 10.4, 10.11, 10.15, 10.19

---

### 10C. Slow-Fast Pointers (Middle, Floyd's Cycle Detection)

**What it is:** `slow` moves 1 step and `fast` moves 2.
- **Middle:** when `fast` reaches the end, `slow` is at the middle.
- **Cycle detection (Floyd):** if there's a cycle, `fast` catches up with `slow` inside it.
- **Cycle start:** after they meet, move one pointer back to `head` and step both by 1. They meet at the cycle start.
  *Why:* if the head-to-start distance is `a` and the start-to-meeting-point distance is `b`, then `fast` travelled `2(a+b) = a + b + kC`, so `a = kC − b`. Walking `a` steps from the meeting point lands exactly on the start.

```java
class SlowFast {
    ListNode middle(ListNode head) {                  // second middle for even length
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }
        return slow;
    }

    ListNode detectCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next; fast = fast.next.next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) { slow = slow.next; fast = fast.next; }
                return slow;
            }
        }
        return null;
    }
}
```

**Palindrome list:** find the middle → reverse the second half → compare the halves.
**Reorder list:** find the middle → reverse the second half → weave the halves together.
**Used in:** 10.5, 10.7, 10.8, 10.11, 10.15 (and 0.7 Happy Number)

---

### 10D. Gap-of-n Pointers & Two-List Tricks

**What it is**
- **Nth from end:** move `fast` n + 1 steps ahead of `slow` (starting from a dummy), then move both until `fast` is null. `slow` stops right before the node to delete.
- **Intersection of two lists:** pointers `a` and `b` each walk their own list, then switch to the other list's head. Both travel `lenA + lenB` steps, so they meet at the intersection (or both reach `null`).
- **Rotate list:** find the length, connect tail → head to make a ring, break it at `len − k % len`.
- **Copy with random pointer (O(1) space):** insert each copy right after its original, set `copy.random = orig.random.next`, then separate the two lists.

```java
class GapPointers {
    ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy, slow = dummy;
        for (int i = 0; i <= n; i++) fast = fast.next;
        while (fast != null) { fast = fast.next; slow = slow.next; }
        slow.next = slow.next.next;
        return dummy.next;
    }

    ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA, b = headB;
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        return a;
    }
}
```

**Used in:** 10.9, 10.10, 10.14, 10.17, 10.18

---

### 10E. Merge Sort on a Linked List

**What it is:** Linked lists can't jump to the middle, so quick sort is awkward. Merge sort fits naturally: split at the middle (slow-fast), sort both halves, merge them (10A). O(n log n) time, O(log n) stack.

```java
class ListMergeSort {
    ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode slow = head, fast = head.next;            // fast = head.next gives the FIRST middle
        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }
        ListNode second = slow.next;
        slow.next = null;                                  // cut the list in two
        return new DummyNode().mergeTwoLists(sortList(head), sortList(second));
    }
}
```

**Common mistakes:** using the second middle for a 2-node list keeps splitting into (2, 0) forever, so start `fast` at `head.next`.
**Used in:** 10.16

---

## Phase 11 — Stack & Queue

### 11A. Stack & Queue Basics (and building one from the other)

**What it is**
- **Stack (LIFO):** last in, first out. `push`, `pop`, `peek` in O(1). Use it for "most recent unmatched thing", undo and recursion simulation.
- **Queue (FIFO):** first in, first out. `offer`, `poll`, `peek` in O(1). Use it for BFS, scheduling and streams.
- In Java, use `ArrayDeque` for both.

**Design classics**
- **Queue using two stacks:** push into `in`. To pop, if `out` is empty, move everything from `in` to `out` (this reverses the order). Amortised O(1).
- **Stack using one queue:** after each push, rotate the queue `size − 1` times so the newest element is at the front.
- **Min stack:** push `(value, min so far)` pairs, so the minimum is always `peek()[1]`.

```java
import java.util.*;

class MyQueue {
    private final Deque<Integer> in = new ArrayDeque<>(), out = new ArrayDeque<>();
    public void push(int x) { in.push(x); }
    public int pop() { peek(); return out.pop(); }
    public int peek() {
        if (out.isEmpty()) while (!in.isEmpty()) out.push(in.pop());
        return out.peek();
    }
    public boolean empty() { return in.isEmpty() && out.isEmpty(); }
}

class MinStack {
    private final Deque<int[]> st = new ArrayDeque<>();          // {value, min so far}
    public void push(int x) { st.push(new int[]{x, st.isEmpty() ? x : Math.min(x, st.peek()[1])}); }
    public void pop() { st.pop(); }
    public int top() { return st.peek()[0]; }
    public int getMin() { return st.peek()[1]; }
}
```

**Used in:** 11.2, 11.3, 11.4

---

### 11B. Bracket Matching

**What it is:** Push opening brackets. On a closing bracket, the top of the stack must be its matching opener. The string is valid if the stack is empty at the end.
**Counter shortcut** (one bracket type only): `balance++` on `(`, `balance--` on `)`. If it goes negative you need an extra `(`.

```java
import java.util.*;

class Brackets {
    boolean isValid(String s) {
        Deque<Character> st = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(') st.push(')');
            else if (c == '[') st.push(']');
            else if (c == '{') st.push('}');
            else if (st.isEmpty() || st.pop() != c) return false;
        }
        return st.isEmpty();
    }

    int minAddToMakeValid(String s) {
        int open = 0, added = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') open++;
            else if (open > 0) open--;
            else added++;                               // unmatched ')' needs a '('
        }
        return open + added;
    }
}
```

**Used in:** 11.1, 11.5 (adjacent duplicates use the same "compare with top" idea), 11.6

---

### 11C. Expression Evaluation with a Stack

**What it is:** A stack holds **operands/partial results that are waiting** for something that comes later.
- **Reverse Polish Notation:** numbers → push. Operator → pop two (`b` first, then `a`), push `a op b`.
- **Decode string `3[a2[c]]`:** keep a stack of counts and a stack of the strings built so far. On `[` push both and start fresh. On `]` pop and repeat the current string.
- **Asteroid collision / Simplify path:** the stack holds the "survivors" so far. Each new item fights or cancels the top.

```java
import java.util.*;

class ExpressionStack {
    int evalRPN(String[] tokens) {
        Deque<Integer> st = new ArrayDeque<>();
        for (String t : tokens) {
            switch (t) {
                case "+": st.push(st.pop() + st.pop()); break;
                case "*": st.push(st.pop() * st.pop()); break;
                case "-": { int b = st.pop(), a = st.pop(); st.push(a - b); break; }
                case "/": { int b = st.pop(), a = st.pop(); st.push(a / b); break; }
                default: st.push(Integer.parseInt(t));
            }
        }
        return st.pop();
    }

    String decodeString(String s) {
        Deque<Integer> counts = new ArrayDeque<>();
        Deque<StringBuilder> built = new ArrayDeque<>();
        StringBuilder cur = new StringBuilder();
        int k = 0;
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) k = k * 10 + (c - '0');
            else if (c == '[') { counts.push(k); built.push(cur); cur = new StringBuilder(); k = 0; }
            else if (c == ']') {
                StringBuilder prev = built.pop();
                int times = counts.pop();
                for (int i = 0; i < times; i++) prev.append(cur);
                cur = prev;
            } else cur.append(c);
        }
        return cur.toString();
    }

    int[] asteroidCollision(int[] a) {
        Deque<Integer> st = new ArrayDeque<>();
        for (int x : a) {
            boolean alive = true;
            while (alive && x < 0 && !st.isEmpty() && st.peek() > 0) {
                if (st.peek() < -x) st.pop();                  // top explodes, keep checking
                else { if (st.peek() == -x) st.pop(); alive = false; }
            }
            if (alive) st.push(x);
        }
        int[] res = new int[st.size()];
        for (int i = res.length - 1; i >= 0; i--) res[i] = st.pop();
        return res;
    }
}
```

**Used in:** 11.7, 11.8, 11.9, 11.10

---

### 11D. Monotonic Stack (Next / Previous Greater or Smaller)

**What it is:** A stack of **indices** kept in increasing or decreasing order of value. Each index is pushed once and popped once, so finding the "next greater element" for **every** index takes O(n) total instead of O(n²).

**Think of it as a waiting list:** the stack holds indices still waiting for their answer. When a new element arrives that answers them, pop and record.

| Want | Pop while | When an index is popped |
|---|---|---|
| Next greater | `a[top] < a[i]` | its answer is `a[i]` |
| Next smaller | `a[top] > a[i]` | its answer is `a[i]` |
| Previous greater | `a[top] <= a[i]` | after popping, `top` (if any) is the answer for `i` |
| Previous smaller | `a[top] >= a[i]` | after popping, `top` is the answer for `i` |
| Circular array | loop `i` from 0 to 2n − 1, use `i % n` | |

**Largest rectangle in histogram:** each bar's rectangle extends from its previous smaller bar to its next smaller bar. When a bar is popped (because a smaller bar arrived), both boundaries are known: `width = i − newTop − 1`.
**Remove K digits:** keep the stack increasing; pop bigger digits while `k > 0` (a smaller digit earlier makes a smaller number).
**Maximal rectangle:** build a histogram of heights for each row and run the histogram solution.

```java
import java.util.*;

class MonotonicStack {
    int[] nextGreaterCircular(int[] a) {
        int n = a.length;
        int[] res = new int[n];
        Arrays.fill(res, -1);
        Deque<Integer> st = new ArrayDeque<>();
        for (int i = 0; i < 2 * n; i++) {
            int x = a[i % n];
            while (!st.isEmpty() && a[st.peek()] < x) res[st.pop()] = x;
            if (i < n) st.push(i);
        }
        return res;
    }

    int[] dailyTemperatures(int[] t) {                      // distance to the next warmer day
        int[] res = new int[t.length];
        Deque<Integer> st = new ArrayDeque<>();
        for (int i = 0; i < t.length; i++) {
            while (!st.isEmpty() && t[st.peek()] < t[i]) { int j = st.pop(); res[j] = i - j; }
            st.push(i);
        }
        return res;
    }

    int largestRectangleArea(int[] h) {
        Deque<Integer> st = new ArrayDeque<>();
        int best = 0, n = h.length;
        for (int i = 0; i <= n; i++) {
            int cur = (i == n) ? 0 : h[i];                       // sentinel flushes the stack
            while (!st.isEmpty() && h[st.peek()] > cur) {
                int height = h[st.pop()];
                int left = st.isEmpty() ? -1 : st.peek();
                best = Math.max(best, height * (i - left - 1));
            }
            st.push(i);
        }
        return best;
    }

    String removeKdigits(String num, int k) {
        StringBuilder st = new StringBuilder();                 // used as a stack
        for (char c : num.toCharArray()) {
            while (k > 0 && st.length() > 0 && st.charAt(st.length() - 1) > c) { st.deleteCharAt(st.length() - 1); k--; }
            st.append(c);
        }
        st.setLength(st.length() - k);                          // remove leftovers from the end
        int i = 0;
        while (i < st.length() - 1 && st.charAt(i) == '0') i++; // strip leading zeros
        return st.length() == 0 ? "0" : st.substring(i);
    }
}
```

**Used in:** 11.11–11.16, 11.19, 11.20

---

### 11E. Contribution Technique

**What it is:** To compute a **sum over all subarrays** (sum of subarray minimums, sum of ranges), don't list the subarrays (O(n²)). Instead ask: *in how many subarrays is `a[i]` the minimum?*
- `left[i]` = distance to the previous smaller element, `right[i]` = distance to the next smaller element.
- `a[i]` is the minimum of `left[i] × right[i]` subarrays, so it contributes `a[i] × left[i] × right[i]`.
- **Ties:** use strict `<` on one side and `<=` on the other so an equal value isn't counted twice.
- Sum of ranges = Σ(subarray max) − Σ(subarray min).

```java
import java.util.*;

class Contribution {
    int sumSubarrayMins(int[] a) {
        final long MOD = 1_000_000_007L;
        int n = a.length;
        int[] left = new int[n], right = new int[n];
        Deque<Integer> st = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {                          // previous STRICTLY smaller
            while (!st.isEmpty() && a[st.peek()] >= a[i]) st.pop();
            left[i] = st.isEmpty() ? i + 1 : i - st.peek();
            st.push(i);
        }
        st.clear();
        for (int i = n - 1; i >= 0; i--) {                     // next smaller OR EQUAL
            while (!st.isEmpty() && a[st.peek()] > a[i]) st.pop();
            right[i] = st.isEmpty() ? n - i : st.peek() - i;
            st.push(i);
        }
        long sum = 0;
        for (int i = 0; i < n; i++) sum = (sum + (long) a[i] * left[i] % MOD * right[i]) % MOD;
        return (int) sum;
    }
}
```

**Used in:** 11.17, 11.18

---

## Phase 12 — Greedy & Intervals

### 12A. Greedy Choice & the Exchange Argument

**What it is:** A greedy algorithm makes the **best-looking choice right now** and never goes back. It's usually a sort plus one pass: fast and simple, but **only correct when you can justify it**.

**How to justify it (the exchange argument):** take any optimal solution that differs from the greedy one, and show that swapping in the greedy choice doesn't make it worse. Then the greedy solution is also optimal.

**When greedy fails, use DP:** 0/1 knapsack (greedy by value/weight fails), coin change with arbitrary coins (e.g. coins {1, 3, 4}, amount 6: greedy gives 4+1+1 but the best is 3+3).

**Classic greedy ideas**
- **Jump Game:** track the farthest reachable index. If you ever stand beyond it, you're stuck.
- **Jump Game II:** BFS by levels. The current jump covers `[start, end]`; the next jump reaches `farthest`.
- **Gas Station:** if the total gas ≥ total cost, a solution exists. Whenever the running tank goes negative, the start must be after this index.
- **Candy (two-pass greedy):** a left-to-right pass enforces the rule against the left neighbour, a right-to-left pass enforces it against the right neighbour, and each child gets the max of the two.
- **Partition labels:** a part can't end before the last occurrence of every letter inside it.
- **Valid parenthesis string:** track the range `[lo, hi]` of possible open counts.
- **Fractional knapsack:** sort by value/weight and take as much as possible of the best ratio (greedy works here because items can be split).
- **Job sequencing:** sort by profit descending and put each job in the latest free slot ≤ its deadline.

```java
import java.util.*;

class GreedyBasics {
    boolean canJump(int[] a) {
        int far = 0;
        for (int i = 0; i < a.length; i++) {
            if (i > far) return false;
            far = Math.max(far, i + a[i]);
        }
        return true;
    }

    int jump(int[] a) {
        int jumps = 0, end = 0, far = 0;
        for (int i = 0; i < a.length - 1; i++) {
            far = Math.max(far, i + a[i]);
            if (i == end) { jumps++; end = far; }
        }
        return jumps;
    }

    int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0, tank = 0, start = 0;
        for (int i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            tank += gas[i] - cost[i];
            if (tank < 0) { start = i + 1; tank = 0; }
        }
        return total >= 0 ? start : -1;
    }

    int candy(int[] r) {
        int n = r.length;
        int[] c = new int[n];
        Arrays.fill(c, 1);
        for (int i = 1; i < n; i++) if (r[i] > r[i - 1]) c[i] = c[i - 1] + 1;
        for (int i = n - 2; i >= 0; i--) if (r[i] > r[i + 1]) c[i] = Math.max(c[i], c[i + 1] + 1);
        int sum = 0;
        for (int x : c) sum += x;
        return sum;
    }

    List<Integer> partitionLabels(String s) {
        int[] last = new int[26];
        for (int i = 0; i < s.length(); i++) last[s.charAt(i) - 'a'] = i;
        List<Integer> res = new ArrayList<>();
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            end = Math.max(end, last[s.charAt(i) - 'a']);
            if (i == end) { res.add(end - start + 1); start = i + 1; }
        }
        return res;
    }
}
```

**Used in:** 12.1–12.10, 12.17

---

### 12B. Sort by Start (Merge / Insert Intervals)

**What it is:** After sorting intervals by **start**, overlapping intervals sit next to each other. Two intervals overlap when `next.start <= current.end`; merge them by extending `end = max(end, next.end)`.

**Insert interval** (the list is already sorted): add all intervals that end before the new one starts, merge all that overlap it, then add the rest.

```java
import java.util.*;

class MergeIntervals {
    int[][] merge(int[][] iv) {
        Arrays.sort(iv, (x, y) -> Integer.compare(x[0], y[0]));
        List<int[]> res = new ArrayList<>();
        for (int[] cur : iv) {
            if (res.isEmpty() || res.get(res.size() - 1)[1] < cur[0]) res.add(cur);
            else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], cur[1]);
        }
        return res.toArray(new int[0][]);
    }

    int[][] insert(int[][] iv, int[] nw) {
        List<int[]> res = new ArrayList<>();
        int i = 0, n = iv.length;
        while (i < n && iv[i][1] < nw[0]) res.add(iv[i++]);                 // entirely before
        int s = nw[0], e = nw[1];
        while (i < n && iv[i][0] <= e) { s = Math.min(s, iv[i][0]); e = Math.max(e, iv[i][1]); i++; }
        res.add(new int[]{s, e});
        while (i < n) res.add(iv[i++]);                                      // entirely after
        return res.toArray(new int[0][]);
    }
}
```

**Used in:** 12.11, 12.12

---

### 12C. Sort by End (Activity Selection)

**What it is:** To fit the **maximum number of non-overlapping intervals**, always pick the interval that **ends first**. It leaves the most room for the rest (the exchange argument).
- Min removals to make intervals non-overlapping = `n − maxKept`.
- Min arrows to burst balloons = the number of groups: shoot at the end of the first balloon and skip every balloon that starts at or before that point.
- N meetings in one room is the same algorithm.

```java
import java.util.*;

class ActivitySelection {
    int maxNonOverlapping(int[][] iv) {
        Arrays.sort(iv, (x, y) -> Integer.compare(x[1], y[1]));
        int count = 0;
        long lastEnd = Long.MIN_VALUE;
        for (int[] cur : iv)
            if (cur[0] >= lastEnd) { count++; lastEnd = cur[1]; }   // touching endpoints allowed
        return count;
    }

    int findMinArrowShots(int[][] p) {
        Arrays.sort(p, (x, y) -> Integer.compare(x[1], y[1]));
        int arrows = 0;
        long arrowAt = Long.MIN_VALUE;
        for (int[] b : p)
            if (b[0] > arrowAt) { arrows++; arrowAt = b[1]; }      // touching counts as a hit
        return arrows;
    }
}
```

**Common mistakes:** whether touching endpoints count as overlapping is different in each problem. Read the statement and choose `>` or `>=` to match.
**Used in:** 12.13, 12.14, 12.15

---

### 12D. Sweep Line (Maximum Overlap)

**What it is:** Turn every interval into two events, `+1` at the start and `−1` at the end. Sort the events and scan while keeping a running count. The **maximum count** is the number of rooms/platforms needed.
**Two-sorted-arrays version:** sort the starts and ends separately and walk them with two pointers.

```java
import java.util.*;

class SweepLine {
    int minPlatforms(int[] arr, int[] dep) {
        Arrays.sort(arr);
        Arrays.sort(dep);
        int i = 0, j = 0, cur = 0, best = 0;
        while (i < arr.length) {
            if (arr[i] <= dep[j]) { cur++; i++; best = Math.max(best, cur); }   // arrival first
            else { cur--; j++; }
        }
        return best;
    }

    int minMeetingRooms(int[][] iv) {                             // same idea with a TreeMap of events
        TreeMap<Integer, Integer> events = new TreeMap<>();
        for (int[] x : iv) { events.merge(x[0], 1, Integer::sum); events.merge(x[1], -1, Integer::sum); }
        int cur = 0, best = 0;
        for (int delta : events.values()) { cur += delta; best = Math.max(best, cur); }
        return best;
    }
}
```

**Used in:** 12.16 (and 5.12 Car Pooling is a sweep done with a difference array)

---
## Phase 13 — Binary Trees

### 13A. Tree Traversals: Recursive, Iterative and Level Order

**What it is:** A binary tree node has a value and up to two children. There are four standard orders:

| Order | Visit sequence | Typical use |
|---|---|---|
| Preorder | node → left → right | copy/serialize a tree, root-first processing |
| Inorder | left → node → right | BST gives a **sorted** order |
| Postorder | left → right → node | children first: heights, deletion, bottom-up answers |
| Level order (BFS) | level by level with a queue | levels, views, width, nearest node |

**Iterative versions** (interviewers ask for these to check you understand the call stack)
- **Preorder:** stack; pop a node, visit it, push right then left (so left is processed first).
- **Inorder:** go left as far as possible pushing nodes; pop and visit; then move to the right child.
- **Postorder:** do "node → right → left" (a preorder with the children swapped) and reverse the result.

**Level order:** at the start of each level, `size = queue.size()` tells you exactly how many nodes are on this level.

```java
import java.util.*;

class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; } }

class Traversals {
    void inorderRec(TreeNode n, List<Integer> out) {
        if (n == null) return;
        inorderRec(n.left, out);
        out.add(n.val);
        inorderRec(n.right, out);
    }

    List<Integer> preorderIter(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) return res;
        Deque<TreeNode> st = new ArrayDeque<>();
        st.push(root);
        while (!st.isEmpty()) {
            TreeNode n = st.pop();
            res.add(n.val);
            if (n.right != null) st.push(n.right);                // right first so left pops first
            if (n.left != null) st.push(n.left);
        }
        return res;
    }

    List<Integer> inorderIter(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> st = new ArrayDeque<>();
        TreeNode cur = root;
        while (cur != null || !st.isEmpty()) {
            while (cur != null) { st.push(cur); cur = cur.left; }
            cur = st.pop();
            res.add(cur.val);
            cur = cur.right;
        }
        return res;
    }

    List<Integer> postorderIter(TreeNode root) {
        LinkedList<Integer> res = new LinkedList<>();
        if (root == null) return res;
        Deque<TreeNode> st = new ArrayDeque<>();
        st.push(root);
        while (!st.isEmpty()) {
            TreeNode n = st.pop();
            res.addFirst(n.val);                                  // reverse of node-right-left
            if (n.left != null) st.push(n.left);
            if (n.right != null) st.push(n.right);
        }
        return res;
    }

    List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode n = q.poll();
                level.add(n.val);
                if (n.left != null) q.offer(n.left);
                if (n.right != null) q.offer(n.right);
            }
            res.add(level);
        }
        return res;
    }
}
```

**Level-order variants:** zigzag (reverse every other level), right side view (last node of each level), minimum depth (first leaf reached), max width (store a position index: left = `2i`, right = `2i + 1`, width = last − first + 1 on each level), populating next pointers (link nodes on the same level).
**Used in:** 13.1–13.4, 13.6, 13.15, 13.16, 13.22, 13.29

---

### 13B. Recursive DFS & the Height-Return Pattern

**What it is:** Most tree problems are solved by asking one question: *"what does my parent need from me?"* Each call returns that value (a height, a sum, a boolean), computed from its children's return values. Time O(n), space O(h).

**Height-return pattern:** when the answer is a path that **bends through** a node (diameter, max path sum), the value you **return** (the best straight path down) is different from the value you **record** (the best path through this node, using both sides). Keep the recorded answer in a field or a one-element array.

| Problem | Return to parent | Record at this node |
|---|---|---|
| Max depth | `1 + max(lh, rh)` | — |
| Balanced | height, or −1 if unbalanced | — |
| Diameter | `1 + max(lh, rh)` | `lh + rh` |
| Max path sum | `val + max(0, max(lg, rg))` | `val + max(0,lg) + max(0,rg)` |
| Same / symmetric | boolean from paired calls | — |

```java
class HeightReturn {
    int maxDepth(TreeNode n) { return n == null ? 0 : 1 + Math.max(maxDepth(n.left), maxDepth(n.right)); }

    // -1 means "unbalanced", so an unbalanced subtree stops further work
    int checkBalanced(TreeNode n) {
        if (n == null) return 0;
        int l = checkBalanced(n.left);
        if (l == -1) return -1;
        int r = checkBalanced(n.right);
        if (r == -1 || Math.abs(l - r) > 1) return -1;
        return 1 + Math.max(l, r);
    }

    int diameter = 0;
    int height(TreeNode n) {
        if (n == null) return 0;
        int lh = height(n.left), rh = height(n.right);
        diameter = Math.max(diameter, lh + rh);                  // path bending through n
        return 1 + Math.max(lh, rh);                             // straight path for the parent
    }

    int bestPath = Integer.MIN_VALUE;
    int gain(TreeNode n) {
        if (n == null) return 0;
        int l = Math.max(0, gain(n.left)), r = Math.max(0, gain(n.right));   // drop negative branches
        bestPath = Math.max(bestPath, n.val + l + r);
        return n.val + Math.max(l, r);
    }

    boolean isMirror(TreeNode a, TreeNode b) {                   // symmetric tree: isMirror(root.left, root.right)
        if (a == null || b == null) return a == b;
        return a.val == b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }

    TreeNode invert(TreeNode n) {
        if (n == null) return null;
        TreeNode t = n.left; n.left = invert(n.right); n.right = invert(t);
        return n;
    }

    boolean hasPathSum(TreeNode n, int target) {                 // subtract on the way down
        if (n == null) return false;
        if (n.left == null && n.right == null) return target == n.val;
        return hasPathSum(n.left, target - n.val) || hasPathSum(n.right, target - n.val);
    }
}
```

**Count complete tree nodes in O(log² n):** if the leftmost and rightmost heights are equal, the tree is perfect with `2^h − 1` nodes; otherwise recurse on both children.
**Used in:** 13.5, 13.7–13.14, 13.23, 13.30

---

### 13C. Views & Boundary Traversal

**What it is:** Give each node a **column** (horizontal distance): root = 0, left child = `col − 1`, right child = `col + 1`.
- **Top view:** the **first** node seen in each column during BFS.
- **Bottom view:** the **last** node seen in each column during BFS.
- **Right / left view:** the last / first node of each level.
- **Vertical order (LC 987):** collect `(col, row, val)` and sort by column, then row, then value.
- **Boundary traversal:** the root, then the left edge (excluding leaves) top-down, then all leaves left to right, then the right edge (excluding leaves) bottom-up.

BFS matters for top/bottom view: it visits upper nodes first, which DFS doesn't guarantee.

```java
import java.util.*;

class TreeViews {
    List<Integer> topView(TreeNode root) {
        TreeMap<Integer, Integer> firstInCol = new TreeMap<>();   // col -> value, sorted by col
        Queue<Object[]> q = new ArrayDeque<>();
        if (root != null) q.offer(new Object[]{root, 0});
        while (!q.isEmpty()) {
            Object[] e = q.poll();
            TreeNode n = (TreeNode) e[0];
            int col = (int) e[1];
            firstInCol.putIfAbsent(col, n.val);                   // bottom view: use put() instead
            if (n.left != null) q.offer(new Object[]{n.left, col - 1});
            if (n.right != null) q.offer(new Object[]{n.right, col + 1});
        }
        return new ArrayList<>(firstInCol.values());
    }

    List<Integer> boundary(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) return res;
        if (!isLeaf(root)) res.add(root.val);
        for (TreeNode n = root.left; n != null; n = (n.left != null) ? n.left : n.right)
            if (!isLeaf(n)) res.add(n.val);                       // left edge, top-down
        addLeaves(root, res);
        Deque<Integer> right = new ArrayDeque<>();
        for (TreeNode n = root.right; n != null; n = (n.right != null) ? n.right : n.left)
            if (!isLeaf(n)) right.push(n.val);                    // right edge, reversed with a stack
        res.addAll(right);
        return res;
    }
    boolean isLeaf(TreeNode n) { return n.left == null && n.right == null; }
    void addLeaves(TreeNode n, List<Integer> res) {
        if (n == null) return;
        if (isLeaf(n)) { res.add(n.val); return; }
        addLeaves(n.left, res);
        addLeaves(n.right, res);
    }
}
```

**Used in:** 13.16, 13.17, 13.18, 13.19, 13.20

---

### 13D. Lowest Common Ancestor (LCA)

**What it is:** The deepest node that has both `p` and `q` in its subtree.

**Recursive logic:** search both subtrees.
- Found something on **both** sides → this node is where p and q split, so it's the LCA.
- Found on one side only → pass that result up.
- The current node is `p` or `q` → return it (it may be the ancestor of the other).

```java
class LCA {
    TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode l = lowestCommonAncestor(root.left, p, q);
        TreeNode r = lowestCommonAncestor(root.right, p, q);
        if (l != null && r != null) return root;
        return (l != null) ? l : r;
    }
}
```

**Distance between two nodes** = `depth(p) + depth(q) − 2·depth(LCA)`.
**Used in:** 13.21 (the BST version, 14.6, is simpler)

---

### 13E. Parent Map + BFS ("distance from a node")

**What it is:** Tree edges only point downward, but some questions need to move **up** too (all nodes at distance K from a target, time to burn/infect the whole tree). Record each node's parent with one traversal, then treat the tree as an **undirected graph** and BFS from the target with a visited set.

```java
import java.util.*;

class ParentMapBFS {
    List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        Map<TreeNode, TreeNode> parent = new HashMap<>();
        Queue<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {                                    // 1. record parents
            TreeNode n = q.poll();
            if (n.left != null) { parent.put(n.left, n); q.offer(n.left); }
            if (n.right != null) { parent.put(n.right, n); q.offer(n.right); }
        }
        Set<TreeNode> seen = new HashSet<>();
        q.offer(target); seen.add(target);
        for (int d = 0; d < k && !q.isEmpty(); d++) {             // 2. BFS k levels in 3 directions
            for (int size = q.size(); size > 0; size--) {
                TreeNode n = q.poll();
                for (TreeNode nb : new TreeNode[]{n.left, n.right, parent.get(n)})
                    if (nb != null && seen.add(nb)) q.offer(nb);
            }
        }
        List<Integer> res = new ArrayList<>();
        for (TreeNode n : q) res.add(n.val);
        return res;
    }
}
```

**Burn tree / infection time:** the same BFS, but run it until the queue is empty and count the levels.
**Used in:** 13.24, 13.25

---

### 13F. Tree Construction from Traversals

**What it is:** **Preorder** tells you the root (its first element). **Inorder** tells you what's left and right of the root. With a map `value → inorder index`, each root is found in O(1), so building the tree is O(n).
- Pre + In: take roots from the **front** of preorder, and build left before right.
- Post + In: take roots from the **back** of postorder, and build **right before left**.
- Pre + Post alone can't always determine a tree uniquely (unless it's a full binary tree).

```java
import java.util.*;

class BuildTree {
    private int preIdx = 0;
    private Map<Integer, Integer> inPos;

    TreeNode buildTree(int[] pre, int[] in) {
        inPos = new HashMap<>();
        for (int i = 0; i < in.length; i++) inPos.put(in[i], i);
        preIdx = 0;
        return build(pre, 0, in.length - 1);
    }
    private TreeNode build(int[] pre, int lo, int hi) {           // lo..hi is a range of inorder
        if (lo > hi) return null;
        TreeNode root = new TreeNode(pre[preIdx++]);
        int mid = inPos.get(root.val);
        root.left = build(pre, lo, mid - 1);
        root.right = build(pre, mid + 1, hi);
        return root;
    }
}
```

**Flatten to a linked list (preorder):** process nodes in reverse preorder (right, left, node) and keep a `prev` pointer: `node.right = prev; node.left = null; prev = node`.
**Used in:** 13.26, 13.27, 13.28

---

### 13G. Serialization

**What it is:** Turn a tree into a string and back. A **preorder with null markers** (`"1,2,#,#,3,4,#,#,5,#,#"`) is enough to rebuild the tree exactly, because the markers say where each subtree ends.

```java
import java.util.*;

class Codec {
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        ser(root, sb);
        return sb.toString();
    }
    private void ser(TreeNode n, StringBuilder sb) {
        if (n == null) { sb.append("#,"); return; }
        sb.append(n.val).append(',');
        ser(n.left, sb);
        ser(n.right, sb);
    }
    public TreeNode deserialize(String data) {
        return des(new ArrayDeque<>(Arrays.asList(data.split(","))));
    }
    private TreeNode des(Deque<String> tokens) {
        String t = tokens.poll();
        if (t.equals("#")) return null;
        TreeNode n = new TreeNode(Integer.parseInt(t));
        n.left = des(tokens);
        n.right = des(tokens);
        return n;
    }
}
```

**Used in:** 13.31 (and serializing subtrees lets you compare them in 13.14)

---

## Phase 14 — Binary Search Trees

### 14A. BST Property & Search / Insert / Delete

**What it is:** For every node, **all** values in its left subtree are smaller and **all** values in its right subtree are larger. Consequences:
- **Inorder traversal is sorted.**
- Search, insert and delete take O(h): O(log n) if balanced, O(n) if the tree is a chain. Java's `TreeMap` is a self-balancing red-black tree.

**Delete, three cases**
1. Leaf → just remove it.
2. One child → replace the node with that child.
3. Two children → copy the **inorder successor** (the smallest node in the right subtree) into this node, then delete the successor from the right subtree.

```java
class BSTBasics {
    TreeNode search(TreeNode root, int x) {
        while (root != null && root.val != x) root = (x < root.val) ? root.left : root.right;
        return root;
    }

    TreeNode insert(TreeNode root, int x) {
        if (root == null) return new TreeNode(x);
        if (x < root.val) root.left = insert(root.left, x);
        else root.right = insert(root.right, x);
        return root;
    }

    TreeNode delete(TreeNode root, int key) {
        if (root == null) return null;
        if (key < root.val) root.left = delete(root.left, key);
        else if (key > root.val) root.right = delete(root.right, key);
        else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            TreeNode succ = root.right;
            while (succ.left != null) succ = succ.left;
            root.val = succ.val;
            root.right = delete(root.right, succ.val);
        }
        return root;
    }

    TreeNode sortedArrayToBST(int[] a, int lo, int hi) {         // middle as root -> balanced
        if (lo > hi) return null;
        int mid = lo + (hi - lo) / 2;
        TreeNode n = new TreeNode(a[mid]);
        n.left = sortedArrayToBST(a, lo, mid - 1);
        n.right = sortedArrayToBST(a, mid + 1, hi);
        return n;
    }

    TreeNode lcaBST(TreeNode root, TreeNode p, TreeNode q) {     // use ordering, O(h)
        while (root != null) {
            if (p.val < root.val && q.val < root.val) root = root.left;
            else if (p.val > root.val && q.val > root.val) root = root.right;
            else return root;
        }
        return null;
    }
}
```

**Construct BST from preorder in O(n):** recurse with an upper bound. A value belongs to the current subtree only if it's below the bound.
**Used in:** 14.1, 14.2, 14.3, 14.6, 14.7, 14.8

---

### 14B. Validating a BST with (min, max)

**What it is:** Checking only `left.val < node.val < right.val` is **wrong**. A node deep in the left subtree must also be smaller than every ancestor it sits left of. Pass down the allowed range `(min, max)` and tighten it at each step. Use `long` bounds so values equal to `Integer.MIN/MAX_VALUE` still work.

**Alternative:** do an inorder traversal and check that each value is strictly greater than the previous one.

```java
class ValidateBST {
    boolean isValid(TreeNode n, long min, long max) {       // call: isValid(root, Long.MIN_VALUE, Long.MAX_VALUE)
        if (n == null) return true;
        if (n.val <= min || n.val >= max) return false;
        return isValid(n.left, min, n.val) && isValid(n.right, n.val, max);
    }
}
```

**Recover BST (two nodes swapped):** in the inorder sequence, find the "drops" (`prev > cur`). The first drop's `prev` and the last drop's `cur` are the swapped nodes, so swap their values back.
**Used in:** 14.4, 14.13

---

### 14C. Inorder = Sorted: Kth Smallest, Floor/Ceil, Iterator, Two Sum

**What it is:** Because inorder is sorted, many BST questions are really **sorted-array questions**.
- **Kth smallest:** inorder traversal with a counter, stop at k.
- **Floor** (largest ≤ key) / **ceil** (smallest ≥ key): walk down from the root, remembering the best candidate so far. O(h).
- **BST iterator:** a controlled iterative inorder. The stack holds the left spine, and `next()` pops one node and pushes the left spine of its right child. Amortised O(1) per call, O(h) memory.
- **Two Sum in a BST:** an inorder list plus two pointers, or a HashSet during DFS.

```java
import java.util.*;

class BSTOrder {
    int floor(TreeNode root, int key) {
        int best = -1;
        while (root != null) {
            if (root.val == key) return key;
            if (root.val < key) { best = root.val; root = root.right; }   // candidate, look for bigger
            else root = root.left;
        }
        return best;
    }

    int ceil(TreeNode root, int key) {
        int best = -1;
        while (root != null) {
            if (root.val == key) return key;
            if (root.val > key) { best = root.val; root = root.left; }    // candidate, look for smaller
            else root = root.right;
        }
        return best;
    }

    int kthSmallest(TreeNode root, int k) {
        Deque<TreeNode> st = new ArrayDeque<>();
        TreeNode cur = root;
        while (true) {
            while (cur != null) { st.push(cur); cur = cur.left; }
            cur = st.pop();
            if (--k == 0) return cur.val;
            cur = cur.right;
        }
    }
}

class BSTIterator {
    private final Deque<TreeNode> st = new ArrayDeque<>();
    BSTIterator(TreeNode root) { pushLeft(root); }
    public int next() {
        TreeNode n = st.pop();
        pushLeft(n.right);
        return n.val;
    }
    public boolean hasNext() { return !st.isEmpty(); }
    private void pushLeft(TreeNode n) { while (n != null) { st.push(n); n = n.left; } }
}
```

**Used in:** 14.5, 14.9, 14.10, 14.11, 14.12

---

## Phase 15 — Heap / Priority Queue

### 15A. How a Heap Works

**What it is:** A **complete binary tree stored in an array** where every parent is ≤ its children (min-heap) or ≥ them (max-heap). The top is always the min (or max).
- Index math (0-based): parent `(i − 1) / 2`, children `2i + 1` and `2i + 2`.
- **Insert:** add at the end, **sift up** (swap with the parent while smaller). O(log n).
- **Remove top:** move the last element to the root, **sift down** (swap with the smaller child). O(log n).
- **Build a heap from an array:** sift down from the last parent to the root. O(n), not O(n log n).
- Java: `PriorityQueue` is a min-heap by default. Use `Collections.reverseOrder()` or a comparator for a max-heap. `remove(Object)` is O(n).

```java
import java.util.*;

class MinHeap {                                               // for understanding; use PriorityQueue in practice
    private final List<Integer> h = new ArrayList<>();
    void push(int x) {
        h.add(x);
        int i = h.size() - 1;
        while (i > 0 && h.get((i - 1) / 2) > h.get(i)) { Collections.swap(h, i, (i - 1) / 2); i = (i - 1) / 2; }
    }
    int pop() {
        int top = h.get(0), last = h.remove(h.size() - 1);
        if (!h.isEmpty()) {
            h.set(0, last);
            int i = 0;
            while (true) {
                int l = 2 * i + 1, r = l + 1, small = i;
                if (l < h.size() && h.get(l) < h.get(small)) small = l;
                if (r < h.size() && h.get(r) < h.get(small)) small = r;
                if (small == i) break;
                Collections.swap(h, i, small);
                i = small;
            }
        }
        return top;
    }
    int peek() { return h.get(0); }
    int size() { return h.size(); }
}
```

**Used in:** 15.1 (max-heap simulation) and the whole phase

---

### 15B. Top-K with a Size-K Heap (and Quickselect)

**What it is:** To find the K largest items, keep a **min-heap of size K**. Its top is the smallest of the current top K. When a bigger item arrives, it replaces the top. O(n log K) time, O(K) space, and it works on a stream too.
- K **largest** → **min**-heap. K **smallest / closest** → **max**-heap.

**Quickselect:** use quick sort's partition, but recurse only into the side that contains index `n − k`. Average O(n), worst O(n²) (a random pivot makes the worst case unlikely).

```java
import java.util.*;

class TopK {
    int findKthLargest(int[] a, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int x : a) {
            pq.offer(x);
            if (pq.size() > k) pq.poll();
        }
        return pq.peek();
    }

    int[][] kClosest(int[][] pts, int k) {                     // max-heap by distance, size k
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (p, q) -> Integer.compare(q[0] * q[0] + q[1] * q[1], p[0] * p[0] + p[1] * p[1]));
        for (int[] p : pts) {
            pq.offer(p);
            if (pq.size() > k) pq.poll();
        }
        return pq.toArray(new int[0][]);
    }

    private final Random rnd = new Random();
    int quickselect(int[] a, int k) {                          // k-th largest
        int target = a.length - k, lo = 0, hi = a.length - 1;
        while (true) {
            int p = partition(a, lo, hi);
            if (p == target) return a[p];
            if (p < target) lo = p + 1; else hi = p - 1;
        }
    }
    private int partition(int[] a, int lo, int hi) {
        int r = lo + rnd.nextInt(hi - lo + 1);
        int t = a[r]; a[r] = a[hi]; a[hi] = t;
        int pivot = a[hi], i = lo;
        for (int j = lo; j < hi; j++) if (a[j] < pivot) { t = a[i]; a[i] = a[j]; a[j] = t; i++; }
        t = a[i]; a[i] = a[hi]; a[hi] = t;
        return i;
    }
}
```

**Used in:** 15.2, 15.3, 15.4, 15.12

---

### 15C. K-way Merge

**What it is:** To merge K sorted lists or arrays, put the **head of each** into a min-heap. Repeatedly pop the smallest and push the next element from the same source. O(N log K) for N total elements.

```java
import java.util.*;

class KWayMerge {
    ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));
        for (ListNode n : lists) if (n != null) pq.offer(n);
        ListNode dummy = new ListNode(0), tail = dummy;
        while (!pq.isEmpty()) {
            ListNode n = pq.poll();
            tail.next = n; tail = n;
            if (n.next != null) pq.offer(n.next);
        }
        return dummy.next;
    }

    // Kth smallest in a row/column-sorted matrix: each row is one sorted list
    int kthSmallest(int[][] m, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));   // {val, r, c}
        for (int r = 0; r < Math.min(m.length, k); r++) pq.offer(new int[]{m[r][0], r, 0});
        while (--k > 0) {
            int[] e = pq.poll();
            if (e[2] + 1 < m[0].length) pq.offer(new int[]{m[e[1]][e[2] + 1], e[1], e[2] + 1});
        }
        return pq.peek()[0];
    }
}
```

**Used in:** 15.5, 15.6, 15.9 (Design Twitter merges the users' tweet lists)

---

### 15D. Two Heaps (Running Median)

**What it is:** Split the numbers into a **max-heap `low`** (the smaller half) and a **min-heap `high`** (the larger half), keeping `low.size() == high.size()` or one bigger. The median is `low.peek()` or the average of both tops. Add is O(log n), median is O(1).

```java
import java.util.*;

class RunningMedian {
    private final PriorityQueue<Integer> low = new PriorityQueue<>(Collections.reverseOrder());
    private final PriorityQueue<Integer> high = new PriorityQueue<>();
    public void addNum(int x) {
        low.offer(x);
        high.offer(low.poll());                              // largest of low moves up
        if (high.size() > low.size()) low.offer(high.poll());   // rebalance
    }
    public double findMedian() {
        return low.size() > high.size() ? low.peek() : (low.peek() + (long) high.peek()) / 2.0;
    }
}
```

**Used in:** 15.10 (the same idea powers the sliding window median)

---

### 15E. Greedy with a Heap

**What it is:** At each step, take the **best available** option. The heap always hands you the current best in O(log n).
- **Task scheduler / reorganize string:** always place the most frequent remaining item. For reorganize, pop two different items per round so equal letters are never adjacent.
- **IPO:** sort projects by capital. Push every affordable project's profit into a max-heap and take the best one. Repeat k times.
- **Task scheduler formula:** `max(n_tasks, (maxFreq − 1) × (cooldown + 1) + countOfMaxFreq)`.

```java
import java.util.*;

class HeapGreedy {
    String reorganizeString(String s) {
        int[] cnt = new int[26];
        for (char c : s.toCharArray()) cnt[c - 'a']++;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);   // {char, count}
        for (int i = 0; i < 26; i++) if (cnt[i] > 0) pq.offer(new int[]{i, cnt[i]});
        StringBuilder sb = new StringBuilder();
        while (pq.size() >= 2) {
            int[] a = pq.poll(), b = pq.poll();
            sb.append((char) ('a' + a[0])).append((char) ('a' + b[0]));
            if (--a[1] > 0) pq.offer(a);
            if (--b[1] > 0) pq.offer(b);
        }
        if (!pq.isEmpty()) {
            int[] last = pq.poll();
            if (last[1] > 1) return "";
            sb.append((char) ('a' + last[0]));
        }
        return sb.toString();
    }

    int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> Integer.compare(capital[a], capital[b]));
        PriorityQueue<Integer> best = new PriorityQueue<>(Collections.reverseOrder());
        int i = 0;
        while (k-- > 0) {
            while (i < n && capital[idx[i]] <= w) best.offer(profits[idx[i++]]);
            if (best.isEmpty()) break;
            w += best.poll();
        }
        return w;
    }
}
```

**Used in:** 15.7, 15.8, 15.11

---

## Phase 16 — Graphs I: Traversal, Cycles, Topological Sort

### 16A. Graph Representation (Adjacency List)

**What it is:** A graph is a set of nodes (vertices) connected by edges. Edges can be **directed** or **undirected**, and **weighted** or unweighted.

| Representation | Space | Check edge u–v | List neighbours | Use when |
|---|---|---|---|---|
| Adjacency list `List<List<Integer>>` | O(V + E) | O(deg) | O(deg) | almost always |
| Adjacency matrix `int[V][V]` | O(V²) | O(1) | O(V) | dense graphs, Floyd-Warshall |
| Edge list `int[][] {u, v, w}` | O(E) | O(E) | O(E) | Kruskal, Bellman-Ford |

```java
import java.util.*;

class GraphBuild {
    List<List<Integer>> undirected(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
        return adj;
    }
    List<List<int[]>> weightedDirected(int n, int[][] edges) {   // edge = {u, v, w}
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) adj.get(e[0]).add(new int[]{e[1], e[2]});
        return adj;
    }
}
```

---

### 16B. DFS & BFS

**What it is**
- **DFS (depth-first):** go as deep as possible, then backtrack. Recursion or a stack. Use it for connected components, reachability, cycle detection, topological order, and all paths.
- **BFS (breadth-first):** explore in layers with a queue. The first time BFS reaches a node is along the **shortest path in an unweighted graph**. Use it for minimum steps, levels, and nearest.
- Both are O(V + E). **Mark a node visited when you enqueue/push it**, not when you process it, or nodes get added more than once.
- **Connected components:** start a DFS/BFS from every unvisited node and count how many starts you needed.
- **Clone graph:** DFS with a map from original → copy, so each node is copied once.

```java
import java.util.*;

class Traverse {
    void dfs(int u, List<List<Integer>> adj, boolean[] seen) {
        seen[u] = true;
        for (int v : adj.get(u)) if (!seen[v]) dfs(v, adj, seen);
    }

    int countComponents(int n, List<List<Integer>> adj) {
        boolean[] seen = new boolean[n];
        int comps = 0;
        for (int u = 0; u < n; u++) if (!seen[u]) { comps++; dfs(u, adj, seen); }
        return comps;
    }

    int[] bfsDistances(int src, List<List<Integer>> adj) {
        int[] dist = new int[adj.size()];
        Arrays.fill(dist, -1);
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(src); dist[src] = 0;
        while (!q.isEmpty()) {
            int u = q.poll();
            for (int v : adj.get(u))
                if (dist[v] == -1) { dist[v] = dist[u] + 1; q.offer(v); }   // mark when enqueuing
        }
        return dist;
    }
}
```

**Used in:** 16.2, 16.4, 16.5 and all of Phase 16

---

### 16C. Grid as a Graph

**What it is:** Each cell is a node and its 4 (or 8) neighbours are its edges. You don't need to build an adjacency list; use a direction array. Mark visited cells by changing the grid or with a `boolean[][]`.

**Boundary DFS trick:** for "regions **not** connected to the border" (surrounded regions, enclaves), start DFS **from every border cell** first and mark what's reachable. Everything left unmarked is enclosed.
**Reverse-flow trick (Pacific Atlantic):** instead of asking "where can water from this cell go?", start from each ocean and climb **uphill**. The answer is the cells reached from both oceans.

```java
class GridGraph {
    static final int[][] DIRS = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    int numIslands(char[][] g) {
        int count = 0;
        for (int r = 0; r < g.length; r++)
            for (int c = 0; c < g[0].length; c++)
                if (g[r][c] == '1') { count++; sink(g, r, c); }
        return count;
    }
    void sink(char[][] g, int r, int c) {
        if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] != '1') return;
        g[r][c] = '0';
        for (int[] d : DIRS) sink(g, r + d[0], c + d[1]);
    }

    void solveSurrounded(char[][] b) {                          // capture 'O' regions not touching the border
        int R = b.length, C = b[0].length;
        for (int r = 0; r < R; r++) { mark(b, r, 0); mark(b, r, C - 1); }
        for (int c = 0; c < C; c++) { mark(b, 0, c); mark(b, R - 1, c); }
        for (int r = 0; r < R; r++)
            for (int c = 0; c < C; c++)
                b[r][c] = (b[r][c] == 'S') ? 'O' : 'X';           // S = safe (reached from border)
    }
    void mark(char[][] b, int r, int c) {
        if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] != 'O') return;
        b[r][c] = 'S';
        for (int[] d : DIRS) mark(b, r + d[0], c + d[1]);
    }
}
```

**Common mistakes:** a deep recursive DFS on a 1000×1000 grid can overflow the stack; switch to BFS if that happens.
**Used in:** 16.1, 16.2, 16.3, 16.8, 16.9, 16.10

---

### 16D. Multi-Source BFS

**What it is:** When many starting points spread **at the same time** (rotting oranges, distance to the nearest 0), put **all** sources in the queue at distance 0 before starting. BFS then gives each cell its distance to the **nearest** source in one O(R·C) pass, instead of one BFS per source.

```java
import java.util.*;

class MultiSourceBFS {
    int[][] nearestZero(int[][] m) {                            // 01 Matrix
        int R = m.length, C = m[0].length;
        int[][] dist = new int[R][C];
        Queue<int[]> q = new ArrayDeque<>();
        for (int r = 0; r < R; r++)
            for (int c = 0; c < C; c++) {
                if (m[r][c] == 0) q.offer(new int[]{r, c});      // every source at once
                else dist[r][c] = -1;
            }
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!q.isEmpty()) {
            int[] cell = q.poll();
            for (int[] d : dirs) {
                int nr = cell[0] + d[0], nc = cell[1] + d[1];
                if (nr < 0 || nc < 0 || nr >= R || nc >= C || dist[nr][nc] != -1) continue;
                dist[nr][nc] = dist[cell[0]][cell[1]] + 1;
                q.offer(new int[]{nr, nc});
            }
        }
        return dist;
    }
}
```

**Rotting oranges:** the same, but process level by level (`for size = q.size()`) and count the minutes. Return −1 if any fresh orange remains.
**Used in:** 16.6, 16.7

---

### 16E. BFS on Implicit State Graphs

**What it is:** Sometimes the "nodes" are **states** (words, lock combinations, board positions) and the edges are "one move". You don't build the graph; you generate neighbours on the fly and run BFS for the minimum number of moves.
**Word Ladder:** for each word, try changing each position to 'a'..'z'. If the new word is in the dictionary and not visited, it's a neighbour.

```java
import java.util.*;

class WordLadder {
    int ladderLength(String begin, String end, List<String> words) {
        Set<String> dict = new HashSet<>(words);
        if (!dict.contains(end)) return 0;
        Queue<String> q = new ArrayDeque<>();
        q.offer(begin);
        dict.remove(begin);
        for (int steps = 1; !q.isEmpty(); steps++) {
            for (int size = q.size(); size > 0; size--) {
                char[] w = q.poll().toCharArray();
                for (int i = 0; i < w.length; i++) {
                    char orig = w[i];
                    for (char ch = 'a'; ch <= 'z'; ch++) {
                        w[i] = ch;
                        String next = new String(w);
                        if (next.equals(end)) return steps + 1;
                        if (dict.remove(next)) q.offer(next);         // remove = mark visited
                    }
                    w[i] = orig;
                }
            }
        }
        return 0;
    }
}
```

**Used in:** 16.19

---

### 16F. Cycle Detection (Undirected and Directed)

**What it is**
- **Undirected:** during DFS/BFS, seeing an already-visited neighbour that **isn't your parent** means a cycle. (With DSU: an edge whose two endpoints already share a root closes a cycle, see 17D.)
- **Directed:** a cycle exists when DFS reaches a node that's **still on the current recursion path** (a back edge). Keep an `onPath[]` array alongside `visited[]`, and unset `onPath` when the call returns. Being "visited" alone isn't enough in a directed graph, because the node may belong to a different, finished branch.
- **Directed via Kahn:** if topological sort can't output all V nodes, there's a cycle.

```java
import java.util.*;

class CycleDetection {
    boolean undirectedHasCycle(int n, List<List<Integer>> adj) {
        boolean[] seen = new boolean[n];
        for (int s = 0; s < n; s++) if (!seen[s] && dfsU(s, -1, adj, seen)) return true;
        return false;
    }
    boolean dfsU(int u, int parent, List<List<Integer>> adj, boolean[] seen) {
        seen[u] = true;
        for (int v : adj.get(u)) {
            if (!seen[v]) { if (dfsU(v, u, adj, seen)) return true; }
            else if (v != parent) return true;                    // visited and not the parent
        }
        return false;
    }

    boolean directedHasCycle(int n, List<List<Integer>> adj) {
        boolean[] seen = new boolean[n], onPath = new boolean[n];
        for (int s = 0; s < n; s++) if (!seen[s] && dfsD(s, adj, seen, onPath)) return true;
        return false;
    }
    boolean dfsD(int u, List<List<Integer>> adj, boolean[] seen, boolean[] onPath) {
        seen[u] = onPath[u] = true;
        for (int v : adj.get(u)) {
            if (onPath[v]) return true;                           // back edge
            if (!seen[v] && dfsD(v, adj, seen, onPath)) return true;
        }
        onPath[u] = false;                                        // leaving the path
        return false;
    }
}
```

**Eventual safe states:** a node is safe if no path from it reaches a cycle. Reverse the edges and run Kahn's algorithm from the terminal nodes; everything that gets processed is safe.
**Used in:** 16.12, 16.13, 16.15, 16.17

---

### 16G. Topological Sort (Kahn's BFS and DFS)

**What it is:** A linear order of a **DAG** (directed acyclic graph) where every edge `u → v` puts `u` before `v`. It models dependencies (course prerequisites, build order, alien alphabet).
- **Kahn's algorithm:** compute in-degrees and start with every node of in-degree 0. Pop a node, append it to the order, and decrement its neighbours' in-degrees, enqueuing any that reach 0. Fewer than V nodes output → cycle.
- **DFS version:** after a node's DFS **finishes**, push it onto a stack. Reading the stack top to bottom gives the order.

```java
import java.util.*;

class TopoSort {
    int[] kahn(int n, List<List<Integer>> adj) {
        int[] indeg = new int[n];
        for (int u = 0; u < n; u++) for (int v : adj.get(u)) indeg[v]++;
        Queue<Integer> q = new ArrayDeque<>();
        for (int u = 0; u < n; u++) if (indeg[u] == 0) q.offer(u);
        int[] order = new int[n];
        int idx = 0;
        while (!q.isEmpty()) {
            int u = q.poll();
            order[idx++] = u;
            for (int v : adj.get(u)) if (--indeg[v] == 0) q.offer(v);
        }
        return idx == n ? order : new int[0];                     // empty = cycle
    }

    List<Integer> dfsTopo(int n, List<List<Integer>> adj) {
        boolean[] seen = new boolean[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int u = 0; u < n; u++) if (!seen[u]) dfs(u, adj, seen, stack);
        return new ArrayList<>(stack);                            // top of stack first
    }
    private void dfs(int u, List<List<Integer>> adj, boolean[] seen, Deque<Integer> stack) {
        seen[u] = true;
        for (int v : adj.get(u)) if (!seen[v]) dfs(v, adj, seen, stack);
        stack.push(u);                                            // after all descendants
    }
}
```

**Alien dictionary:** compare each pair of **adjacent** words. The first differing characters give an edge `c1 → c2`. Topo sort the letters. Edge case: if a longer word comes before its own prefix (`"abc"` before `"ab"`), the input is invalid.
**Used in:** 16.14, 16.15, 16.16, 16.17, 16.18

---

### 16H. Bipartite Check (2-Colouring)

**What it is:** A graph is bipartite if its nodes can be split into two groups with every edge going **between** the groups. Colour a start node 0 and its neighbours 1, their neighbours 0, and so on. An edge between two nodes of the **same** colour means it's not bipartite.
**Equivalent fact:** a graph is bipartite **if and only if it has no odd-length cycle**.

```java
import java.util.*;

class Bipartite {
    boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] color = new int[n];                                 // 0 = uncoloured, 1 / -1 = sides
        for (int s = 0; s < n; s++) {
            if (color[s] != 0) continue;                          // the graph may be disconnected
            Queue<Integer> q = new ArrayDeque<>();
            q.offer(s); color[s] = 1;
            while (!q.isEmpty()) {
                int u = q.poll();
                for (int v : graph[u]) {
                    if (color[v] == 0) { color[v] = -color[u]; q.offer(v); }
                    else if (color[v] == color[u]) return false;
                }
            }
        }
        return true;
    }
}
```

**Used in:** 16.11 (the same logic appears in "possible bipartition")

---

## Phase 17 — Graphs II: Shortest Paths, DSU, MST, Advanced

### Which shortest-path algorithm?

| Situation | Algorithm | Time |
|---|---|---|
| Unweighted (all edges cost 1) | BFS | O(V + E) |
| Weights 0 or 1 only | 0-1 BFS (deque: weight 0 → front, 1 → back) | O(V + E) |
| Non-negative weights, one source | **Dijkstra** | O((V + E) log V) |
| Negative weights / "at most K edges" / detect a negative cycle | **Bellman-Ford** | O(V · E) |
| All pairs, small V (≤ ~400) | **Floyd-Warshall** | O(V³) |

---

### 17A. Dijkstra's Algorithm

**What it is:** A **greedy BFS with a min-heap**. Always settle the unvisited node with the smallest known distance; with non-negative edges it can't be improved later. Relax its edges: `if dist[u] + w < dist[v]`, update `dist[v]` and push `(v, dist[v])`.

**Lazy deletion:** the heap may hold outdated entries for a node. When popped, skip them if `d > dist[u]`.

**Variants**
- **Path with minimum effort:** the "distance" is the maximum edge seen along the path: `newCost = max(dist[u], |h[u] − h[v]|)`.
- **Number of shortest paths:** keep `ways[v]`. On a strictly better distance, `ways[v] = ways[u]`; on an equal distance, `ways[v] += ways[u]`.
- **Swim in rising water:** the cost of a path is its maximum cell height, so it's the same "minimax" Dijkstra.

```java
import java.util.*;

class Dijkstra {
    long[] shortest(int n, List<List<int[]>> adj, int src) {        // adj.get(u) = {v, w}
        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE);
        dist[src] = 0;
        PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[1], b[1]));
        pq.offer(new long[]{src, 0});
        while (!pq.isEmpty()) {
            long[] top = pq.poll();
            int u = (int) top[0];
            if (top[1] > dist[u]) continue;                          // outdated entry
            for (int[] e : adj.get(u)) {
                int v = e[0];
                long nd = dist[u] + e[1];
                if (nd < dist[v]) { dist[v] = nd; pq.offer(new long[]{v, nd}); }
            }
        }
        return dist;
    }

    int minimumEffortPath(int[][] h) {                               // minimax Dijkstra on a grid
        int R = h.length, C = h[0].length;
        int[][] best = new int[R][C];
        for (int[] row : best) Arrays.fill(row, Integer.MAX_VALUE);
        best[0][0] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));   // {effort, r, c}
        pq.offer(new int[]{0, 0, 0});
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int e = cur[0], r = cur[1], c = cur[2];
            if (r == R - 1 && c == C - 1) return e;
            if (e > best[r][c]) continue;
            for (int[] d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                if (nr < 0 || nc < 0 || nr >= R || nc >= C) continue;
                int ne = Math.max(e, Math.abs(h[nr][nc] - h[r][c]));
                if (ne < best[nr][nc]) { best[nr][nc] = ne; pq.offer(new int[]{ne, nr, nc}); }
            }
        }
        return 0;
    }
}
```

**Common mistakes:** using Dijkstra with negative edges (wrong answers); forgetting the outdated-entry check (slow); `int` overflow when adding to `Integer.MAX_VALUE`.
**Used in:** 17.1 (plain BFS), 17.2, 17.3, 17.5, 17.15

---

### 17B. Bellman-Ford

**What it is:** Relax **every edge** V − 1 times. Any shortest path has at most V − 1 edges, so after round `i` every path that uses ≤ i edges is correct. If a V-th round still improves something, a **negative cycle** is reachable.

**"At most K stops" (Cheapest Flights):** run only K + 1 rounds, and relax from a **copy** of the previous round's distances, so each round adds at most one edge.

```java
import java.util.*;

class BellmanFord {
    static final int INF = (int) 1e9;

    int[] shortest(int n, int[][] edges, int src) {                  // edges {u, v, w}; null = negative cycle
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[src] = 0;
        for (int i = 0; i < n - 1; i++)
            for (int[] e : edges)
                if (dist[e[0]] != INF && dist[e[0]] + e[2] < dist[e[1]]) dist[e[1]] = dist[e[0]] + e[2];
        for (int[] e : edges)
            if (dist[e[0]] != INF && dist[e[0]] + e[2] < dist[e[1]]) return null;
        return dist;
    }

    int cheapestWithinK(int n, int[][] flights, int src, int dst, int k) {
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[src] = 0;
        for (int round = 0; round <= k; round++) {                 // k stops = k + 1 edges
            int[] next = dist.clone();                             // relax from the previous round only
            for (int[] f : flights)
                if (dist[f[0]] != INF && dist[f[0]] + f[2] < next[f[1]]) next[f[1]] = dist[f[0]] + f[2];
            dist = next;
        }
        return dist[dst] == INF ? -1 : dist[dst];
    }
}
```

**Used in:** 17.4, 17.6

---

### 17C. Floyd-Warshall (All-Pairs Shortest Paths)

**What it is:** DP over intermediate nodes. After processing node `k`, `d[i][j]` is the shortest path from i to j that uses only nodes `0..k` in between: `d[i][j] = min(d[i][j], d[i][k] + d[k][j])`. **`k` must be the outer loop.** A negative value on the diagonal (`d[i][i] < 0`) means a negative cycle.

```java
class FloydWarshall {
    static final int INF = (int) 1e9;
    void run(int[][] d) {                                          // d[i][j] = weight or INF, d[i][i] = 0
        int n = d.length;
        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    if (d[i][k] != INF && d[k][j] != INF && d[i][k] + d[k][j] < d[i][j])
                        d[i][j] = d[i][k] + d[k][j];
    }
}
```

**Used in:** 17.7, 17.8

---

### 17D. Disjoint Set Union (Union-Find)

**What it is:** A structure that keeps track of which elements belong to the same group and supports two operations:
- `find(x)`: the group's representative (root).
- `union(a, b)`: merge two groups.

With **path compression** (point nodes straight at the root while finding) and **union by size/rank** (hang the smaller tree under the larger), each operation is almost O(1) (inverse Ackermann).

**When to use it:** connectivity that changes as edges are added, counting components, detecting a cycle in an undirected graph (union returns false = the endpoints were already connected), Kruskal's MST, grouping by shared attributes (accounts merge).

```java
class DSU {
    private final int[] parent, size;
    private int components;
    DSU(int n) {
        parent = new int[n]; size = new int[n]; components = n;
        for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }   // path halving
        return x;
    }
    boolean union(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;                                  // already together -> this edge makes a cycle
        if (size[a] < size[b]) { int t = a; a = b; b = t; }
        parent[b] = a;
        size[a] += size[b];
        components--;
        return true;
    }
    int components() { return components; }
    int sizeOf(int x) { return size[find(x)]; }
}
```

**Standard uses**
- **Redundant connection:** the first edge whose `union` returns false.
- **Make network connected:** needs `components − 1` cables, possible only if edges ≥ n − 1.
- **Graph valid tree:** exactly n − 1 edges and no failed union.
- **Most stones removed:** union each stone's row with its column (offset the column ids). Answer = stones − components.
- **Accounts merge:** union all emails in one account and group by root.
- **Making a large island:** label islands with DSU sizes, and for each 0 add up the sizes of distinct neighbouring roots + 1.

**Used in:** 17.10–17.14 (and 16.4)

---

### 17E. Minimum Spanning Tree: Kruskal & Prim

**What it is:** A **spanning tree** connects all V nodes with V − 1 edges and no cycles. The **MST** is the one with the smallest total weight ("connect every city at minimum cost").
- **Kruskal:** sort edges by weight and add each edge that joins two **different** components (checked with DSU). O(E log E). Best for edge lists and sparse graphs.
- **Prim:** grow one tree from a start node, always adding the cheapest edge leaving the tree (min-heap). O(E log V). The simple O(V²) array version is great for **dense/complete graphs** such as "connect all points".

```java
import java.util.*;

class MST {
    int kruskal(int n, int[][] edges) {                            // edges {u, v, w}
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));
        DSU dsu = new DSU(n);
        int total = 0, used = 0;
        for (int[] e : edges)
            if (dsu.union(e[0], e[1])) { total += e[2]; if (++used == n - 1) break; }
        return total;
    }

    // Prim, O(V^2): best for complete graphs like "Min Cost to Connect All Points"
    int minCostConnectPoints(int[][] pts) {
        int n = pts.length, total = 0;
        int[] minEdge = new int[n];
        Arrays.fill(minEdge, Integer.MAX_VALUE);
        boolean[] inTree = new boolean[n];
        minEdge[0] = 0;
        for (int iter = 0; iter < n; iter++) {
            int u = -1;
            for (int v = 0; v < n; v++)                            // cheapest node not yet in the tree
                if (!inTree[v] && (u == -1 || minEdge[v] < minEdge[u])) u = v;
            inTree[u] = true;
            total += minEdge[u];
            for (int v = 0; v < n; v++) {
                int w = Math.abs(pts[u][0] - pts[v][0]) + Math.abs(pts[u][1] - pts[v][1]);
                if (!inTree[v] && w < minEdge[v]) minEdge[v] = w;
            }
        }
        return total;
    }
}
```

**Used in:** 17.9

---

### 17F. Bridges & Articulation Points (Tarjan)

**What it is:** A **bridge** is an edge whose removal disconnects the graph ("critical connections"). An **articulation point** is such a node.

**How it works:** in one DFS, record for each node
- `tin[u]`: its discovery time.
- `low[u]`: the earliest discovery time reachable from u's subtree using **at most one back edge**.

Edge `u → v` (tree edge) is a **bridge** if `low[v] > tin[u]`: v's subtree can't reach u or anything above it without this edge.
Node `u` is an **articulation point** if `low[v] >= tin[u]` for some child v (for the root: if it has ≥ 2 DFS children).

```java
import java.util.*;

class Bridges {
    private int timer = 0;
    private int[] tin, low;
    private List<List<Integer>> adj;
    private List<List<Integer>> bridges;

    List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (List<Integer> e : connections) { adj.get(e.get(0)).add(e.get(1)); adj.get(e.get(1)).add(e.get(0)); }
        tin = new int[n]; low = new int[n];
        Arrays.fill(tin, -1);
        bridges = new ArrayList<>();
        for (int u = 0; u < n; u++) if (tin[u] == -1) dfs(u, -1);
        return bridges;
    }
    private void dfs(int u, int parent) {
        tin[u] = low[u] = timer++;
        for (int v : adj.get(u)) {
            if (v == parent) continue;
            if (tin[v] != -1) low[u] = Math.min(low[u], tin[v]);       // back edge
            else {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > tin[u]) bridges.add(Arrays.asList(u, v));
            }
        }
    }
}
```

**Used in:** 17.16

---

### 17G. Strongly Connected Components (Kosaraju)

**What it is:** In a directed graph, an SCC is a maximal group of nodes where every node can reach every other. Collapsing each SCC into one node gives a DAG.

**Kosaraju's 3 steps (O(V + E))**
1. DFS the graph and push each node onto a stack when it **finishes**.
2. **Reverse** all the edges.
3. Pop nodes from the stack. Each unvisited popped node starts a DFS on the reversed graph, and everything that DFS reaches is one SCC.

*Why:* the node that finishes last belongs to a "source" SCC. In the reversed graph that SCC becomes a sink, so the DFS can't leak into other components.

```java
import java.util.*;

class Kosaraju {
    int countSCC(int n, List<List<Integer>> adj) {
        boolean[] seen = new boolean[n];
        Deque<Integer> order = new ArrayDeque<>();
        for (int u = 0; u < n; u++) if (!seen[u]) fillOrder(u, adj, seen, order);

        List<List<Integer>> rev = new ArrayList<>();
        for (int i = 0; i < n; i++) rev.add(new ArrayList<>());
        for (int u = 0; u < n; u++) for (int v : adj.get(u)) rev.get(v).add(u);

        Arrays.fill(seen, false);
        int count = 0;
        while (!order.isEmpty()) {
            int u = order.pop();
            if (!seen[u]) { count++; mark(u, rev, seen); }
        }
        return count;
    }
    private void fillOrder(int u, List<List<Integer>> adj, boolean[] seen, Deque<Integer> order) {
        seen[u] = true;
        for (int v : adj.get(u)) if (!seen[v]) fillOrder(v, adj, seen, order);
        order.push(u);                                                // push on finish
    }
    private void mark(int u, List<List<Integer>> rev, boolean[] seen) {
        seen[u] = true;
        for (int v : rev.get(u)) if (!seen[v]) mark(v, rev, seen);
    }
}
```

**Used in:** 17.17

---
## Phase 18 — DP I: The Method, 1D & Grid DP

### 18A. What Dynamic Programming Is (and the 4-Step Method)

**What it is:** DP = **recursion + remembering answers**. It applies when a problem has:
1. **Optimal substructure:** the answer is built from answers to smaller versions of the same problem.
2. **Overlapping subproblems:** the same smaller problem is solved again and again (as in `fib`).

**Recognise it:** "count the number of ways", "minimum/maximum cost", "is it possible", with **choices** at each step, where greedy doesn't work.

**Solve every DP problem in 4 steps (don't skip any while learning)**
1. **Recursion:** define `f(state)` **in words** first ("f(i) = max money robbing houses 0..i"). Write the choices, the base cases, and how the choices combine (max/min/sum/or).
2. **Memoization (top-down):** add a cache array. Before computing, check it. After computing, store it.
3. **Tabulation (bottom-up):** fill the same table with loops, going from base cases to the final state. The order must make sure every value you read is already computed.
4. **Space optimisation:** if `dp[i]` only reads `dp[i−1]` and `dp[i−2]`, keep only those (a row instead of a table, variables instead of a row).

**Designing the state:** *"what's the minimum I need to know about the past to make the remaining decisions?"* Usually an index (plus a remaining capacity, a last choice, a count left…).
**Complexity** = (number of states) × (work per state).

```java
import java.util.*;

class DPMethod {
    // House Robber: f(i) = max(a[i] + f(i-2), f(i-1))
    int rec(int[] a, int i) {                                  // 1) recursion  O(2^n)
        if (i < 0) return 0;
        return Math.max(a[i] + rec(a, i - 2), rec(a, i - 1));
    }
    int memo(int[] a, int i, int[] dp) {                       // 2) memoization  O(n); dp filled with -1
        if (i < 0) return 0;
        if (dp[i] != -1) return dp[i];
        return dp[i] = Math.max(a[i] + memo(a, i - 2, dp), memo(a, i - 1, dp));
    }
    int tab(int[] a) {                                         // 3) tabulation; dp[i] = best of first i houses
        int[] dp = new int[a.length + 1];
        dp[1] = a[0];
        for (int i = 2; i <= a.length; i++) dp[i] = Math.max(a[i - 1] + dp[i - 2], dp[i - 1]);
        return dp[a.length];
    }
    int opt(int[] a) {                                         // 4) O(1) space
        int prev2 = 0, prev1 = 0;
        for (int x : a) { int cur = Math.max(x + prev2, prev1); prev2 = prev1; prev1 = cur; }
        return prev1;
    }
}
```

**Common mistakes:** a wrong base case; using `0` as the "not computed" marker when 0 is a valid answer (use −1); in tabulation, reading a cell that hasn't been filled yet.

---

### 18B. 1D DP Patterns

**What it is:** The state is a single index. Common shapes:

| Pattern | Recurrence | Problems |
|---|---|---|
| Count ways (steps of 1 or 2) | `f(i) = f(i−1) + f(i−2)` | Climbing stairs |
| Min cost of the last jump | `f(i) = min(f(i−1) + cost1, f(i−2) + cost2)` | Min cost stairs, Frog jump |
| Pick / skip adjacent | `f(i) = max(a[i] + f(i−2), f(i−1))` | House robber |
| Circular array | run the linear version twice: without the first element, and without the last | House robber II |
| Decode (1 or 2 characters) | `f(i) = (valid 1-digit ? f(i−1)) + (valid 2-digit ? f(i−2))` | Decode ways |
| Segment ends here | `f(i) = OR over j < i of (f(j) && s[j..i) in dict)` | Word break |
| Extra "last choice" state | `f(day, last) = max over task ≠ last of (points + f(day−1, task))` | Ninja / Geek's training |

```java
import java.util.*;

class OneDDP {
    int frogJump(int[] h) {                                    // min energy, jump 1 or 2
        int prev2 = 0, prev1 = 0;
        for (int i = 1; i < h.length; i++) {
            int one = prev1 + Math.abs(h[i] - h[i - 1]);
            int two = (i > 1) ? prev2 + Math.abs(h[i] - h[i - 2]) : Integer.MAX_VALUE;
            prev2 = prev1;
            prev1 = Math.min(one, two);
        }
        return prev1;
    }

    int numDecodings(String s) {
        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            if (s.charAt(i - 1) != '0') dp[i] += dp[i - 1];
            if (i > 1) {
                int two = Integer.parseInt(s.substring(i - 2, i));
                if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
            }
        }
        return dp[n];
    }

    boolean wordBreak(String s, List<String> words) {
        Set<String> dict = new HashSet<>(words);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;                                          // the empty prefix can always be made
        for (int i = 1; i <= s.length(); i++)
            for (int j = 0; j < i && !dp[i]; j++)
                dp[i] = dp[j] && dict.contains(s.substring(j, i));
        return dp[s.length()];
    }

    int ninjaTraining(int[][] points) {                        // points[day][task], 3 tasks
        int[] prev = new int[4];                               // prev[last] = best with 'last' banned (3 = none)
        for (int[] day : points) {
            int[] cur = new int[4];
            for (int last = 0; last < 4; last++)
                for (int task = 0; task < 3; task++)
                    if (task != last) cur[last] = Math.max(cur[last], day[task] + prev[task]);
            prev = cur;
        }
        return prev[3];
    }
}
```

**Used in:** 18.1–18.8

---

### 18C. Grid DP

**What it is:** The state is a cell `(r, c)`, and the value depends on the cells you can **arrive from** (usually up and left).
- **Unique paths:** `dp[r][c] = dp[r−1][c] + dp[r][c−1]`; an obstacle cell = 0.
- **Min path sum:** `dp[r][c] = grid[r][c] + min(up, left)`.
- **Triangle:** go **bottom-up**, `dp[c] = tri[r][c] + min(dp[c], dp[c+1])`, and the answer is `dp[0]`. There's no special case for edges.
- **Falling path:** each cell can come from up-left, up, or up-right.
- **Maximal square:** `dp[r][c] = 1 + min(up, left, up-left)` when the cell is '1'.
- **Space:** a single 1D row is enough, because `dp[c]` still holds "up" and `dp[c−1]` is already "left".

```java
import java.util.*;

class GridDP {
    int minPathSum(int[][] g) {
        int C = g[0].length;
        int[] dp = new int[C];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        for (int[] row : g)
            for (int c = 0; c < C; c++)
                dp[c] = row[c] + (c == 0 ? dp[0] : Math.min(dp[c], dp[c - 1]));   // dp[c] = up, dp[c-1] = left
        return dp[C - 1];
    }

    int minimumTotal(List<List<Integer>> tri) {                    // bottom-up triangle
        int n = tri.size();
        int[] dp = new int[n + 1];
        for (int r = n - 1; r >= 0; r--)
            for (int c = 0; c <= r; c++)
                dp[c] = tri.get(r).get(c) + Math.min(dp[c], dp[c + 1]);
        return dp[0];
    }

    int maximalSquare(char[][] m) {
        int R = m.length, C = m[0].length, best = 0;
        int[][] dp = new int[R + 1][C + 1];
        for (int r = 1; r <= R; r++)
            for (int c = 1; c <= C; c++)
                if (m[r - 1][c - 1] == '1') {
                    dp[r][c] = 1 + Math.min(dp[r - 1][c - 1], Math.min(dp[r - 1][c], dp[r][c - 1]));
                    best = Math.max(best, dp[r][c]);
                }
        return best * best;
    }
}
```

**Used in:** 18.9–18.14

---

### 18D. 3D DP (Two Walkers at Once)

**What it is:** When **two** things move together (two robots collecting cherries), the state needs both positions: `dp[row][c1][c2]`. Both robots move down one row per step, so the row is shared. There are 3 × 3 = 9 move combinations per step. If both stand on the same cell, count its cherries once.

```java
import java.util.*;

class CherryPickupII {
    int cherryPickup(int[][] g) {
        int R = g.length, C = g[0].length;
        int[][] dp = new int[C][C];                                // dp[c1][c2] for the row below
        for (int r = R - 1; r >= 0; r--) {
            int[][] cur = new int[C][C];
            for (int c1 = 0; c1 < C; c1++)
                for (int c2 = 0; c2 < C; c2++) {
                    int here = g[r][c1] + (c1 == c2 ? 0 : g[r][c2]);
                    int best = 0;
                    if (r + 1 < R)
                        for (int d1 = -1; d1 <= 1; d1++)
                            for (int d2 = -1; d2 <= 1; d2++) {
                                int n1 = c1 + d1, n2 = c2 + d2;
                                if (n1 >= 0 && n1 < C && n2 >= 0 && n2 < C) best = Math.max(best, dp[n1][n2]);
                            }
                    cur[c1][c2] = here + best;
                }
            dp = cur;
        }
        return dp[0][C - 1];                                       // robots start at the two top corners
    }
}
```

**Used in:** 18.15

---

## Phase 19 — DP II: Subsets & Knapsack

### 19A. Subset Sum (the boolean knapsack)

**What it is:** `dp[t]` = "can some subset make sum t?" For each number `x`, `dp[t] |= dp[t − x]`. Loop `t` **downwards** so each number is used at most once.

**Reductions to learn by heart**
- **Partition into two equal halves:** subset sum to `total / 2` (impossible if total is odd).
- **Minimum difference between two subsets / Last Stone Weight II:** find the largest reachable `s ≤ total/2`; the answer is `total − 2s`.
- **Count subsets with difference D / Target Sum (+/−):** if `S1 − S2 = D` and `S1 + S2 = total`, then `S1 = (total + D) / 2`. So count the subsets that sum to that (invalid if it's negative or odd).

```java
class SubsetSum {
    boolean canMake(int[] a, int target) {
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int x : a)
            for (int t = target; t >= x; t--) dp[t] |= dp[t - x];    // downward = each item once
        return dp[target];
    }

    int countSubsets(int[] a, int target) {                          // handles zeros correctly
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int x : a)
            for (int t = target; t >= x; t--) dp[t] += dp[t - x];
        return dp[target];
    }

    int findTargetSumWays(int[] nums, int target) {
        int total = 0;
        for (int x : nums) total += x;
        if (Math.abs(target) > total || (total + target) % 2 != 0) return 0;
        return countSubsets(nums, (total + target) / 2);
    }
}
```

**Used in:** 19.1, 19.2, 19.3, 19.4, 19.5

---

### 19B. 0/1 Knapsack

**What it is:** Items with a weight and a value; each can be taken **at most once**; maximise value within capacity W.
**State:** `dp[i][c]` = best value using the first i items with capacity c.
**Choice:** skip item i → `dp[i−1][c]`; take it (if it fits) → `val[i] + dp[i−1][c − wt[i]]`.
**1D form:** loop the capacity **from W down to wt[i]**, so `dp[c − wt]` still holds the previous item's row (an item can't be taken twice).

```java
class Knapsack01 {
    int knapsack(int[] wt, int[] val, int W) {
        int[] dp = new int[W + 1];
        for (int i = 0; i < wt.length; i++)
            for (int c = W; c >= wt[i]; c--)
                dp[c] = Math.max(dp[c], val[i] + dp[c - wt[i]]);
        return dp[W];
    }
}
```

**Complexity:** O(n · W) time, O(W) space.
**Used in:** 19.6

---

### 19C. Unbounded Knapsack

**What it is:** Same as 0/1, but each item can be used **any number of times**. The only change is to loop the capacity **upwards**, so `dp[c − wt]` may already include this item.
- **Coin change (min coins):** `dp[a] = min(dp[a], dp[a − coin] + 1)`, with an "infinity" initial value.
- **Rod cutting:** a piece of length `L` is an item with weight `L` and value `price[L]`.

```java
import java.util.*;

class UnboundedKnapsack {
    int unbounded(int[] wt, int[] val, int W) {
        int[] dp = new int[W + 1];
        for (int i = 0; i < wt.length; i++)
            for (int c = wt[i]; c <= W; c++)                          // upward = reuse allowed
                dp[c] = Math.max(dp[c], val[i] + dp[c - wt[i]]);
        return dp[W];
    }

    int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);                                 // "infinity"
        dp[0] = 0;
        for (int coin : coins)
            for (int a = coin; a <= amount; a++)
                dp[a] = Math.min(dp[a], dp[a - coin] + 1);
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```

**Used in:** 19.7, 19.9, 19.10

---

### 19D. Counting: Combinations vs Permutations

**What it is:** When counting the ways to reach an amount, **the loop order decides what gets counted**.
- **Coins outer, amount inner → combinations** (`{1,2}` and `{2,1}` count once), because each coin's contributions are added in a fixed order. *Coin Change II.*
- **Amount outer, coins inner → permutations** (order matters), because every coin can be the "last" one for each amount. *Combination Sum IV.*

```java
class CountWays {
    int combinations(int amount, int[] coins) {                    // Coin Change II
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int coin : coins)
            for (int a = coin; a <= amount; a++) dp[a] += dp[a - coin];
        return dp[amount];
    }

    int permutations(int[] nums, int target) {                     // Combination Sum IV
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int t = 1; t <= target; t++)
            for (int x : nums) if (x <= t) dp[t] += dp[t - x];
        return dp[target];
    }
}
```

**Used in:** 19.8, 19.11

---

## Phase 20 — DP III: Strings & LIS

### 20A. LCS and Its Family

**What it is:** **Longest Common Subsequence** (in order, not necessarily contiguous) of strings a and b.
`dp[i][j]` = LCS of prefixes `a[0..i)` and `b[0..j)`:
- `a[i−1] == b[j−1]` → `1 + dp[i−1][j−1]` (use both characters).
- otherwise → `max(dp[i−1][j], dp[i][j−1])` (drop one of them).

**Problems that reduce to LCS**

| Problem | Formula |
|---|---|
| Longest palindromic subsequence | `LCS(s, reverse(s))` |
| Min insertions to make s a palindrome | `n − LPS(s)` |
| Min deletions to make two strings equal | `n + m − 2·LCS` |
| Shortest common supersequence length | `n + m − LCS` (build the string by walking the table backwards) |
| Longest common **substring** | `a[i−1] == b[j−1] ? 1 + dp[i−1][j−1] : 0`, and track the max |

```java
class LCSFamily {
    int[][] lcsTable(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                dp[i][j] = (a.charAt(i - 1) == b.charAt(j - 1))
                        ? 1 + dp[i - 1][j - 1]
                        : Math.max(dp[i - 1][j], dp[i][j - 1]);
        return dp;
    }
    int lcs(String a, String b) { return lcsTable(a, b)[a.length()][b.length()]; }

    int longestPalindromeSubseq(String s) { return lcs(s, new StringBuilder(s).reverse().toString()); }

    String shortestCommonSupersequence(String a, String b) {
        int[][] dp = lcsTable(a, b);
        StringBuilder sb = new StringBuilder();
        int i = a.length(), j = b.length();
        while (i > 0 && j > 0) {
            if (a.charAt(i - 1) == b.charAt(j - 1)) { sb.append(a.charAt(i - 1)); i--; j--; }   // shared char once
            else if (dp[i - 1][j] >= dp[i][j - 1]) sb.append(a.charAt(--i));
            else sb.append(b.charAt(--j));
        }
        while (i > 0) sb.append(a.charAt(--i));
        while (j > 0) sb.append(b.charAt(--j));
        return sb.reverse().toString();
    }
}
```

**Used in:** 20.1, 20.2, 20.3, 20.4, 20.5

---

### 20B. Edit Distance & Distinct Subsequences

**Edit distance, what it is:** the minimum number of insert/delete/replace operations to turn a into b.
- Match → `dp[i−1][j−1]` (free).
- Otherwise → `1 + min(replace dp[i−1][j−1], delete dp[i−1][j], insert dp[i][j−1])`.
- Base cases: `dp[i][0] = i` (delete everything), `dp[0][j] = j` (insert everything).

**Distinct subsequences, what it is:** how many ways t appears as a subsequence of s.
- `dp[i][j] = dp[i−1][j]` (don't use `s[i−1]`) `+ (s[i−1] == t[j−1] ? dp[i−1][j−1] : 0)` (use it).
- Base case: `dp[i][0] = 1` (the empty t appears once).

```java
class EditFamily {
    int minDistance(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) dp[i][0] = i;
        for (int j = 0; j <= m; j++) dp[0][j] = j;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                dp[i][j] = (a.charAt(i - 1) == b.charAt(j - 1))
                        ? dp[i - 1][j - 1]
                        : 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
        return dp[n][m];
    }

    int numDistinct(String s, String t) {
        int m = t.length();
        long[] dp = new long[m + 1];
        dp[0] = 1;
        for (int i = 1; i <= s.length(); i++)
            for (int j = m; j >= 1; j--)                              // backwards: dp[j-1] is still the old row
                if (s.charAt(i - 1) == t.charAt(j - 1)) dp[j] += dp[j - 1];
        return (int) dp[m];
    }
}
```

**Used in:** 20.6, 20.7

---

### 20C. Wildcard & Regex Matching

**What it is:** `dp[i][j]` = "does `s[0..i)` match `p[0..j)`?"

**Wildcard** (`?` = any one char, `*` = any sequence)
- `p[j−1] == '*'` → `dp[i][j−1]` (`*` matches nothing) **or** `dp[i−1][j]` (`*` swallows one more char of s).
- `?` or an equal char → `dp[i−1][j−1]`.
- Base case: `dp[0][j]` is true only while p is all `*`s.

**Regex** (`.` = any one char, `x*` = zero or more of x)
- `p[j−1] == '*'` → `dp[i][j−2]` (use zero x's) **or** (`s[i−1]` matches `p[j−2]` **and** `dp[i−1][j]`) (use one more x).
- `.` or an equal char → `dp[i−1][j−1]`.

```java
class PatternDP {
    boolean wildcard(String s, String p) {
        int n = s.length(), m = p.length();
        boolean[][] dp = new boolean[n + 1][m + 1];
        dp[0][0] = true;
        for (int j = 1; j <= m; j++) dp[0][j] = dp[0][j - 1] && p.charAt(j - 1) == '*';
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++) {
                char pc = p.charAt(j - 1);
                if (pc == '*') dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                else if (pc == '?' || pc == s.charAt(i - 1)) dp[i][j] = dp[i - 1][j - 1];
            }
        return dp[n][m];
    }

    boolean regex(String s, String p) {
        int n = s.length(), m = p.length();
        boolean[][] dp = new boolean[n + 1][m + 1];
        dp[0][0] = true;
        for (int j = 2; j <= m; j++) dp[0][j] = p.charAt(j - 1) == '*' && dp[0][j - 2];
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++) {
                char pc = p.charAt(j - 1);
                if (pc == '*') {
                    char prev = p.charAt(j - 2);
                    dp[i][j] = dp[i][j - 2] || ((prev == '.' || prev == s.charAt(i - 1)) && dp[i - 1][j]);
                } else if (pc == '.' || pc == s.charAt(i - 1)) dp[i][j] = dp[i - 1][j - 1];
            }
        return dp[n][m];
    }
}
```

**Used in:** 20.8, 20.9

---

### 20D. Longest Increasing Subsequence (O(n²) and O(n log n))

**O(n²) DP, what it is:** `dp[i]` = length of the LIS **ending at i** = `1 + max(dp[j])` over `j < i` with `a[j] < a[i]`. It's easy to extend:
- **Print the LIS / largest divisible subset:** store `parent[i] = j` for the best j and walk back from the best end.
- **Count the LISs:** `cnt[i]` adds `cnt[j]` when `dp[j] + 1 == dp[i]`, and resets to `cnt[j]` when it's bigger.
- **Longest string chain:** sort the words by length; a "smaller" item is a word with one character removed.

**O(n log n), what it is:** keep `tails[k]` = the **smallest possible tail** of any increasing subsequence of length k + 1. For each x, binary search the first `tails[k] ≥ x` and replace it (or append x). The length of `tails` is the LIS length. (`tails` isn't the actual subsequence.)

**Russian doll envelopes:** sort by width ascending and, **for equal widths, height descending** (so two envelopes with the same width can't nest), then run the LIS on the heights.

```java
import java.util.*;

class LIS {
    int lengthOfLISQuadratic(int[] a) {
        int n = a.length, best = 0;
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) if (a[j] < a[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
            best = Math.max(best, dp[i]);
        }
        return best;
    }

    int lengthOfLIS(int[] a) {                                        // O(n log n)
        int[] tails = new int[a.length];
        int size = 0;
        for (int x : a) {
            int lo = 0, hi = size;
            while (lo < hi) {
                int mid = (lo + hi) / 2;
                if (tails[mid] < x) lo = mid + 1; else hi = mid;
            }
            tails[lo] = x;
            if (lo == size) size++;
        }
        return size;
    }

    List<Integer> largestDivisibleSubset(int[] a) {                   // LIS + parent pointers
        Arrays.sort(a);
        int n = a.length, bestEnd = 0;
        int[] dp = new int[n], parent = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = 1; parent[i] = -1;
            for (int j = 0; j < i; j++)
                if (a[i] % a[j] == 0 && dp[j] + 1 > dp[i]) { dp[i] = dp[j] + 1; parent[i] = j; }
            if (dp[i] > dp[bestEnd]) bestEnd = i;
        }
        LinkedList<Integer> res = new LinkedList<>();
        for (int i = bestEnd; i != -1; i = parent[i]) res.addFirst(a[i]);
        return res;
    }
}
```

**Used in:** 20.10–20.14

---

## Phase 21 — DP IV: Stocks, Interval & Partition DP

### 21A. Stock Problems as State-Machine DP

**What it is:** Each day you're in a **state** (holding a share or not, plus how many transactions are left or whether you're in a cooldown). Each state either stays or moves to another by buying or selling. Track the best profit in every state, day by day.

| Problem | States | Transitions |
|---|---|---|
| I (one transaction) | min price so far | Kadane-style, see 1B |
| II (unlimited) | hold, free | `hold = max(hold, free − p)`, `free = max(free, hold + p)` |
| + fee | same | subtract the fee when selling |
| + cooldown | hold, sold, rest | `sold = hold + p`, `rest = max(rest, prevSold)`, `hold = max(hold, rest − p)` |
| III / IV (at most k) | `buy[j]`, `sell[j]` for j = 1..k | `buy[j] = max(buy[j], sell[j−1] − p)`, `sell[j] = max(sell[j], buy[j] + p)` |

```java
import java.util.*;

class StockDP {
    int maxProfitCooldown(int[] prices) {
        int hold = Integer.MIN_VALUE / 2, sold = 0, rest = 0;
        for (int p : prices) {
            int prevSold = sold;
            sold = hold + p;                                     // sell today
            hold = Math.max(hold, rest - p);                     // buy only from rest (not right after selling)
            rest = Math.max(rest, prevSold);                     // cooldown ends
        }
        return Math.max(sold, rest);
    }

    int maxProfitK(int k, int[] prices) {                        // III is k = 2
        int[] buy = new int[k + 1], sell = new int[k + 1];
        Arrays.fill(buy, Integer.MIN_VALUE / 2);
        for (int p : prices)
            for (int j = 1; j <= k; j++) {
                buy[j] = Math.max(buy[j], sell[j - 1] - p);
                sell[j] = Math.max(sell[j], buy[j] + p);
            }
        return sell[k];
    }

    int maxProfitFee(int[] prices, int fee) {                    // II is fee = 0
        long hold = Long.MIN_VALUE / 2, free = 0;
        for (int p : prices) {
            long nh = Math.max(hold, free - p);
            free = Math.max(free, hold + p - fee);
            hold = nh;
        }
        return (int) free;
    }
}
```

**Used in:** 21.1–21.5

---

### 21B. Interval (Partition) DP

**What it is:** `dp[i][j]` = the best answer for the **segment i..j**, found by trying every **split point k** inside it and combining `dp[i][k]` and `dp[k][j]` with the cost of that split. Fill the table by **increasing segment length**, so the smaller segments are always ready. Usually O(n³).

**The key question:** what does k represent?
- **Matrix chain multiplication:** k = where the **last** multiplication happens: `dp[i][k] + dp[k+1][j] + dims[i−1]·dims[k]·dims[j]`.
- **Burst balloons:** k = the balloon burst **last** in (i, j). Its neighbours at that moment are i and j: `dp[i][k] + dp[k][j] + nums[i]·nums[k]·nums[j]`. (Thinking "last" instead of "first" is what makes the two subproblems independent.)
- **Minimum cost to cut a stick:** add 0 and n to the sorted cuts. `dp[i][j] = (cuts[j] − cuts[i]) + min over k of (dp[i][k] + dp[k][j])`.

```java
import java.util.*;

class IntervalDP {
    int matrixChain(int[] dims) {                                // matrix i is dims[i-1] x dims[i]
        int n = dims.length;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++)
            for (int i = 1; i + len - 1 < n; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++)
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]);
            }
        return dp[1][n - 1];
    }

    int maxCoins(int[] nums) {                                   // Burst Balloons
        int n = nums.length + 2;
        int[] a = new int[n];
        a[0] = a[n - 1] = 1;
        for (int i = 0; i < nums.length; i++) a[i + 1] = nums[i];
        int[][] dp = new int[n][n];                              // dp[i][j] = best for the open interval (i, j)
        for (int len = 2; len < n; len++)
            for (int i = 0; i + len < n; i++) {
                int j = i + len;
                for (int k = i + 1; k < j; k++)
                    dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + a[i] * a[k] * a[j]);
            }
        return dp[0][n - 1];
    }

    int minCostCutStick(int n, int[] cuts) {
        int m = cuts.length + 2;
        int[] c = new int[m];
        c[m - 1] = n;
        for (int i = 0; i < cuts.length; i++) c[i + 1] = cuts[i];
        Arrays.sort(c);
        int[][] dp = new int[m][m];
        for (int len = 2; len < m; len++)
            for (int i = 0; i + len < m; i++) {
                int j = i + len;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i + 1; k < j; k++) dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
                dp[i][j] += c[j] - c[i];
            }
        return dp[0][m - 1];
    }
}
```

**Used in:** 21.6, 21.7, 21.8

---

### 21C. Front Partition DP

**What it is:** Cut an array/string into pieces, left to right. `dp[i]` = the best answer for the suffix starting at i (or the prefix ending at i). Try every end `j` of the **first** piece: `dp[i] = best over j of (cost of piece i..j + dp[j+1])`. Usually O(n²).
- **Palindrome partitioning II (min cuts):** a piece is allowed only if it's a palindrome. Precompute `isPal[i][j]` so each check is O(1).
- **Partition array for maximum sum:** a piece of length ≤ k is worth `max(piece) × length`.

```java
class FrontPartition {
    int minCut(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i < 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];                                  // dp[i] = min pieces for s[i..]
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = Integer.MAX_VALUE;
            for (int j = i; j < n; j++) if (pal[i][j]) dp[i] = Math.min(dp[i], 1 + dp[j + 1]);
        }
        return dp[0] - 1;                                           // cuts = pieces - 1
    }

    int maxSumAfterPartitioning(int[] a, int k) {
        int n = a.length;
        int[] dp = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            int mx = 0;
            for (int j = i; j < Math.min(n, i + k); j++) {
                mx = Math.max(mx, a[j]);
                dp[i] = Math.max(dp[i], mx * (j - i + 1) + dp[j + 1]);
            }
        }
        return dp[0];
    }
}
```

**Used in:** 21.9, 21.10 (and 9.11 is the backtracking version of 21.9)

---

### 21D. DP + Binary Search (Weighted Interval Scheduling)

**What it is:** Sort the jobs by end time. `dp[i]` = best profit using the first i jobs = max of
- skipping job i → `dp[i−1]`,
- taking job i → `profit[i] + dp[p]`, where `p` = the number of jobs that end ≤ `start[i]` (found by **binary search** on the sorted end times).

O(n log n) total.

```java
import java.util.*;

class JobScheduling {
    int jobScheduling(int[] start, int[] end, int[] profit) {
        int n = start.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> Integer.compare(end[a], end[b]));
        int[] ends = new int[n];
        for (int i = 0; i < n; i++) ends[i] = end[idx[i]];
        int[] dp = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            int job = idx[i - 1];
            int lo = 0, hi = i - 1;                                 // count of earlier jobs ending <= start
            while (lo < hi) {
                int mid = (lo + hi) / 2;
                if (ends[mid] <= start[job]) lo = mid + 1; else hi = mid;
            }
            dp[i] = Math.max(dp[i - 1], profit[job] + dp[lo]);
        }
        return dp[n];
    }
}
```

**Used in:** 21.11

---

## Phase 22 — Bit Manipulation & Trie

### 22A. Bit Operations

**What it is:** Integers are stored in binary (Java `int` = 32-bit two's complement, so `−x = ~x + 1`). Bit operations are O(1) and replace loops or extra arrays.

| Operation | Code | Meaning |
|---|---|---|
| Check bit k | `(x >> k) & 1` | 1 if set |
| Set / clear / toggle bit k | `x \| (1 << k)`, `x & ~(1 << k)`, `x ^ (1 << k)` | |
| Is odd | `(x & 1) == 1` | |
| Clear the lowest set bit | `x & (x − 1)` | Brian Kernighan: count set bits in O(set bits) |
| Isolate the lowest set bit | `x & (−x)` | used in Fenwick trees and Single Number III |
| Power of two | `x > 0 && (x & (x − 1)) == 0` | exactly one bit set |
| Unsigned right shift | `x >>> 1` | fills with 0 (use it for bit reversal and negative numbers) |
| Popcount | `Integer.bitCount(x)` | built-in |

**XOR facts:** `a ^ a = 0`, `a ^ 0 = a`, and it's commutative, so pairs cancel out.
- **Single Number:** XOR everything.
- **Single Number II (others appear 3 times):** for each bit position, count how many numbers have it set; the single number has that bit if `count % 3 == 1`.
- **Single Number III (two singles):** XOR everything to get `a ^ b`, take its lowest set bit (where a and b differ), split the numbers into two groups by that bit, and XOR each group.
- **Sum without +:** `a ^ b` is the sum without carries and `(a & b) << 1` is the carry. Repeat until the carry is 0.
- **Counting bits 0..n:** `bits[i] = bits[i >> 1] + (i & 1)`.

```java
class Bits {
    int countSetBits(int x) { int c = 0; while (x != 0) { x &= x - 1; c++; } return c; }

    int singleNumberII(int[] a) {
        int res = 0;
        for (int b = 0; b < 32; b++) {
            int cnt = 0;
            for (int x : a) cnt += (x >> b) & 1;
            if (cnt % 3 != 0) res |= (1 << b);
        }
        return res;
    }

    int[] singleNumberIII(int[] a) {
        int xor = 0;
        for (int x : a) xor ^= x;
        int diff = xor & (-xor);                                // a bit where the two singles differ
        int g1 = 0;
        for (int x : a) if ((x & diff) != 0) g1 ^= x;
        return new int[]{g1, xor ^ g1};
    }

    int getSum(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }

    int reverseBits(int n) {
        int res = 0;
        for (int i = 0; i < 32; i++) { res = (res << 1) | (n & 1); n >>>= 1; }
        return res;
    }
}
```

**Used in:** 22.1–22.9 (and 2.6, 2.7)

---

### 22B. Bitmask Subsets & Bitmask DP

**What it is:** A subset of n items (n ≤ ~20) can be stored as an integer `mask`: bit i set means item i is included.
- **Enumerate all subsets:** `for mask in 0 .. (1<<n) − 1`.
- **A set of letters as a mask:** a 26-bit int per word, where `(m1 & m2) == 0` means the words share no letters (Maximum Product of Word Lengths).
- **Bitmask DP:** `dp[mask]` = the best answer using exactly the items in `mask`. O(2ⁿ · n).
  *Partition to K equal subsets:* `dp[mask]` = the sum of the current, still-filling bucket (−1 if unreachable). Only add item i if it still fits in the current bucket.

```java
import java.util.*;

class Bitmask {
    List<List<Integer>> allSubsets(int[] a) {
        List<List<Integer>> res = new ArrayList<>();
        for (int mask = 0; mask < (1 << a.length); mask++) {
            List<Integer> cur = new ArrayList<>();
            for (int i = 0; i < a.length; i++) if ((mask >> i & 1) == 1) cur.add(a[i]);
            res.add(cur);
        }
        return res;
    }

    boolean canPartitionKSubsets(int[] a, int k) {
        int total = 0;
        for (int x : a) total += x;
        if (total % k != 0) return false;
        int target = total / k, n = a.length;
        int[] dp = new int[1 << n];
        Arrays.fill(dp, -1);
        dp[0] = 0;
        for (int mask = 0; mask < (1 << n); mask++) {
            if (dp[mask] == -1) continue;
            for (int i = 0; i < n; i++) {
                int next = mask | (1 << i);
                if (next != mask && dp[next] == -1 && dp[mask] + a[i] <= target)
                    dp[next] = (dp[mask] + a[i]) % target;          // bucket full -> start a new one at 0
            }
        }
        return dp[(1 << n) - 1] == 0;
    }
}
```

**Used in:** 22.10, 22.11

---

### 22C. Trie (Prefix Tree)

**What it is:** A tree where each edge is a character, so each path from the root spells a prefix. A node marks `end = true` if a whole word ends there. Insert/search/startsWith are O(L) for a word of length L, **no matter how many words are stored**.

**When to use it:** many prefix queries, autocomplete, dictionaries with wildcards, and searching many words at once in a grid.
- **Wildcard `.` search:** at a `.`, try every child with DFS.
- **Longest word built one character at a time:** DFS only through nodes where `end == true`.
- **Word Search II:** put all the words in a trie, then DFS the grid **once**, walking the trie alongside. Stop as soon as the current prefix isn't in the trie. Store the word at its end node, and clear it after it's found to avoid duplicates.

```java
import java.util.*;

class TrieNode { TrieNode[] next = new TrieNode[26]; boolean end; String word; }

class Trie {
    final TrieNode root = new TrieNode();

    void insert(String w) {
        TrieNode cur = root;
        for (char ch : w.toCharArray()) {
            int i = ch - 'a';
            if (cur.next[i] == null) cur.next[i] = new TrieNode();
            cur = cur.next[i];
        }
        cur.end = true;
        cur.word = w;
    }
    boolean search(String w) { TrieNode n = walk(w); return n != null && n.end; }
    boolean startsWith(String p) { return walk(p) != null; }
    private TrieNode walk(String s) {
        TrieNode cur = root;
        for (char ch : s.toCharArray()) {
            cur = cur.next[ch - 'a'];
            if (cur == null) return null;
        }
        return cur;
    }

    boolean searchWithDots(String w) { return dfs(w, 0, root); }
    private boolean dfs(String w, int i, TrieNode node) {
        if (node == null) return false;
        if (i == w.length()) return node.end;
        char ch = w.charAt(i);
        if (ch != '.') return dfs(w, i + 1, node.next[ch - 'a']);
        for (TrieNode child : node.next) if (dfs(w, i + 1, child)) return true;
        return false;
    }
}

class WordSearchII {
    List<String> findWords(char[][] board, String[] words) {
        Trie t = new Trie();
        for (String w : words) t.insert(w);
        List<String> res = new ArrayList<>();
        for (int r = 0; r < board.length; r++)
            for (int c = 0; c < board[0].length; c++) dfs(board, r, c, t.root, res);
        return res;
    }
    private void dfs(char[][] b, int r, int c, TrieNode node, List<String> res) {
        if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] == '#') return;
        TrieNode nxt = node.next[b[r][c] - 'a'];
        if (nxt == null) return;                                    // no word has this prefix: prune
        if (nxt.word != null) { res.add(nxt.word); nxt.word = null; }
        char saved = b[r][c];
        b[r][c] = '#';
        dfs(b, r + 1, c, nxt, res); dfs(b, r - 1, c, nxt, res);
        dfs(b, r, c + 1, nxt, res); dfs(b, r, c - 1, nxt, res);
        b[r][c] = saved;
    }
}
```

**Used in:** 22.12, 22.13, 22.14, 22.16

---

### 22D. Binary Trie for Maximum XOR

**What it is:** Insert each number's bits from the **most significant** (bit 30) down into a trie with two children (0/1). To find the best XOR partner for `x`, walk down and at each bit **try the opposite bit** of x (that gives a 1 in the XOR). Take the same bit only if the opposite doesn't exist. O(n · 31).

```java
class MaxXor {
    private static class Node { Node[] child = new Node[2]; }

    int findMaximumXOR(int[] nums) {
        Node root = new Node();
        for (int x : nums) {                                       // insert all numbers
            Node cur = root;
            for (int b = 30; b >= 0; b--) {
                int bit = (x >> b) & 1;
                if (cur.child[bit] == null) cur.child[bit] = new Node();
                cur = cur.child[bit];
            }
        }
        int best = 0;
        for (int x : nums) {                                       // query each number
            Node cur = root;
            int val = 0;
            for (int b = 30; b >= 0; b--) {
                int want = ((x >> b) & 1) ^ 1;                     // opposite bit
                if (cur.child[want] != null) { val |= (1 << b); cur = cur.child[want]; }
                else cur = cur.child[want ^ 1];
            }
            best = Math.max(best, val);
        }
        return best;
    }
}
```

**Used in:** 22.15

---

## Phase 23 — Segment Tree, Fenwick Tree & Design

### 23A. Segment Tree

**What it is:** A binary tree built over the array. Each node stores the answer (sum/min/max/gcd) for a range; the root covers `[0, n−1]` and the leaves are single elements. Store it in an array of size `4n` (children of node `i` are `2i` and `2i+1`).
- **Build:** O(n). **Point update:** O(log n) (update the leaf, recompute its ancestors). **Range query:** O(log n) (combine the nodes fully inside the query range).

**When to use it:** **range queries mixed with updates**. With no updates, a prefix sum or sparse table is enough. (Range *updates* need "lazy propagation", which is rarely asked of freshers.)

```java
class SegmentTree {                                                // range sum; change + to Math.min for RMQ
    private final int n;
    private final int[] tree;
    SegmentTree(int[] a) { n = a.length; tree = new int[4 * n]; build(a, 1, 0, n - 1); }
    private void build(int[] a, int node, int l, int r) {
        if (l == r) { tree[node] = a[l]; return; }
        int m = (l + r) / 2;
        build(a, 2 * node, l, m);
        build(a, 2 * node + 1, m + 1, r);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
    void update(int idx, int val) { update(1, 0, n - 1, idx, val); }
    private void update(int node, int l, int r, int idx, int val) {
        if (l == r) { tree[node] = val; return; }
        int m = (l + r) / 2;
        if (idx <= m) update(2 * node, l, m, idx, val); else update(2 * node + 1, m + 1, r, idx, val);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
    int query(int ql, int qr) { return query(1, 0, n - 1, ql, qr); }
    private int query(int node, int l, int r, int ql, int qr) {
        if (qr < l || r < ql) return 0;                           // no overlap (use MAX_VALUE for min)
        if (ql <= l && r <= qr) return tree[node];                // full overlap
        int m = (l + r) / 2;
        return query(2 * node, l, m, ql, qr) + query(2 * node + 1, m + 1, r, ql, qr);
    }
}
```

**Used in:** 23.2, 23.3

---

### 23B. Fenwick Tree (Binary Indexed Tree)

**What it is:** A compact array (1-indexed) where `bit[i]` stores the sum of a block of length `i & −i` ending at i. **Prefix sum** and **point update** are both O(log n), with far less code than a segment tree.
- Update: `for (i; i ≤ n; i += i & −i) bit[i] += delta`.
- Prefix sum: `for (i; i > 0; i −= i & −i) s += bit[i]`.
- Range sum `[l, r]` = `prefix(r) − prefix(l − 1)`.

**Coordinate compression:** when the values are huge or negative (up to 10⁹) but there are only n of them, sort the distinct values and replace each value with its rank (1..n). Then use the rank as the BIT index.
**Count of smaller numbers after self:** scan **right to left**. For each value, `query(rank − 1)` = how many smaller values have already been seen to its right; then `add(rank, 1)`.

```java
import java.util.*;

class Fenwick {
    private final int[] bit;
    Fenwick(int n) { bit = new int[n + 1]; }
    void add(int i, int delta) { for (; i < bit.length; i += i & -i) bit[i] += delta; }   // 1-indexed
    int prefix(int i) { int s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; }
    int range(int l, int r) { return prefix(r) - prefix(l - 1); }
}

class CountSmallerAfterSelf {
    List<Integer> countSmaller(int[] a) {
        int[] sorted = Arrays.stream(a).distinct().sorted().toArray();   // coordinate compression
        Fenwick fw = new Fenwick(sorted.length);
        Integer[] res = new Integer[a.length];
        for (int i = a.length - 1; i >= 0; i--) {
            int rank = Arrays.binarySearch(sorted, a[i]) + 1;            // 1..m
            res[i] = fw.prefix(rank - 1);                                // strictly smaller, already to the right
            fw.add(rank, 1);
        }
        return Arrays.asList(res);
    }
}
```

**Used in:** 23.2, 23.5

---

### 23C. Merge-Sort Counting (Inversions, Reverse Pairs)

**What it is:** Count pairs `i < j` with a condition like `a[i] > a[j]`. During merge sort, when the left and right halves are each sorted, count the pairs **across** the halves with two pointers, then merge. O(n log n).
- **Inversions:** while merging, when `right[j] < left[i]`, **all** remaining left elements (`mid − i + 1` of them) are greater than `right[j]`.
- **Reverse pairs (`a[i] > 2·a[j]`):** count with a separate two-pointer pass **before** merging (the condition differs from the merge order). Use `long` for `2·a[j]`.

```java
class MergeCount {
    long countInversions(int[] a) { return sortCount(a, 0, a.length - 1); }

    private long sortCount(int[] a, int lo, int hi) {
        if (lo >= hi) return 0;
        int mid = lo + (hi - lo) / 2;
        long count = sortCount(a, lo, mid) + sortCount(a, mid + 1, hi);
        int[] tmp = new int[hi - lo + 1];
        int i = lo, j = mid + 1, k = 0;
        while (i <= mid && j <= hi) {
            if (a[i] <= a[j]) tmp[k++] = a[i++];
            else { count += mid - i + 1; tmp[k++] = a[j++]; }       // a[i..mid] are all > a[j]
        }
        while (i <= mid) tmp[k++] = a[i++];
        while (j <= hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, 0, a, lo, tmp.length);
        return count;
    }

    int reversePairs(int[] a) { return (int) rp(a, 0, a.length - 1); }
    private long rp(int[] a, int lo, int hi) {
        if (lo >= hi) return 0;
        int mid = lo + (hi - lo) / 2;
        long count = rp(a, lo, mid) + rp(a, mid + 1, hi);
        for (int i = lo, j = mid + 1; i <= mid; i++) {              // count BEFORE merging
            while (j <= hi && (long) a[i] > 2L * a[j]) j++;
            count += j - (mid + 1);
        }
        int[] tmp = new int[hi - lo + 1];                            // then a normal merge
        int i = lo, j = mid + 1, k = 0;
        while (i <= mid && j <= hi) tmp[k++] = (a[i] <= a[j]) ? a[i++] : a[j++];
        while (i <= mid) tmp[k++] = a[i++];
        while (j <= hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, 0, a, lo, tmp.length);
        return count;
    }
}
```

**Used in:** 23.1, 23.4 (23.5 also has a merge-sort solution that tracks original indices)

---

### 23D. Data-Structure Design

**What it is:** Combine basic structures so that **every operation** reaches its target complexity. Start by listing the operations and their required cost, then pick one structure for each need.

| Design | Needs | Structure |
|---|---|---|
| **LRU cache** | O(1) get by key; O(1) move-to-front; O(1) evict the oldest | HashMap (key → node) + **doubly linked list** (recency order) |
| **LFU cache** | evict the least frequent, ties broken by least recent | key → node, freq → LinkedHashSet of keys, and track `minFreq` |
| **Insert/Delete/GetRandom O(1)** | random index; O(1) delete | ArrayList of values + HashMap (value → index). Delete = **swap with the last element**, then remove the last |
| **Time-based key-value store** | latest value at or before time t | HashMap (key → list of (time, value)); timestamps arrive increasing, so **binary search** each list |
| **HashMap / HashSet from scratch** | buckets + collisions | array of linked lists, index = `key % size` |
| **Browser history** | back/forward k steps, a visit clears forward history | array/list + current pointer + "last valid" index |
| **Twitter feed** | 10 most recent posts among the people you follow | map user → list of (time, tweet), then a K-way merge with a heap (15C) |

```java
import java.util.*;

class LRUCache {
    private static class Node { int key, val; Node prev, next; Node(int k, int v) { key = k; val = v; } }
    private final int cap;
    private final Map<Integer, Node> map = new HashMap<>();
    private final Node head = new Node(0, 0), tail = new Node(0, 0);   // sentinels: no null checks

    LRUCache(int capacity) { cap = capacity; head.next = tail; tail.prev = head; }

    public int get(int key) {
        Node n = map.get(key);
        if (n == null) return -1;
        remove(n); addFront(n);
        return n.val;
    }
    public void put(int key, int value) {
        Node n = map.get(key);
        if (n != null) { n.val = value; remove(n); addFront(n); return; }
        if (map.size() == cap) { Node lru = tail.prev; remove(lru); map.remove(lru.key); }
        n = new Node(key, value);
        addFront(n);
        map.put(key, n);
    }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void addFront(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
}

class RandomizedSet {
    private final List<Integer> vals = new ArrayList<>();
    private final Map<Integer, Integer> idx = new HashMap<>();
    private final Random rnd = new Random();
    public boolean insert(int x) {
        if (idx.containsKey(x)) return false;
        idx.put(x, vals.size()); vals.add(x);
        return true;
    }
    public boolean remove(int x) {
        Integer i = idx.remove(x);
        if (i == null) return false;
        int last = vals.remove(vals.size() - 1);
        if (i < vals.size()) { vals.set(i, last); idx.put(last, i); }   // move the last element into the hole
        return true;
    }
    public int getRandom() { return vals.get(rnd.nextInt(vals.size())); }
}

class TimeMap {
    private final Map<String, List<Object[]>> store = new HashMap<>();   // key -> [(time, value)]
    public void set(String key, String value, int time) {
        store.computeIfAbsent(key, k -> new ArrayList<>()).add(new Object[]{time, value});
    }
    public String get(String key, int time) {
        List<Object[]> list = store.get(key);
        if (list == null) return "";
        int lo = 0, hi = list.size();                                     // first entry with time > t
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if ((int) list.get(mid)[0] <= time) lo = mid + 1; else hi = mid;
        }
        return lo == 0 ? "" : (String) list.get(lo - 1)[1];
    }
}
```

**Used in:** 23.6–23.12 (and 15.9 Design Twitter)

---

## Pattern Recognition Cheat-Sheet

Read the problem and match the clue to a concept from this guide.

| If the problem says / has… | Think | Concept |
|---|---|---|
| Sorted array, find a pair/triplet | Two pointers or binary search | 3A, 3C, 6A |
| Contiguous subarray/substring with a condition, positives only | Sliding window | 4A, 4B |
| Subarray sum = K, negatives allowed | Prefix sum + HashMap | 5B |
| "Count subarrays with exactly K…" | atMost(K) − atMost(K−1) | 4C |
| Many range additions, read once | Difference array | 5D |
| Minimise the maximum / maximise the minimum | Binary search on the answer | 6E |
| Top K / Kth largest / K closest | Heap of size K, quickselect | 15B |
| Merge K sorted things | Min-heap K-way merge | 15C |
| Running median | Two heaps | 15D |
| Next greater/smaller, spans, histogram | Monotonic stack | 11D |
| Sum over all subarrays of min/max | Contribution technique | 11E |
| Window max/min | Monotonic deque | 4D |
| All subsets / combinations / permutations | Backtracking | 9B–9F |
| Tree question about paths or heights | Height-return DFS | 13B |
| Tree levels / views / nearest | BFS level order | 13A, 13C |
| Distance from a node in a tree | Parent map + BFS | 13E |
| Shortest path, unweighted | BFS | 16B |
| Shortest path, non-negative weights | Dijkstra | 17A |
| Negative weights / at most K edges | Bellman-Ford | 17B |
| Dependencies / ordering | Topological sort | 16G |
| Connectivity, grouping, undirected cycle | DSU | 17D |
| Connect everything at minimum cost | MST | 17E |
| Count ways / min cost with choices, overlapping subproblems | DP | 18A |
| Pick items under a capacity | Knapsack | 19A–19C |
| Two strings compared | LCS / edit distance DP | 20A, 20B |
| Split into segments, try every split | Interval / partition DP | 21B, 21C |
| Buy/sell with rules | State-machine DP | 21A |
| Many prefix lookups | Trie | 22C |
| Max XOR of a pair | Binary trie | 22D |
| n ≤ 20 and "choose a subset" | Bitmask | 22B |
| Range query + update | Segment tree / Fenwick | 23A, 23B |
| Count pairs i < j with a[i] > a[j] | Merge-sort counting | 23C |
| Values in 1..n, O(1) extra space | Cyclic sort / index marking | 1G |
| Cycle in a linked list / sequence | Floyd slow-fast | 10C |
| Pattern search in text | KMP / Z / Rabin-Karp | 7C, 7D |

---

*Learn the concept here, solve the matching phase in the Practice List, and come back to this guide whenever a problem feels unfamiliar.*
