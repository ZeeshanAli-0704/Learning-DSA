package org.example.greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeInterval {
    public static int[][] Solution(int[][] intervals){
        List<Integer[]> result = new ArrayList<Integer[]>();

        int start =  intervals[0][0];
        int end =  intervals[0][1];

        for(int i=1; i<intervals.length; i++){
            // overlaps
            if(end >= intervals[i][0]){
                start= Math.min(start, intervals[i][0]);
                end = Math.max(end, intervals[i][1]);
            }else{
                result.add(new Integer[]{start, end});
                start= intervals[i][0];
                end = intervals[i][1];
            }
        };
        result.add(new Integer[]{start, end});


        int[][] ans = new int[result.size()][2];

        for(int i=0; i<result.size(); i++){
            ans[i][0] = result.get(i)[0];
            ans[i][1] = result.get(i)[1];
        }
        return ans;

    }

    public static void main(String[] args) {
        int[][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int [][] ans = Solution(intervals);
        System.out.println(ans);
        for(int i=0; i<ans.length; i++){
            System.out.print(Arrays.toString(ans[i]));
        }

    }
}
