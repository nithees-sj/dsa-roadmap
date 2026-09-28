# DSA Mastery Path 2.0 (Java) — Product-Company Placement Edition

> Built from your original 23-phase plan, audited against what product-based companies test in 2026, and upgraded with concept notes, Java templates, and a curated problem list for every topic.

**Legend**
- ★ = must-do (the core interview set — do these first, re-solve them later)
- **E / M / H** = Easy / Medium / Hard
- **LC** = LeetCode, **GFG** = GeeksforGeeks practice
- GFG sometimes renames practice URLs. If a GFG link breaks, search the problem title on GFG practice.

---

## Table of Contents

1. [Audit of your current plan](#1-audit-of-your-current-plan)
2. [What product companies test in 2026](#2-what-product-companies-test-in-2026)
3. [Roadmap at a glance](#3-roadmap-at-a-glance)
4. [How to solve and revise (the method)](#4-how-to-solve-and-revise-the-method)
5. [Pattern recognition cheat-sheet](#5-pattern-recognition-cheat-sheet)
6. [Phases 0–24: concepts, Java templates, problems](#6-phases)
7. [Beyond DSA: what actually gets you the offer](#7-beyond-dsa-what-actually-gets-you-the-offer)
8. [Weekly routine and progress targets](#8-weekly-routine-and-progress-targets)
9. [Sources](#9-sources)

---

## 1. Audit of your current plan

### Verdict

Your plan is a **solid skeleton — roughly 70% of what you need on the DSA side**, with a sensible topic order and mostly well-known problems. It is **not enough on its own** to get placed at a good product company, for three reasons:

1. Several of the **most frequently asked problems and patterns are missing** (Kadane's algorithm, stock problems, tree views, BST insert/delete, bipartite graphs, knapsack family, DP on strings, KMP depth, and more).
2. **DP and graphs are under-weighted.** DP had 21 problems for a topic that decides many OA and on-site rounds.
3. It is **100% DSA**. Product companies also test OOP/LLD, CS fundamentals (DBMS, OS, CN), SQL, projects, communication, and behavioural answers — and some are now running AI-assisted coding rounds.

### Problems found in the plan itself

| Issue | Details | Fix in 2.0 |
|---|---|---|
| Count is wrong | Header says 210, but there are **244 entries** (210 numbered + 34 boosters). The summary "154 + 34 + 22 = 210" leaves out the 34 boosters, which are extra entries on top of #1–#210. | Every problem is numbered per phase; totals are at the end of each phase. |
| Duplicates (3) | Top K Frequent (#20 and #112), Minimum Window Substring (#40F and #167), Search a 2D Matrix (#58C and #158) | Each problem appears once. |
| LeetCode Premium (3) | Meeting Rooms II (#62, LC 253), Max Size Subarray Sum Equals K (#48G, LC 325), Graph Valid Tree (#154, LC 261) | Replaced with free equivalents (GFG Minimum Platforms, GFG Longest Sub-Array with Sum K, DSU problems). |
| Order problems | Word Search II (#149) comes before Word Search (#159). Union-Find sits in a separate phase after graphs. Trees are split across Phase 11 and 18 with heaps and graphs in between. Max Product Subarray sits in Prefix Sum but is a Kadane/DP problem. | Reordered so each problem only uses what you have already learned. |
| Too-trivial fillers | Factorial, Fibonacci, Frequency Count, Largest Element take slots that could go to interview-grade problems. | Kept only as warm-ups in Phase 0/1. |
| No sorting algorithms | You never implement merge sort / quick sort — a common fresher interview ask. | Added in Phase 1 with templates. |
| No method | No revision schedule, no time-boxing, no complexity analysis practice, no contests or mocks. | Sections 4 and 8. |

### Important topics missing from your plan (now added)

| Area | Added in 2.0 |
|---|---|
| Arrays | Kadane (Maximum Subarray), Best Time to Buy/Sell Stock, Next Permutation, Majority Element II, Rearrange by Sign, First Missing Positive, merge sort & quick sort |
| Strings | KMP (lps array) properly, Longest Happy Prefix, Shortest Palindrome, Reverse Words, Roman numerals |
| Recursion | Generate Parentheses, Palindrome Partitioning, Combination Sum III, Rat in a Maze, M-Coloring |
| Linked List | Intersection, Odd-Even, Rotate List, Sort List, Reverse Nodes in k-Group, Flatten Multilevel |
| Stack | Maximal Rectangle, Sum of Subarray Ranges, Car Fleet, Min Add to Make Valid |
| Greedy | Partition Labels, Min Arrows, Valid Parenthesis String, Hand of Straights, N Meetings, Job Sequencing, Fractional Knapsack |
| Trees | Iterative traversals, Zigzag, Top/Bottom/Vertical view, Boundary traversal, Max Path Sum, Max Width, All Nodes Distance K, Burn a Tree, Invert, Subtree |
| BST | Search/Insert/Delete, LCA in BST, Floor/Ceil, BST Iterator, Recover BST |
| Graphs | Bipartite, Directed cycle, Eventual Safe States, Path With Minimum Effort, Number of Ways to Arrive, Kruskal + DSU, Bridges (Tarjan), SCC (Kosaraju) |
| DP | Frog Jump, Ninja Training, Triangle, Falling Path, Cherry Pickup II, full knapsack family, LPS, SCS, Wildcard, LIS family, all 6 stock problems, MCM, Min Cost to Cut a Stick |
| Other | Kth Smallest in Sorted Matrix, IPO, Max XOR (Trie), Insert Delete GetRandom O(1), Browser History |

---

## 2. What product companies test in 2026

A summary of current reports (sources in Section 9). Treat company specifics as typical patterns, not official syllabi — always read your own scheduling email.

- **Typical funnel:** Online Assessment (usually 2–3 algorithmic problems, auto-graded on hidden test cases) → 2–4 technical interviews (DSA, sometimes OOP/LLD) → hiring-manager / behavioural round.
- **Difficulty:** Campus rounds are mostly Easy–Medium; you must solve Easys flawlessly and Mediums reliably. Top-tier companies add Medium-Hard in OAs.
- **Volume target often quoted:** ~250–350 well-understood problems, with most Mediums solved in about 30 minutes. This plan has 377 in total; the 195 ★ problems alone cover that core range, and the rest is for depth and speed.
- **Amazon (example):** OA with 2 coding problems plus work-style / work-simulation sections; every interview round mixes DSA with Leadership Principle (behavioural) questions.
- **LLD for freshers:** Several product companies ask low-level design / OOP design even at entry level.
- **AI-assisted interviews are arriving, unevenly.** Meta rolled out an AI-enabled coding round in late 2025; Google is piloting an AI-assisted round for some junior/mid roles in the US. Many hiring teams still ban AI entirely. What these rounds reward: reading unfamiliar code, spotting bugs in AI output, and explaining trade-offs — which still requires strong DSA fundamentals.
- **Communication matters:** Interviewers score the process. State the brute force, then optimise, say the complexity out loud, then code.

**Bottom line:** DSA gets you shortlisted and through the coding rounds; projects, fundamentals, LLD and communication convert the interview into an offer.

---

## 3. Roadmap at a glance

Assumes **2–3 focused hours/day, 6 days/week**. Two tracks:

- **Full track (~30 weeks):** every problem.
- **Fast track (~14 weeks):** ★ problems only — use this if placements start within 4 months.

| Phase | Topic | Weeks (full) | Problems | ★ |
|---|---|---|---|---|
| 0 | Foundations: Java toolkit, complexity, math | 1 | 8 | 3 |
| 1 | Arrays & Sorting algorithms | 2 | 18 | 10 |
| 2 | Hashing | 3 | 15 | 7 |
| 3 | Two Pointers | 4 | 18 | 9 |
| 4 | Sliding Window | 5 | 19 | 9 |
| 5 | Prefix Sum & Difference Array | 6 | 14 | 6 |
| 6 | Binary Search (index + answer space) | 7–8 | 23 | 12 |
| 7 | Strings & Pattern Matching | 9 | 15 | 7 |
| 8 | Matrix / 2D Arrays | 9 | 5 | 4 |
| 9 | Recursion & Backtracking | 10–11 | 16 | 9 |
| 10 | Linked List | 12 | 19 | 11 |
| 11 | Stack & Queue (monotonic) | 13 | 20 | 11 |
| 12 | Greedy & Intervals | 14 | 17 | 9 |
| 13 | Binary Trees | 15–16 | 31 | 17 |
| 14 | Binary Search Trees | 17 | 13 | 7 |
| 15 | Heap / Priority Queue | 18 | 12 | 7 |
| 16 | Graphs I: BFS/DFS, cycles, topo sort | 19–20 | 19 | 12 |
| 17 | Graphs II: shortest paths, MST, DSU, advanced | 21–22 | 17 | 8 |
| 18 | DP I: 1D & Grid | 23 | 15 | 8 |
| 19 | DP II: Subsets & Knapsack | 24 | 11 | 7 |
| 20 | DP III: Strings & LIS | 25–26 | 14 | 7 |
| 21 | DP IV: Stocks, Partition & Interval DP | 27 | 11 | 4 |
| 22 | Bit Manipulation & Trie | 28 | 16 | 7 |
| 23 | Segment Tree / Fenwick & Design | 29 | 12 | 5 |
| 24 | Interview simulation (mixed, timed) | 30+ | — | — |

> Run Section 7 (CS fundamentals, OOP/LLD, SQL, projects) **in parallel from Week 8**, about 45 minutes a day.

---

## 4. How to solve and revise (the method)

### The 6-step solve loop (use it for every problem)

1. **Understand** — restate the problem, write 2 examples by hand, note constraints.
2. **Edge cases** — empty input, single element, duplicates, negatives, overflow, all-same values.
3. **Brute force** — say it and its complexity out loud, even if it is slow.
4. **Optimise** — use the cheat-sheet in Section 5 to spot the pattern. Target the complexity the constraints allow.
5. **Code** — clean names, small helper methods.
6. **Dry run** — trace one example line by line, then run the edge cases.

### Constraints → target complexity

| n up to | Target | Typical technique |
|---|---|---|
| 10–12 | O(n!) | permutations / backtracking |
| 20–25 | O(2ⁿ) | subsets, bitmask |
| 100–500 | O(n³) | interval DP, Floyd-Warshall |
| 10³–5·10³ | O(n²) | 2D DP, nested loops |
| 10⁵–10⁶ | O(n log n) or O(n) | sorting, heap, binary search, two pointers, sliding window, hashing |
| 10⁹+ | O(log n) or O(√n) | binary search on answer, math |

### Time-boxing rule

- 20–30 min stuck with no idea → read **one hint** (topic tag / editorial first paragraph).
- 45 min total → read the full solution, understand it, **close it, and code it yourself**.
- Mark it for revision.

### Spaced revision (this is what makes patterns stick)

Keep a tracker (Google Sheet or Notion) with columns: `Problem | Pattern | Date | Solved alone? | Mistake/insight | Revisit dates`.

- Re-solve without notes after **1 day → 3 days → 7 days → 21 days**.
- Every Sunday: re-solve 5 random ★ problems from earlier phases under a 25-minute timer.
- Keep a **mistake log** (off-by-one, forgot overflow, wrong loop direction in knapsack...). Read it before every contest/OA.

---

## 5. Pattern recognition cheat-sheet

| If the problem says / has... | Think |
|---|---|
| Sorted array, find pair/triplet | Two pointers, binary search |
| Contiguous subarray/substring with a condition | Sliding window (positive numbers) or prefix sum + HashMap (negatives allowed) |
| "Count subarrays with exactly K..." | atMost(K) − atMost(K−1), or prefix sum + HashMap |
| Many range-add updates, read once | Difference array |
| Minimise the maximum / maximise the minimum | Binary search on the answer |
| Top K / Kth largest / K closest | Heap of size K (or quickselect) |
| Merge K sorted things | Min-heap |
| Next greater/smaller, spans, histogram | Monotonic stack |
| Sliding window max/min | Monotonic deque |
| All combinations / permutations / subsets | Backtracking |
| Shortest path, unweighted | BFS |
| Shortest path, weighted non-negative | Dijkstra |
| Negative weights / at most K edges | Bellman-Ford (or BFS by levels) |
| Dependencies / ordering | Topological sort |
| Dynamic connectivity, grouping, cycle in undirected graph | Union-Find (DSU) |
| Connect everything at minimum cost | MST (Kruskal / Prim) |
| Optimal value over choices with repeated sub-problems | DP |
| Prefix matching on many words | Trie |
| Max XOR of pairs | Binary Trie |
| Range query + point update | Segment tree / Fenwick |
| Intervals overlap / scheduling | Sort by start (merge) or by end (greedy selection) |
| Cycle in linked list / "happy number" | Floyd slow-fast pointers |
| O(1) extra space on array with values 1..n | Index marking / cyclic sort |

---

<a id="6-phases"></a>
## 6. Phases

---

### Phase 0 — Foundations: Java Toolkit, Complexity, Math (Week 1)

**Concept.** Before patterns, you need fluency with Java's collections (so you never waste interview time on syntax) and the ability to read constraints and estimate time/space complexity. A few math tools (GCD, primality, sieve, fast power) appear repeatedly in OAs.

**Key points**
- Use `ArrayDeque` for both stack and queue (faster than `Stack`/`LinkedList`).
- Comparator `(x, y) -> x - y` can overflow; prefer `Integer.compare(x, y)`.
- Use `long` for sums/products that may exceed ~2·10⁹.
- Strings are immutable — build with `StringBuilder`.

```java
import java.util.*;

public class Toolkit {
    public static void main(String[] args) {
        int n = 5;
        // Arrays
        int[] a = {5, 2, 9};
        Arrays.sort(a);                                   // O(n log n)
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);

        // Sorting objects / 2D arrays with a comparator
        Integer[] boxed = {5, 2, 9};
        Arrays.sort(boxed, Collections.reverseOrder());   // descending
        int[][] intervals = {{3, 4}, {1, 2}};
        Arrays.sort(intervals, (x, y) -> Integer.compare(x[0], y[0]));

        // List
        List<Integer> list = new ArrayList<>();
        list.add(4); list.get(0); list.size(); Collections.sort(list);

        // HashMap / HashSet
        Map<Integer, Integer> freq = new HashMap<>();
        int x = 7;
        freq.put(x, freq.getOrDefault(x, 0) + 1);         // or freq.merge(x, 1, Integer::sum)
        Set<Integer> seen = new HashSet<>();
        seen.add(x);

        // Stack and Queue -> ArrayDeque
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1); stack.peek(); stack.pop();
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(1); q.peek(); q.poll();

        // Heaps
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<int[]> pq = new PriorityQueue<>((p, r) -> Integer.compare(p[0], r[0]));

        // Ordered map: floor / ceiling in O(log n)
        TreeMap<Integer, Integer> tm = new TreeMap<>();
        tm.put(10, 1); tm.put(20, 2);
        Integer fl = tm.floorKey(15);    // 10
        Integer ce = tm.ceilingKey(15);  // 20

        // Strings
        StringBuilder sb = new StringBuilder();
        sb.append('a').append("bc").reverse();
        String s = sb.toString();
        char[] cs = s.toCharArray();
        int idx = cs[0] - 'a';            // char -> 0..25
    }
}
```

```java
class MathTools {
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }      // lcm = a / gcd * b

    static boolean isPrime(int n) {                                          // O(sqrt n)
        if (n < 2) return false;
        for (int i = 2; (long) i * i <= n; i++) if (n % i == 0) return false;
        return true;
    }

    // Sieve of Eratosthenes: composite[i] == false means i is prime (for i >= 2). O(n log log n)
    static boolean[] sieve(int n) {
        boolean[] composite = new boolean[n + 1];
        for (int i = 2; (long) i * i <= n; i++)
            if (!composite[i])
                for (int j = i * i; j <= n; j += i) composite[j] = true;
        return composite;
    }

    // Fast exponentiation (binary exponentiation). O(log exp)
    static long power(long base, long exp, long mod) {
        long result = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1) result = result * base % mod;
            base = base * base % mod;
            exp >>= 1;
        }
        return result;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 0.1 | | Palindrome Number | E | digit extraction `%10`, `/10` | [LC 9](https://leetcode.com/problems/palindrome-number/) |
| 0.2 | ★ | Reverse Integer | M | check overflow before `rev*10` | [LC 7](https://leetcode.com/problems/reverse-integer/) |
| 0.3 | | Fizz Buzz | E | modulo basics | [LC 412](https://leetcode.com/problems/fizz-buzz/) |
| 0.4 | ★ | Count Primes | M | sieve | [LC 204](https://leetcode.com/problems/count-primes/) |
| 0.5 | | Find GCD of Array | E | Euclid | [LC 1979](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) |
| 0.6 | ★ | Pow(x, n) | M | fast power; handle `n = Integer.MIN_VALUE` | [LC 50](https://leetcode.com/problems/powx-n/) |
| 0.7 | | Happy Number | E | cycle detection (set or slow-fast) | [LC 202](https://leetcode.com/problems/happy-number/) |
| 0.8 | | Factorial Trailing Zeroes | M | count factors of 5 | [LC 172](https://leetcode.com/problems/factorial-trailing-zeroes/) |

**Phase 0 total: 8 problems (3 ★)**

---

### Phase 1 — Arrays & Sorting Algorithms (Week 2)

**Concept.** Arrays are contiguous memory with O(1) index access. Most array problems are about a single clever pass: track a running best (Kadane), a candidate (Boyer-Moore), or rearrange in place (reversal, index marking). You must also be able to **implement** merge sort (stable, O(n log n) always) and quick sort (in-place, O(n log n) average) — interviewers ask for these directly and they are the base for "count inversions" and "quickselect".

**Recognise it when:** single pass with a running state, in-place rearrangement, "maximum subarray", "majority", "rotate".

```java
import java.util.*;

class ArrayTemplates {
    // Merge sort: O(n log n) time, O(n) extra space, stable
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
        while (i <= mid && j <= hi) tmp[k++] = (a[i] <= a[j]) ? a[i++] : a[j++];
        while (i <= mid) tmp[k++] = a[i++];
        while (j <= hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, 0, a, lo, tmp.length);
    }

    // Quick sort (Lomuto partition, random pivot): O(n log n) average, in place
    Random rnd = new Random();
    void quickSort(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int p = partition(a, lo, hi);
        quickSort(a, lo, p - 1);
        quickSort(a, p + 1, hi);
    }
    int partition(int[] a, int lo, int hi) {
        swap(a, lo + rnd.nextInt(hi - lo + 1), hi);   // random pivot avoids O(n^2) on sorted input
        int pivot = a[hi], i = lo;
        for (int j = lo; j < hi; j++)
            if (a[j] < pivot) swap(a, i++, j);
        swap(a, i, hi);
        return i;
    }
    void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

    // Kadane's algorithm: maximum subarray sum, O(n)
    int maxSubArray(int[] nums) {
        int best = nums[0], cur = 0;
        for (int x : nums) {
            cur = Math.max(x, cur + x);   // extend the previous subarray or start fresh at x
            best = Math.max(best, cur);
        }
        return best;
    }

    // Boyer-Moore voting: element appearing more than n/2 times, O(1) space
    int majority(int[] nums) {
        int cand = 0, count = 0;
        for (int x : nums) {
            if (count == 0) cand = x;
            count += (x == cand) ? 1 : -1;
        }
        return cand;   // verify with a second pass if a majority is not guaranteed
    }

    // Rotate right by k using three reversals, O(n) time, O(1) space
    void rotateRight(int[] a, int k) {
        int n = a.length;
        k %= n;
        reverse(a, 0, n - 1);
        reverse(a, 0, k - 1);
        reverse(a, k, n - 1);
    }
    void reverse(int[] a, int l, int r) { while (l < r) swap(a, l++, r--); }
}
```

> **Note:** On LC 912 (Sort an Array), plain Lomuto quick sort can time out on inputs with many equal values — use merge sort there, or a 3-way partition.

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 1.1 | | Largest Element in Array | E | single pass | [GFG](https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1) |
| 1.2 | | Second Largest | E | track first & second max | [GFG](https://www.geeksforgeeks.org/problems/second-largest3735/1) |
| 1.3 | | Check if Array Is Sorted and Rotated | E | count "drops" (≤ 1) | [LC 1752](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/) |
| 1.4 | ★ | Remove Duplicates from Sorted Array | E | read/write pointer | [LC 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| 1.5 | ★ | Rotate Array | M | three reversals | [LC 189](https://leetcode.com/problems/rotate-array/) |
| 1.6 | | Max Consecutive Ones | E | running count | [LC 485](https://leetcode.com/problems/max-consecutive-ones/) |
| 1.7 | ★ | Merge Sorted Array | E | fill from the end | [LC 88](https://leetcode.com/problems/merge-sorted-array/) |
| 1.8 | ★ | Majority Element | E | Boyer-Moore | [LC 169](https://leetcode.com/problems/majority-element/) |
| 1.9 | | Majority Element II | M | Boyer-Moore with 2 candidates | [LC 229](https://leetcode.com/problems/majority-element-ii/) |
| 1.10 | ★ | Maximum Subarray | M | Kadane | [LC 53](https://leetcode.com/problems/maximum-subarray/) |
| 1.11 | ★ | Maximum Product Subarray | M | Kadane tracking max & min | [LC 152](https://leetcode.com/problems/maximum-product-subarray/) |
| 1.12 | ★ | Best Time to Buy and Sell Stock | E | track min so far | [LC 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| 1.13 | | Leaders in an Array | E | scan from the right | [GFG](https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1) |
| 1.14 | | Rearrange Array Elements by Sign | M | two write indices | [LC 2149](https://leetcode.com/problems/rearrange-array-elements-by-sign/) |
| 1.15 | ★ | Next Permutation | M | find dip, swap, reverse suffix | [LC 31](https://leetcode.com/problems/next-permutation/) |
| 1.16 | | Pascal's Triangle | E | row from previous row | [LC 118](https://leetcode.com/problems/pascals-triangle/) |
| 1.17 | ★ | Sort an Array | M | implement merge sort yourself | [LC 912](https://leetcode.com/problems/sort-an-array/) |
| 1.18 | ★ | First Missing Positive | H | cyclic sort / index marking | [LC 41](https://leetcode.com/problems/first-missing-positive/) |

**Phase 1 total: 18 problems (10 ★)**

---

### Phase 2 — Hashing (Week 3)

**Concept.** A `HashMap`/`HashSet` gives average O(1) insert and lookup, turning "search for a partner" from O(n) into O(1). Three core uses: **counting** (frequency), **complement lookup** ("have I seen target − x?"), and **grouping by a key** (e.g., sorted string for anagrams). For lowercase letters, an `int[26]` is faster than a map.

**Recognise it when:** duplicates, frequencies, "pair that sums to", grouping, O(n) required on unsorted data.

```java
import java.util.*;

class HashingTemplates {
    // Complement lookup: Two Sum in O(n)
    int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> indexOf = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            Integer j = indexOf.get(target - nums[i]);
            if (j != null) return new int[]{j, i};
            indexOf.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    // Counting with an int[26]
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

    // Grouping + bucket sort: Top K Frequent in O(n)
    @SuppressWarnings("unchecked")
    int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : nums) freq.merge(x, 1, Integer::sum);
        List<Integer>[] bucket = new List[nums.length + 1];       // bucket[f] = values with frequency f
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

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 2.1 | | Unique Number of Occurrences | E | frequency map + set | [LC 1207](https://leetcode.com/problems/unique-number-of-occurrences/) |
| 2.2 | ★ | Contains Duplicate | E | HashSet | [LC 217](https://leetcode.com/problems/contains-duplicate/) |
| 2.3 | ★ | Two Sum | E | complement lookup | [LC 1](https://leetcode.com/problems/two-sum/) |
| 2.4 | ★ | Valid Anagram | E | int[26] counts | [LC 242](https://leetcode.com/problems/valid-anagram/) |
| 2.5 | | Ransom Note | E | counts | [LC 383](https://leetcode.com/problems/ransom-note/) |
| 2.6 | ★ | Missing Number | E | sum / XOR | [LC 268](https://leetcode.com/problems/missing-number/) |
| 2.7 | | Single Number | E | XOR | [LC 136](https://leetcode.com/problems/single-number/) |
| 2.8 | | Intersection of Two Arrays | E | HashSet | [LC 349](https://leetcode.com/problems/intersection-of-two-arrays/) |
| 2.9 | | Isomorphic Strings | E | two-way mapping | [LC 205](https://leetcode.com/problems/isomorphic-strings/) |
| 2.10 | | Word Pattern | E | two-way mapping | [LC 290](https://leetcode.com/problems/word-pattern/) |
| 2.11 | ★ | Longest Consecutive Sequence | M | start only at sequence starts | [LC 128](https://leetcode.com/problems/longest-consecutive-sequence/) |
| 2.12 | ★ | Group Anagrams | M | key = sorted string / count signature | [LC 49](https://leetcode.com/problems/group-anagrams/) |
| 2.13 | | 4Sum II | M | pair sums in a map | [LC 454](https://leetcode.com/problems/4sum-ii/) |
| 2.14 | ★ | Top K Frequent Elements | M | bucket sort (heap version in Phase 15) | [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) |
| 2.15 | | Sort Characters By Frequency | M | count + bucket | [LC 451](https://leetcode.com/problems/sort-characters-by-frequency/) |

**Phase 2 total: 15 problems (7 ★)**

---

### Phase 3 — Two Pointers (Week 4)

**Concept.** Two indices move through the data so that each element is visited O(1) times, replacing an O(n²) double loop with O(n). Three shapes:
1. **Opposite ends** on sorted data (pair sums, palindromes, container).
2. **Read/write (slow-fast)** to compact an array in place.
3. **Fix one, two-pointer the rest** (3Sum, 4Sum) after sorting — skip duplicates carefully.

**Recognise it when:** sorted input, in-place removal, palindrome checks, "pair/triplet with sum".

```java
import java.util.*;

class TwoPointerTemplates {
    // 1) Opposite ends on a sorted array
    int[] pairSum(int[] a, int target) {
        int l = 0, r = a.length - 1;
        while (l < r) {
            int s = a[l] + a[r];
            if (s == target) return new int[]{l, r};
            if (s < target) l++; else r--;
        }
        return new int[]{-1, -1};
    }

    // 2) Read/write pointer: compact in place
    int removeElement(int[] a, int val) {
        int write = 0;
        for (int read = 0; read < a.length; read++)
            if (a[read] != val) a[write++] = a[read];
        return write;
    }

    // 3) Sort + fix one + two pointers, with duplicate skipping
    List<List<Integer>> threeSum(int[] a) {
        Arrays.sort(a);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < a.length - 2; i++) {
            if (i > 0 && a[i] == a[i - 1]) continue;           // skip duplicate anchors
            int l = i + 1, r = a.length - 1;
            while (l < r) {
                int s = a[i] + a[l] + a[r];
                if (s < 0) l++;
                else if (s > 0) r--;
                else {
                    res.add(Arrays.asList(a[i], a[l], a[r]));
                    while (l < r && a[l] == a[l + 1]) l++;       // skip duplicates
                    while (l < r && a[r] == a[r - 1]) r--;
                    l++; r--;
                }
            }
        }
        return res;
    }

    // Dutch National Flag: 3-way partition in one pass
    void sortColors(int[] a) {
        int lo = 0, mid = 0, hi = a.length - 1;
        while (mid <= hi) {
            if (a[mid] == 0) swap(a, lo++, mid++);
            else if (a[mid] == 1) mid++;
            else swap(a, mid, hi--);                           // don't move mid: new a[mid] is unchecked
        }
    }
    void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 3.1 | | Reverse String | E | opposite ends | [LC 344](https://leetcode.com/problems/reverse-string/) |
| 3.2 | ★ | Move Zeroes | E | read/write | [LC 283](https://leetcode.com/problems/move-zeroes/) |
| 3.3 | | Remove Element | E | read/write | [LC 27](https://leetcode.com/problems/remove-element/) |
| 3.4 | ★ | Valid Palindrome | E | skip non-alphanumerics | [LC 125](https://leetcode.com/problems/valid-palindrome/) |
| 3.5 | | Merge Strings Alternately | E | two indices | [LC 1768](https://leetcode.com/problems/merge-strings-alternately/) |
| 3.6 | | Is Subsequence | E | advance on match | [LC 392](https://leetcode.com/problems/is-subsequence/) |
| 3.7 | | Reverse Vowels of a String | E | opposite ends | [LC 345](https://leetcode.com/problems/reverse-vowels-of-a-string/) |
| 3.8 | ★ | Squares of a Sorted Array | E | fill from the end | [LC 977](https://leetcode.com/problems/squares-of-a-sorted-array/) |
| 3.9 | ★ | Two Sum II | M | opposite ends | [LC 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 3.10 | | Remove Duplicates from Sorted Array II | M | compare with `a[write-2]` | [LC 80](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) |
| 3.11 | ★ | Container With Most Water | M | move the shorter wall | [LC 11](https://leetcode.com/problems/container-with-most-water/) |
| 3.12 | ★ | 3Sum | M | sort + fix one | [LC 15](https://leetcode.com/problems/3sum/) |
| 3.13 | | 3Sum Closest | M | sort + fix one | [LC 16](https://leetcode.com/problems/3sum-closest/) |
| 3.14 | ★ | 4Sum | M | two loops + two pointers; use `long` | [LC 18](https://leetcode.com/problems/4sum/) |
| 3.15 | ★ | Sort Colors | M | Dutch national flag | [LC 75](https://leetcode.com/problems/sort-colors/) |
| 3.16 | | Boats to Save People | M | sort + pair heaviest with lightest | [LC 881](https://leetcode.com/problems/boats-to-save-people/) |
| 3.17 | | Bag of Tokens | M | greedy + two pointers | [LC 948](https://leetcode.com/problems/bag-of-tokens/) |
| 3.18 | ★ | Trapping Rain Water | H | two pointers with leftMax/rightMax | [LC 42](https://leetcode.com/problems/trapping-rain-water/) |

**Phase 3 total: 18 problems (9 ★)**

---

### Phase 4 — Sliding Window (Week 5)

**Concept.** A window `[l, r]` slides across the array; you add `a[r]` when expanding and remove `a[l]` when shrinking, so each element enters and leaves once → O(n).
- **Fixed window:** size k; add the new element, remove the one that fell out.
- **Variable window:** expand `r` always; shrink `l` while the window is invalid; update the answer.
- **Counting "exactly K"**: `exactly(K) = atMost(K) − atMost(K−1)`.
- **Max/min of each window:** monotonic deque.

Sliding window needs a **monotonic** condition (adding elements only makes it "more" invalid). With negative numbers, switch to prefix sums (Phase 5).

```java
import java.util.*;

class SlidingWindowTemplates {
    // Fixed size k
    int maxSumK(int[] a, int k) {
        int sum = 0, best = Integer.MIN_VALUE;
        for (int r = 0; r < a.length; r++) {
            sum += a[r];
            if (r >= k - 1) {
                best = Math.max(best, sum);
                sum -= a[r - k + 1];                 // drop the leftmost element
            }
        }
        return best;
    }

    // Variable size: longest valid window
    int lengthOfLongestSubstring(String s) {
        int[] count = new int[128];
        int best = 0;
        for (int l = 0, r = 0; r < s.length(); r++) {
            count[s.charAt(r)]++;
            while (count[s.charAt(r)] > 1)           // invalid -> shrink from the left
                count[s.charAt(l++)]--;
            best = Math.max(best, r - l + 1);
        }
        return best;
    }

    // Exactly K distinct = atMost(K) - atMost(K - 1)
    int subarraysWithKDistinct(int[] a, int k) { return atMost(a, k) - atMost(a, k - 1); }
    int atMost(int[] a, int k) {
        if (k < 0) return 0;
        Map<Integer, Integer> cnt = new HashMap<>();
        int res = 0;
        for (int l = 0, r = 0; r < a.length; r++) {
            if (cnt.merge(a[r], 1, Integer::sum) == 1) k--;      // new distinct value
            while (k < 0) {
                if (cnt.merge(a[l], -1, Integer::sum) == 0) k++;
                l++;
            }
            res += r - l + 1;                                    // subarrays ending at r
        }
        return res;
    }

    // Monotonic deque: maximum of every window of size k
    int[] maxSlidingWindow(int[] a, int k) {
        Deque<Integer> dq = new ArrayDeque<>();                  // indices, values decreasing
        int[] res = new int[a.length - k + 1];
        for (int i = 0; i < a.length; i++) {
            if (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();       // out of window
            while (!dq.isEmpty() && a[dq.peekLast()] <= a[i]) dq.pollLast();    // can never be max
            dq.offerLast(i);
            if (i >= k - 1) res[i - k + 1] = a[dq.peekFirst()];
        }
        return res;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 4.1 | | Max Sum Subarray of Size K | E | fixed window | [GFG](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1) |
| 4.2 | | Maximum Average Subarray I | E | fixed window | [LC 643](https://leetcode.com/problems/maximum-average-subarray-i/) |
| 4.3 | | First Negative Integer in Every Window | M | fixed window + queue | [GFG](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1) |
| 4.4 | | Contains Duplicate II | E | window of size k as a set | [LC 219](https://leetcode.com/problems/contains-duplicate-ii/) |
| 4.5 | ★ | Longest Substring Without Repeating Characters | M | variable window | [LC 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 4.6 | ★ | Minimum Size Subarray Sum | M | shrink while sum ≥ target | [LC 209](https://leetcode.com/problems/minimum-size-subarray-sum/) |
| 4.7 | ★ | Max Consecutive Ones III | M | window with ≤ k zeros | [LC 1004](https://leetcode.com/problems/max-consecutive-ones-iii/) |
| 4.8 | | Longest Subarray of 1's After Deleting One | M | window with ≤ 1 zero | [LC 1493](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) |
| 4.9 | ★ | Longest Repeating Character Replacement | M | len − maxFreq ≤ k | [LC 424](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 4.10 | ★ | Fruit Into Baskets | M | ≤ 2 distinct | [LC 904](https://leetcode.com/problems/fruit-into-baskets/) |
| 4.11 | ★ | Permutation in String | M | fixed window of counts | [LC 567](https://leetcode.com/problems/permutation-in-string/) |
| 4.12 | ★ | Find All Anagrams in a String | M | fixed window of counts | [LC 438](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| 4.13 | | Maximum Points You Can Obtain from Cards | M | window over what you *don't* take | [LC 1423](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) |
| 4.14 | | Number of Substrings Containing All Three Characters | M | count via last-seen | [LC 1358](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) |
| 4.15 | | Binary Subarrays With Sum | M | atMost trick | [LC 930](https://leetcode.com/problems/binary-subarrays-with-sum/) |
| 4.16 | | Count Number of Nice Subarrays | M | atMost trick | [LC 1248](https://leetcode.com/problems/count-number-of-nice-subarrays/) |
| 4.17 | | Subarrays with K Different Integers | H | atMost(K) − atMost(K−1) | [LC 992](https://leetcode.com/problems/subarrays-with-k-different-integers/) |
| 4.18 | ★ | Sliding Window Maximum | H | monotonic deque | [LC 239](https://leetcode.com/problems/sliding-window-maximum/) |
| 4.19 | ★ | Minimum Window Substring | H | need/have counters | [LC 76](https://leetcode.com/problems/minimum-window-substring/) |

**Phase 4 total: 19 problems (9 ★)**

---

### Phase 5 — Prefix Sum & Difference Array (Week 6)

**Concept.** `pre[i]` = sum of the first `i` elements, so any range sum is `pre[r+1] − pre[l]` in O(1). Combined with a HashMap of earlier prefix values, you can count subarrays with sum K **even with negative numbers** (where sliding window fails). The same trick works with remainders (divisible by K) and with +1/−1 transforms (equal 0s and 1s). A **difference array** does many range-updates in O(1) each, then one prefix pass to read the result.

```java
import java.util.*;

class PrefixTemplates {
    // pre[i] = sum of a[0..i-1]; sum(l..r) = pre[r+1] - pre[l]
    long[] build(int[] a) {
        long[] pre = new long[a.length + 1];
        for (int i = 0; i < a.length; i++) pre[i + 1] = pre[i] + a[i];
        return pre;
    }

    // Count subarrays with sum == k (negatives allowed)
    int subarraySum(int[] a, int k) {
        Map<Integer, Integer> seen = new HashMap<>();
        seen.put(0, 1);                                  // the empty prefix
        int sum = 0, count = 0;
        for (int x : a) {
            sum += x;
            count += seen.getOrDefault(sum - k, 0);      // an earlier prefix P with sum - P == k
            seen.merge(sum, 1, Integer::sum);
        }
        return count;
    }

    // Remainder version: use ((sum % k) + k) % k so negatives map correctly
    int subarraysDivByK(int[] a, int k) {
        int[] seen = new int[k];
        seen[0] = 1;
        int sum = 0, count = 0;
        for (int x : a) {
            sum = ((sum + x) % k + k) % k;
            count += seen[sum]++;
        }
        return count;
    }

    // Difference array: many "add v to [l, r]" updates, then read once
    int[] rangeAdds(int n, int[][] updates) {            // each update = {l, r, v}
        int[] diff = new int[n + 1];
        for (int[] u : updates) { diff[u[0]] += u[2]; diff[u[1] + 1] -= u[2]; }
        int[] res = new int[n];
        int run = 0;
        for (int i = 0; i < n; i++) { run += diff[i]; res[i] = run; }
        return res;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 5.1 | | Running Sum of 1D Array | E | basic prefix | [LC 1480](https://leetcode.com/problems/running-sum-of-1d-array/) |
| 5.2 | | Find the Highest Altitude | E | running prefix | [LC 1732](https://leetcode.com/problems/find-the-highest-altitude/) |
| 5.3 | ★ | Range Sum Query - Immutable | E | prefix array | [LC 303](https://leetcode.com/problems/range-sum-query-immutable/) |
| 5.4 | ★ | Find Pivot Index | E | left sum vs total | [LC 724](https://leetcode.com/problems/find-pivot-index/) |
| 5.5 | ★ | Product of Array Except Self | M | prefix × suffix products | [LC 238](https://leetcode.com/problems/product-of-array-except-self/) |
| 5.6 | ★ | Subarray Sum Equals K | M | prefix + HashMap | [LC 560](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 5.7 | ★ | Longest Sub-Array with Sum K | M | first index of each prefix (replaces premium LC 325) | [GFG](https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1) |
| 5.8 | ★ | Contiguous Array | M | 0 → −1, longest zero-sum | [LC 525](https://leetcode.com/problems/contiguous-array/) |
| 5.9 | | Subarray Sums Divisible by K | M | remainder counts | [LC 974](https://leetcode.com/problems/subarray-sums-divisible-by-k/) |
| 5.10 | | Continuous Subarray Sum | M | remainder first index | [LC 523](https://leetcode.com/problems/continuous-subarray-sum/) |
| 5.11 | | Corporate Flight Bookings | M | difference array | [LC 1109](https://leetcode.com/problems/corporate-flight-bookings/) |
| 5.12 | | Car Pooling | M | difference array | [LC 1094](https://leetcode.com/problems/car-pooling/) |
| 5.13 | | Range Sum Query 2D - Immutable | M | 2D prefix, inclusion-exclusion | [LC 304](https://leetcode.com/problems/range-sum-query-2d-immutable/) |
| 5.14 | | XOR Queries of a Subarray | M | prefix XOR | [LC 1310](https://leetcode.com/problems/xor-queries-of-a-subarray/) |

**Phase 5 total: 14 problems (6 ★)**

---

### Phase 6 — Binary Search: on Index and on Answer (Weeks 7–8)

**Concept.** Binary search works on any **monotonic** yes/no question, not only "find x in a sorted array". Two families:
1. **On index:** sorted/rotated arrays, first/last occurrence, peak finding.
2. **On the answer space:** "minimum speed/capacity/days such that it is possible" — guess the answer `mid`, check feasibility in O(n), and shrink. This is one of the most common OA patterns.

Always use `mid = lo + (hi - lo) / 2`. Decide your invariant (`[lo, hi)` vs `[lo, hi]`) and stick to it.

```java
class BinarySearchTemplates {
    // Lower bound: first index with a[i] >= target (a.length if none)
    int lowerBound(int[] a, int target) {
        int lo = 0, hi = a.length;                     // search space [lo, hi)
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] >= target) hi = mid; else lo = mid + 1;
        }
        return lo;
    }

    // Search in rotated sorted array: one half is always sorted
    int searchRotated(int[] a, int target) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == target) return mid;
            if (a[lo] <= a[mid]) {                                      // left half sorted
                if (a[lo] <= target && target < a[mid]) hi = mid - 1; else lo = mid + 1;
            } else {                                                    // right half sorted
                if (a[mid] < target && target <= a[hi]) lo = mid + 1; else hi = mid - 1;
            }
        }
        return -1;
    }

    // Binary search on answer (MINIMISE): smallest speed that finishes within h hours
    int minEatingSpeed(int[] piles, int h) {
        int lo = 1, hi = 0;
        for (int p : piles) hi = Math.max(hi, p);
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (canFinish(piles, h, mid)) hi = mid; else lo = mid + 1;   // F F F T T T -> first T
        }
        return lo;
    }
    boolean canFinish(int[] piles, int h, int speed) {
        long hours = 0;
        for (int p : piles) hours += (p + speed - 1) / speed;            // ceil division
        return hours <= h;
    }

    // Binary search on answer (MAXIMISE): largest min distance to place cows (Aggressive Cows)
    int maxMinDistance(int[] stalls, int cows) {
        java.util.Arrays.sort(stalls);
        int lo = 1, hi = stalls[stalls.length - 1] - stalls[0];
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;                             // round UP to avoid infinite loop
            if (canPlace(stalls, cows, mid)) lo = mid; else hi = mid - 1; // T T T F F -> last T
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

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 6.1 | ★ | Binary Search | E | classic | [LC 704](https://leetcode.com/problems/binary-search/) |
| 6.2 | ★ | Search Insert Position | E | lower bound | [LC 35](https://leetcode.com/problems/search-insert-position/) |
| 6.3 | ★ | Find First and Last Position | M | lower & upper bound | [LC 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |
| 6.4 | | Find Smallest Letter Greater Than Target | E | upper bound | [LC 744](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |
| 6.5 | | Sqrt(x) | E | answer space, use `long` | [LC 69](https://leetcode.com/problems/sqrtx/) |
| 6.6 | ★ | Search in Rotated Sorted Array | M | sorted half check | [LC 33](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 6.7 | | Search in Rotated Sorted Array II | M | duplicates: shrink both ends | [LC 81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) |
| 6.8 | ★ | Find Minimum in Rotated Sorted Array | M | compare with `a[hi]` | [LC 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |
| 6.9 | | Single Element in a Sorted Array | M | parity of index | [LC 540](https://leetcode.com/problems/single-element-in-a-sorted-array/) |
| 6.10 | ★ | Find Peak Element | M | move towards the slope up | [LC 162](https://leetcode.com/problems/find-peak-element/) |
| 6.11 | ★ | Search a 2D Matrix | M | treat as 1D array | [LC 74](https://leetcode.com/problems/search-a-2d-matrix/) |
| 6.12 | | Search a 2D Matrix II | M | start top-right corner | [LC 240](https://leetcode.com/problems/search-a-2d-matrix-ii/) |
| 6.13 | | Kth Missing Positive Number | E | missing count = a[i] − (i+1) | [LC 1539](https://leetcode.com/problems/kth-missing-positive-number/) |
| 6.14 | | Find K Closest Elements | M | binary search the window start | [LC 658](https://leetcode.com/problems/find-k-closest-elements/) |
| 6.15 | ★ | Koko Eating Bananas | M | answer space (min) | [LC 875](https://leetcode.com/problems/koko-eating-bananas/) |
| 6.16 | ★ | Capacity To Ship Packages Within D Days | M | answer space (min) | [LC 1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) |
| 6.17 | | Find the Smallest Divisor Given a Threshold | M | answer space (min) | [LC 1283](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) |
| 6.18 | ★ | Minimum Number of Days to Make m Bouquets | M | answer space (min) | [LC 1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) |
| 6.19 | ★ | Aggressive Cows | M | answer space (max-min) | [GFG](https://www.geeksforgeeks.org/problems/aggressive-cows/1) |
| 6.20 | | Magnetic Force Between Two Balls | M | same as Aggressive Cows | [LC 1552](https://leetcode.com/problems/magnetic-force-between-two-balls/) |
| 6.21 | ★ | Split Array Largest Sum | H | answer space (min-max); also Book Allocation | [LC 410](https://leetcode.com/problems/split-array-largest-sum/) |
| 6.22 | | Find a Peak Element II | M | binary search on columns | [LC 1901](https://leetcode.com/problems/find-a-peak-element-ii/) |
| 6.23 | | Median of Two Sorted Arrays | H | partition both arrays | [LC 4](https://leetcode.com/problems/median-of-two-sorted-arrays/) |

**Phase 6 total: 23 problems (12 ★)**

---

### Phase 7 — Strings & Pattern Matching (Week 9)

**Concept.** Most string problems reuse earlier patterns (hashing, two pointers, sliding window). What is new:
- **Expand around center** for palindromes: 2n−1 centers, O(n²) time, O(1) space.
- **KMP**: the `lps` array (longest proper prefix that is also a suffix) lets you search a pattern in O(n + m) without re-checking characters.
- **Rabin-Karp** (rolling hash) and **Z-algorithm** are alternatives worth knowing conceptually.
- Java: `String` is immutable → use `StringBuilder`; compare with `.equals()`, never `==`.

```java
class StringTemplates {
    // Expand around center: longest palindromic substring
    String longestPalindrome(String s) {
        int start = 0, len = 0;
        for (int c = 0; c < s.length(); c++) {
            for (int gap = 0; gap <= 1; gap++) {        // gap 0 -> odd length, gap 1 -> even length
                int l = c, r = c + gap;
                while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }
                if (r - l - 1 > len) { len = r - l - 1; start = l + 1; }
            }
        }
        return s.substring(start, start + len);
    }

    // KMP: lps[i] = length of the longest proper prefix of p[0..i] that is also its suffix
    int[] buildLps(String p) {
        int[] lps = new int[p.length()];
        for (int i = 1, len = 0; i < p.length(); ) {
            if (p.charAt(i) == p.charAt(len)) lps[i++] = ++len;
            else if (len > 0) len = lps[len - 1];        // fall back, don't move i
            else lps[i++] = 0;
        }
        return lps;
    }
    int kmpSearch(String text, String p) {              // first index of p in text, O(n + m)
        if (p.isEmpty()) return 0;
        int[] lps = buildLps(p);
        for (int i = 0, j = 0; i < text.length(); ) {
            if (text.charAt(i) == p.charAt(j)) {
                i++; j++;
                if (j == p.length()) return i - j;
            } else if (j > 0) j = lps[j - 1];
            else i++;
        }
        return -1;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 7.1 | ★ | Longest Common Prefix | E | vertical scan | [LC 14](https://leetcode.com/problems/longest-common-prefix/) |
| 7.2 | | Roman to Integer | E | subtract if smaller precedes larger | [LC 13](https://leetcode.com/problems/roman-to-integer/) |
| 7.3 | | Integer to Roman | M | greedy value table | [LC 12](https://leetcode.com/problems/integer-to-roman/) |
| 7.4 | ★ | Reverse Words in a String | M | split/trim or two pointers | [LC 151](https://leetcode.com/problems/reverse-words-in-a-string/) |
| 7.5 | | Rotate String | E | `(s+s).contains(goal)` | [LC 796](https://leetcode.com/problems/rotate-string/) |
| 7.6 | ★ | String to Integer (atoi) | M | careful simulation + overflow | [LC 8](https://leetcode.com/problems/string-to-integer-atoi/) |
| 7.7 | ★ | Valid Palindrome II | E | one skip allowed | [LC 680](https://leetcode.com/problems/valid-palindrome-ii/) |
| 7.8 | | Repeated Substring Pattern | E | `(s+s)` trick or lps | [LC 459](https://leetcode.com/problems/repeated-substring-pattern/) |
| 7.9 | ★ | Longest Palindromic Substring | M | expand around center | [LC 5](https://leetcode.com/problems/longest-palindromic-substring/) |
| 7.10 | ★ | Palindromic Substrings | M | count while expanding | [LC 647](https://leetcode.com/problems/palindromic-substrings/) |
| 7.11 | | Sum of Beauty of All Substrings | M | frequency per start index | [LC 1781](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/) |
| 7.12 | ★ | Find the Index of the First Occurrence | E | implement KMP | [LC 28](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| 7.13 | | Repeated String Match | M | repeat then search | [LC 686](https://leetcode.com/problems/repeated-string-match/) |
| 7.14 | | Longest Happy Prefix | H | lps of the whole string | [LC 1392](https://leetcode.com/problems/longest-happy-prefix/) |
| 7.15 | | Shortest Palindrome | H | lps of `s + "#" + reverse(s)` | [LC 214](https://leetcode.com/problems/shortest-palindrome/) |

**Phase 7 total: 15 problems (7 ★)**

---

### Phase 8 — Matrix / 2D Arrays (Week 9)

**Concept.** Grid problems are about index control: boundaries (spiral), in-place transforms (transpose + reverse = rotate 90°), and using the first row/column or extra bits as markers to get O(1) space.

```java
import java.util.*;

class MatrixTemplates {
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

    // Rotate 90 degrees clockwise in place = transpose, then reverse each row
    void rotate(int[][] m) {
        int n = m.length;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++) { int t = m[i][j]; m[i][j] = m[j][i]; m[j][i] = t; }
        for (int[] row : m)
            for (int l = 0, r = n - 1; l < r; l++, r--) { int t = row[l]; row[l] = row[r]; row[r] = t; }
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 8.1 | ★ | Set Matrix Zeroes | M | first row/col as markers | [LC 73](https://leetcode.com/problems/set-matrix-zeroes/) |
| 8.2 | ★ | Spiral Matrix | M | four boundaries | [LC 54](https://leetcode.com/problems/spiral-matrix/) |
| 8.3 | ★ | Rotate Image | M | transpose + reverse | [LC 48](https://leetcode.com/problems/rotate-image/) |
| 8.4 | | Spiral Matrix II | M | fill with boundaries | [LC 59](https://leetcode.com/problems/spiral-matrix-ii/) |
| 8.5 | ★ | Game of Life | M | encode next state in spare bits | [LC 289](https://leetcode.com/problems/game-of-life/) |

**Phase 8 total: 5 problems (4 ★)** — plus Search a 2D Matrix I/II in Phase 6 and grid BFS/DFS in Phase 16.

---

### Phase 9 — Recursion & Backtracking (Weeks 10–11)

**Concept.** Recursion = a function solving a smaller copy of the same problem, with a **base case** to stop. Draw the **recursion tree** to understand time (number of nodes × work per node) and space (tree height = stack depth). Backtracking = recursion that **makes a choice, recurses, then undoes the choice**. Three templates cover almost everything:
1. **Pick / not-pick** (subsets, subsequences).
2. **Loop from `start`** (combinations; skip duplicates with `i > start && a[i] == a[i-1]` after sorting).
3. **`used[]` array** (permutations).

Pruning (stop early when the partial answer can't work) is what makes backtracking pass.

```java
import java.util.*;

class BacktrackingTemplates {
    // 1) Pick / not-pick: all subsets
    void subsets(int[] a, int i, List<Integer> cur, List<List<Integer>> res) {
        if (i == a.length) { res.add(new ArrayList<>(cur)); return; }
        cur.add(a[i]);
        subsets(a, i + 1, cur, res);                         // pick
        cur.remove(cur.size() - 1);                          // undo
        subsets(a, i + 1, cur, res);                         // not pick
    }

    // 2) Loop from start, skip duplicates, prune (Combination Sum II). Sort a first!
    void combos(int[] a, int start, int remain, List<Integer> cur, List<List<Integer>> res) {
        if (remain == 0) { res.add(new ArrayList<>(cur)); return; }
        for (int i = start; i < a.length; i++) {
            if (i > start && a[i] == a[i - 1]) continue;     // same value at the same depth = duplicate
            if (a[i] > remain) break;                        // prune: sorted, so everything after is bigger
            cur.add(a[i]);
            combos(a, i + 1, remain - a[i], cur, res);       // i + 1: use each element once (i for reuse)
            cur.remove(cur.size() - 1);
        }
    }

    // 3) Permutations with used[]
    void permute(int[] a, boolean[] used, List<Integer> cur, List<List<Integer>> res) {
        if (cur.size() == a.length) { res.add(new ArrayList<>(cur)); return; }
        for (int i = 0; i < a.length; i++) {
            if (used[i]) continue;
            used[i] = true; cur.add(a[i]);
            permute(a, used, cur, res);
            used[i] = false; cur.remove(cur.size() - 1);
        }
    }

    // Board backtracking: N-Queens with O(1) safety checks
    List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        place(0, n, board, new boolean[n], new boolean[2 * n], new boolean[2 * n], res);
        return res;
    }
    void place(int r, int n, char[][] b, boolean[] col, boolean[] d1, boolean[] d2, List<List<String>> res) {
        if (r == n) {
            List<String> sol = new ArrayList<>();
            for (char[] row : b) sol.add(new String(row));
            res.add(sol);
            return;
        }
        for (int c = 0; c < n; c++) {
            if (col[c] || d1[r + c] || d2[r - c + n]) continue;
            col[c] = d1[r + c] = d2[r - c + n] = true; b[r][c] = 'Q';
            place(r + 1, n, b, col, d1, d2, res);
            col[c] = d1[r + c] = d2[r - c + n] = false; b[r][c] = '.';
        }
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 9.1 | | Fibonacci Number | E | recursion tree → see why memo helps | [LC 509](https://leetcode.com/problems/fibonacci-number/) |
| 9.2 | ★ | Subsets | M | pick / not-pick | [LC 78](https://leetcode.com/problems/subsets/) |
| 9.3 | ★ | Subsets II | M | sort + skip duplicates | [LC 90](https://leetcode.com/problems/subsets-ii/) |
| 9.4 | ★ | Permutations | M | used[] | [LC 46](https://leetcode.com/problems/permutations/) |
| 9.5 | | Permutations II | M | used[] + skip duplicates | [LC 47](https://leetcode.com/problems/permutations-ii/) |
| 9.6 | ★ | Combination Sum | M | reuse allowed → recurse with `i` | [LC 39](https://leetcode.com/problems/combination-sum/) |
| 9.7 | ★ | Combination Sum II | M | sort + skip duplicates | [LC 40](https://leetcode.com/problems/combination-sum-ii/) |
| 9.8 | | Combination Sum III | M | k numbers from 1–9 | [LC 216](https://leetcode.com/problems/combination-sum-iii/) |
| 9.9 | ★ | Letter Combinations of a Phone Number | M | one digit per level | [LC 17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |
| 9.10 | ★ | Generate Parentheses | M | open < n, close < open | [LC 22](https://leetcode.com/problems/generate-parentheses/) |
| 9.11 | ★ | Palindrome Partitioning | M | cut only at palindromes | [LC 131](https://leetcode.com/problems/palindrome-partitioning/) |
| 9.12 | ★ | Word Search | M | DFS on grid + unmark | [LC 79](https://leetcode.com/problems/word-search/) |
| 9.13 | | Rat in a Maze | M | 4-direction backtracking | [GFG](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) |
| 9.14 | | M-Coloring Problem | M | try each colour, check neighbours | [GFG](https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1) |
| 9.15 | | N-Queens | H | column + diagonal arrays | [LC 51](https://leetcode.com/problems/n-queens/) |
| 9.16 | | Sudoku Solver | H | row/col/box sets | [LC 37](https://leetcode.com/problems/sudoku-solver/) |

**Phase 9 total: 16 problems (9 ★)** — Partition to K Equal Sum Subsets is in Phase 22 (bitmask).

---

### Phase 10 — Linked List (Week 12)

**Concept.** Nodes connected by pointers; no random access. Four techniques solve almost everything:
1. **Dummy node** before the head — removes special cases when the head changes.
2. **Reverse in place** with `prev / cur / next`.
3. **Slow-fast pointers** — middle, cycle detection (Floyd), cycle start.
4. **Gap of n** — nth from the end in one pass.

Always draw the pointers before coding and check: empty list, one node, two nodes.

```java
class ListNode { int val; ListNode next; ListNode(int v) { val = v; } }

class LinkedListTemplates {
    ListNode reverse(ListNode head) {
        ListNode prev = null, cur = head;
        while (cur != null) {
            ListNode next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    ListNode middle(ListNode head) {                 // second middle for even length
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }
        return slow;
    }

    // Floyd: detect a cycle and return where it starts
    ListNode cycleStart(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next; fast = fast.next.next;
            if (slow == fast) {                        // they met inside the cycle
                slow = head;
                while (slow != fast) { slow = slow.next; fast = fast.next; }
                return slow;                           // distance math makes them meet at the start
            }
        }
        return null;
    }

    ListNode mergeTwo(ListNode a, ListNode b) {        // dummy node pattern
        ListNode dummy = new ListNode(0), tail = dummy;
        while (a != null && b != null) {
            if (a.val <= b.val) { tail.next = a; a = a.next; } else { tail.next = b; b = b.next; }
            tail = tail.next;
        }
        tail.next = (a != null) ? a : b;
        return dummy.next;
    }

    ListNode removeNthFromEnd(ListNode head, int n) {  // gap of n
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy, slow = dummy;
        for (int i = 0; i <= n; i++) fast = fast.next;
        while (fast != null) { fast = fast.next; slow = slow.next; }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 10.1 | | Design Linked List | M | implement it once yourself | [LC 707](https://leetcode.com/problems/design-linked-list/) |
| 10.2 | | Delete Node in a Linked List | M | copy next into current | [LC 237](https://leetcode.com/problems/delete-node-in-a-linked-list/) |
| 10.3 | | Remove Duplicates from Sorted List | E | skip equal next | [LC 83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) |
| 10.4 | ★ | Reverse Linked List | E | iterative and recursive | [LC 206](https://leetcode.com/problems/reverse-linked-list/) |
| 10.5 | ★ | Middle of the Linked List | E | slow-fast | [LC 876](https://leetcode.com/problems/middle-of-the-linked-list/) |
| 10.6 | ★ | Merge Two Sorted Lists | E | dummy node | [LC 21](https://leetcode.com/problems/merge-two-sorted-lists/) |
| 10.7 | ★ | Linked List Cycle | E | Floyd | [LC 141](https://leetcode.com/problems/linked-list-cycle/) |
| 10.8 | ★ | Linked List Cycle II | M | Floyd cycle start | [LC 142](https://leetcode.com/problems/linked-list-cycle-ii/) |
| 10.9 | ★ | Remove Nth Node From End of List | M | gap of n | [LC 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) |
| 10.10 | ★ | Intersection of Two Linked Lists | E | switch heads trick | [LC 160](https://leetcode.com/problems/intersection-of-two-linked-lists/) |
| 10.11 | ★ | Palindrome Linked List | E | middle + reverse second half | [LC 234](https://leetcode.com/problems/palindrome-linked-list/) |
| 10.12 | | Odd Even Linked List | M | two chains | [LC 328](https://leetcode.com/problems/odd-even-linked-list/) |
| 10.13 | ★ | Add Two Numbers | M | carry simulation | [LC 2](https://leetcode.com/problems/add-two-numbers/) |
| 10.14 | | Rotate List | M | make ring, cut at n − k | [LC 61](https://leetcode.com/problems/rotate-list/) |
| 10.15 | ★ | Reorder List | M | middle + reverse + weave | [LC 143](https://leetcode.com/problems/reorder-list/) |
| 10.16 | | Sort List | M | merge sort on a list | [LC 148](https://leetcode.com/problems/sort-list/) |
| 10.17 | ★ | Copy List with Random Pointer | M | interleave copies (O(1) space) or map | [LC 138](https://leetcode.com/problems/copy-list-with-random-pointer/) |
| 10.18 | | Flatten a Multilevel Doubly Linked List | M | DFS / stack | [LC 430](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) |
| 10.19 | | Reverse Nodes in k-Group | H | reverse k at a time, reconnect | [LC 25](https://leetcode.com/problems/reverse-nodes-in-k-group/) |

**Phase 10 total: 19 problems (11 ★)**

---

### Phase 11 — Stack & Queue, Monotonic Stack (Week 13)

**Concept.** A stack (LIFO) remembers "things still waiting for an answer" — matching brackets, pending operators, and especially **monotonic stacks**: keep indices in increasing/decreasing order so each element is pushed and popped once, giving "next greater/smaller element" for all indices in O(n). This single idea powers stock span, daily temperatures, histogram area, and sum of subarray minimums.

| Want | Scan | Pop while | Answer |
|---|---|---|---|
| Next greater (right) | left→right | `a[top] < a[i]` | set answer for popped index = `a[i]` |
| Next smaller (right) | left→right | `a[top] > a[i]` | same |
| Previous greater (left) | left→right | `a[top] <= a[i]` | after popping, top is the answer |
| Circular array | loop `i` from 0 to 2n−1 | use `i % n` | |

```java
import java.util.*;

class StackTemplates {
    int[] nextGreater(int[] a) {
        int n = a.length;
        int[] res = new int[n];
        Arrays.fill(res, -1);
        Deque<Integer> st = new ArrayDeque<>();              // indices still waiting for an answer
        for (int i = 0; i < n; i++) {
            while (!st.isEmpty() && a[st.peek()] < a[i]) res[st.pop()] = a[i];
            st.push(i);
        }
        return res;
    }

    int largestRectangleArea(int[] h) {
        Deque<Integer> st = new ArrayDeque<>();
        int best = 0, n = h.length;
        for (int i = 0; i <= n; i++) {
            int cur = (i == n) ? 0 : h[i];                    // sentinel 0 flushes the stack
            while (!st.isEmpty() && h[st.peek()] > cur) {
                int height = h[st.pop()];
                int left = st.isEmpty() ? -1 : st.peek();     // previous smaller index
                best = Math.max(best, height * (i - left - 1));
            }
            st.push(i);
        }
        return best;
    }

    boolean isValid(String s) {                                // bracket matching
        Deque<Character> st = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(') st.push(')');
            else if (c == '[') st.push(']');
            else if (c == '{') st.push('}');
            else if (st.isEmpty() || st.pop() != c) return false;
        }
        return st.isEmpty();
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 11.1 | ★ | Valid Parentheses | E | push expected closer | [LC 20](https://leetcode.com/problems/valid-parentheses/) |
| 11.2 | ★ | Min Stack | M | store (value, min so far) | [LC 155](https://leetcode.com/problems/min-stack/) |
| 11.3 | ★ | Implement Queue using Stacks | E | in/out stacks, amortised O(1) | [LC 232](https://leetcode.com/problems/implement-queue-using-stacks/) |
| 11.4 | | Implement Stack using Queues | E | rotate after push | [LC 225](https://leetcode.com/problems/implement-stack-using-queues/) |
| 11.5 | | Remove All Adjacent Duplicates In String | E | stack of chars | [LC 1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) |
| 11.6 | | Minimum Add to Make Parentheses Valid | M | balance counter | [LC 921](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |
| 11.7 | ★ | Evaluate Reverse Polish Notation | M | operand stack | [LC 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |
| 11.8 | | Simplify Path | M | stack of directory names | [LC 71](https://leetcode.com/problems/simplify-path/) |
| 11.9 | ★ | Decode String | M | stacks of counts and strings | [LC 394](https://leetcode.com/problems/decode-string/) |
| 11.10 | ★ | Asteroid Collision | M | stack simulation | [LC 735](https://leetcode.com/problems/asteroid-collision/) |
| 11.11 | | Next Greater Element I | E | monotonic stack + map | [LC 496](https://leetcode.com/problems/next-greater-element-i/) |
| 11.12 | ★ | Daily Temperatures | M | monotonic stack | [LC 739](https://leetcode.com/problems/daily-temperatures/) |
| 11.13 | ★ | Next Greater Element II | M | circular: loop 2n | [LC 503](https://leetcode.com/problems/next-greater-element-ii/) |
| 11.14 | ★ | Online Stock Span | M | previous greater | [LC 901](https://leetcode.com/problems/online-stock-span/) |
| 11.15 | | Car Fleet | M | sort by position, stack of times | [LC 853](https://leetcode.com/problems/car-fleet/) |
| 11.16 | ★ | Remove K Digits | M | increasing stack, greedy | [LC 402](https://leetcode.com/problems/remove-k-digits/) |
| 11.17 | | Sum of Subarray Minimums | M | contribution: left × right counts | [LC 907](https://leetcode.com/problems/sum-of-subarray-minimums/) |
| 11.18 | | Sum of Subarray Ranges | M | Σmax − Σmin contributions | [LC 2104](https://leetcode.com/problems/sum-of-subarray-ranges/) |
| 11.19 | ★ | Largest Rectangle in Histogram | H | previous/next smaller | [LC 84](https://leetcode.com/problems/largest-rectangle-in-histogram/) |
| 11.20 | | Maximal Rectangle | H | histogram per row | [LC 85](https://leetcode.com/problems/maximal-rectangle/) |

**Phase 11 total: 20 problems (11 ★)**

---

### Phase 12 — Greedy & Intervals (Week 14)

**Concept.** Greedy = make the locally best choice and never look back. It only works when you can argue an **exchange argument** ("swapping my choice for any other never makes things better"). If you can't argue it, suspect DP. Interval problems almost always start with **sorting**: by start to merge, by end to select the maximum number of non-overlapping intervals, or a **sweep** of +1 at start / −1 at end to find the maximum overlap.

```java
import java.util.*;

class GreedyTemplates {
    int[][] merge(int[][] iv) {
        Arrays.sort(iv, (x, y) -> Integer.compare(x[0], y[0]));        // by start
        List<int[]> res = new ArrayList<>();
        for (int[] cur : iv) {
            if (res.isEmpty() || res.get(res.size() - 1)[1] < cur[0]) res.add(cur);
            else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], cur[1]);
        }
        return res.toArray(new int[0][]);
    }

    // Max number of non-overlapping intervals: sort by END, keep whatever finishes first
    int maxNonOverlapping(int[][] iv) {
        Arrays.sort(iv, (x, y) -> Integer.compare(x[1], y[1]));
        int count = 0;
        long lastEnd = Long.MIN_VALUE;
        for (int[] cur : iv) if (cur[0] >= lastEnd) { count++; lastEnd = cur[1]; }
        return count;                     // "min removals" (LC 435) = n - count
    }

    // Max overlap at any moment (Minimum Platforms / Meeting Rooms II)
    int minPlatforms(int[] arr, int[] dep) {
        Arrays.sort(arr); Arrays.sort(dep);
        int i = 0, j = 0, cur = 0, best = 0;
        while (i < arr.length) {
            if (arr[i] <= dep[j]) { cur++; i++; best = Math.max(best, cur); }
            else { cur--; j++; }
        }
        return best;
    }

    // Jump Game II: BFS by levels over reachable ranges
    int jump(int[] a) {
        int jumps = 0, end = 0, far = 0;
        for (int i = 0; i < a.length - 1; i++) {
            far = Math.max(far, i + a[i]);
            if (i == end) { jumps++; end = far; }
        }
        return jumps;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 12.1 | | Assign Cookies | E | sort both, match smallest | [LC 455](https://leetcode.com/problems/assign-cookies/) |
| 12.2 | | Lemonade Change | E | give 10s before 5s | [LC 860](https://leetcode.com/problems/lemonade-change/) |
| 12.3 | | Fractional Knapsack | M | sort by value/weight | [GFG](https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1) |
| 12.4 | ★ | Jump Game | M | farthest reach | [LC 55](https://leetcode.com/problems/jump-game/) |
| 12.5 | ★ | Jump Game II | M | level ranges | [LC 45](https://leetcode.com/problems/jump-game-ii/) |
| 12.6 | ★ | Gas Station | M | reset start when tank < 0 | [LC 134](https://leetcode.com/problems/gas-station/) |
| 12.7 | | Candy | H | two passes | [LC 135](https://leetcode.com/problems/candy/) |
| 12.8 | ★ | Partition Labels | M | last occurrence | [LC 763](https://leetcode.com/problems/partition-labels/) |
| 12.9 | | Valid Parenthesis String | M | range of open counts | [LC 678](https://leetcode.com/problems/valid-parenthesis-string/) |
| 12.10 | | Hand of Straights | M | TreeMap, start from smallest | [LC 846](https://leetcode.com/problems/hand-of-straights/) |
| 12.11 | ★ | Merge Intervals | M | sort by start | [LC 56](https://leetcode.com/problems/merge-intervals/) |
| 12.12 | ★ | Insert Interval | M | before / overlap / after | [LC 57](https://leetcode.com/problems/insert-interval/) |
| 12.13 | ★ | Non-overlapping Intervals | M | sort by end | [LC 435](https://leetcode.com/problems/non-overlapping-intervals/) |
| 12.14 | | Minimum Number of Arrows to Burst Balloons | M | sort by end | [LC 452](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| 12.15 | ★ | N Meetings in One Room | E | sort by end | [GFG](https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1) |
| 12.16 | ★ | Minimum Platforms | M | sweep (replaces premium Meeting Rooms II) | [GFG](https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1) |
| 12.17 | | Job Sequencing Problem | M | sort by profit, latest free slot | [GFG](https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1) |

**Phase 12 total: 17 problems (9 ★)**

---

### Phase 13 — Binary Trees (Weeks 15–16)

**Concept.** Almost every tree problem is one of two traversals:
- **DFS (recursion):** ask "what does my parent need from me?" and return it (height, sum, found-node). If the answer is a path *through* a node, update a global answer inside the recursion — this is the **height-return pattern** (diameter, max path sum, balanced).
- **BFS (queue, level by level):** anything with "level", "view", "width", "nearest".

Learn traversals both recursively and iteratively. For "distance from a node" problems, build a **parent map** so the tree becomes an undirected graph and BFS from the target.

```java
import java.util.*;

class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; } }

class TreeTemplates {
    // Iterative inorder
    List<Integer> inorder(TreeNode root) {
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

    // Level order (BFS) — base for zigzag, right view, width, etc.
    List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();                          // nodes in the current level
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                level.add(node.val);
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
            res.add(level);
        }
        return res;
    }

    // Height-return pattern: return what the parent needs, update the global answer
    int diameter = 0;
    int height(TreeNode node) {
        if (node == null) return 0;
        int lh = height(node.left), rh = height(node.right);
        diameter = Math.max(diameter, lh + rh);           // longest path passing through node
        return 1 + Math.max(lh, rh);
    }

    // Max path sum: same pattern, ignore negative branches
    int best = Integer.MIN_VALUE;
    int gain(TreeNode node) {
        if (node == null) return 0;
        int l = Math.max(0, gain(node.left)), r = Math.max(0, gain(node.right));
        best = Math.max(best, node.val + l + r);
        return node.val + Math.max(l, r);
    }

    // Lowest common ancestor
    TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode l = lca(root.left, p, q), r = lca(root.right, p, q);
        if (l != null && r != null) return root;          // p and q split here
        return (l != null) ? l : r;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 13.1 | ★ | Binary Tree Inorder Traversal | E | recursive + iterative | [LC 94](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| 13.2 | ★ | Binary Tree Preorder Traversal | E | recursive + iterative | [LC 144](https://leetcode.com/problems/binary-tree-preorder-traversal/) |
| 13.3 | | Binary Tree Postorder Traversal | E | two stacks / reverse trick | [LC 145](https://leetcode.com/problems/binary-tree-postorder-traversal/) |
| 13.4 | ★ | Binary Tree Level Order Traversal | M | BFS by level | [LC 102](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 13.5 | ★ | Maximum Depth of Binary Tree | E | height | [LC 104](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 13.6 | | Minimum Depth of Binary Tree | E | BFS first leaf | [LC 111](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| 13.7 | ★ | Invert Binary Tree | E | swap children | [LC 226](https://leetcode.com/problems/invert-binary-tree/) |
| 13.8 | ★ | Same Tree | E | parallel DFS | [LC 100](https://leetcode.com/problems/same-tree/) |
| 13.9 | ★ | Symmetric Tree | E | mirror DFS | [LC 101](https://leetcode.com/problems/symmetric-tree/) |
| 13.10 | ★ | Balanced Binary Tree | E | height, −1 for unbalanced | [LC 110](https://leetcode.com/problems/balanced-binary-tree/) |
| 13.11 | ★ | Diameter of Binary Tree | E | height-return pattern | [LC 543](https://leetcode.com/problems/diameter-of-binary-tree/) |
| 13.12 | | Path Sum | E | subtract as you go | [LC 112](https://leetcode.com/problems/path-sum/) |
| 13.13 | | Path Sum II | M | backtracking on tree | [LC 113](https://leetcode.com/problems/path-sum-ii/) |
| 13.14 | | Subtree of Another Tree | E | same-tree at each node | [LC 572](https://leetcode.com/problems/subtree-of-another-tree/) |
| 13.15 | ★ | Zigzag Level Order Traversal | M | BFS + direction flag | [LC 103](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) |
| 13.16 | ★ | Binary Tree Right Side View | M | last node per level | [LC 199](https://leetcode.com/problems/binary-tree-right-side-view/) |
| 13.17 | | Top View of Binary Tree | M | BFS + column map (first seen) | [GFG](https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1) |
| 13.18 | | Bottom View of Binary Tree | M | BFS + column map (last seen) | [GFG](https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1) |
| 13.19 | | Boundary Traversal | M | left edge + leaves + right edge reversed | [GFG](https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1) |
| 13.20 | ★ | Vertical Order Traversal | H | (col, row, val) sorting | [LC 987](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) |
| 13.21 | ★ | Lowest Common Ancestor of a Binary Tree | M | split point | [LC 236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |
| 13.22 | | Maximum Width of Binary Tree | M | BFS with position indices | [LC 662](https://leetcode.com/problems/maximum-width-of-binary-tree/) |
| 13.23 | | Count Complete Tree Nodes | E | compare left/right heights, O(log² n) | [LC 222](https://leetcode.com/problems/count-complete-tree-nodes/) |
| 13.24 | ★ | All Nodes Distance K in Binary Tree | M | parent map + BFS | [LC 863](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) |
| 13.25 | | Amount of Time for Binary Tree to Be Infected | M | parent map + BFS | [LC 2385](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/) |
| 13.26 | ★ | Construct Tree from Preorder and Inorder | M | index map + recursion | [LC 105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |
| 13.27 | | Construct Tree from Inorder and Postorder | M | same idea from the end | [LC 106](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |
| 13.28 | | Flatten Binary Tree to Linked List | M | reverse preorder / Morris | [LC 114](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) |
| 13.29 | | Populating Next Right Pointers | M | use already-built next links | [LC 116](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) |
| 13.30 | ★ | Binary Tree Maximum Path Sum | H | height-return with gains | [LC 124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |
| 13.31 | ★ | Serialize and Deserialize Binary Tree | H | preorder with null markers | [LC 297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |

**Phase 13 total: 31 problems (17 ★)**

---

### Phase 14 — Binary Search Trees (Week 17)

**Concept.** BST property: every node in the left subtree < node < every node in the right subtree. Consequences: **inorder traversal is sorted**, and search/insert/delete are O(h) (O(log n) if balanced). Validate with a **(min, max) range**, not by comparing only with children. Deletion of a node with two children → replace with the **inorder successor** (min of right subtree).

```java
class BSTTemplates {
    boolean isValidBST(TreeNode node, long min, long max) {   // call with Long.MIN_VALUE, Long.MAX_VALUE
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;
        return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
    }

    TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else root.right = insert(root.right, val);
        return root;
    }

    TreeNode delete(TreeNode root, int key) {
        if (root == null) return null;
        if (key < root.val) root.left = delete(root.left, key);
        else if (key > root.val) root.right = delete(root.right, key);
        else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            TreeNode succ = root.right;                     // inorder successor
            while (succ.left != null) succ = succ.left;
            root.val = succ.val;
            root.right = delete(root.right, succ.val);
        }
        return root;
    }

    // LCA in a BST uses ordering, O(h)
    TreeNode lcaBST(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) root = root.left;
            else if (p.val > root.val && q.val > root.val) root = root.right;
            else return root;
        }
        return null;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 14.1 | | Search in a BST | E | go left/right | [LC 700](https://leetcode.com/problems/search-in-a-binary-search-tree/) |
| 14.2 | ★ | Insert into a BST | M | recursive insert | [LC 701](https://leetcode.com/problems/insert-into-a-binary-search-tree/) |
| 14.3 | ★ | Delete Node in a BST | M | successor replacement | [LC 450](https://leetcode.com/problems/delete-node-in-a-bst/) |
| 14.4 | ★ | Validate Binary Search Tree | M | (min, max) range | [LC 98](https://leetcode.com/problems/validate-binary-search-tree/) |
| 14.5 | ★ | Kth Smallest Element in a BST | M | inorder with counter | [LC 230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |
| 14.6 | ★ | LCA of a Binary Search Tree | M | ordering | [LC 235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| 14.7 | | Convert Sorted Array to BST | E | middle as root | [LC 108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) |
| 14.8 | | Construct BST from Preorder | M | upper-bound recursion | [LC 1008](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) |
| 14.9 | | Floor in BST | E | track best ≤ key | [GFG](https://www.geeksforgeeks.org/problems/floor-in-bst/1) |
| 14.10 | | Ceil in BST | E | track best ≥ key | [GFG](https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1) |
| 14.11 | ★ | BST Iterator | M | controlled iterative inorder | [LC 173](https://leetcode.com/problems/binary-search-tree-iterator/) |
| 14.12 | | Two Sum IV - Input is a BST | E | inorder + two pointers or set | [LC 653](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) |
| 14.13 | ★ | Recover Binary Search Tree | M | find the two inversions in inorder | [LC 99](https://leetcode.com/problems/recover-binary-search-tree/) |

**Phase 14 total: 13 problems (7 ★)**

---

### Phase 15 — Heap / Priority Queue (Week 18)

**Concept.** A heap gives the min (or max) in O(1) and insert/remove in O(log n). Four patterns:
1. **Top-K:** keep a heap of size K → O(n log K). For "K largest" use a **min**-heap (smallest of the top K sits on top and gets evicted).
2. **K-way merge:** push the head of each list; pop smallest, push its successor.
3. **Two heaps:** max-heap for lower half, min-heap for upper half → running median.
4. **Greedy scheduling:** always take the most frequent/most profitable available item.

```java
import java.util.*;

class HeapTemplates {
    int findKthLargest(int[] a, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();    // min-heap of the k largest so far
        for (int x : a) {
            pq.offer(x);
            if (pq.size() > k) pq.poll();
        }
        return pq.peek();
    }

    ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));
        for (ListNode node : lists) if (node != null) pq.offer(node);
        ListNode dummy = new ListNode(0), tail = dummy;
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            tail.next = node; tail = node;
            if (node.next != null) pq.offer(node.next);
        }
        return dummy.next;
    }
}

class MedianFinder {                                          // two heaps
    private final PriorityQueue<Integer> low = new PriorityQueue<>(Collections.reverseOrder());
    private final PriorityQueue<Integer> high = new PriorityQueue<>();
    public void addNum(int x) {
        low.offer(x);
        high.offer(low.poll());                               // keep every low <= every high
        if (high.size() > low.size()) low.offer(high.poll());
    }
    public double findMedian() {
        return low.size() > high.size() ? low.peek() : (low.peek() + (long) high.peek()) / 2.0;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 15.1 | | Last Stone Weight | E | max-heap simulation | [LC 1046](https://leetcode.com/problems/last-stone-weight/) |
| 15.2 | ★ | Kth Largest Element in a Stream | E | min-heap of size k | [LC 703](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 15.3 | ★ | Kth Largest Element in an Array | M | heap or quickselect | [LC 215](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 15.4 | ★ | K Closest Points to Origin | M | max-heap of size k | [LC 973](https://leetcode.com/problems/k-closest-points-to-origin/) |
| 15.5 | | Kth Smallest Element in a Sorted Matrix | M | k-way merge or BS on value | [LC 378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |
| 15.6 | ★ | Merge k Sorted Lists | H | k-way merge | [LC 23](https://leetcode.com/problems/merge-k-sorted-lists/) |
| 15.7 | ★ | Task Scheduler | M | greedy by frequency (or formula) | [LC 621](https://leetcode.com/problems/task-scheduler/) |
| 15.8 | | Reorganize String | M | place two most frequent at a time | [LC 767](https://leetcode.com/problems/reorganize-string/) |
| 15.9 | | Design Twitter | M | k-way merge of feeds | [LC 355](https://leetcode.com/problems/design-twitter/) |
| 15.10 | ★ | Find Median from Data Stream | H | two heaps | [LC 295](https://leetcode.com/problems/find-median-from-data-stream/) |
| 15.11 | | IPO | H | min-heap by capital + max-heap by profit | [LC 502](https://leetcode.com/problems/ipo/) |
| 15.12 | ★ | Top K Frequent Elements (heap version) | M | re-solve 2.14 with a size-k heap | [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) |

**Phase 15 total: 12 problems (7 ★)** — 15.12 is a re-solve, not a new problem.

---

### Phase 16 — Graphs I: Traversal, Cycles, Topological Sort (Weeks 19–20)

**Concept.** A graph = nodes + edges; store it as an **adjacency list** (`List<List<Integer>>`). A grid is an implicit graph (4 neighbours).
- **DFS**: explore deeply; connected components, flood fill, cycle detection.
- **BFS**: explore level by level; **shortest path in unweighted graphs**, "minimum steps", multi-source spreading (enqueue all sources first).
- **Cycle detection**: undirected → visited + parent (or DSU); directed → DFS with a "currently on path" array, or Kahn's algorithm.
- **Topological sort** (DAGs only): Kahn's BFS on in-degrees. If you can't output all n nodes, there's a cycle.
- **Bipartite**: 2-colour with BFS/DFS; conflict = odd cycle.

```java
import java.util.*;

class GraphTemplates {
    List<List<Integer>> buildUndirected(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }
        return adj;
    }

    // DFS on a grid: count islands
    int numIslands(char[][] g) {
        int count = 0;
        for (int r = 0; r < g.length; r++)
            for (int c = 0; c < g[0].length; c++)
                if (g[r][c] == '1') { count++; sink(g, r, c); }
        return count;
    }
    void sink(char[][] g, int r, int c) {
        if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] != '1') return;
        g[r][c] = '0';                                        // mark visited
        sink(g, r + 1, c); sink(g, r - 1, c); sink(g, r, c + 1); sink(g, r, c - 1);
    }

    // Multi-source BFS: rotting oranges
    int orangesRotting(int[][] g) {
        int R = g.length, C = g[0].length, fresh = 0, minutes = 0;
        Queue<int[]> q = new ArrayDeque<>();
        for (int r = 0; r < R; r++)
            for (int c = 0; c < C; c++) {
                if (g[r][c] == 2) q.offer(new int[]{r, c});
                else if (g[r][c] == 1) fresh++;
            }
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!q.isEmpty() && fresh > 0) {
            for (int size = q.size(); size > 0; size--) {
                int[] cell = q.poll();
                for (int[] d : dirs) {
                    int nr = cell[0] + d[0], nc = cell[1] + d[1];
                    if (nr < 0 || nc < 0 || nr >= R || nc >= C || g[nr][nc] != 1) continue;
                    g[nr][nc] = 2; fresh--;
                    q.offer(new int[]{nr, nc});
                }
            }
            minutes++;
        }
        return fresh == 0 ? minutes : -1;
    }

    // Kahn's algorithm: topological order (empty array means there is a cycle)
    int[] topoSort(int n, List<List<Integer>> adj) {
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
        return idx == n ? order : new int[0];
    }

    // Directed cycle via DFS: onPath marks nodes in the current recursion stack
    boolean hasCycle(int u, List<List<Integer>> adj, boolean[] visited, boolean[] onPath) {
        visited[u] = onPath[u] = true;
        for (int v : adj.get(u)) {
            if (onPath[v]) return true;                                 // back edge
            if (!visited[v] && hasCycle(v, adj, visited, onPath)) return true;
        }
        onPath[u] = false;
        return false;
    }

    // Bipartite by 2-colouring
    boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] color = new int[n];                                        // 0 = none, 1 / -1 = sides
        for (int s = 0; s < n; s++) {
            if (color[s] != 0) continue;
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

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 16.1 | ★ | Flood Fill | E | DFS/BFS | [LC 733](https://leetcode.com/problems/flood-fill/) |
| 16.2 | ★ | Number of Islands | M | DFS components | [LC 200](https://leetcode.com/problems/number-of-islands/) |
| 16.3 | | Max Area of Island | M | DFS returning size | [LC 695](https://leetcode.com/problems/max-area-of-island/) |
| 16.4 | ★ | Number of Provinces | M | components (DFS or DSU) | [LC 547](https://leetcode.com/problems/number-of-provinces/) |
| 16.5 | ★ | Clone Graph | M | DFS + old→new map | [LC 133](https://leetcode.com/problems/clone-graph/) |
| 16.6 | ★ | Rotting Oranges | M | multi-source BFS | [LC 994](https://leetcode.com/problems/rotting-oranges/) |
| 16.7 | ★ | 01 Matrix | M | multi-source BFS from zeros | [LC 542](https://leetcode.com/problems/01-matrix/) |
| 16.8 | | Surrounded Regions | M | DFS from the border | [LC 130](https://leetcode.com/problems/surrounded-regions/) |
| 16.9 | | Number of Enclaves | M | DFS from the border | [LC 1020](https://leetcode.com/problems/number-of-enclaves/) |
| 16.10 | | Pacific Atlantic Water Flow | M | reverse flow from both borders | [LC 417](https://leetcode.com/problems/pacific-atlantic-water-flow/) |
| 16.11 | ★ | Is Graph Bipartite? | M | 2-colouring | [LC 785](https://leetcode.com/problems/is-graph-bipartite/) |
| 16.12 | ★ | Detect Cycle in an Undirected Graph | M | visited + parent | [GFG](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1) |
| 16.13 | ★ | Detect Cycle in a Directed Graph | M | onPath array | [GFG](https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1) |
| 16.14 | | Topological Sort | M | Kahn / DFS finish order | [GFG](https://www.geeksforgeeks.org/problems/topological-sort/1) |
| 16.15 | ★ | Course Schedule | M | cycle check via Kahn | [LC 207](https://leetcode.com/problems/course-schedule/) |
| 16.16 | ★ | Course Schedule II | M | Kahn order | [LC 210](https://leetcode.com/problems/course-schedule-ii/) |
| 16.17 | | Find Eventual Safe States | M | reverse graph + Kahn | [LC 802](https://leetcode.com/problems/find-eventual-safe-states/) |
| 16.18 | | Alien Dictionary | H | build edges from adjacent words + topo | [GFG](https://www.geeksforgeeks.org/problems/alien-dictionary/1) |
| 16.19 | ★ | Word Ladder | H | BFS on word states | [LC 127](https://leetcode.com/problems/word-ladder/) |

**Phase 16 total: 19 problems (12 ★)**

---

### Phase 17 — Graphs II: Shortest Paths, MST, DSU, Advanced (Weeks 21–22)

**Concept.**
- **Dijkstra**: shortest paths with non-negative weights; min-heap of (node, dist); skip stale entries. O((V+E) log V).
- **Bellman-Ford**: relax all edges V−1 times; handles negative weights and detects negative cycles. Also the idea behind "at most K stops".
- **Floyd-Warshall**: all-pairs, O(V³), fine for V ≤ ~400.
- **DSU (Union-Find)**: near-O(1) "are these connected?" with path compression + union by size. Used for components, redundant edges, and **Kruskal's MST**.
- **Prim's MST**: like Dijkstra but the key is the edge weight, not the path length.
- **Bridges / articulation points** (Tarjan: discovery time + low-link) and **SCCs** (Kosaraju: DFS order, reverse graph, DFS again).

```java
import java.util.*;

class ShortestPathTemplates {
    static final int INF = (int) 1e9;

    // Dijkstra: adj.get(u) holds {v, w}
    int[] dijkstra(int n, List<List<int[]>> adj, int src) {
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[1], b[1]));
        pq.offer(new int[]{src, 0});
        while (!pq.isEmpty()) {
            int[] top = pq.poll();
            int u = top[0], d = top[1];
            if (d > dist[u]) continue;                                 // stale entry
            for (int[] e : adj.get(u)) {
                int v = e[0], w = e[1];
                if (d + w < dist[v]) { dist[v] = d + w; pq.offer(new int[]{v, dist[v]}); }
            }
        }
        return dist;
    }

    // Bellman-Ford: edges are {u, v, w}; returns null if a negative cycle is reachable
    int[] bellmanFord(int n, int[][] edges, int src) {
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[src] = 0;
        for (int i = 0; i < n - 1; i++)
            for (int[] e : edges)
                if (dist[e[0]] != INF && dist[e[0]] + e[2] < dist[e[1]]) dist[e[1]] = dist[e[0]] + e[2];
        for (int[] e : edges)                                          // still relaxing -> negative cycle
            if (dist[e[0]] != INF && dist[e[0]] + e[2] < dist[e[1]]) return null;
        return dist;
    }

    // Floyd-Warshall: d[i][j] = edge weight or INF, d[i][i] = 0
    void floydWarshall(int[][] d) {
        int n = d.length;
        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    if (d[i][k] != INF && d[k][j] != INF) d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
    }
}

class DSU {                                                             // path compression + union by size
    int[] parent, size;
    DSU(int n) {
        parent = new int[n]; size = new int[n];
        for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }
    }
    int find(int x) { return parent[x] == x ? x : (parent[x] = find(parent[x])); }
    boolean union(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;                                       // already connected -> cycle edge
        if (size[a] < size[b]) { int t = a; a = b; b = t; }
        parent[b] = a;
        size[a] += size[b];
        return true;
    }
}

class MSTTemplates {
    // Kruskal: edges {u, v, w}; sort by weight, keep edges that join two components
    int kruskal(int n, int[][] edges) {
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));
        DSU dsu = new DSU(n);
        int total = 0;
        for (int[] e : edges) if (dsu.union(e[0], e[1])) total += e[2];
        return total;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 17.1 | ★ | Shortest Path in Binary Matrix | M | BFS, 8 directions | [LC 1091](https://leetcode.com/problems/shortest-path-in-binary-matrix/) |
| 17.2 | ★ | Network Delay Time | M | Dijkstra | [LC 743](https://leetcode.com/problems/network-delay-time/) |
| 17.3 | ★ | Path With Minimum Effort | M | Dijkstra on max-edge cost | [LC 1631](https://leetcode.com/problems/path-with-minimum-effort/) |
| 17.4 | ★ | Cheapest Flights Within K Stops | M | BFS by stops / Bellman-Ford K rounds | [LC 787](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |
| 17.5 | | Number of Ways to Arrive at Destination | M | Dijkstra + counting, mod | [LC 1976](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) |
| 17.6 | | Bellman-Ford | M | V−1 relaxations | [GFG](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1) |
| 17.7 | | Floyd Warshall | M | k as the outer loop | [GFG](https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1) |
| 17.8 | | Find the City With the Smallest Number of Neighbors | M | Floyd-Warshall | [LC 1334](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) |
| 17.9 | ★ | Min Cost to Connect All Points | M | Prim or Kruskal | [LC 1584](https://leetcode.com/problems/min-cost-to-connect-all-points/) |
| 17.10 | ★ | Redundant Connection | M | DSU: first union that fails (covers premium Graph Valid Tree) | [LC 684](https://leetcode.com/problems/redundant-connection/) |
| 17.11 | ★ | Number of Operations to Make Network Connected | M | DSU components − 1 | [LC 1319](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) |
| 17.12 | ★ | Accounts Merge | M | DSU over emails | [LC 721](https://leetcode.com/problems/accounts-merge/) |
| 17.13 | | Most Stones Removed with Same Row or Column | M | DSU rows ↔ columns | [LC 947](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) |
| 17.14 | | Making A Large Island | H | DSU sizes + try each 0 | [LC 827](https://leetcode.com/problems/making-a-large-island/) |
| 17.15 | | Swim in Rising Water | H | Dijkstra / BS + BFS | [LC 778](https://leetcode.com/problems/swim-in-rising-water/) |
| 17.16 | | Critical Connections in a Network | H | Tarjan bridges | [LC 1192](https://leetcode.com/problems/critical-connections-in-a-network/) |
| 17.17 | | Strongly Connected Components (Kosaraju) | H | order, reverse, DFS | [GFG](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1) |

**Phase 17 total: 17 problems (8 ★)**

---

### Phase 18 — DP I: 1D and Grid (Week 23)

**Concept.** Dynamic Programming = recursion + remembering answers to overlapping sub-problems. The reliable way to learn it is to solve **every** DP problem in four steps:

1. **Recursion** — define `f(state)` in words ("max money robbing houses 0..i"), write the choices and base cases.
2. **Memoization** — cache `f(state)` in an array.
3. **Tabulation** — fill the same table bottom-up with loops.
4. **Space optimisation** — keep only the rows/values you actually read.

State design is the whole game: "what do I need to know to make the remaining decisions?"

```java
import java.util.*;

class DPOneDTemplates {
    // House Robber, four ways
    // 1) Recursion: f(i) = max(a[i] + f(i-2), f(i-1))      -> O(2^n)
    int rec(int[] a, int i) {
        if (i < 0) return 0;
        return Math.max(a[i] + rec(a, i - 2), rec(a, i - 1));
    }
    // 2) Memoization                                       -> O(n) time, O(n) space
    int memo(int[] a, int i, int[] dp) {                   // dp pre-filled with -1
        if (i < 0) return 0;
        if (dp[i] != -1) return dp[i];
        return dp[i] = Math.max(a[i] + memo(a, i - 2, dp), memo(a, i - 1, dp));
    }
    // 3) Tabulation: dp[i] = best using the first i houses
    int tab(int[] a) {
        int n = a.length;
        int[] dp = new int[n + 1];
        dp[1] = a[0];
        for (int i = 2; i <= n; i++) dp[i] = Math.max(a[i - 1] + dp[i - 2], dp[i - 1]);
        return dp[n];
    }
    // 4) Space optimised                                    -> O(1) space
    int opt(int[] a) {
        int prev2 = 0, prev1 = 0;
        for (int x : a) {
            int cur = Math.max(x + prev2, prev1);
            prev2 = prev1;
            prev1 = cur;
        }
        return prev1;
    }

    // Grid DP with a 1D rolling row: unique paths
    int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1);                                   // first row: one way to each cell
        for (int r = 1; r < m; r++)
            for (int c = 1; c < n; c++) dp[c] += dp[c - 1];   // from top (old dp[c]) + from left
        return dp[n - 1];
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 18.1 | ★ | Climbing Stairs | E | f(i) = f(i−1) + f(i−2) | [LC 70](https://leetcode.com/problems/climbing-stairs/) |
| 18.2 | | Min Cost Climbing Stairs | E | min of two previous | [LC 746](https://leetcode.com/problems/min-cost-climbing-stairs/) |
| 18.3 | ★ | Frog Jump (Geek Jump) | E | min energy, 1 or 2 steps | [GFG](https://www.geeksforgeeks.org/problems/geek-jump/1) |
| 18.4 | ★ | House Robber | M | pick / skip | [LC 198](https://leetcode.com/problems/house-robber/) |
| 18.5 | ★ | House Robber II | M | run twice: drop first / drop last | [LC 213](https://leetcode.com/problems/house-robber-ii/) |
| 18.6 | | Geek's Training (Ninja's Training) | M | state = (day, last activity) | [GFG](https://www.geeksforgeeks.org/problems/geeks-training/1) |
| 18.7 | ★ | Decode Ways | M | one or two digits | [LC 91](https://leetcode.com/problems/decode-ways/) |
| 18.8 | ★ | Word Break | M | dp[i] = some dp[j] and s[j..i) in dict | [LC 139](https://leetcode.com/problems/word-break/) |
| 18.9 | ★ | Unique Paths | M | grid DP | [LC 62](https://leetcode.com/problems/unique-paths/) |
| 18.10 | | Unique Paths II | M | obstacles → 0 | [LC 63](https://leetcode.com/problems/unique-paths-ii/) |
| 18.11 | ★ | Minimum Path Sum | M | grid DP | [LC 64](https://leetcode.com/problems/minimum-path-sum/) |
| 18.12 | | Triangle | M | bottom-up | [LC 120](https://leetcode.com/problems/triangle/) |
| 18.13 | | Minimum Falling Path Sum | M | 3 parents per cell | [LC 931](https://leetcode.com/problems/minimum-falling-path-sum/) |
| 18.14 | | Maximal Square | M | min of 3 neighbours + 1 | [LC 221](https://leetcode.com/problems/maximal-square/) |
| 18.15 | | Cherry Pickup II | H | 3D DP: row, col1, col2 | [LC 1463](https://leetcode.com/problems/cherry-pickup-ii/) |

**Phase 18 total: 15 problems (8 ★)**

---

### Phase 19 — DP II: Subsets and Knapsack (Week 24)

**Concept.** "Choose a subset of items under a capacity/target" → knapsack. State = (item index, remaining capacity).
- **0/1 knapsack** (each item once): with a 1D array, loop capacity **downwards**.
- **Unbounded** (items reusable, e.g., coins): loop capacity **upwards**.
- Many problems reduce to **subset sum**: Partition Equal Subset Sum (target = total/2), Target Sum and "count partitions with difference D" (target = (total + D)/2).
- **Combinations vs permutations** in counting: coins in the outer loop = combinations (LC 518); amount in the outer loop = permutations (LC 377).

```java
import java.util.*;

class KnapsackTemplates {
    // 0/1 knapsack: capacity DOWNWARDS so each item is used once
    int knapsack01(int[] wt, int[] val, int W) {
        int[] dp = new int[W + 1];
        for (int i = 0; i < wt.length; i++)
            for (int c = W; c >= wt[i]; c--)
                dp[c] = Math.max(dp[c], val[i] + dp[c - wt[i]]);
        return dp[W];
    }

    // Subset sum
    boolean subsetSum(int[] a, int target) {
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int x : a)
            for (int t = target; t >= x; t--) dp[t] |= dp[t - x];
        return dp[target];
    }

    // Unbounded: Coin Change (min coins), capacity UPWARDS so a coin can be reused
    int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);                       // amount + 1 acts as infinity
        dp[0] = 0;
        for (int coin : coins)
            for (int a = coin; a <= amount; a++)
                dp[a] = Math.min(dp[a], dp[a - coin] + 1);
        return dp[amount] > amount ? -1 : dp[amount];
    }

    // Count combinations (Coin Change II): coins outer loop
    int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int coin : coins)
            for (int a = coin; a <= amount; a++) dp[a] += dp[a - coin];
        return dp[amount];
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 19.1 | ★ | Subset Sum Problem | M | boolean knapsack | [GFG](https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1) |
| 19.2 | ★ | Partition Equal Subset Sum | M | subset sum to total/2 | [LC 416](https://leetcode.com/problems/partition-equal-subset-sum/) |
| 19.3 | | Partitions with Given Difference | M | count subsets to (total + d)/2 | [GFG](https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1) |
| 19.4 | ★ | Target Sum | M | same reduction as 19.3 | [LC 494](https://leetcode.com/problems/target-sum/) |
| 19.5 | | Last Stone Weight II | M | closest subset to total/2 | [LC 1049](https://leetcode.com/problems/last-stone-weight-ii/) |
| 19.6 | ★ | 0-1 Knapsack | M | classic | [GFG](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1) |
| 19.7 | ★ | Coin Change | M | unbounded, min | [LC 322](https://leetcode.com/problems/coin-change/) |
| 19.8 | ★ | Coin Change II | M | unbounded, count combinations | [LC 518](https://leetcode.com/problems/coin-change-ii/) |
| 19.9 | ★ | Unbounded Knapsack | M | capacity upwards | [GFG](https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1) |
| 19.10 | | Rod Cutting | M | unbounded knapsack | [GFG](https://www.geeksforgeeks.org/problems/rod-cutting0840/1) |
| 19.11 | | Combination Sum IV | M | count permutations (amount outer loop) | [LC 377](https://leetcode.com/problems/combination-sum-iv/) |

**Phase 19 total: 11 problems (7 ★)**

---

### Phase 20 — DP III: Strings and LIS (Weeks 25–26)

**Concept.** Two-string DP uses `dp[i][j]` = answer for prefixes `s1[0..i)` and `s2[0..j)`. If the characters match, move diagonally; otherwise take the best of dropping one character. **LCS** is the parent of many problems:
- Longest Palindromic Subsequence = LCS(s, reverse(s)).
- Min insertions to make palindrome = n − LPS.
- Min deletions to make two strings equal = n + m − 2·LCS.
- Shortest Common Supersequence length = n + m − LCS.

**Edit Distance**: match → `dp[i-1][j-1]`; else `1 + min(insert, delete, replace)`.
**LIS**: O(n²) DP for variants (count, print, divisible subset, string chain); O(n log n) with the "tails" array for length only.

```java
class StringDPTemplates {
    int lcs(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                dp[i][j] = (a.charAt(i - 1) == b.charAt(j - 1))
                        ? 1 + dp[i - 1][j - 1]
                        : Math.max(dp[i - 1][j], dp[i][j - 1]);
        return dp[n][m];
    }

    int editDistance(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) dp[i][0] = i;              // delete everything
        for (int j = 0; j <= m; j++) dp[0][j] = j;              // insert everything
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                dp[i][j] = (a.charAt(i - 1) == b.charAt(j - 1))
                        ? dp[i - 1][j - 1]
                        : 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
        return dp[n][m];
    }

    // LIS in O(n log n): tails[k] = smallest tail of an increasing subsequence of length k+1
    int lengthOfLIS(int[] a) {
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
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 20.1 | ★ | Longest Common Subsequence | M | the parent problem | [LC 1143](https://leetcode.com/problems/longest-common-subsequence/) |
| 20.2 | ★ | Longest Palindromic Subsequence | M | LCS with reverse | [LC 516](https://leetcode.com/problems/longest-palindromic-subsequence/) |
| 20.3 | | Minimum Insertion Steps to Make a String Palindrome | H | n − LPS | [LC 1312](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) |
| 20.4 | | Delete Operation for Two Strings | M | n + m − 2·LCS | [LC 583](https://leetcode.com/problems/delete-operation-for-two-strings/) |
| 20.5 | | Shortest Common Supersequence | H | build from the LCS table | [LC 1092](https://leetcode.com/problems/shortest-common-supersequence/) |
| 20.6 | ★ | Edit Distance | M | insert / delete / replace | [LC 72](https://leetcode.com/problems/edit-distance/) |
| 20.7 | | Distinct Subsequences | H | count matches (use `long`/`double`) | [LC 115](https://leetcode.com/problems/distinct-subsequences/) |
| 20.8 | ★ | Wildcard Matching | H | `*` = empty or one more char | [LC 44](https://leetcode.com/problems/wildcard-matching/) |
| 20.9 | | Regular Expression Matching | H | `x*` = zero or more of x | [LC 10](https://leetcode.com/problems/regular-expression-matching/) |
| 20.10 | ★ | Longest Increasing Subsequence | M | O(n²) then O(n log n) | [LC 300](https://leetcode.com/problems/longest-increasing-subsequence/) |
| 20.11 | ★ | Largest Divisible Subset | M | LIS + parent pointers to print | [LC 368](https://leetcode.com/problems/largest-divisible-subset/) |
| 20.12 | ★ | Longest String Chain | M | sort by length + LIS | [LC 1048](https://leetcode.com/problems/longest-string-chain/) |
| 20.13 | | Number of Longest Increasing Subsequence | M | LIS + count array | [LC 673](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |
| 20.14 | | Russian Doll Envelopes | H | sort (w asc, h desc) + LIS | [LC 354](https://leetcode.com/problems/russian-doll-envelopes/) |

**Phase 20 total: 14 problems (7 ★)**

---

### Phase 21 — DP IV: Stocks, Partition and Interval DP (Week 27)

**Concept.**
- **Stocks = state machine DP.** States: holding / not holding (plus transactions left or cooldown). Each day, each state either stays or transitions (buy/sell). One template solves all six problems.
- **Partition / interval DP.** `dp[i][j]` = best answer for the segment `i..j`; try every split point `k`. Iterate by increasing segment length. Classic: Matrix Chain Multiplication, Burst Balloons (think of the **last** balloon to burst), Minimum Cost to Cut a Stick.
- **Front partition DP**: `dp[i]` = best for suffix/prefix from `i`, try every cut `j` (Palindrome Partitioning II, Partition Array for Max Sum).

```java
class AdvancedDPTemplates {
    // Stocks with transaction fee (LC 714). Remove the fee for LC 122.
    int maxProfitWithFee(int[] prices, int fee) {
        long hold = Long.MIN_VALUE / 2, free = 0;
        for (int p : prices) {
            long newHold = Math.max(hold, free - p);          // keep holding, or buy today
            long newFree = Math.max(free, hold + p - fee);    // keep resting, or sell today
            hold = newHold;
            free = newFree;
        }
        return (int) free;
    }

    // Matrix Chain Multiplication: matrix i has dims arr[i-1] x arr[i], for i = 1..n-1
    int mcm(int[] arr) {
        int n = arr.length;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++)                     // number of matrices in the chain
            for (int i = 1; i + len - 1 < n; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++)                   // split point
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]);
            }
        return dp[1][n - 1];
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 21.1 | ★ | Best Time to Buy and Sell Stock II | M | unlimited transactions | [LC 122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |
| 21.2 | ★ | Best Time with Cooldown | M | add a cooldown state | [LC 309](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) |
| 21.3 | | Best Time with Transaction Fee | M | fee on sell | [LC 714](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) |
| 21.4 | | Best Time to Buy and Sell Stock III | H | at most 2 transactions | [LC 123](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) |
| 21.5 | | Best Time to Buy and Sell Stock IV | H | at most k transactions | [LC 188](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) |
| 21.6 | ★ | Matrix Chain Multiplication | H | interval DP | [GFG](https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1) |
| 21.7 | | Minimum Cost to Cut a Stick | H | sort cuts + interval DP | [LC 1547](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) |
| 21.8 | | Burst Balloons | H | choose the last balloon | [LC 312](https://leetcode.com/problems/burst-balloons/) |
| 21.9 | | Palindrome Partitioning II | H | front partition + palindrome table | [LC 132](https://leetcode.com/problems/palindrome-partitioning-ii/) |
| 21.10 | | Partition Array for Maximum Sum | M | front partition | [LC 1043](https://leetcode.com/problems/partition-array-for-maximum-sum/) |
| 21.11 | ★ | Maximum Profit in Job Scheduling | H | sort by end + DP + binary search | [LC 1235](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) |

**Phase 21 total: 11 problems (4 ★)**

---

### Phase 22 — Bit Manipulation and Trie (Week 28)

**Bits — concept.** Integers are 32-bit two's complement in Java. A few identities solve most problems:

| Trick | Meaning |
|---|---|
| `x & 1` | is x odd |
| `(x >> k) & 1` | k-th bit |
| `x \| (1 << k)`, `x & ~(1 << k)`, `x ^ (1 << k)` | set / clear / toggle bit k |
| `x & (x - 1)` | clear the lowest set bit (count bits by repeating) |
| `x & -x` | isolate the lowest set bit |
| `x > 0 && (x & (x - 1)) == 0` | power of two |
| `a ^ a = 0`, `a ^ 0 = a` | pairs cancel under XOR |
| `>>>` | unsigned right shift in Java |
| masks `0..(1<<n)-1` | enumerate all subsets of n items |

**Trie — concept.** A tree of characters where each path from the root spells a prefix. Insert/search in O(word length), independent of the number of words. A **binary trie** (children 0/1, from the highest bit down) finds the max XOR partner of a number greedily.

```java
import java.util.*;

class BitTemplates {
    int countBits(int x) { int c = 0; while (x != 0) { x &= x - 1; c++; } return c; }

    List<List<Integer>> subsetsByMask(int[] a) {
        List<List<Integer>> res = new ArrayList<>();
        int n = a.length;
        for (int mask = 0; mask < (1 << n); mask++) {
            List<Integer> cur = new ArrayList<>();
            for (int i = 0; i < n; i++) if ((mask >> i & 1) == 1) cur.add(a[i]);
            res.add(cur);
        }
        return res;
    }
}

class Trie {
    private static class Node { Node[] next = new Node[26]; boolean end; }
    private final Node root = new Node();

    public void insert(String w) {
        Node cur = root;
        for (char ch : w.toCharArray()) {
            int i = ch - 'a';
            if (cur.next[i] == null) cur.next[i] = new Node();
            cur = cur.next[i];
        }
        cur.end = true;
    }
    public boolean search(String w) { Node n = walk(w); return n != null && n.end; }
    public boolean startsWith(String p) { return walk(p) != null; }
    private Node walk(String s) {
        Node cur = root;
        for (char ch : s.toCharArray()) {
            cur = cur.next[ch - 'a'];
            if (cur == null) return null;
        }
        return cur;
    }
}
```

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 22.1 | | Power of Two | E | `x & (x-1)` | [LC 231](https://leetcode.com/problems/power-of-two/) |
| 22.2 | ★ | Number of 1 Bits | E | Brian Kernighan | [LC 191](https://leetcode.com/problems/number-of-1-bits/) |
| 22.3 | ★ | Counting Bits | E | `dp[i] = dp[i >> 1] + (i & 1)` | [LC 338](https://leetcode.com/problems/counting-bits/) |
| 22.4 | | Minimum Bit Flips to Convert Number | E | popcount of XOR | [LC 2220](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/) |
| 22.5 | | Reverse Bits | E | shift in/out 32 times | [LC 190](https://leetcode.com/problems/reverse-bits/) |
| 22.6 | ★ | Single Number II | M | count each bit mod 3 | [LC 137](https://leetcode.com/problems/single-number-ii/) |
| 22.7 | | Single Number III | M | split by lowest differing bit | [LC 260](https://leetcode.com/problems/single-number-iii/) |
| 22.8 | | Sum of Two Integers | M | XOR + carry | [LC 371](https://leetcode.com/problems/sum-of-two-integers/) |
| 22.9 | | Divide Two Integers | M | shift-subtract, overflow edge | [LC 29](https://leetcode.com/problems/divide-two-integers/) |
| 22.10 | | Maximum Product of Word Lengths | M | 26-bit mask per word | [LC 318](https://leetcode.com/problems/maximum-product-of-word-lengths/) |
| 22.11 | | Partition to K Equal Sum Subsets | M | backtracking / bitmask DP | [LC 698](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |
| 22.12 | ★ | Implement Trie (Prefix Tree) | M | children[26] + end flag | [LC 208](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| 22.13 | | Longest Word in Dictionary | M | trie, every prefix must end a word | [LC 720](https://leetcode.com/problems/longest-word-in-dictionary/) |
| 22.14 | ★ | Design Add and Search Words | M | trie + DFS on `.` | [LC 211](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |
| 22.15 | ★ | Maximum XOR of Two Numbers in an Array | M | binary trie | [LC 421](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |
| 22.16 | ★ | Word Search II | H | trie + grid backtracking (do 9.12 first) | [LC 212](https://leetcode.com/problems/word-search-ii/) |

**Phase 22 total: 16 problems (7 ★)**

---

### Phase 23 — Segment Tree / Fenwick Tree and Design Problems (Week 29)

**Segment tree — concept.** A binary tree over array ranges: each node stores the answer (sum/min/max) for its range. Query and point-update in O(log n). Use it when both **range queries and updates** are mixed. A **Fenwick tree (BIT)** does prefix sums with updates in O(log n) with much less code. "Count smaller after self / reverse pairs / inversions" are solved with merge sort counting or a BIT over compressed values.

**Design — concept.** Combine data structures so every operation hits its target complexity. LRU = HashMap (key → node) + doubly linked list (recency order), all O(1).

```java
import java.util.*;

class SegmentTree {                                     // range sum + point update
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
        if (qr < l || r < ql) return 0;                 // no overlap
        if (ql <= l && r <= qr) return tree[node];      // full overlap
        int m = (l + r) / 2;
        return query(2 * node, l, m, ql, qr) + query(2 * node + 1, m + 1, r, ql, qr);
    }
}

class Fenwick {                                         // prefix sums, 0-indexed API
    private final int[] bit;
    Fenwick(int n) { bit = new int[n + 1]; }
    void add(int i, int delta) { for (i++; i < bit.length; i += i & -i) bit[i] += delta; }
    int prefix(int i) { int s = 0; for (i++; i > 0; i -= i & -i) s += bit[i]; return s; }   // sum a[0..i]
}

class LRUCache {                                        // HashMap + doubly linked list
    private class Node { int key, val; Node prev, next; Node(int k, int v) { key = k; val = v; } }
    private final int cap;
    private final Map<Integer, Node> map = new HashMap<>();
    private final Node head = new Node(0, 0), tail = new Node(0, 0);   // sentinels

    public LRUCache(int capacity) { cap = capacity; head.next = tail; tail.prev = head; }

    public int get(int key) {
        Node n = map.get(key);
        if (n == null) return -1;
        remove(n); addFront(n);                          // most recently used
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
```

> **Count inversions with merge sort:** while merging, when `a[j] < a[i]` (right element smaller), add `mid - i + 1` inversions — every remaining left element is bigger.

| # | ★ | Problem | Lvl | Key idea | Link |
|---|---|---|---|---|---|
| 23.1 | ★ | Count Inversions | M | merge sort counting | [GFG](https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1) |
| 23.2 | ★ | Range Sum Query - Mutable | M | segment tree / BIT | [LC 307](https://leetcode.com/problems/range-sum-query-mutable/) |
| 23.3 | | Range Minimum Query | M | segment tree with min | [GFG](https://www.geeksforgeeks.org/problems/range-minimum-query/1) |
| 23.4 | | Reverse Pairs | H | merge sort counting | [LC 493](https://leetcode.com/problems/reverse-pairs/) |
| 23.5 | | Count of Smaller Numbers After Self | H | BIT + coordinate compression | [LC 315](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |
| 23.6 | | Design HashSet | E | buckets + chaining | [LC 705](https://leetcode.com/problems/design-hashset/) |
| 23.7 | | Design HashMap | E | buckets + chaining | [LC 706](https://leetcode.com/problems/design-hashmap/) |
| 23.8 | ★ | LRU Cache | M | HashMap + DLL | [LC 146](https://leetcode.com/problems/lru-cache/) |
| 23.9 | ★ | Insert Delete GetRandom O(1) | M | ArrayList + index map, swap-remove | [LC 380](https://leetcode.com/problems/insert-delete-getrandom-o1/) |
| 23.10 | ★ | Time Based Key-Value Store | M | map of lists + binary search | [LC 981](https://leetcode.com/problems/time-based-key-value-store/) |
| 23.11 | | Design Browser History | M | array + pointer or two stacks | [LC 1472](https://leetcode.com/problems/design-browser-history/) |
| 23.12 | | LFU Cache | H | key map + frequency → LinkedHashSet | [LC 460](https://leetcode.com/problems/lfu-cache/) |

**Phase 23 total: 12 problems (5 ★)**

---

### Phase 24 — Interview Simulation (Week 30 onward, and forever)

No new topics. This is where speed and confidence come from.

- **Mixed timed sets:** 3 random problems (1 E, 2 M) in 75 minutes, no tags visible. 3× per week.
- **Weekly contests:** LeetCode Weekly + Biweekly. Aim to solve Q1–Q2 consistently, then Q3. Upsolve (finish after the contest) every problem you missed.
- **Company prep (2–3 weeks before a drive):** GFG company-wise problem pages, recent interview experiences on GFG/LeetCode Discuss for that company.
- **Re-solve all ★ problems** at least once in the final month, under a 25-minute timer each.
- **Mock interviews:** 1–2 per week with a peer, speaking your approach aloud.

---

### Grand total

| | Count |
|---|---|
| New problems | **377** (Phases 0–23, excluding the 15.12 re-solve) |
| ★ must-do | **195** |
| Fast track (★ only, ~14 weeks) | 195 problems ≈ 14/week ≈ 2–3/day |
| Full track (~30 weeks) | 377 problems ≈ 12–13/week ≈ 2/day |

---

## 7. Beyond DSA: what actually gets you the offer

Start this track in **Week 8**, ~45 minutes a day. Rotate one subject per week.

### 7.1 Core Java (you'll be asked about the language you code in)
- OOP pillars with real examples: encapsulation, abstraction, inheritance, polymorphism (overloading vs overriding).
- Abstract class vs interface; `final`, `static`, access modifiers.
- `equals()` / `hashCode()` contract; **how HashMap works internally** (hashing, buckets, collisions, treeification, resizing).
- String immutability, String pool, `StringBuilder` vs `StringBuffer`.
- Exceptions (checked vs unchecked), `try-with-resources`.
- Collections: ArrayList vs LinkedList, HashMap vs TreeMap vs LinkedHashMap, `Comparable` vs `Comparator`.
- Multithreading basics: `Thread`/`Runnable`, `synchronized`, `volatile`, `ExecutorService`, deadlock.
- JVM memory: stack vs heap, garbage collection (high level).

### 7.2 CS fundamentals (commonly asked in product-company interviews)
| Subject | Must-know topics |
|---|---|
| **DBMS** | ER model, keys, normalisation (1NF–BCNF), ACID, transactions & isolation levels, indexing (B+ tree), joins |
| **SQL** | SELECT/JOIN/GROUP BY/HAVING, subqueries, window functions (RANK, ROW_NUMBER), Nth highest salary. Practice: [LeetCode Top SQL 50](https://leetcode.com/studyplan/top-sql-50/) |
| **Operating Systems** | Process vs thread, scheduling algorithms, synchronisation (mutex, semaphore), deadlock (conditions, prevention), paging, virtual memory, thrashing |
| **Computer Networks** | OSI vs TCP/IP, TCP vs UDP, 3-way handshake, HTTP/HTTPS, DNS, "what happens when you type a URL" |

### 7.3 Low-Level Design (LLD) — increasingly asked of freshers
- **SOLID** principles with code examples.
- Patterns: Singleton, Factory, Builder, Strategy, Observer (know when and why).
- Practice designs (class diagram + core code in Java): Parking Lot, Tic-Tac-Toe, Snake & Ladder, LRU Cache, Library Management, Splitwise, Elevator, BookMyShow.
- Basic HLD awareness: client-server, load balancer, caching, database replication/sharding, CAP theorem, rate limiting.

### 7.4 Projects (DSA gets the interview, projects help get the offer)
- 1–2 solid projects you can defend deeply — e.g., a **Spring Boot + SQL backend** with authentication, pagination, caching, and deployment, or a full-stack app.
- Put measurable outcomes on the resume ("reduced API latency from 800 ms to 120 ms using Redis caching").
- Keep the code on GitHub with a clear README.

### 7.5 AI-assisted interview readiness (new in 2025–2026)
Some companies now let you use an AI assistant in a coding round; many still don't. Prepare for both:
- Practise **reading unfamiliar code** and finding bugs (review AI-generated solutions to problems you've already solved and hunt for edge-case failures).
- Always be able to explain **why** code is correct and what its complexity is — you own every line.
- Keep solving without AI for your core practice; you need the fundamentals to judge AI output.

### 7.6 Behavioural and communication
- Prepare 5 **STAR** stories (Situation, Task, Action, Result): a hard bug, a conflict, a failure, leading something, going beyond scope.
- Amazon-style interviews weave Leadership Principle questions into every round — read their LPs and map your stories to them.
- In coding rounds: clarify → brute force → optimise → code → test, **talking throughout**.

### 7.7 Aptitude (for OAs that include it)
Quant (percentages, ratios, time-work, probability), logical reasoning, and data interpretation — 20 minutes a few times a week in the month before drives.

### 7.8 Profiles and applications
- LeetCode profile with steady activity; a contest rating is a nice signal but not required.
- LinkedIn + resume (1 page, projects and skills first for freshers).
- Apply on company career pages, through campus drives, and via referrals.

---

## 8. Weekly routine and progress targets

### Daily (2–3 hours)

| Block | Time | What |
|---|---|---|
| Learn | 20–30 min | Read the phase concept + type the template from memory |
| Solve | 90 min | 2–3 new problems with the 6-step loop |
| Revise | 20 min | 1–2 problems from your spaced-revision list |
| Beyond DSA (from Week 8) | 45 min | Section 7 rotation |

### Weekly
- **Mon–Fri:** new problems for the current phase.
- **Saturday:** LeetCode contest (or a 90-minute mock of 3 random problems) + upsolving.
- **Sunday:** 5 random ★ re-solves under timers + update the mistake log + plan next week.

### Checkpoints

| By week | You should be able to... |
|---|---|
| 6 | Solve most array/hashing/two-pointer/sliding-window Mediums in ~30 min |
| 11 | Write binary search on answer and backtracking templates from memory |
| 17 | Solve standard tree/BST Mediums in ~25 min; explain recursion stack space |
| 22 | Pick BFS vs DFS vs Dijkstra vs DSU instantly; code Dijkstra and DSU from memory |
| 27 | Go from recursion → memo → tabulation for any standard DP |
| 30 | Solve 2 Mediums + attempt 1 Hard in 90 minutes; explain everything aloud |

---

## 9. Sources

Research used for Section 2 (placement landscape as of 2026). Company-specific details come from candidate reports and prep sites, so treat them as typical patterns, not official rules.

- [FACE Prep — Product vs Service Company: Fresher Guide 2026](https://faceprep.in/article/differences-between-product-based-companies-and-service-based-companies/)
- [Greenroom — Campus Placement Interview Guide India, Freshers 2026](https://usegreenroom.app/blog/campus-placement-interview-guide-india)
- [PapersAdda — Top 15 Product Companies Hiring Freshers India 2026](https://papersadda.com/article/top-15-product-companies-hiring-freshers-india-2026/)
- [PapersAdda — Amazon Online Assessment 2026](https://papersadda.com/article/amazon-online-assessment-2026/)
- [PapersAdda — Amazon Coding Round Questions 2026](https://papersadda.com/article/amazon-coding-round-questions-2026/)
- [Jobaaj Learnings — Amazon India Interview Questions 2026](https://www.jobaajlearnings.com/blog/amazon-india-interview-questions-answers-2026)
- [Preplaced — How to Get Placed in a Product-Based Company](https://www.preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap)
- [Let's Code — Service to Product Company Guide 2026](https://www.lets-code.co.in/blogs/how-to-switch-from-service-based-to-product-based-company-in-india-2026-complete-guide/)
- [Exponent — Google's AI-Assisted Coding Interview (2026)](https://www.tryexponent.com/blog/google-ai-coding-interview)
- [Formation — What AI-Assisted Coding Interviews Actually Score](https://formation.dev/blog/ai-assisted-coding-interviews)
- [StudyAlgorithms — Coding Interviews in 2026](https://studyalgorithms.com/misc/coding-interviews-2026/)

---

*Let's rock it. One pattern at a time, one problem a day more than yesterday.* 🚀
