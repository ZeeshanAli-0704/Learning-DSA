package org.example.greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class InsertInterval {

    private static int[][]   Solution(int[][] intervals, int[] newInterval) {
        List<Integer[]> list = new ArrayList<>();
        int i = 0, n = intervals.length;

        // Left non-overlapping part
        while (i < n && intervals[i][1] < newInterval[0]) {
            list.add(new Integer[]{intervals[i][0], intervals[i][1]});
            i++;
        }

        // Overlapping part
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        list.add(new Integer[]{newInterval[0], newInterval[1]});

        // Right non-overlapping part
        while (i < n) {
            list.add(new Integer[]{intervals[i][0], intervals[i][1]});
            i++;
        }

        // Convert List<Integer[]> to int[][]
        int[][] res = new int[list.size()][2];
        for (int j = 0; j < list.size(); j++) {
            res[j][0] = list.get(j)[0];
            res[j][1] = list.get(j)[1];
        }

        return res;
    };


    public static void main(String[] args) {
        int[][] interval = {{1,3},{6,9}};
        int[] newInterval =  {2,5};
        int[][]  ans = Solution(interval, newInterval);
        for(int i=0; i<ans.length; i++){
            System.out.print(Arrays.toString(ans[i]));
        }
    }


}
