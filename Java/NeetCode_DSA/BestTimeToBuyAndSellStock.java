/*
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
 */

/*
Time complexity: O(n)
Space complexity:O(1)
*/



public class BestTimeToBuyAndSellStock {
    public static int maxProfit(int[] prices) {
        int minBuy = prices[0];
        int profit = 0;
        for (int sell : prices) {
            if (sell < minBuy) {
                minBuy = sell;
            }
            profit = Math.max(profit, sell - minBuy);

        }
        return profit;

    }

    public static void main(String args[]) {
        int[] prices = { 10, 1, 5, 6, 7, 1 };
        int res = maxProfit(prices); // retun 6 (7-1)

        System.out.println("max profit:" + res);

    }

}
