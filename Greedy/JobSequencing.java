package org.example.greedy;

import java.util.*;

class Job {
    int id;
    int deadline;
    int profit;

    Job(int id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

public class JobSequencing {

    public static int[] jobScheduling(Job[] jobs, int n) {
        // Step 1: Sort jobs in descending order of profit
        Arrays.sort(jobs, (a, b) -> b.profit - a.profit);

        // Step 2: Find max deadline to create time slots
        int maxDeadline = 0;
        for (Job job : jobs) {
            maxDeadline = Math.max(maxDeadline, job.deadline);
        }

        // Step 3: Create time slots array to keep track of used slots
        int[] slots = new int[maxDeadline + 1]; // 1-based indexing
        Arrays.fill(slots, -1);

        int countJobs = 0;
        int totalProfit = 0;

        // Step 4: Try to schedule each job at latest available slot before its deadline
        for (Job job : jobs) {
            for (int j = job.deadline; j > 0; j--) {
                if (slots[j] == -1) {
                    slots[j] = job.id;
                    countJobs++;
                    totalProfit += job.profit;
                    break;
                }
            }
        }

        return new int[]{countJobs, totalProfit};
    }

    public static void main(String[] args) {
        Job[] jobs1 = {
                new Job(1, 4, 20),
                new Job(2, 1, 10),
                new Job(3, 1, 40),
                new Job(4, 1, 30)
        };
        int[] result1 = jobScheduling(jobs1, jobs1.length);
        System.out.println(result1[0] + " " + result1[1]); // Output: 2 60

        Job[] jobs2 = {
                new Job(1, 2, 100),
                new Job(2, 1, 19),
                new Job(3, 2, 27),
                new Job(4, 1, 25),
                new Job(5, 1, 15)
        };
        int[] result2 = jobScheduling(jobs2, jobs2.length);
        System.out.println(result2[0] + " " + result2[1]); // Output: 2 127
    }
}

