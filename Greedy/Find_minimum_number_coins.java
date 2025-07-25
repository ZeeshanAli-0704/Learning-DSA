package org.example.greedy;

import java.util.ArrayList;

public class Find_minimum_number_coins {

    public static int Solution(int V, int[] coins){
        int n = coins.length;
        int count = 0;
        for (int i = n - 1; i >= 0; i--) {
            count += V / coins[i]; // How many of this coin
            V %= coins[i];         // Remainder
        };
        return count;
    };

    public static void main(String[] args) {
        int V = 49;
        int coins[] = {1, 2, 5, 10, 20, 50, 100, 500, 1000};
        int result = Solution(V, coins);
        System.out.println(result);


    }
}
