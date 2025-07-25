package org.example.greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class N_Meetings_Room {
    static class Item{
        int start;
        int end;
        int index;

        public Item(int start, int end, int index) {
            this.start = start;
            this.end = end;
            this.index = index;
        };
    }
    static class MyComparator implements Comparator<Item>{

        @Override
        public int compare(Item o1, Item o2) {
          int a = o1.end;
          int b = o2.end;
          return Integer.compare(a, b);
        }
    };

    private static List<Integer> Solution(int N, int[] start, int[] end) {
        List<Integer> ans = new ArrayList<>();

        List<Item> meetingList = new ArrayList<>();

        for (int i = 0; i < start.length; i++) {
            meetingList.add(new Item(start[i], end[i], i));
        };
        meetingList.sort(new MyComparator());
        int lastEndTime = -1;
        for(Item meeting : meetingList) {
            if (meeting.start > lastEndTime) {
                lastEndTime = meeting.end;
                ans.add(meeting.index);
            }
        };
        return ans;
    };


    public static void main(String[] args) {
       int  N = 6;
       int start[] = {1,3,0,5,8,5};
       int end[] = {2,4,5,7,9,9};
       List<Integer> result = Solution(N, start, end);
        for (int index : result) {
            System.out.print(index + 1 + " ");
        }

    }


}
