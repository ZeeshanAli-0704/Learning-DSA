package org.example.stack;

import java.util.Stack;

public class StockSpanner {

    // Inner class to hold price and index
    class Pair {
        int price;
        int index;

        Pair(int price, int index) {
            this.price = price;
            this.index = index;
        }
    }

    // Stack to maintain decreasing prices with their indexes
    Stack<Pair> st;
    int i;

    public StockSpanner() {
        st = new Stack<>();
        i = 0;
    }

    public int next(int price) {
        while (!st.isEmpty() && st.peek().price <= price) {
            st.pop();
        }

        int span =  i - (st.isEmpty() ? - 1: st.peek().index);

        st.push(new Pair(price, i));
        i++;
        return span;
    }

    // Main method to test and debug
    public static void main(String[] args) {
        StockSpanner stockSpanner = new StockSpanner();

        int[] prices = {100, 80, 60, 70, 60, 75, 85};
        System.out.println("Price\tSpan");
        for (int price : prices) {
            int span = stockSpanner.next(price);
            System.out.println(price + "\t" + span);
        }
    }
}
