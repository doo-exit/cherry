function maxArea(heights: number[]): number {
    let answer = 0,
        leftIndex = 0,
        rightIndex = heights.length - 1;

    while (leftIndex < rightIndex) {
        const left = heights[leftIndex],
            right = heights[rightIndex],
            width = rightIndex - leftIndex;

        let area = 0;

        if (left > right) {
            area = right * width;
            rightIndex--;
        } else {
            area = left * width;
            leftIndex++;
        }

        answer = Math.max(answer, area);
    }

    return answer;
}
