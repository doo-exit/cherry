function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let dIndex = n - 1;
    let pIndex = n - 1;

    while (dIndex >= 0 || pIndex >= 0) {
        let dCap = 0;
        let pCap = 0;

        while (deliveries[dIndex] == 0) dIndex -= 1;
        while (pickups[pIndex] == 0) pIndex -= 1;

        answer += Math.max(dIndex + 1, pIndex + 1) * 2;

        for (let i = dIndex; i >= 0; i -= 1) {
            if (dCap + deliveries[i] <= cap) {
                dCap += deliveries[i];
                deliveries[i] = 0;
                dIndex -= 1;
            } else {
                deliveries[i] += dCap - cap;
                dIndex = i;
                break;
            }
        }

        for (let i = pIndex; i >= 0; i -= 1) {
            if (pCap + pickups[i] <= cap) {
                pCap += pickups[i];
                pickups[i] = 0;
                pIndex -= 1;
            } else {
                pickups[i] += pCap - cap;
                pIndex = i;
                break;
            }
        }
    }

    return answer;
}
