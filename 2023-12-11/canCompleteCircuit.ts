function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalStation = gas.length;

    let totalTank = 0, currTank = 0, answer = 0;
    for (let i = 0; i < totalStation; i++) {
        const currGas = gas[i] - cost[i];

        totalTank += currGas;
        currTank += currGas;
        
        if (currTank < 0) {
            currTank = 0;
            answer = i + 1;
        }
    }

    return totalTank < 0 ? -1 : answer;
}
