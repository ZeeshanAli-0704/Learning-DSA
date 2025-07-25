package org.example.greedy;

import java.lang.reflect.Array;
import java.util.Arrays;

public class AssignCookies {
    public static int Solution(int greed[], int cookies[]){
        int ans = 0;
        Arrays.sort(greed);
        Arrays.sort(cookies);

        int left = 0;
        int right = 0;

        while(left < greed.length && right < cookies.length) {
            int cookieSize = cookies[right];
            if (cookieSize >= greed[left]) {
                ans++;
                left++;
            }
            ;
            right++;
        }
        return ans;
    };


    public static void main(String[] args) {
        int greed[] = {1,2,3};
        int cookies[] = {1,1};

        int ans = Solution(greed, cookies);
        System.out.println(ans);
    }
}
