package org.example.greedy;

import java.util.HashMap;

public class LemonadeChange {

    private static boolean Solution(int[] bills) {
        HashMap<Integer, Integer> MyChangeMap = new HashMap<Integer, Integer>();
        MyChangeMap.put(5, 0);
        MyChangeMap.put(10, 0);
        MyChangeMap.put(20, 0);

        for(int i=0; i< bills.length; i++){
            int toPay =  bills[i] - 5;

            MyChangeMap.put(bills[i], MyChangeMap.get(bills[i])+1);

            if (toPay == 5) {
                if (MyChangeMap.get(5) >= 1) {
                    MyChangeMap.put(5, MyChangeMap.get(5) - 1);
                } else {
                    return false;
                }
            } else if (toPay == 15) {
                if (MyChangeMap.get(10) >= 1 && MyChangeMap.get(5) >= 1) {
                    MyChangeMap.put(10, MyChangeMap.get(10) - 1);
                    MyChangeMap.put(5, MyChangeMap.get(5) - 1);
                } else if (MyChangeMap.get(5) >= 3) {
                    MyChangeMap.put(5, MyChangeMap.get(5) - 3);
                } else {
                    return false;
                }
            }
        }

        return true;
    };

    public static void main(String[] args) {
        int bills[] = {5,5,10,10,20};
        boolean ans = Solution(bills);
        System.out.println(ans);

        int bills2[] = {5,5,5,10,20};
        boolean ans2 = Solution(bills2);
        System.out.println(ans2);
    }


}
