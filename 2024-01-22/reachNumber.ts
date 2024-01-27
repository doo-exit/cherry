function reachNumber(target: number): number {
    let current = 0;
    target = Math.abs(target);
    let move = 0;
    let sum = 0;
    
    while (sum < target || (sum - target) % 2) {
        move++;
        sum += move;
    }

    return move;
};
