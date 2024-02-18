function trap(height: number[]): number {
    let answer = 0;

    // 증가하는 모양
    let left = -1, right = -1;
    let acc = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i]) {
            left = i;
            break;
        }
    }

    if (left < 0) {
        return 0;
    }

    for (right = left + 1; right < height.length; right++) {
        if (height[left] <= height[right]) {
            const minHeight = Math.min(height[left], height[right]);
            answer += ((right - left - 1) * minHeight);
            answer -= acc;
            
            left = right;
            acc = 0;
        } else {
            acc += height[right];
        }
    }

    // 감소하는 모양
    left = -1, right = -1;
    acc = 0;
    
    for (let i = height.length - 1; 0 <= i; i--) {
        if (height[i]) {
            right = i;
            break;
        }
    }

    if (right < 0) {
        return answer;
    }

    for (left = right - 1; 0 <= left; left--) {
        // 앞에서 같은 경우는 이미 체크됨
        if (height[right] < height[left]) {
            const minHeight = Math.min(height[left], height[right]);
            answer += ((right - left - 1) * minHeight);
            answer -= acc;

            right = left;
            acc = 0;
        } else {
            acc += height[left];
        }
    }

    return answer;
};
