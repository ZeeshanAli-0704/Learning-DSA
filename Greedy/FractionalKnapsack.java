package org.example.greedy;

import java.util.Comparator;
import java.util.PriorityQueue;

public class FractionalKnapsack {

    static class Item {
            int value;
            int weight;

        public Item(int value, int weigth) {
            this.value = value;
            this.weight = weigth;
        }

    }

    static class MyComparator implements Comparator<Item>{

        @Override
        public int compare(Item o1, Item o2) {
           double a = (double) o1.value / o1.weight;
            double b = (double) o2.value / o2.weight;
            return Double.compare(b, a);
        }
    }

    public static double Solution(int values[], int weight[], int W){
        double ans = 0;

        PriorityQueue<Item> pq = new PriorityQueue<Item>( new MyComparator());

        for (int i=0; i<weight.length; i++){
            pq.add(new Item(values[i], weight[i]));
        };

        while(W > 0 && !pq.isEmpty()){
            Item item = pq.poll();

            if(W >= item.weight){
                W = W - item.weight;
                ans = ans + item.value;
            }else{
                ans = (double) ans + (item.value / item.weight) * W;
                break;
            }


        }

      return ans;
    };

    public static void main(String[] args) {
       int N = 3, W = 50, values[] = {100,60,120}, weight[] = {20,10,30};
        double ans = Solution(values, weight, W);
       System.out.println(ans);
    }
}
