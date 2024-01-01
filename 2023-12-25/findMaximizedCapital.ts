function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const n = profits.length;

    while (k && profits.length) {
        let maxProfit = 0;
        let maxProfitIndex = -1;
        let able = n <= k;
        
        for (let i = 0; i < n; i++) {
            const currProfit = profits[i];
            const currCapital = capital[i];

            if (w < currCapital) {
                able = false;
                continue;
            }
            if (maxProfit < currProfit) {
                maxProfit = currProfit;
                maxProfitIndex = i;
            }
        }

        if (maxProfitIndex === -1) {
            return w;
        }

        if (able) {
            return w + profits.reduce((curr, acc) => curr + acc, 0);
        }

        w += maxProfit;
        k--;
      
        capital.splice(maxProfitIndex, 1);
        profits.splice(maxProfitIndex, 1);
    }

    return w;
};
