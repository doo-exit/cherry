function maxProfit(prices: number[]): number {
    let answer = 0;

    for (let i = 1; i < prices.length; i += 1) {
        answer += Math.max(prices[i] - prices[i - 1], 0);
    }

    return answer;
};
